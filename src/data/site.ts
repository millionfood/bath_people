export const site = {
  name: "바스피플",
  nameEn: "Bath People",
  /** 배포 도메인 (예: https://example.com). canonical·og·sitemap·JSON-LD에 사용 */
  url: "https://www.xn--9g3b23j59qqfa.com/",
  representative: "김명관",
  phoneDisplay: "010-3052-6704",
  phoneTel: "010-3052-6704",
  phoneSms: "01030526704",
  businessNumber: "591-28-01722",
  hours: "08:00–22:00",
  area: "경남 양산",
  image: "/images/hero-1.png",
  imageWidth: 1024,
  imageHeight: 576,
  blogUrl: "https://blog.naver.com/qktmvlvmf12",
} as const;

export const seo = {
  home: {
    title: "양산 타일 시공 · 욕실 리모델링 | 바스피플",
    description:
      "양산 타일 시공, 욕실 리모델링, 하자 보수, 누수·방수를 직접 시공합니다. 상담부터 마무리 점검까지 바스피플. 대표 김명관 010-3052-6704.",
  },
  about: {
    title: "양산 타일·욕실 시공팀 소개 | 바스피플",
    description:
      "바스피플은 경남 양산의 타일·욕실 시공팀입니다. 국가 자격증, 현장 경험, 10년 넘는 블로그, 공공기관 시공, 금연 시공, A/S 1년. 대표 김명관.",
  },
  quote: {
    title: "양산 타일 견적문의 | 바스피플",
    description:
      "양산 타일·욕실 시공 견적문의. 전화 010-3052-6704, 매일 08:00–22:00. 시공 범위를 남기면 바스피플 직접 시공팀이 안내합니다.",
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
    eyebrow: "양산 욕실 리모델링 · 타일 시공 전문팀 바스피플",
    title: ["양산 타일 시공", "욕실 리모델링"],
    image: "/images/hero-1.png",
    width: 1024,
    height: 576,
  },
  {
    eyebrow: "양산 욕실 리모델링 · 타일 시공 전문팀 바스피플",
    title: ["합리적인 견적", "확실한 시공"],
    image: "/images/hero-2.png",
    width: 1024,
    height: 576,
  },
  {
    eyebrow: "양산 욕실 리모델링 · 타일 시공 전문팀 바스피플",
    title: ["경험이 기술이 되고", "기술이 완성도를 만듭니다"],
    image: "/images/hero-3.png",
    width: 1024,
    height: 576,
  },
] as const;

export const categories = [
  {
    name: "욕실 리모델링",
    summary:
      "고객의 예산과 공간, 원하는 디자인에 맞춰 욕실 리모델링을 진행합니다.",
    images: ["/images/hero-1.png"],
  },
  {
    name: "타일 시공",
    summary:
      "아파트·주택·상가·공장 등 다양한 공간의 벽, 바닥 타일 시공을 진행합니다.",
    images: ["/images/hero-2.png"],
  },
  {
    name: "타일 하자 보수",
    summary:
      "들뜸, 균열, 파손 등 문제가 된 타일을 현장 상태에 맞게 보수합니다.",
    images: ["/images/hero-2.png", "/images/hero-3.png"],
  },
  {
    name: "상가 주방 설치",
    summary: "상가 주방의 타일과 설비 시공을 현장 조건에 맞춰 진행합니다.",
    images: ["/images/hero-3.png"],
  },
  {
    name: "욕실 누수 및 방수",
    summary:
      "누수 진단과 방수 공사부터 타일 마감, 필요 시 아랫집 피해 복구까지 진행합니다.",
    images: ["/images/hero-1.png"],
  },
  {
    name: "기타 설비 시공",
    summary:
      "세면기·변기·수전 등 욕실 설비와 상가·주택의 간단한 조적·미장 작업도 진행합니다.",
    images: ["/images/hero-2.png"],
  },
] as const;

export const certificates = [
  {
    name: "조적기능사",
    image: "/images/cert-masonry.jpg",
    width: 1024,
    height: 761,
    alt: "김명관 조적기능사 국가기술자격증. 2014년 6월 발급.",
  },
  {
    name: "타일기능사",
    image: "/images/cert-tile.jpg",
    width: 1024,
    height: 758,
    alt: "김명관 타일기능사 국가기술자격증. 2014년 6월 발급.",
  },
] as const;

export const points = [
  {
    title: "국가 자격증 보유",
    text: "타일기능사·조적기능사 등 국가자격을 갖춘 시공팀이 작업합니다.",
    detail: "국가기술자격을 바탕으로 기본과 원칙에 충실하게 시공합니다.",
  },
  {
    title: "20+ 현장 경험",
    text: "다양한 현장에서 오랜 기간 경험을 쌓아 왔습니다.",
    detail:
      "현장 상태에 맞는 시공 방법과 적합한 자재, 합리적인 견적을 제안합니다.",
  },
  {
    title: "10년+ 블로그 운영",
    text: "실제 시공 기록을 10년 넘게 블로그에 남겨 왔습니다.",
    detail: "실제 시공 과정과 결과를 사진으로 직접 확인하실 수 있습니다.",
  },
  {
    title: "공공기관 시공 경험 多",
    text: "높은 기준과 꼼꼼함이 요구되는 현장을 다수 시공했습니다.",
    detail:
      "가정집과 상가뿐 아니라 높은 기준과 일정관리가 필요한 현장에서도 믿고 맡기는 시공팀입니다.",
  },
  {
    title: "금연 시공",
    text: "시공팀 전원 금연 시공으로 담배 냄새 없이 깔끔하고 쾌적하게 작업합니다.",
    detail: "시공 중은 물론 휴식 시간에도 현장에서 담배를 피우지 않습니다.",
  },
  {
    title: "A/S 1년",
    text: "시공이 끝난 뒤에도 1년간 책임감 있게 관리합니다.",
    detail: "마무리 점검에서 끝내지 않고, 이후에 생기는 문제까지 책임집니다.",
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
