// 대전관광여지도 데이터. 명소를 고치거나 늘릴 때는 이 파일만 바꾸면 된다.
// 좌표는 OpenStreetMap(Nominatim) 검색 결과. approx: true 는 근사 좌표(현장 확인 필요).
// 사진은 photos/<테마 key>/<명소 id>.jpg (두 번째 사진은 <id>-2.jpg). png · webp도 된다.
// credit 에 사진 출처를 적으면 상세 화면에 표시된다.

// 테마 6개. key 는 사진 폴더 이름과 같다.
window.THEMES = [
  { key: "heritage", name: "문화유산", color: "#a4442a" },
  { key: "nature",   name: "자연·공원", color: "#4d7a3f" },
  { key: "science",  name: "과학·전시", color: "#2f6690" },
  { key: "street",   name: "거리·골목", color: "#8f6212" },
  { key: "activity", name: "체험·여가", color: "#7a4c98" },
  { key: "night",    name: "야경·전망", color: "#2d3a63" }
];

// theme: 대표 테마(마커 색 · 사진 폴더), themes: 함께 해당하는 테마
window.PLACES = [
  // ---------- 문화유산 ----------
  { id: "p01", name: "대전근현대사전시관", alt: "옛 충남도청사", theme: "heritage", themes: ["science"], gu: "중구", addr: "중구 중앙로 101", lat: 36.32646, lng: 127.42060,
    desc: "1932년 충청남도청이 공주에서 대전으로 옮겨 오며 지은 청사. 도청이 내포신도시로 떠난 뒤 대전의 근현대사를 보여 주는 전시관으로 쓰인다." },
  { id: "p02", name: "테미오래", alt: "옛 충남도 관사촌", theme: "heritage", themes: ["street"], gu: "중구", addr: "중구 보문로205번길 13", lat: 36.32092, lng: 127.42294,
    desc: "도지사 공관과 관사들이 모여 있던 마을을 시민 문화 공간으로 연 곳. 오래된 주택과 정원을 둘러보며 전시와 프로그램을 즐길 수 있다." },
  { id: "p03", name: "대흥동 주교좌성당", alt: "대흥동성당", theme: "heritage", themes: [], gu: "중구", addr: "중구 대종로 471", lat: 36.32657, lng: 127.42647,
    desc: "원도심 한가운데 높은 종탑을 세운 성당. 대전 천주교의 중심 성당으로, 원도심 산책의 이정표가 된다." },
  { id: "p04", name: "우암사적공원", alt: "남간정사", theme: "heritage", themes: ["nature"], gu: "동구", addr: "동구 충정로 53", lat: 36.34782, lng: 127.45783,
    desc: "우암 송시열이 제자를 가르치던 남간정사를 중심으로 꾸민 공원. 계곡물이 대청 아래로 흐르는 정자와 연못이 아름답다." },
  { id: "p05", name: "동춘당", alt: null, theme: "heritage", themes: [], gu: "대덕구", addr: "대덕구 동춘당로 80", lat: 36.36517, lng: 127.44016,
    desc: "조선 후기 학자 송준길이 지은 별당으로 보물로 지정되어 있다. 주변 동춘당공원과 함께 조용히 산책하기 좋다." },
  { id: "p06", name: "계족산성", alt: null, theme: "heritage", themes: ["night"], gu: "대덕구", addr: "대덕구 장동 산 일원", lat: 36.39396, lng: 127.45416,
    desc: "계족산 봉우리를 둘러싼 삼국시대 산성. 복원된 성벽 위에 서면 대전 시내와 대청호 방향이 시원하게 내려다보인다." },

  // ---------- 자연·공원 ----------
  { id: "p07", name: "한밭수목원", alt: null, theme: "nature", themes: [], gu: "서구", addr: "서구 둔산대로 169", lat: 36.36922, lng: 127.38843,
    desc: "도심 한가운데 자리한 국내 최대 규모의 도심 수목원. 동원과 서원, 열대식물원을 천천히 걸으며 계절마다 다른 풍경을 볼 수 있다." },
  { id: "p08", name: "장태산자연휴양림", alt: null, theme: "nature", themes: ["activity"], gu: "서구", addr: "서구 장안로 461", lat: 36.21930, lng: 127.33948,
    desc: "메타세쿼이아 숲으로 유명한 휴양림. 나무 사이를 잇는 스카이웨이와 출렁다리를 걸으며 숲을 위에서 내려다볼 수 있다." },
  { id: "p09", name: "계족산 황톳길", alt: null, theme: "nature", themes: ["activity"], gu: "대덕구", addr: "대덕구 장동 일원", lat: 36.39850, lng: 127.44250, approx: true,
    desc: "계족산 임도를 따라 황토를 깔아 맨발로 걷는 숲길. 숲속 음악회가 열리는 시기도 있어 주말 나들이 명소로 꼽힌다." },
  { id: "p10", name: "유림공원", alt: null, theme: "nature", themes: [], gu: "유성구", addr: "유성구 어은로 27", lat: 36.36094, lng: 127.35919,
    desc: "갑천과 유성천이 만나는 곳의 정원형 공원. 연못과 국화 정원이 있어 유성온천과 함께 둘러보기 좋다." },
  { id: "p11", name: "상소동 산림욕장", alt: null, theme: "nature", themes: [], gu: "동구", addr: "동구 산내로 714", lat: 36.23349, lng: 127.47245,
    desc: "수많은 돌탑과 오토캠핑장이 있는 숲. 여름에는 물놀이장, 겨울에는 얼음 동산이 만들어져 가족 나들이객이 찾는다." },
  { id: "p12", name: "대청호 · 대청댐", alt: null, theme: "nature", themes: ["night"], gu: "대덕구", addr: "대덕구 미호동 일원", lat: 36.47655, lng: 127.48133,
    desc: "금강을 막아 만든 넓은 호수. 댐 위 길과 물문화관, 호숫가를 잇는 대청호오백리길에서 물과 산이 어우러진 풍경을 볼 수 있다." },

  // ---------- 과학·전시 ----------
  { id: "p13", name: "국립중앙과학관", alt: null, theme: "science", themes: ["activity"], gu: "유성구", addr: "유성구 대덕대로 481", lat: 36.37526, lng: 127.37553,
    desc: "대덕연구단지 입구의 국립 과학관. 자연사관, 과학기술관, 천체관 등 하루를 꼬박 보내도 될 만큼 볼거리가 많다." },
  { id: "p14", name: "엑스포과학공원 한빛탑", alt: null, theme: "science", themes: ["night"], gu: "유성구", addr: "유성구 대덕대로 480", lat: 36.37663, lng: 127.38806,
    desc: "1993 대전 엑스포의 상징탑. 전망대에서 갑천과 둔산을 내려다볼 수 있고, 밤에는 탑 앞 광장에서 음악분수가 펼쳐진다." },
  { id: "p15", name: "대전시립미술관", alt: null, theme: "science", themes: [], gu: "서구", addr: "서구 둔산대로 155", lat: 36.36672, lng: 127.38574,
    desc: "엑스포 시민광장과 한밭수목원 사이 문화예술단지의 중심 미술관. 현대미술과 과학예술 기획전이 꾸준히 열린다." },
  { id: "p16", name: "이응노미술관", alt: null, theme: "science", themes: [], gu: "서구", addr: "서구 둔산대로 157", lat: 36.36690, lng: 127.38702,
    desc: "화가 고암 이응노의 작품을 모은 미술관. 문자 추상과 군상 연작을 볼 수 있으며, 프랑스 건축가 로랑 보두앵이 설계했다." },
  { id: "p17", name: "화폐박물관", alt: null, theme: "science", themes: [], gu: "유성구", addr: "유성구 과학로 80-67", lat: 36.37754, lng: 127.37056,
    desc: "한국조폐공사가 운영하는 박물관. 우리나라 화폐의 역사와 위조 방지 기술을 살펴볼 수 있다." },
  { id: "p18", name: "대전시민천문대", alt: null, theme: "science", themes: ["night"], gu: "유성구", addr: "유성구 과학로 213-48", lat: 36.37960, lng: 127.35300, approx: true,
    desc: "누구나 망원경으로 별과 행성을 볼 수 있는 시민 천문대. 해가 진 뒤 관측 프로그램이 열려 야간 나들이로 좋다." },

  // ---------- 거리·골목 ----------
  { id: "p19", name: "소제동 철도관사촌", alt: null, theme: "street", themes: ["heritage"], gu: "동구", addr: "동구 소제동 일원", lat: 36.33512, lng: 127.43875,
    desc: "대전역 뒤편 철도 종사자를 위해 지은 관사 마을. 좁은 골목과 옛 목조 주택 사이로 작은 공방과 카페가 들어섰다." },
  { id: "p20", name: "대전 철도보급창고 3호", alt: null, theme: "street", themes: ["heritage"], gu: "동구", addr: "동구 신안동 일원", lat: 36.33108, lng: 127.43761,
    desc: "철도 물자를 보관하던 목조 창고. 대전이 철도 도시로 성장한 과정을 보여 주며, 지금은 전시 · 문화 공간으로 쓰인다." },
  { id: "p21", name: "으능정이 문화의 거리", alt: "스카이로드", theme: "street", themes: ["night"], gu: "중구", addr: "중구 은행동 일원", lat: 36.32847, lng: 127.42824,
    desc: "원도심의 대표 보행 거리. 거리 위를 덮은 대형 LED 화면 스카이로드가 밤마다 영상을 비춘다." },
  { id: "p22", name: "대전 중앙시장", alt: null, theme: "street", themes: [], gu: "동구", addr: "동구 중앙로 일원", lat: 36.33030, lng: 127.43330, approx: true,
    desc: "대전역 앞에 자리한 대전 최대의 전통시장. 한복 · 그릇 · 건어물 골목 등 오래된 상점가를 구경하며 걷기 좋다." },
  { id: "p23", name: "대동 벽화마을", alt: null, theme: "street", themes: [], gu: "동구", addr: "동구 대동 일원", lat: 36.33180, lng: 127.44970, approx: true,
    desc: "산비탈 골목마다 벽화가 그려진 마을. 계단길을 따라 오르면 꼭대기의 대동하늘공원으로 이어진다." },
  { id: "p24", name: "유성온천 문화의 거리", alt: null, theme: "street", themes: ["activity"], gu: "유성구", addr: "유성구 봉명동 일원", lat: 36.35450, lng: 127.34200, approx: true,
    desc: "유성온천 일대의 보행 거리. 매년 봄 유성온천문화축제가 열리며, 족욕체험장과 유림공원까지 걸어서 이어진다." },

  // ---------- 체험·여가 ----------
  { id: "p25", name: "대전오월드", alt: null, theme: "activity", themes: [], gu: "중구", addr: "중구 사정공원로 70", lat: 36.28931, lng: 127.39807,
    desc: "동물원, 놀이공원, 꽃 정원, 버드랜드를 한곳에 모은 테마파크. 가족 단위 여행자에게 인기가 높다." },
  { id: "p26", name: "뿌리공원", alt: null, theme: "activity", themes: ["nature"], gu: "중구", addr: "중구 뿌리공원로 79", lat: 36.28414, lng: 127.38785,
    desc: "성씨별 유래를 새긴 조형물이 늘어선 세계 유일의 족보 테마공원. 내 성씨의 비석을 찾아보는 재미가 있다." },
  { id: "p27", name: "유성온천 족욕체험장", alt: null, theme: "activity", themes: [], gu: "유성구", addr: "유성구 온천로 일원", lat: 36.35513, lng: 127.34460,
    desc: "누구나 무료로 따뜻한 온천수에 발을 담글 수 있는 야외 족욕장. 걷다 지친 뚜벅이 여행자의 쉼터다." },
  { id: "p28", name: "대전월드컵경기장", alt: null, theme: "activity", themes: [], gu: "유성구", addr: "유성구 월드컵대로 32", lat: 36.36525, lng: 127.32511,
    desc: "2002 한일 월드컵을 위해 지은 축구 전용 경기장. 대전하나시티즌 홈 경기 날에는 응원 열기를 직접 느낄 수 있다." },
  { id: "p29", name: "엑스포 시민광장", alt: null, theme: "activity", themes: ["night"], gu: "서구", addr: "서구 둔산대로 일원", lat: 36.36720, lng: 127.38780, approx: true,
    desc: "미술관과 수목원 사이의 넓은 광장. 공연과 축제가 자주 열리고, 지붕 구조물 아래 그늘에서 쉬어 가기 좋다." },
  { id: "p30", name: "대전예술의전당", alt: null, theme: "activity", themes: [], gu: "서구", addr: "서구 둔산대로 135", lat: 36.36661, lng: 127.38369,
    desc: "아트홀과 앙상블홀을 갖춘 대전 대표 공연장. 미술관 · 수목원과 이어져 있어 공연 전후로 산책하기 좋다." },

  // ---------- 야경·전망 ----------
  { id: "p31", name: "대동하늘공원", alt: null, theme: "night", themes: ["street"], gu: "동구", addr: "동구 동대전로110번길 182", lat: 36.33221, lng: 127.45156,
    desc: "언덕 꼭대기의 풍차와 전망 데크로 유명한 공원. 해 질 녘 원도심과 대전 시내 불빛이 한눈에 들어온다." },
  { id: "p32", name: "엑스포다리", alt: null, theme: "night", themes: [], gu: "서구", addr: "서구 만년동 ~ 유성구 도룡동", lat: 36.37261, lng: 127.38804,
    desc: "갑천 위에 놓인 보행 전용 사장교. 밤이면 조명이 켜져 한빛탑과 함께 갑천의 대표 야경을 만든다." },
  { id: "p33", name: "식장산 해돋이 전망대", alt: null, theme: "night", themes: ["nature"], gu: "동구", addr: "동구 세천동 식장산 일원", lat: 36.30050, lng: 127.48550, approx: true,
    desc: "대전에서 가장 높은 산 가운데 하나인 식장산의 전망대. 대전 시내 야경과 새해 해돋이 명소로 손꼽힌다." },
  { id: "p34", name: "보문산성", alt: null, theme: "night", themes: ["heritage", "nature"], gu: "중구", addr: "중구 부사동 보문산 일원", lat: 36.30109, lng: 127.42888,
    desc: "보문산 능선에 남은 옛 산성. 복원된 장대루에 오르면 원도심과 대전역 일대가 발아래로 펼쳐진다." },
  { id: "p35", name: "보문산 시루봉", alt: "보문산 정상", theme: "night", themes: ["nature"], gu: "중구", addr: "중구 대사동 보문산 일원", lat: 36.29619, lng: 127.42186,
    desc: "시민들이 가장 많이 오르는 보문산의 정상. 숲길을 따라 오르면 대전 남쪽 시가지와 산줄기가 한눈에 보인다." },
  { id: "p36", name: "대덕대교 · 갑천 야경", alt: null, theme: "night", themes: [], gu: "유성구", addr: "유성구 도룡동 일원", lat: 36.37291, lng: 127.37958,
    desc: "갑천을 가로지르는 다리와 강변 산책로. 엑스포다리 · 한빛탑 조명이 강물에 비치는 모습을 조용히 볼 수 있다." }
];

// 도보 코스. stops 순서가 걷는 순서. 거리 · 시간은 화면에서 좌표로 계산한다.
window.ROUTES = [
  { id: "wondo", name: "원도심 골목 산책", area: "동구 · 중구", themes: ["street", "heritage"], stops: ["p19", "p20", "p22", "p21", "p03", "p01", "p02"],
    note: "대전역 뒤 소제동 관사촌에서 출발해 중앙시장과 으능정이 거리를 지나, 옛 충남도청과 테미오래 관사촌에서 마치는 코스." },
  { id: "expo", name: "둔산 · 엑스포 과학 산책", area: "서구 · 유성구", themes: ["science", "nature"], stops: ["p07", "p29", "p15", "p16", "p32", "p14", "p13", "p17"],
    note: "한밭수목원에서 시작해 미술관 두 곳을 들른 뒤 엑스포다리로 갑천을 건너 한빛탑과 과학관까지 걷는 코스." },
  { id: "daedong", name: "대동 하늘공원 노을 코스", area: "동구", themes: ["heritage", "street", "night"], stops: ["p04", "p23", "p31"],
    note: "우암사적공원을 둘러본 뒤 대동 벽화마을 골목을 올라 해 질 녘 하늘공원에서 야경을 보는 코스." },
  { id: "yuseong", name: "유성 온천 쉼표 코스", area: "유성구", themes: ["activity", "street", "nature"], stops: ["p27", "p24", "p10"],
    note: "족욕체험장에서 발을 녹이고 온천 거리를 걸어 유림공원 정원에서 쉬어 가는 짧은 코스." },
  { id: "bomun", name: "보문산 숲 · 전망 코스", area: "중구", themes: ["night", "nature", "activity"], stops: ["p34", "p35", "p25", "p26"],
    note: "보문산성 장대루에서 원도심을 내려다본 뒤 시루봉을 넘어 오월드와 뿌리공원으로 내려오는 산길 코스. 등산화를 권한다." }
];
