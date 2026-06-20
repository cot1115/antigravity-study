const RESTAURANTS_DATA = [
  {
    id: 1,
    name: "학생회관 라면 & 김밥",
    category: "분식",
    location: "학식",
    menu: "라면 + 참치김밥 세트",
    price: 6500,
    mapUrl: "https://map.kakao.com/?q=대학교 학생회관 식당"
  },
  {
    id: 2,
    name: "기숙사 식당",
    category: "한식",
    location: "학식",
    menu: "오늘의 백반",
    price: 6000,
    mapUrl: "https://map.kakao.com/?q=대학교 기숙사 식당"
  },
  {
    id: 3,
    name: "도서관 북카페",
    category: "기타",
    location: "학식",
    menu: "클럽 샌드위치 & 아메리카노",
    price: 5500,
    mapUrl: "https://map.kakao.com/?q=대학교 중앙도서관 카페"
  },
  {
    id: 4,
    name: "교직원 식당",
    category: "한식",
    location: "학식",
    menu: "프리미엄 한식 뷔페",
    price: 8000,
    mapUrl: "https://map.kakao.com/?q=대학교 교직원 식당"
  },
  {
    id: 5,
    name: "공과대학 학생식당",
    category: "일식",
    location: "학식",
    menu: "바삭 수제 돈까스",
    price: 7500,
    mapUrl: "https://map.kakao.com/?q=대학교 공대 식당"
  },
  {
    id: 6,
    name: "진짜 춘천 닭갈비",
    category: "한식",
    location: "정문",
    menu: "치즈 닭갈비 (볶음밥 포함)",
    price: 13000,
    mapUrl: "https://map.kakao.com/?q=정문 닭갈비"
  },
  {
    id: 7,
    name: "만리장성",
    category: "중식",
    location: "정문",
    menu: "해물쟁반짜장 & 탕수육 세트",
    price: 9500,
    mapUrl: "https://map.kakao.com/?q=정문 만리장성"
  },
  {
    id: 8,
    name: "스시 오하요",
    category: "일식",
    location: "정문",
    menu: "특선 초밥 (12pcs)",
    price: 16000,
    mapUrl: "https://map.kakao.com/?q=정문 스시"
  },
  {
    id: 9,
    name: "벨라 피자 & 파스타",
    category: "양식",
    location: "정문",
    menu: "쉬림프 로제 파스타",
    price: 12000,
    mapUrl: "https://map.kakao.com/?q=정문 파스타"
  },
  {
    id: 10,
    name: "이모네 떡볶이",
    category: "분식",
    location: "정문",
    menu: "쌀떡볶이 + 튀김범벅",
    price: 5000,
    mapUrl: "https://map.kakao.com/?q=정문 이모네 떡볶이"
  },
  {
    id: 11,
    name: "정문 토스트 클럽",
    category: "기타",
    location: "정문",
    menu: "스페셜 햄치즈토스트 & 딸기바나나주스",
    price: 6000,
    mapUrl: "https://map.kakao.com/?q=정문 토스트"
  },
  {
    id: 12,
    name: "하오하오 마라탕",
    category: "중식",
    location: "정문",
    menu: "내맘대로 마라탕 (고기 추가)",
    price: 9800,
    mapUrl: "https://map.kakao.com/?q=정문 마라탕"
  },
  {
    id: 13,
    name: "양식당 그리다",
    category: "양식",
    location: "정문",
    menu: "수비드 목살 스테이크",
    price: 14500,
    mapUrl: "https://map.kakao.com/?q=정문 목살 스테이크"
  },
  {
    id: 14,
    name: "청진동 뼈다귀 해장국",
    category: "한식",
    location: "정문",
    menu: "얼큰 뼈해장국",
    price: 9000,
    mapUrl: "https://map.kakao.com/?q=정문 해장국"
  },
  {
    id: 15,
    name: "도쿄 돈코츠 라멘",
    category: "일식",
    location: "정문",
    menu: "차슈 돈코츠 라멘",
    price: 8500,
    mapUrl: "https://map.kakao.com/?q=정문 라멘"
  },
  {
    id: 16,
    name: "이모네 삼겹살구이",
    category: "한식",
    location: "후문",
    menu: "삼겹 쌈밥 정식",
    price: 12000,
    mapUrl: "https://map.kakao.com/?q=후문 삼겹살 쌈밥"
  },
  {
    id: 17,
    name: "취향저격 마라샹궈",
    category: "중식",
    location: "후문",
    menu: "매콤 마라샹궈",
    price: 15000,
    mapUrl: "https://map.kakao.com/?q=후문 마라샹궈"
  },
  {
    id: 18,
    name: "바삭 텐동 천국",
    category: "일식",
    location: "후문",
    menu: "에비 텐동 (새우 튀김 덮밥)",
    price: 11000,
    mapUrl: "https://map.kakao.com/?q=후문 텐동"
  },
  {
    id: 19,
    name: "청춘 수제버거",
    category: "양식",
    location: "후문",
    menu: "더블 치즈버거 세트",
    price: 8900,
    mapUrl: "https://map.kakao.com/?q=후문 수제버거"
  },
  {
    id: 20,
    name: "분식나라 김밥천국",
    category: "분식",
    location: "후문",
    menu: "모듬김밥 & 치즈라볶이",
    price: 7500,
    mapUrl: "https://map.kakao.com/?q=후문 분식 김밥"
  },
  {
    id: 21,
    name: "샌드위치 팩토리",
    category: "기타",
    location: "후문",
    menu: "바질 페스토 치킨 파니니",
    price: 7800,
    mapUrl: "https://map.kakao.com/?q=후문 샌드위치 파니니"
  },
  {
    id: 22,
    name: "전주 돌솥비빔밥",
    category: "한식",
    location: "후문",
    menu: "낙지 돌솥 비빔밥",
    price: 9000,
    mapUrl: "https://map.kakao.com/?q=후문 돌솥비빔밥"
  },
  {
    id: 23,
    name: "성도 양꼬치",
    category: "중식",
    location: "후문",
    menu: "양꼬치 정식 (마파두부 포함)",
    price: 16000,
    mapUrl: "https://map.kakao.com/?q=후문 양꼬치"
  },
  {
    id: 24,
    name: "연어 덮밥 집",
    category: "일식",
    location: "후문",
    menu: "생연어 사케동",
    price: 13500,
    mapUrl: "https://map.kakao.com/?q=후문 사케동 연어덮밥"
  },
  {
    id: 25,
    name: "뉴욕 다이너",
    category: "양식",
    location: "후문",
    menu: "함박 스테이크 & 오므라이스",
    price: 11000,
    mapUrl: "https://map.kakao.com/?q=후문 함박 스테이크"
  },
  {
    id: 26,
    name: "청년다방 즉석 떡볶이",
    category: "분식",
    location: "후문",
    menu: "차돌 즉석떡볶이 (2인 기준)",
    price: 9500,
    mapUrl: "https://map.kakao.com/?q=후문 즉석떡볶이"
  },
  {
    id: 27,
    name: "디저트 & 와플 숲",
    category: "기타",
    location: "후문",
    menu: "애플시나몬 생크림 와플 & 라떼",
    price: 5800,
    mapUrl: "https://map.kakao.com/?q=후문 와플 디저트"
  },
  {
    id: 28,
    name: "할머니 손맛 뼈다귀 해장국",
    category: "한식",
    location: "후문",
    menu: "우거지 뼈해장국",
    price: 9500,
    mapUrl: "https://map.kakao.com/?q=후문 해장국 뼈다귀"
  },
  {
    id: 29,
    name: "탄탄면 공방",
    category: "중식",
    location: "후문",
    menu: "청양 탄탄면 & 군만두",
    price: 9800,
    mapUrl: "https://map.kakao.com/?q=후문 탄탄면"
  },
  {
    id: 30,
    name: "돈카츠 미야",
    category: "일식",
    location: "후문",
    menu: "치즈 등심 돈카츠",
    price: 9900,
    mapUrl: "https://map.kakao.com/?q=후문 돈까스 돈카츠"
  }
];
