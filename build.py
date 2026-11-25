# index.src.html에 Leaflet CSS와 데이터를 넣어 한 파일로 합친다.
# dist/index.html: Claude 공유 링크용(문서 머리는 게시할 때 붙음)
# index.html: GitHub Pages용 완전한 HTML 문서
import os, json, re, unicodedata
here = os.path.dirname(os.path.abspath(__file__))
rd = lambda f: open(os.path.join(here, f), encoding="utf-8").read()

# photos/<테마>/<id>.jpg · <id>-2.png 처럼 실제로 있는 사진만 {"photos/heritage/h01": "photos/heritage/h01.jpg"} 로 모은다
def photos():
    found = {}
    root = os.path.join(here, "photos")
    for theme in sorted(os.listdir(root)) if os.path.isdir(root) else []:
        d = os.path.join(root, theme)
        if not os.path.isdir(d): continue
        for f in sorted(os.listdir(d)):
            f = unicodedata.normalize("NFC", f)
            m = re.fullmatch(r"([a-z]\d+(?:-\d+)?)\.(jpe?g|png|webp)", f, re.I)
            if m: found.setdefault(f"photos/{theme}/{m.group(1)}", f"photos/{theme}/{f}")
    return found
body = (rd("index.src.html")
        .replace("/*LEAFLET_CSS*/", rd("leaflet.css"))
        .replace("/*CLUSTER_CSS*/", rd("mc_MarkerCluster.css"))
        .replace("/*MAPLIBRE_CSS*/", rd("maplibre-gl.css"))
        .replace("/*DATA*/", rd("data.js"))
        .replace("/*DISTRICTS*/", rd("districts.json"))
        .replace("/*RIVERS*/", rd("rivers.json"))
        .replace("/*PHOTOS*/", json.dumps(photos(), ensure_ascii=False)))
os.makedirs(os.path.join(here, "dist"), exist_ok=True)
open(os.path.join(here, "dist", "index.html"), "w", encoding="utf-8").write(body)
page = ('<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n'
        '</head>\n<body>\n' + body + '\n</body>\n</html>\n')
open(os.path.join(here, "index.html"), "w", encoding="utf-8").write(page)
print("dist/index.html, index.html", len(page.encode()), "bytes")
