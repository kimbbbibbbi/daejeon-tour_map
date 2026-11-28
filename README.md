# 대전관광여지도

대전의 관광명소를 5개 테마(문화유산 · 건축문화유산 · 자연·공원 · 과학·전시 · 야경·전망, 거리·골목 · 체험·여가는 추후 추가)와
5개 권역(동구 · 중구 · 서구 · 유성구 · 대덕구)으로 나누어 지도 · 목록 · 도보 코스로 보여 주는 웹사이트입니다.
맛집 · 숙박은 다루지 않고 관광명소만 다룹니다.

> 현재는 문화유산 15곳(대전광역시 문화유산 리플릿 원문)과 건축문화유산 17곳(근·현대건축문화유산 목록, 소제동 철도관사 9채 · 커먼즈필드 3동은 각각 하나로), 야경·전망 6곳(대전 야경·전망 명소 목록), 자연·공원 13곳(대전 자연·공원 명소 목록), 과학·전시 17곳(대전 과학·전시 명소 목록 15곳 + 대전대학교 · 배재대학교 박물관)이 들어 있습니다. 다른 테마와 도보 코스는 준비 중입니다.

## 페이지
- `#intro` 홈 (미니 지도, 이렇게 둘러보세요)
- `#map` 전체 화면 지도 (테마 다중 필터, 구 필터, 검색, 목록 패널, 마커 클러스터)
- `#list` 명소 목록 (카드형, `#theme-heritage` 처럼 테마 주소로 바로 열기)
- `#h01` … 명소 상세 (사진, 주소, 소개, 가까운 명소)
- `#routes` 테마 · 권역별 도보 코스
- `#about` 소개 · 데이터 출처

## 파일
| 파일 | 내용 |
|---|---|
| `index.src.html` | 화면 구조 · 스타일 · 동작 원본 |
| `data.js` | 테마 · 명소 · 도보 코스 데이터 (명소를 고칠 때 이 파일만 바꿈) |
| `photos/<테마>/` | 명소 사진. 넣는 방법은 `photos/사진_넣는_방법.txt` |
| `districts.json` | 대전 5개 구 경계 (통계청 2013, southkorea-maps 가공) |
| `rivers.json` | 갑천 · 유등천 · 대전천 (© OpenStreetMap contributors) |
| `leaflet.css`, `mc_MarkerCluster.css`, `maplibre-gl.css` | 지도 라이브러리 스타일 |
| `build.py` | 위 파일을 합쳐 `index.html` 한 파일로 만듦 |
| `index.html` | 빌드 결과물 (바로 열어 볼 수 있음) |

## 사진
`photos/heritage/h01.jpg` 처럼 **대표 테마 폴더 / 명소 번호** 로 넣습니다. 두 번째 사진은 `h01-2.jpg`.
jpg · png · webp 모두 되고, 사진이 없으면 테마 색 자리표시가 보입니다.
사진 출처는 `data.js` 의 해당 명소에 `credit: "..."` 로 적습니다.

## 빌드
```bash
python3 build.py
```

## 배포
`index.html` 과 `photos` 폴더를 함께 올립니다. GitHub Pages(Settings → Pages → main 브랜치 / root)로 켜면
OpenFreeMap 배경 지도(가게 · 건물 이름 표시)가 자동으로 나옵니다.

## 출처
- 명소 좌표 · 하천: © OpenStreetMap contributors (ODbL)
- 행정구역 경계: 통계청, southkorea-maps
- 배경 지도: OpenFreeMap © OpenMapTiles, Data from OpenStreetMap
- 라이브러리: Leaflet, Leaflet.markercluster, MapLibre GL, maplibre-gl-leaflet

기획 · 제작: 서광일 · 디지털인문학 기말 프로젝트
