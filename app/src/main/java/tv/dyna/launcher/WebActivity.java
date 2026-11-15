package tv.dyna.launcher;

import android.app.Activity;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;

/** Ouvre une appli web en plein écran.
 *  - avec "url" seule : la page du serveur telle quelle ;
 *  - avec "url" + "asset" : une page de Dyna TV (ex. musique.html, la version télé de Dynamusique)
 *    chargée comme si elle venait du serveur, pour qu'elle puisse lui parler directement.
 *  Retour : la page décide (window.dynaBack), sinon page précédente, sinon fermeture. */
public class WebActivity extends Activity {
    private static final String LOCAL = "/__dyna/";
    private WebView web;
    private android.speech.tts.TextToSpeech tts;
    private boolean ttsReady = false;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        web = new WebView(this);
        web.setBackgroundColor(Color.rgb(14, 21, 18));
        setContentView(web);
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        s.setLoadWithOverviewMode(false);
        s.setUseWideViewPort(false);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setTextZoom(100);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setWebChromeClient(new WebChromeClient());
        web.addJavascriptInterface(new Object() {
            @android.webkit.JavascriptInterface
            public int screenW() { return Math.round((web.getWidth() > 0 ? web.getWidth() : getResources().getDisplayMetrics().widthPixels) / getResources().getDisplayMetrics().density); }
            /** Lit un texte à voix haute (voix française de la box). */
            @android.webkit.JavascriptInterface
            public void speak(String text) {
                if (tts == null || !ttsReady || text == null) return;
                tts.speak(text, android.speech.tts.TextToSpeech.QUEUE_FLUSH, null, "dyna");
            }
            @android.webkit.JavascriptInterface
            public void stopSpeak() { if (tts != null) tts.stop(); }
            @android.webkit.JavascriptInterface
            public int screenH() { return Math.round((web.getHeight() > 0 ? web.getHeight() : getResources().getDisplayMetrics().heightPixels) / getResources().getDisplayMetrics().density); }
        }, "Dyna");
        web.setWebViewClient(new WebViewClient() {
            // Les polices de Dyna TV, servies depuis l'appli
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri u = request.getUrl();
                String p = u.getPath();
                if (p == null || !p.startsWith(LOCAL) || p.contains("..")) return null;
                try {
                    String name = p.substring(LOCAL.length());
                    String mime = name.endsWith(".woff2") ? "font/woff2" : name.endsWith(".png") ? "image/png" : name.endsWith(".jpg") ? "image/jpeg" : name.endsWith(".svg") ? "image/svg+xml" : name.endsWith(".js") ? "application/javascript" : "application/octet-stream";
                    return new WebResourceResponse(mime, null, getAssets().open(name));
                } catch (Exception e) {
                    return null;
                }
            }
        });

        tts = new android.speech.tts.TextToSpeech(this, new android.speech.tts.TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                if (status != android.speech.tts.TextToSpeech.SUCCESS || tts == null) return;
                int r = tts.setLanguage(java.util.Locale.FRANCE);
                if (r == android.speech.tts.TextToSpeech.LANG_MISSING_DATA || r == android.speech.tts.TextToSpeech.LANG_NOT_SUPPORTED) tts.setLanguage(java.util.Locale.FRENCH);
                tts.setSpeechRate(1.0f);
                ttsReady = true;
            }
        });
        String url = getIntent().getStringExtra("url");
        String asset = getIntent().getStringExtra("asset");
        if (url == null || url.length() == 0) { finish(); return; }
        if (asset != null && asset.length() > 0) {
            try {
                Uri u = Uri.parse(url);
                String base = u.getScheme() + "://" + u.getEncodedAuthority() + "/";
                web.loadDataWithBaseURL(base, readAsset(asset), "text/html", "utf-8", base);
            } catch (Exception e) {
                web.loadUrl(url);
            }
        } else {
            web.loadUrl(url);
        }
        web.requestFocus();
    }

    private String readAsset(String name) throws Exception {
        InputStream in = getAssets().open(name);
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buf = new byte[8192];
        int n;
        while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
        in.close();
        return out.toString("UTF-8");
    }

    @Override
    public void onBackPressed() {
        if (web == null) { finish(); return; }
        web.evaluateJavascript("(function(){try{return !!(window.dynaBack&&window.dynaBack())}catch(e){return false}})()", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String handled) {
                if ("true".equals(handled)) return;
                if (web != null && web.canGoBack() && getIntent().getStringExtra("asset") == null) web.goBack();
                else finish();
            }
        });
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (tts != null) tts.stop();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (web != null) { web.onResume(); web.requestFocus(); }
    }

    @Override
    protected void onDestroy() {
        if (tts != null) { tts.stop(); tts.shutdown(); tts = null; }
        if (web != null) { web.stopLoading(); web.destroy(); web = null; }
        super.onDestroy();
    }
}
