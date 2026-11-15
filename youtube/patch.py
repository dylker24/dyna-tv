"""Applique l'habillage Dyna sur une copie fraîche de SmartTube.

Utilisation : python3 youtube/patch.py <dossier SmartTube>
Chaque modification vérifie que le texte d'origine existe encore : si SmartTube change
son code, la fabrication s'arrête avec un message clair au lieu de sortir une appli cassée.
"""
import os
import re
import shutil
import sys

ST = os.path.abspath(sys.argv[1])
HERE = os.path.dirname(os.path.abspath(__file__))
PKG = "tv.dyna.youtube"
NAME = "Dyna YouTube"


def edit(path, old, new, count=1, regex=False):
    p = os.path.join(ST, path)
    with open(p, "rb") as f:
        raw = f.read()
    crlf = b"\r\n" in raw
    s = raw.decode("utf-8").replace("\r\n", "\n")
    found = len(re.findall(old, s)) if regex else s.count(old)
    if found < 1:
        sys.exit("PATCH IMPOSSIBLE : texte introuvable dans %s :\n%s" % (path, old))
    s = re.sub(old, new, s, count=count) if regex else s.replace(old, new, count if count > 0 else -1)
    if crlf:
        s = s.replace("\n", "\r\n")
    with open(p, "wb") as f:
        f.write(s.encode("utf-8"))
    print("ok  ", path)


def copy_tree(src, dst):
    src = os.path.join(HERE, "res", src)
    dst = os.path.join(ST, dst)
    for root, _, files in os.walk(src):
        for n in files:
            a = os.path.join(root, n)
            b = os.path.join(dst, os.path.relpath(a, src))
            os.makedirs(os.path.dirname(b), exist_ok=True)
            shutil.copyfile(a, b)
            print("copie", os.path.relpath(b, ST))


# 1. Couleurs, thème, logos et icônes
copy_tree("main", "smarttubetv/src/main/res")
copy_tree("ststable", "smarttubetv/src/ststable/res")
copy_tree("common", "common/src/main/res")

# 2. Le thème Dyna en premier dans la liste, et choisi par défaut
edit("common/src/main/java/com/liskovsoft/smartyoutubetv2/common/prefs/MainUIData.java",
     "    private void initColorSchemes() {\n",
     "    private void initColorSchemes() {\n"
     "        mColorSchemes.add(new ColorScheme(\n"
     "                R.string.color_scheme_dyna,\n"
     "                \"App.Theme.Dyna.Player\",\n"
     "                \"App.Theme.Dyna.Browse\",\n"
     "                \"App.Theme.Dyna.Preferences\",\n"
     "                mContext));\n")
edit("common/src/main/java/com/liskovsoft/smartyoutubetv2/common/prefs/MainUIData.java",
     "mColorSchemeIndex = Helpers.parseInt(split, 3, 1);",
     "mColorSchemeIndex = Helpers.parseInt(split, 3, 0);")

# 3. Cartes vidéo aux coins arrondis
edit("smarttubetv/src/main/java/com/liskovsoft/smartyoutubetv2/tv/ui/widgets/complexcardview/ComplexImageCardView.java",
     "        mComplexImageView = findViewById(R.id.main_image_wrapper);\n",
     "        mComplexImageView = findViewById(R.id.main_image_wrapper);\n"
     "        if (android.os.Build.VERSION.SDK_INT >= 21) {\n"
     "            final float radius = getResources().getDisplayMetrics().density * 12;\n"
     "            setOutlineProvider(new android.view.ViewOutlineProvider() {\n"
     "                @Override\n"
     "                public void getOutline(android.view.View v, android.graphics.Outline o) {\n"
     "                    o.setRoundRect(0, 0, v.getWidth(), v.getHeight(), radius);\n"
     "                }\n"
     "            });\n"
     "            setClipToOutline(true);\n"
     "        }\n")

# 4. Une appli à part : nom, identifiant, recherche (pour pouvoir garder le SmartTube officiel à côté)
edit("smarttubetv/build.gradle", 'applicationId "org.smarttube.stable"', 'applicationId "%s"' % PKG)
edit("smarttubetv/build.gradle", "abortOnError true", "abortOnError false")
edit("smarttubetv/src/ststable/res/values/strings.xml",
     r'name="app_name"><!\[CDATA\[[^\]]*\]\]>', 'name="app_name"><![CDATA[%s]]>' % NAME, regex=True)
edit("smarttubetv/src/ststable/res/values/strings.xml",
     r'name="browse_title"><!\[CDATA\[[^\]]*\]\]>', 'name="browse_title"><![CDATA[%s]]>' % NAME, regex=True)
for f in ["leanbackassistant/src/ststable/res/xml/searchable.xml", "leanbackassistant/src/ststable/res/values/strings.xml"]:
    edit(f, "org.smarttube.stable", PKG, count=0)
edit("common/src/main/java/com/liskovsoft/smartyoutubetv2/common/utils/Utils.java",
     '            "org.smarttube.stable",\n', '            "org.smarttube.stable",\n            "%s",\n' % PKG)

# 5. Pas de proposition de mise à jour vers le SmartTube officiel (les mises à jour arrivent par Dyna)
edit("common/src/ststable/res/values/update_urls.xml",
     r"<item>[^<]*</item>", "", count=0, regex=True)

print("Habillage Dyna appliqué.")
