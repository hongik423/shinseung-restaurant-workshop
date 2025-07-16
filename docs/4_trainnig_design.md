# 신승반점 개발 실습교재 플랫폼 UI/UX 디자인 가이드

## Design System Overview

### 디자인 철학
애플스토어의 미니멀하고 직관적인 디자인 언어를 웹개발 교육 플랫폼에 적용하여, 완전 초보자도 부담없이 접근할 수 있는 학습 환경을 제공합니다.

### 핵심 디자인 원칙
- **단순성**: 복잡한 요소를 최소화하여 학습에 집중할 수 있는 환경 조성
- **일관성**: 모든 페이지에서 동일한 패턴과 규칙 적용
- **접근성**: 모든 사용자가 쉽게 이용할 수 있는 인터페이스
- **진행성**: 학습 진도를 시각적으로 명확하게 표현

## Color Palette for TailwindCSS

### Primary Colors
```css
primary: {
  50: '#eff6ff',   /* 매우 연한 블루 - 배경용 */
  100: '#dbeafe',  /* 연한 블루 - 강조 배경 */
  200: '#bfdbfe',  /* 밝은 블루 - 보조 요소 */
  300: '#93c5fd',  /* 중간 블루 - 아이콘 */
  400: '#60a5fa',  /* 선명한 블루 - 버튼 호버 */
  500: '#3b82f6',  /* 기본 블루 - 주요 버튼, 링크 */
  600: '#2563eb',  /* 진한 블루 - 버튼 활성 상태 */
  700: '#1d4ed8',  /* 더 진한 블루 - 강조 텍스트 */
  800: '#1e40af',  /* 매우 진한 블루 */
  900: '#1e3a8a'   /* 가장 진한 블루 */
}
```

### Secondary Colors
```css
secondary: {
  50: '#f8fafc',   /* 매우 연한 그레이 - 배경 */
  100: '#f1f5f9',  /* 연한 그레이 - 카드 배경 */
  200: '#e2e8f0',  /* 밝은 그레이 - 구분선 */
  300: '#cbd5e1',  /* 중간 그레이 - 비활성 요소 */
  400: '#94a3b8',  /* 그레이 - 보조 텍스트 */
  500: '#64748b',  /* 기본 그레이 - 일반 텍스트 */
  600: '#475569',  /* 진한 그레이 - 제목 */
  700: '#334155',  /* 더 진한 그레이 */
  800: '#1e293b',  /* 매우 진한 그레이 */
  900: '#0f172a'   /* 가장 진한 그레이 - 헤딩 */
}
```

### Accent Colors
```css
accent: {
  success: '#10b981',   /* 성공 - 완료 상태 */
  warning: '#f59e0b',   /* 경고 - 주의 사항 */
  error: '#ef4444',     /* 오류 - 에러 상태 */
  info: '#06b6d4'       /* 정보 - 도움말 */
}
```

### 색상 선택 근거
- **Primary Blue**: 신뢰감과 전문성을 나타내는 애플의 시그니처 블루 적용
- **Neutral Gray**: 콘텐츠 가독성을 높이는 다양한 그레이 톤
- **Accent Colors**: 학습 상태와 피드백을 명확하게 구분할 수 있는 직관적 색상

## Page Implementations

### 1. 홈페이지 (/)

#### 핵심 목적
- 서비스 가치 제안 전달
- 학습자 여정 시작점 제공
- 신뢰도 구축

#### 주요 컴포넌트
- **Hero Section**: 메인 카피와 CTA 버튼
- **Features Section**: SIMPLE 원칙 소개
- **Learning Path**: 5단계 학습 로드맵
- **Success Stories**: 학습자 후기
- **Statistics**: 성공 지표 (완료율 95%, 평균 3시간)

#### 레이아웃 구조
```
Header (고정)
├── Hero Section (100vh)
├── Features Grid (3x2)
├── Learning Path Timeline
├── Statistics Cards (4개)
├── Success Stories Carousel
└── Footer
```

### 2. 학습 과정 페이지 (/learning)

#### 핵심 목적
- 전체 학습 진행률 표시
- 현재 학습 단계 강조
- 다음 단계 안내

#### 주요 컴포넌트
- **Progress Dashboard**: 시각적 진행률 표시
- **Step Navigation**: 5단계 탭 인터페이스
- **Current Lesson**: 현재 학습 콘텐츠
- **Help Panel**: 실시간 도움말

#### 레이아웃 구조
```
├── Progress Header (진행률 바)
├── Step Navigation (5개 탭)
├── Main Content Area
│   ├── Left: 가이드 (30%)
│   ├── Center: 작업 영역 (50%)
│   └── Right: 미리보기 (20%)
└── Help System (하단 고정)
```

### 3. 단계별 학습 페이지 (/learning/step-{n})

#### 핵심 목적
- 단계별 집중 학습 환경
- 실시간 피드백 제공
- 오류 방지 및 복구

#### 주요 컴포넌트
- **Step Header**: 단계 정보와 진행률
- **Code Editor**: 실시간 코드 편집기
- **Live Preview**: 즉시 결과 확인
- **Error Checker**: 자동 오류 검사
- **Checkpoint Validator**: 완료 조건 확인

#### 레이아웃 구조
```
├── Step Header (진행률 + 단계 정보)
├── Content Grid
│   ├── Guide Panel (25%)
│   ├── Code Editor (45%)
│   └── Live Preview (30%)
├── Error Panel (조건부 표시)
└── Navigation (이전/다음 버튼)
```

### 4. 커뮤니티 페이지 (/community)

#### 핵심 목적
- 학습자 간 소통 촉진
- 작품 공유 및 피드백
- 동기부여 제공

#### 주요 컴포넌트
- **Gallery Grid**: 완성 작품 갤러리
- **Q&A Section**: 질문답변 게시판
- **Tips Section**: 팁과 노하우 공유
- **Study Groups**: 스터디 그룹 매칭

#### 레이아웃 구조
```
├── Community Header
├── Tab Navigation (4개 탭)
├── Content Grid (2-3열)
├── Sidebar (인기 글, 공지사항)
└── Floating Action Button (글쓰기)
```

## Layout Components

### Header Component

#### 적용 라우트
- 모든 페이지 공통

#### 핵심 컴포넌트
- **Logo**: 신승반점 로고
- **Navigation Menu**: 주요 메뉴 (학습과정, 가이드, 실습, 커뮤니티)
- **Progress Indicator**: 현재 학습 진행률
- **User Menu**: 로그인/프로필 메뉴

#### 반응형 동작
```css
/* Desktop (1024px+) */
.header {
  @apply h-16 px-6 flex items-center justify-between;
}

/* Tablet (768px-1023px) */
.header {
  @apply px-4;
  .nav-menu { @apply hidden; }
  .mobile-menu-button { @apply block; }
}

/* Mobile (320px-767px) */
.header {
  @apply px-3 h-14;
}
```

### Sidebar Navigation Component

#### 적용 라우트
- `/learning/*` (학습 관련 페이지)

#### 핵심 컴포넌트
- **Step List**: 5단계 학습 목록
- **Progress Circle**: 각 단계별 완료 상태
- **Estimated Time**: 예상 소요 시간
- **Quick Actions**: 빠른 실행 버튼

#### 반응형 동작
```css
/* Desktop */
.sidebar {
  @apply w-64 fixed left-0 top-16 h-full;
}

/* Tablet & Mobile */
.sidebar {
  @apply fixed inset-0 z-50 transform -translate-x-full;
  /* 햄버거 메뉴로 토글 */
}
```

### Progress Bar Component

#### 적용 라우트
- 모든 학습 페이지

#### 핵심 컴포넌트
- **Progress Fill**: 진행률 시각화
- **Step Indicators**: 단계별 마커
- **Time Estimation**: 남은 시간 표시

```css
.progress-bar {
  @apply w-full h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress-fill {
  @apply h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500;
}
```

## Interaction Patterns

### 버튼 상호작용
```css
/* Primary Button */
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 active:bg-blue-700 
         text-white px-6 py-3 rounded-lg font-medium
         transition-all duration-200 transform hover:scale-105
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
}

/* Secondary Button */
.btn-secondary {
  @apply bg-gray-100 hover:bg-gray-200 active:bg-gray-300
         text-gray-700 px-6 py-3 rounded-lg font-medium
         transition-all duration-200;
}
```

### 카드 호버 효과
```css
.card {
  @apply bg-white rounded-xl shadow-sm border border-gray-200
         transition-all duration-300 hover:shadow-lg hover:scale-105
         hover:border-blue-200;
}
```

### 입력 필드 상호작용
```css
.input-field {
  @apply border border-gray-300 rounded-lg px-4 py-3
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         transition-all duration-200;
}
```

## Breakpoints

### 반응형 디자인 구조

#### Mobile (320px - 767px)
- **Navigation**: 햄버거 메뉴 사용
- **Grid**: 1열 레이아웃
- **Typography**: 작은 텍스트 크기
- **Spacing**: 압축된 여백

```css
@media (max-width: 767px) {
  .container {
    @apply px-4 max-w-full;
  }
  
  .grid {
    @apply grid-cols-1 gap-4;
  }
  
  .text-hero {
    @apply text-2xl;
  }
}
```

#### Tablet (768px - 1023px)
- **Navigation**: 축약된 메뉴
- **Grid**: 2열 레이아웃
- **Sidebar**: 오버레이 형태

```css
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    @apply px-6 max-w-4xl mx-auto;
  }
  
  .grid {
    @apply grid-cols-2 gap-6;
  }
}
```

#### Desktop (1024px - 1439px)
- **Navigation**: 전체 메뉴 표시
- **Grid**: 3-4열 레이아웃
- **Sidebar**: 고정 사이드바

```css
@media (min-width: 1024px) {
  .container {
    @apply px-8 max-w-6xl mx-auto;
  }
  
  .grid {
    @apply grid-cols-3 gap-8;
  }
}
```

#### Wide (1440px+)
- **Container**: 최대 너비 제한
- **Grid**: 4열 이상 레이아웃
- **여백**: 넉넉한 공간 활용

```css
@media (min-width: 1440px) {
  .container {
    @apply px-12 max-w-7xl mx-auto;
  }
  
  .grid {
    @apply grid-cols-4 gap-10;
  }
}
```

### 이미지 리소스

#### Hero Section 배경
`https://picsum.photos/1920/1080?random=1` - 모던한 코딩 환경

#### Feature Cards
- `https://picsum.photos/400/300?random=2` - 단계별 학습
- `https://picsum.photos/400/300?random=3` - 실시간 피드백
- `https://picsum.photos/400/300?random=4` - 오류 방지

#### Success Stories
- `https://picsum.photos/300/300?random=5` - 학습자 프로필
- `https://picsum.photos/300/300?random=6` - 완성 작품
- `https://picsum.photos/300/300?random=7` - 성과 인증서

이 디자인 가이드는 애플스토어의 깔끔하고 직관적인 디자인 철학을 웹개발 교육 플랫폼에 맞게 적용하여, 완전 초보자도 부담없이 학습할 수 있는 환경을 제공합니다.