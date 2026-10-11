export const site = {
  name: "바스피플",
  nameEn: "Bath People",
  representative: "김명관",
  phoneDisplay: "010-3052-6704",
  phoneTel: "010-3052-6704",
  phoneSms: "01030526704",
  businessNumber: "591-28-01722",
  hours: "08:00–22:00",
  area: "경남 양산",
  image: "/images/placeholder.jpg",
  imageWidth: 1024,
  imageHeight: 691,
  blogUrl: "https://blog.naver.com/qktmvlvmf12",
} as const;

export const seo = {
  home: {
    title: "바스피플 | 양산 욕실 리모델링 · 타일 시공",
    description:
      "양산 욕실 리모델링, 타일 시공, 하자 보수, 누수·방수를 직접 시공합니다. 상담부터 마무리 점검까지 바스피플. 대표 김명관 010-3052-6704.",
  },
  about: {
    title: "바스피플 소개 | 양산 욕실·타일 시공팀",
    description:
      "바스피플은 경남 양산의 욕실·타일 시공팀입니다. 국가 자격증, 현장 경험, 10년 넘는 블로그, 공공기관 시공, 금연 시공, A/S 1년. 대표 김명관.",
  },
  quote: {
    title: "견적문의 | 바스피플",
    description:
      "바스피플 견적문의. 전화 010-3052-6704, 매일 08:00–22:00. 욕실 리모델링과 타일 시공 범위를 남기면 직접 시공팀이 안내합니다.",
  },
} as const;

export const nav = [
  { href: "/#works", label: "시공사례" },
  { href: "/about", label: "소개" },
  { href: "/#process", label: "시공과정" },
  { href: "/quote", label: "견적문의" },
] as const;

export const slides = [
  {
    eyebrow: "양산 · 욕실 리모델링",
    title: ["양산의 욕실을", "제대로 고칩니다."],
    image: "/images/hero-1.jpg",
    width: 1024,
    height: 576,
  },
  {
    eyebrow: "타일 시공",
    title: ["벽과 바닥을", "현장에서 맞춥니다."],
    image: "/images/hero-2.jpg",
    width: 1024,
    height: 576,
  },
  {
    eyebrow: "직접 시공팀",
    title: ["상담부터 끝까지", "직접 합니다."],
    image: "/images/hero-3.jpg",
    width: 1024,
    height: 576,
  },
] as const;

export const categories = [
  {
    name: "욕실 리모델링",
    summary: "철거부터 타일, 위생도기, 마감까지 욕실 전체를 다시 잡습니다.",
    images: ["/images/bathroom-remodel.jpg"],
  },
  {
    name: "타일 시공",
    summary: "바닥과 벽, 줄눈과 단차를 현장에서 맞춰 시공합니다.",
    images: ["/images/tile-work.jpg"],
  },
  {
    name: "타일 하자 보수",
    summary: "들뜸, 균열, 파손처럼 문제가 된 구간을 확인하고 보수합니다.",
    images: ["/images/tile-repair-1.jpg", "/images/tile-repair-2.jpg"],
  },
  {
    name: "상가 주방 설치",
    summary: "상가 주방의 타일과 설비 시공을 현장 조건에 맞춰 진행합니다.",
    images: ["/images/commercial-kitchen.jpg"],
  },
  {
    name: "욕실 누수 및 방수",
    summary: "누수 원인을 확인한 뒤 방수와 마감까지 이어서 시공합니다.",
    images: ["/images/waterproof.jpg"],
  },
  {
    name: "기타 설비 시공",
    summary: "욕실과 연결된 설비 공사는 상담 후 범위를 정해 진행합니다.",
    images: ["/images/facility.jpg"],
  },
] as const;

export const points = [
  {
    title: "국가 자격증 보유",
    text: "국가자격을 갖춘 시공팀이 작업합니다.",
    detail:
      "욕실처럼 물과 마감이 만나는 공간은 자격과 현장 감각이 함께 필요합니다.",
  },
  {
    title: "20+ 현장 경험",
    text: "현장에서 쌓아 온 시공 경험으로 범위를 판단합니다.",
    detail:
      "바닥 상태, 기존 타일, 배관 위치를 보고 집에 맞는 시공 범위를 정합니다.",
  },
  {
    title: "10년+ 블로그 운영",
    text: "시공 기록을 10년 넘게 블로그에 남겨 왔습니다.",
    detail: "말로만 설명하지 않고, 현장에 남겨 둔 글을 함께 보실 수 있습니다.",
  },
  {
    title: "공공기관 시공 경험 多",
    text: "공공기관 현장도 다수 시공했습니다.",
    detail: "주택과 상가 외에 일정과 기준이 분명한 현장도 진행해 왔습니다.",
  },
  {
    title: "금연 시공",
    text: "시공자 전원이 금연입니다.",
    detail: "공사가 끝난 집에 담배 냄새를 남기지 않습니다.",
  },
  {
    title: "A/S 1년",
    text: "시공 후 1년 동안 A/S를 진행합니다.",
    detail: "마무리 점검에서 끝내지 않고, 이후 문제까지 이어 받습니다.",
  },
] as const;

export const steps = [
  {
    title: "상담 및 현장 확인",
    text: "전화로 상황을 듣고, 현장에서 바닥과 벽, 설비 상태를 직접 확인합니다.",
  },
  {
    title: "견적",
    text: "확인한 범위를 기준으로 견적을 안내합니다.",
  },
  {
    title: "시공",
    text: "바스피플 시공팀이 철거와 시공, 마감까지 직접 진행합니다.",
  },
  {
    title: "마무리 점검",
    text: "마감 상태를 함께 점검하고, 시공 후 1년 A/S로 이어갑니다.",
  },
] as const;
