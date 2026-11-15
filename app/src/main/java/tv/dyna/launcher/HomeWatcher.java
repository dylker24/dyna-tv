package tv.dyna.launcher;

import android.accessibilityservice.AccessibilityService;
import android.content.Intent;
import android.view.accessibility.AccessibilityEvent;

/** Dès que l'écran d'accueil de Google TV s'affiche (démarrage, bouton Accueil, retour),
 *  on ouvre Dyna TV à la place. Le service ne regarde que le nom de l'appli au premier plan. */
public class HomeWatcher extends AccessibilityService {
    private static final String[] STOCK = {
            "com.google.android.apps.tv.launcherx",
            "com.google.android.tvlauncher",
            "com.google.android.leanbacklauncher",
            "com.amazon.tv.launcher"
    };
    private long last = 0;

    @Override
    public void onAccessibilityEvent(AccessibilityEvent e) {
        if (e == null || e.getEventType() != AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED || e.getPackageName() == null) return;
        String pkg = e.getPackageName().toString();
        boolean stock = false;
        for (String s : STOCK) if (s.equals(pkg)) { stock = true; break; }
        if (!stock) return;
        long now = System.currentTimeMillis();
        if (now - last < 700) return;
        last = now;
        try {
            Intent i = new Intent(this, MainActivity.class);
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_NO_ANIMATION);
            startActivity(i);
        } catch (Exception ignored) { }
    }

    @Override
    public void onInterrupt() { }
}
