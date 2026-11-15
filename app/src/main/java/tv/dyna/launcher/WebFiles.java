package tv.dyna.launcher;

import android.content.Context;
import android.content.SharedPreferences;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/** Les pages de Dyna TV (accueil, musique, enquêtes, photos…) se mettent à jour toutes seules :
 *  au lancement, on compare chaque fichier avec la version en ligne sur GitHub et on ne télécharge
 *  que ce qui a changé. La version intégrée à l'appli sert de secours si internet ne répond pas. */
public final class WebFiles {
    private static final String BASE = "https://raw.githubusercontent.com/dylker24/dyna-tv/main/app/src/main/assets/";
    private static final String LIST = "web-files.txt";
    private static volatile boolean running = false;

    private WebFiles() { }

    private static File dir(Context c) { return new File(c.getFilesDir(), "web"); }

    /** Le fichier à jour s'il a été téléchargé, sinon celui de l'appli. */
    public static InputStream open(Context c, String name) throws Exception {
        if (name.contains("..")) throw new Exception("chemin refusé");
        File f = new File(dir(c), name);
        if (f.isFile() && f.length() > 0) return new FileInputStream(f);
        return c.getAssets().open(name);
    }

    public interface Done { void changed(boolean indexChanged); }

    /** Vérifie en arrière-plan s'il y a des nouveautés. */
    public static void sync(final Context ctx, final Done done) {
        if (running) return;
        running = true;
        final Context c = ctx.getApplicationContext();
        new Thread(new Runnable() {
            @Override
            public void run() {
                boolean any = false, index = false;
                try {
                    byte[] list = fetch(c, LIST);
                    if (list == null) list = readFile(new File(dir(c), LIST));
                    if (list != null) {
                        for (String line : new String(list, "UTF-8").split("\n")) {
                            String name = line.trim();
                            if (name.length() == 0 || name.startsWith("#") || name.contains("..")) continue;
                            if (fetch(c, name) != null) {
                                any = true;
                                if (name.equals("index.html")) index = true;
                            }
                        }
                    }
                } catch (Throwable ignored) {
                } finally {
                    running = false;
                }
                if (done != null && any) done.changed(index);
            }
        }).start();
    }

    /** Télécharge un fichier s'il a changé (ETag). Renvoie son contenu s'il est nouveau, sinon null. */
    private static byte[] fetch(Context c, String name) {
        SharedPreferences prefs = c.getSharedPreferences("webfiles", Context.MODE_PRIVATE);
        HttpURLConnection h = null;
        try {
            h = (HttpURLConnection) new URL(BASE + name.replace(" ", "%20")).openConnection();
            h.setConnectTimeout(8000);
            h.setReadTimeout(20000);
            h.setRequestProperty("User-Agent", "DynaTV");
            String etag = prefs.getString(name, null);
            File target = new File(dir(c), name);
            if (etag != null && target.isFile()) h.setRequestProperty("If-None-Match", etag);
            int code = h.getResponseCode();
            if (code != 200) return null;
            InputStream in = h.getInputStream();
            java.io.ByteArrayOutputStream out = new java.io.ByteArrayOutputStream();
            byte[] buf = new byte[65536];
            int n;
            while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
            in.close();
            byte[] data = out.toByteArray();
            if (data.length == 0) return null;
            File parent = target.getParentFile();
            if (parent != null) parent.mkdirs();
            File tmp = new File(target.getPath() + ".tmp");
            FileOutputStream fo = new FileOutputStream(tmp);
            fo.write(data);
            fo.close();
            if (!tmp.renameTo(target)) { target.delete(); tmp.renameTo(target); }
            String newTag = h.getHeaderField("ETag");
            if (newTag != null) prefs.edit().putString(name, newTag).apply();
            return data;
        } catch (Throwable e) {
            return null;
        } finally {
            if (h != null) h.disconnect();
        }
    }

    private static byte[] readFile(File f) {
        try {
            if (!f.isFile()) return null;
            FileInputStream in = new FileInputStream(f);
            byte[] b = new byte[(int) f.length()];
            int off = 0, n;
            while (off < b.length && (n = in.read(b, off, b.length - off)) > 0) off += n;
            in.close();
            return b;
        } catch (Exception e) {
            return null;
        }
    }
}
