# 🏮 신승반점 개발 실습 프로젝트

완전 초보자를 위한 5단계 웹 개발 학습 플랫폼

## ✨ 주요 기능

### 🤖 AI 오류수정 문의 챗봇 시스템

**Gemini API를 활용한 실시간 개발 도우미**

- **자동 오류 감지**: 개발 중 발생하는 오류를 실시간으로 감지
- **AI 오류 분석**: 오류 원인 분석 및 해결 방법 제안
- **코드 리뷰**: 작성한 코드의 품질 검토 및 개선 제안
- **학습 가이드**: 궁금한 개발 주제에 대한 맞춤형 가이드 생성
- **4가지 채팅 모드**: 일반, 오류, 코드, 학습 모드 지원

### 🚀 EasyNext CLI 도구

**환경설정 후 바로 개발 시작**

```bash
# 랜딩페이지 생성
easynext create landingpage my-landing

# 포트폴리오 생성  
easynext create portfolio my-portfolio

# 블로그 생성
easynext create blog my-blog
```

- **3가지 템플릿**: 랜딩페이지, 포트폴리오, 블로그
- **자동 설정**: Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **즉시 실행**: 생성 후 바로 개발 서버 실행 가능

## 🚀 시작하기

### 1. 환경변수 설정

AI 채팅 기능을 사용하려면 Gemini API 키가 필요합니다.

1. **API 키 생성**
   - [Google AI Studio](https://aistudio.google.com/app/apikey)에서 API 키 생성

2. **환경변수 파일 생성**
   ```bash
   # 프로젝트 루트에 .env.local 파일 생성
   touch .env.local
   ```

3. **API 키 추가**
   ```env
   # .env.local 파일 내용
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

4. **Vercel 배포 시 환경변수 설정**
   - Vercel 대시보드 → Settings → Environment Variables
   - `NEXT_PUBLIC_GEMINI_API_KEY` 추가

### 2. 개발 서버 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인할 수 있습니다.

`app/page.tsx` 파일을 수정하여 페이지를 편집할 수 있습니다. 파일을 수정하면 자동으로 페이지가 업데이트됩니다.

## 기본 포함 라이브러리

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Shadcn UI](https://ui.shadcn.com)
- [Lucide Icon](https://lucide.dev)
- [date-fns](https://date-fns.org)
- [react-use](https://github.com/streamich/react-use)
- [es-toolkit](https://github.com/toss/es-toolkit)
- [Zod](https://zod.dev)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com)
- [TS Pattern](https://github.com/gvergnaud/ts-pattern)

## 📱 AI 챗봇 사용법

### 1. 챗봇 열기
- 화면 우측 하단의 파란색 AI 버튼 클릭

### 2. 채팅 모드 선택
- **일반**: 개발 관련 질문 및 답변
- **오류**: 오류 메시지 분석 및 해결 방법 제안
- **코드**: 코드 리뷰 및 개선 제안
- **학습**: 특정 주제에 대한 학습 가이드 생성

### 3. 자동 오류 감지
- 개발 중 오류 발생 시 자동으로 오류 알림 표시
- "AI 도움 받기" 버튼으로 즉시 해결 방법 확인

## 🛠️ CLI 도구 사용법

### 1. 프로젝트 생성
```bash
easynext create [타입] [이름]
```

### 2. 개발 서버 실행
```bash
cd [프로젝트명]
npm run dev
```

### 3. 브라우저에서 확인
http://localhost:3000

## 🔧 기술 스택

### 프론트엔드
- **Next.js 15**: React 프레임워크
- **React 19**: 사용자 인터페이스 라이브러리
- **TypeScript**: 타입 안전성
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Shadcn UI**: 재사용 가능한 UI 컴포넌트
- **Lucide React**: 아이콘 라이브러리

### AI 기능
- **Google Gemini API**: 오류 분석 및 코드 리뷰
- **실시간 오류 감지**: 자동 오류 모니터링
- **자연어 처리**: 한국어 개발 질문 답변

### 개발 도구
- **ESLint**: 코드 품질 검사
- **Prettier**: 코드 포맷팅
- **React Hook Form**: 폼 관리
- **Zod**: 스키마 검증
- **React Query**: 데이터 페칭

## ⚙️ 환경 설정

### Gemini API 키 설정
1. [Google AI Studio](https://aistudio.google.com/app/apikey)에서 API 키 생성
2. 프로젝트 루트에 `.env.local` 파일 생성
3. API 키 추가:
```env
GEMINI_API_KEY=your_api_key_here
```

### 개발 환경 요구사항
- **Node.js**: 18.0.0 이상
- **npm**: 8.0.0 이상
- **브라우저**: Chrome, Firefox, Safari 최신 버전

## 📚 학습 단계

1. **환경 설정**: Node.js, Cursor, GitHub 설정
2. **HTML**: 기본 구조 및 시맨틱 태그
3. **CSS**: 스타일링 및 반응형 디자인
4. **JavaScript**: 동적 기능 및 이벤트 처리
5. **배포**: Vercel을 통한 실제 서비스 배포

## 🎯 학습 목표

- **실무 중심 학습**: 실제 프로젝트를 통한 경험
- **AI 활용**: 현대적 개발 환경에서의 AI 도구 활용
- **문제 해결**: 오류 분석 및 디버깅 능력 향상
- **배포 경험**: 실제 서비스 배포까지의 전체 과정

## 🤝 기여하기

이 프로젝트는 오픈소스입니다. 기여를 환영합니다!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 지원

문제가 있거나 도움이 필요하시면:
- AI 챗봇 사용 (실시간 도움)
- GitHub Issues 생성
- 학습 가이드 참조
yarn add -g @easynext/cli@latest
# or
pnpm add -g @easynext/cli@latest
```

Supabase 설정

```sh
easynext supabase
```

Next-Auth 설정

```sh
easynext auth

# ID,PW 로그인
easynext auth idpw
# 카카오 로그인
easynext auth kakao
```

유용한 서비스 연동

```sh
# Google Analytics
easynext gtag

# Microsoft Clarity
easynext clarity

# ChannelIO
easynext channelio

# Sentry
easynext sentry

# Google Adsense
easynext adsense
```
