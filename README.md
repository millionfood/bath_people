# 바스피플

양산 욕실 리모델링 · 타일 시공 홍보 사이트입니다. Astro로 만든 정적 페이지입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 http://127.0.0.1:4321 을 엽니다.

배포용 파일은 `npm run build` 후 `dist` 폴더입니다.

## 고치는 곳

- 상호, 전화, 블로그 주소, 문구, 사진 경로: `src/data/site.ts`
- 임시 이미지: `public/images/placeholder.jpg`
- 도메인이 정해지면 `astro.config.mjs`에 `site` 주소를 넣습니다.

블로그 버튼은 공식 주소를 확인하지 못해 네이버 블로그 검색으로 임시 연결했습니다. `blogUrl`만 바꾸면 됩니다.

온라인 견적은 서버에 저장되지 않습니다. 내용을 정리한 뒤 문자로 보내거나 복사해 전달합니다.
