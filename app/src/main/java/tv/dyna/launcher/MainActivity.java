package tv.dyna.launcher;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Dyna TV : l'écran d'accueil maison. L'interface est la page assets/index.html,
 *  cette classe lui donne la liste des applis installées, leurs logos et le moyen de les ouvrir. */
public class MainActivity extends Activity {
    private static final String HOST = "dyna.app";
    private static final String HOME = "https://" + HOST + "/index.html";
    private WebView web;
    private BroadcastReceiver packages;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        web.setBackgroundColor(Color.rgb(14, 21, 18));
        setContentView(web);
        hideBars();

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setLoadWithOverviewMode(false);
        s.setUseWideViewPort(false);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setTextZoom(100);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setVerticalScrollBarEnabled(false);
        web.setHorizontalScrollBarEnabled(false);
        web.addJavascriptInterface(new Bridge(), "Dyna");
        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri u = request.getUrl();
                if (!HOST.equals(u.getHost())) return null;
                return serve(u.getPath() == null ? "/" : u.getPath());
            }
        });
        web.loadUrl(HOME);
        web.requestFocus();

        // Une appli installée ou supprimée : on rafraîchit l'écran
        packages = new BroadcastReceiver() {
            @Override
            public void onReceive(Context c, Intent i) { js("window.dynaRefresh&&dynaRefresh()"); }
        };
        IntentFilter f = new IntentFilter();
        f.addAction(Intent.ACTION_PACKAGE_ADDED);
        f.addAction(Intent.ACTION_PACKAGE_REMOVED);
        f.addAction(Intent.ACTION_PACKAGE_REPLACED);
        f.addDataScheme("package");
        if (Build.VERSION.SDK_INT >= 33) registerReceiver(packages, f, Context.RECEIVER_EXPORTED);
        else registerReceiver(packages, f);
    }

    @Override
    protected void onDestroy() {
        try { unregisterReceiver(packages); } catch (Exception ignored) { }
        super.onDestroy();
    }

    @Override
    protected void onResume() {
        super.onResume();
        hideBars();
        web.requestFocus();
        js("window.dynaRefresh&&dynaRefresh()");
    }

    /** Bouton Accueil appuyé alors que Dyna TV est déjà devant : retour à la première tuile. */
    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        js("window.dynaHome&&dynaHome()");
    }

    /** Un écran d'accueil ne se ferme jamais : Retour ferme seulement les fenêtres de la page. */
    @Override
    public void onBackPressed() {
        js("window.dynaBack&&dynaBack()");
    }

    @Override
    public void onWindowFocusChanged(boolean has) {
        super.onWindowFocusChanged(has);
        if (has) hideBars();
    }

    private void js(final String code) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() { if (web != null) web.evaluateJavascript(code, null); }
        });
    }

    private void hideBars() {
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
    }

    // ---------- Fichiers servis à la page ----------

    private WebResourceResponse serve(String path) {
        try {
            if (path.startsWith("/icon/")) {
                byte[] png = iconPng(path.substring(6));
                if (png == null) return notFound();
                return new WebResourceResponse("image/png", null, new ByteArrayInputStream(png));
            }
            if (path.equals("/photo.jpg")) {
                File f = new File(getFilesDir(), "photo.jpg");
                InputStream in = f.exists() ? new FileInputStream(f) : getAssets().open("photo.jpg");
                return new WebResourceResponse("image/jpeg", null, in);
            }
            String name = path.length() <= 1 ? "index.html" : path.substring(1);
            if (name.contains("..")) return notFound();
            return new WebResourceResponse(mime(name), name.endsWith(".html") || name.endsWith(".js") || name.endsWith(".css") ? "utf-8" : null, getAssets().open(name));
        } catch (Exception e) {
            return notFound();
        }
    }

    private static WebResourceResponse notFound() {
        return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", new HashMap<String, String>(), new ByteArrayInputStream(new byte[0]));
    }

    private static String mime(String n) {
        if (n.endsWith(".html")) return "text/html";
        if (n.endsWith(".js")) return "application/javascript";
        if (n.endsWith(".css")) return "text/css";
        if (n.endsWith(".woff2")) return "font/woff2";
        if (n.endsWith(".png")) return "image/png";
        if (n.endsWith(".jpg") || n.endsWith(".jpeg")) return "image/jpeg";
        if (n.endsWith(".svg")) return "image/svg+xml";
        return "application/octet-stream";
    }

    // ---------- Logos des applis ----------

    /** La bannière télé de l'appli (format large) si elle en a une, sinon null. */
    private Drawable banner(String pkg) {
        PackageManager pm = getPackageManager();
        try {
            Intent li = pm.getLeanbackLaunchIntentForPackage(pkg);
            if (li != null && li.getComponent() != null) {
                Drawable d = pm.getActivityBanner(li.getComponent());
                if (d != null) return d;
            }
        } catch (Exception ignored) { }
        try { return pm.getApplicationBanner(pkg); } catch (Exception e) { return null; }
    }

    private byte[] iconPng(String pkg) {
        try {
            Drawable d = banner(pkg);
            int w = 640, h = 360;
            if (d == null) { d = getPackageManager().getApplicationIcon(pkg); w = 256; h = 256; }
            Bitmap b = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
            Canvas c = new Canvas(b);
            d.setBounds(0, 0, w, h);
            d.draw(c);
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            b.compress(Bitmap.CompressFormat.PNG, 100, out);
            b.recycle();
            return out.toByteArray();
        } catch (Throwable e) {
            return null;
        }
    }

    // ---------- Mises à jour ----------

    private void download(String url) {
        java.net.HttpURLConnection c = null;
        try {
            File dir = new File(getCacheDir(), "maj");
            dir.mkdirs();
            File[] old = dir.listFiles();
            if (old != null) for (File f : old) f.delete();
            File out = new File(dir, "maj-" + System.currentTimeMillis() + ".apk");
            String u = url;
            for (int hop = 0; hop < 6; hop++) {
                c = (java.net.HttpURLConnection) new java.net.URL(u).openConnection();
                c.setInstanceFollowRedirects(false);
                c.setConnectTimeout(15000);
                c.setReadTimeout(30000);
                c.setRequestProperty("User-Agent", "DynaTV");
                int code = c.getResponseCode();
                if (code >= 300 && code < 400 && c.getHeaderField("Location") != null) {
                    u = new java.net.URL(new java.net.URL(u), c.getHeaderField("Location")).toString();
                    c.disconnect();
                    continue;
                }
                if (code != 200) throw new Exception("HTTP " + code);
                break;
            }
            long total = c.getContentLength();
            InputStream in = c.getInputStream();
            java.io.FileOutputStream fo = new java.io.FileOutputStream(out);
            byte[] buf = new byte[65536];
            long done = 0;
            int n, lastPct = -1;
            while ((n = in.read(buf)) > 0) {
                fo.write(buf, 0, n);
                done += n;
                int pct = total > 0 ? (int) (done * 100 / total) : -1;
                if (pct != lastPct && (pct % 5 == 0)) { lastPct = pct; js("window.dynaUpdate&&dynaUpdate('dl'," + pct + ")"); }
            }
            fo.close();
            in.close();
            js("window.dynaUpdate&&dynaUpdate('install',100)");
            Uri uri = Build.VERSION.SDK_INT >= 24
                    ? androidx.core.content.FileProvider.getUriForFile(this, "tv.dyna.launcher.files", out)
                    : Uri.fromFile(out);
            Intent i = new Intent(Intent.ACTION_VIEW)
                    .setDataAndType(uri, "application/vnd.android.package-archive")
                    .addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(i);
        } catch (Exception e) {
            js("window.dynaUpdate&&dynaUpdate('error',0)");
        } finally {
            if (c != null) c.disconnect();
        }
    }

    // ---------- Pont avec la page ----------

    private class Bridge {
        /** Toutes les applis ouvrables de la box : [{pkg, label, banner}] */
        @JavascriptInterface
        public String installed() {
            PackageManager pm = getPackageManager();
            Map<String, JSONObject> found = new LinkedHashMap<String, JSONObject>();
            String[] cats = { Intent.CATEGORY_LEANBACK_LAUNCHER, Intent.CATEGORY_LAUNCHER };
            for (String cat : cats) {
                try {
                    Intent q = new Intent(Intent.ACTION_MAIN).addCategory(cat);
                    List<ResolveInfo> list = pm.queryIntentActivities(q, 0);
                    for (ResolveInfo r : list) {
                        String pkg = r.activityInfo.packageName;
                        if (pkg.equals(getPackageName()) || found.containsKey(pkg)) continue;
                        JSONObject o = new JSONObject();
                        o.put("pkg", pkg);
                        o.put("label", String.valueOf(r.activityInfo.applicationInfo.loadLabel(pm)));
                        o.put("banner", banner(pkg) != null);
                        found.put(pkg, o);
                    }
                } catch (Exception ignored) { }
            }
            return new JSONArray(found.values()).toString();
        }

        @JavascriptInterface
        public boolean launch(String pkg) {
            try {
                PackageManager pm = getPackageManager();
                Intent i = pm.getLeanbackLaunchIntentForPackage(pkg);
                if (i == null) i = pm.getLaunchIntentForPackage(pkg);
                if (i == null) return false;
                i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(i);
                return true;
            } catch (Exception e) {
                return false;
            }
        }

        @JavascriptInterface
        public boolean openSettings() {
            try {
                startActivity(new Intent(Settings.ACTION_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
                return true;
            } catch (Exception e) {
                return false;
            }
        }

        /** Ouvre une appli web (ex. Dynamusique) en plein écran. */
        @JavascriptInterface
        public boolean openUrl(String url) {
            try {
                startActivity(new Intent(MainActivity.this, WebActivity.class).putExtra("url", url));
                return true;
            } catch (Exception e) {
                return false;
            }
        }

        /** Ouvre une page de Dyna TV (ex. musique.html) branchée sur un serveur de la maison. */
        @JavascriptInterface
        public boolean openPage(String url, String asset) {
            try {
                startActivity(new Intent(MainActivity.this, WebActivity.class).putExtra("url", url).putExtra("asset", asset));
                return true;
            } catch (Exception e) {
                return false;
            }
        }

        /** Taille de l'écran en pixels CSS (indépendant des réglages de zoom de la WebView). */
        @JavascriptInterface
        public int screenW() { return Math.round(web.getWidth() > 0 ? web.getWidth() / getResources().getDisplayMetrics().density : getResources().getDisplayMetrics().widthPixels / getResources().getDisplayMetrics().density); }

        @JavascriptInterface
        public int screenH() { return Math.round(web.getHeight() > 0 ? web.getHeight() / getResources().getDisplayMetrics().density : getResources().getDisplayMetrics().heightPixels / getResources().getDisplayMetrics().density); }

        /** Télécharge un APK et ouvre l'installation (mise à jour par-dessus). */
        @JavascriptInterface
        public void update(final String url, final String label) {
            if (Build.VERSION.SDK_INT >= 26 && !getPackageManager().canRequestPackageInstalls()) {
                js("window.dynaUpdate&&dynaUpdate('perm',0)");
                try {
                    startActivity(new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + getPackageName()))
                            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
                } catch (Exception e) {
                    try { startActivity(new Intent(Settings.ACTION_SECURITY_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); } catch (Exception ignored) { }
                }
                return;
            }
            new Thread(new Runnable() {
                @Override
                public void run() { download(url); }
            }).start();
        }

        @JavascriptInterface
        public String version() {
            try { return getPackageManager().getPackageInfo(getPackageName(), 0).versionName; } catch (Exception e) { return ""; }
        }
    }
}
