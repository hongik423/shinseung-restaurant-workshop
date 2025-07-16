'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, Star, BookOpen, Monitor, Smartphone, Tablet } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const ResponsiveGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const responsiveTechniques = [
    // 기본 개념
    {
      category: 'basics',
      title: '모바일 퍼스트 디자인',
      difficulty: 'beginner',
      description: '작은 화면부터 시작해서 큰 화면으로 확장하는 디자인 방법론',
      cssCode: `/* 모바일 퍼스트 기본 스타일 */
.restaurant-card {
  /* 모바일 기본 스타일 */
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.restaurant-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.restaurant-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.restaurant-card .price {
  font-size: 16px;
  font-weight: bold;
  color: #e74c3c;
}

/* 태블릿 (768px 이상) */
@media (min-width: 768px) {
  .restaurant-card {
    display: flex;
    align-items: center;
    padding: 20px;
  }
  
  .restaurant-card img {
    width: 120px;
    height: 120px;
    margin-right: 20px;
  }
  
  .restaurant-card h3 {
    font-size: 20px;
  }
  
  .restaurant-card p {
    font-size: 16px;
  }
}

/* 데스크톱 (1024px 이상) */
@media (min-width: 1024px) {
  .restaurant-card {
    max-width: 800px;
    margin: 0 auto 24px;
    padding: 24px;
  }
  
  .restaurant-card h3 {
    font-size: 24px;
  }
  
  .restaurant-card .price {
    font-size: 18px;
  }
}`,
      htmlCode: `<div class="restaurant-card">
  <img src="jjajang.jpg" alt="짜장면">
  <div class="content">
    <h3>짜장면</h3>
    <p>1963년부터 3대째 이어온 전통 춘장으로 만든 정통 짜장면입니다.</p>
    <span class="price">8,000원</span>
  </div>
</div>`,
      breakpoints: 'Mobile: 기본, Tablet: 768px+, Desktop: 1024px+',
      useCase: '메뉴 카드, 상품 목록, 콘텐츠 카드'
    },
    {
      category: 'basics',
      title: '뷰포트 설정',
      difficulty: 'beginner',
      description: '모바일 기기에서 올바른 화면 크기를 설정하는 방법',
      cssCode: `/* 뷰포트 메타 태그 (HTML head에 추가) */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* CSS에서 뷰포트 단위 활용 */
.full-height-section {
  min-height: 100vh;  /* 뷰포트 높이 100% */
  width: 100vw;       /* 뷰포트 너비 100% */
  padding: 5vw;       /* 뷰포트 너비의 5% */
}

.hero-title {
  font-size: 8vw;     /* 반응형 텍스트 크기 */
  max-font-size: 48px; /* 최대 크기 제한 */
  min-font-size: 24px; /* 최소 크기 제한 */
}

/* 현대적인 뷰포트 단위 */
.container {
  height: 100dvh;     /* 동적 뷰포트 높이 */
  width: 100dvw;      /* 동적 뷰포트 너비 */
  padding: 2rem;
}

/* 텍스트 크기 조절 */
.responsive-text {
  font-size: clamp(1rem, 4vw, 2rem);
  /* 최소 1rem, 선호 4vw, 최대 2rem */
}`,
      htmlCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>신승반점 - 반응형 웹사이트</title>
</head>
<body>
  <div class="full-height-section">
    <h1 class="hero-title">신승반점</h1>
    <p class="responsive-text">인천 차이나타운의 전통 맛집</p>
  </div>
</body>
</html>`,
      breakpoints: 'Viewport units: vw, vh, dvw, dvh',
      useCase: '전체 화면 섹션, 반응형 텍스트, 모바일 최적화'
    },

    // 미디어 쿼리
    {
      category: 'media',
      title: '미디어 쿼리 기본',
      difficulty: 'beginner',
      description: '기기별 스타일을 적용하는 미디어 쿼리의 기본 사용법',
      cssCode: `/* 기본 스타일 (모바일) */
.menu-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
}

.menu-item {
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 작은 태블릿 (576px 이상) */
@media (min-width: 576px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }
}

/* 태블릿 (768px 이상) */
@media (min-width: 768px) {
  .menu-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 24px;
  }
  
  .menu-item {
    padding: 20px;
  }
}

/* 데스크톱 (1024px 이상) */
@media (min-width: 1024px) {
  .menu-grid {
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    padding: 32px;
  }
}

/* 대형 데스크톱 (1440px 이상) */
@media (min-width: 1440px) {
  .menu-grid {
    max-width: 1400px;
    gap: 40px;
    padding: 40px;
  }
}

/* 가로 모드 (landscape) */
@media (orientation: landscape) {
  .menu-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}`,
      htmlCode: `<div class="menu-grid">
  <div class="menu-item">
    <img src="jjajang.jpg" alt="짜장면">
    <h3>짜장면</h3>
    <p>전통 춘장으로 만든 정통 짜장면</p>
    <span class="price">8,000원</span>
  </div>
  <div class="menu-item">
    <img src="jjamppong.jpg" alt="짬뽕">
    <h3>짬뽕</h3>
    <p>얼큰하고 시원한 해물 짬뽕</p>
    <span class="price">9,000원</span>
  </div>
  <div class="menu-item">
    <img src="tangsuyuk.jpg" alt="탕수육">
    <h3>탕수육</h3>
    <p>바삭한 옷에 새콤달콤한 소스</p>
    <span class="price">25,000원</span>
  </div>
  <div class="menu-item">
    <img src="gunmandu.jpg" alt="군만두">
    <h3>군만두</h3>
    <p>고소한 속이 가득한 군만두</p>
    <span class="price">12,000원</span>
  </div>
</div>`,
      breakpoints: '576px, 768px, 1024px, 1440px',
      useCase: '메뉴 그리드, 상품 목록, 갤러리'
    },
    {
      category: 'media',
      title: '고급 미디어 쿼리',
      difficulty: 'intermediate',
      description: '해상도, 터치 기능, 다크 모드 등 고급 미디어 쿼리',
      cssCode: `/* 고해상도 디스플레이 (레티나) */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .logo {
    background-image: url('logo@2x.png');
    background-size: 100px 50px;
  }
}

/* 터치 기능 감지 */
@media (hover: hover) {
  /* 마우스 호버가 가능한 기기 */
  .menu-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
  }
}

@media (hover: none) {
  /* 터치 기기 */
  .menu-item:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
}

/* 다크 모드 */
@media (prefers-color-scheme: dark) {
  .menu-item {
    background: #2d3748;
    color: white;
  }
  
  .menu-item h3 {
    color: #f7fafc;
  }
  
  .menu-item p {
    color: #a0aec0;
  }
}

/* 모션 감소 선호 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 인쇄 스타일 */
@media print {
  .menu-item {
    break-inside: avoid;
    margin-bottom: 20px;
  }
  
  .menu-item img {
    max-width: 100px;
    max-height: 100px;
  }
  
  .no-print {
    display: none;
  }
}

/* 포인터 정확도 */
@media (pointer: coarse) {
  /* 터치 기기 - 큰 터치 타겟 */
  .menu-item button {
    min-height: 44px;
    padding: 12px 24px;
  }
}

@media (pointer: fine) {
  /* 마우스 - 작은 버튼 가능 */
  .menu-item button {
    min-height: 32px;
    padding: 8px 16px;
  }
}`,
      htmlCode: `<div class="menu-item">
  <img src="jjajang.jpg" alt="짜장면">
  <h3>짜장면</h3>
  <p>전통 춘장으로 만든 정통 짜장면</p>
  <span class="price">8,000원</span>
  <button class="order-btn">주문하기</button>
  <button class="share-btn no-print">공유하기</button>
</div>`,
      breakpoints: 'Feature-based: hover, touch, dark mode',
      useCase: '접근성, 다크 모드, 고해상도 지원'
    },

    // 플렉시블 레이아웃
    {
      category: 'flexible',
      title: '플루이드 그리드',
      difficulty: 'intermediate',
      description: '백분율과 상대 단위를 사용한 유연한 그리드 시스템',
      cssCode: `/* 플루이드 컨테이너 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%; /* 상대적 패딩 */
}

/* 플루이드 그리드 시스템 */
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%; /* 음수 마진으로 갭 제거 */
}

.col {
  flex: 1;
  padding: 0 1%;
  margin-bottom: 2%;
}

/* 반응형 열 너비 */
.col-1 { flex: 0 0 8.333%; }
.col-2 { flex: 0 0 16.666%; }
.col-3 { flex: 0 0 25%; }
.col-4 { flex: 0 0 33.333%; }
.col-6 { flex: 0 0 50%; }
.col-8 { flex: 0 0 66.666%; }
.col-12 { flex: 0 0 100%; }

/* 모바일에서 전체 너비 */
@media (max-width: 768px) {
  .col, .col-1, .col-2, .col-3, 
  .col-4, .col-6, .col-8 {
    flex: 0 0 100%;
  }
}

/* 태블릿에서 조정 */
@media (min-width: 769px) and (max-width: 1023px) {
  .col-3 { flex: 0 0 50%; }
  .col-4 { flex: 0 0 50%; }
}

/* 현대적인 CSS Grid 대안 */
.modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

/* 컨테이너 쿼리 (실험적) */
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    align-items: center;
  }
}`,
      htmlCode: `<div class="container">
  <div class="row">
    <div class="col-4">
      <div class="menu-category">
        <h3>면 요리</h3>
        <p>짜장면, 짬뽕, 우동 등</p>
      </div>
    </div>
    <div class="col-4">
      <div class="menu-category">
        <h3>밥 요리</h3>
        <p>볶음밥, 덮밥 등</p>
      </div>
    </div>
    <div class="col-4">
      <div class="menu-category">
        <h3>요리류</h3>
        <p>탕수육, 군만두 등</p>
      </div>
    </div>
  </div>
</div>

<!-- 현대적인 방식 -->
<div class="modern-grid">
  <div class="menu-category">면 요리</div>
  <div class="menu-category">밥 요리</div>
  <div class="menu-category">요리류</div>
</div>`,
      breakpoints: 'Flexible: 300px minimum, auto-fit',
      useCase: '레이아웃 시스템, 콘텐츠 그리드'
    },
    {
      category: 'flexible',
      title: '플렉시블 이미지',
      difficulty: 'beginner',
      description: '다양한 화면 크기에 맞춰 조정되는 이미지 처리',
      cssCode: `/* 기본 반응형 이미지 */
.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 이미지 컨테이너 */
.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

/* 고정 비율 이미지 */
.aspect-ratio-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
  overflow: hidden;
}

.aspect-ratio-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 다양한 비율 옵션 */
.aspect-4-3 { padding-bottom: 75%; }    /* 4:3 비율 */
.aspect-1-1 { padding-bottom: 100%; }   /* 1:1 비율 */
.aspect-16-9 { padding-bottom: 56.25%; } /* 16:9 비율 */

/* 현대적인 CSS aspect-ratio 속성 */
.modern-aspect {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
}

/* 반응형 배경 이미지 */
.hero-background {
  background-image: url('hero-mobile.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-background {
    background-image: url('hero-tablet.jpg');
    height: 60vh;
  }
}

@media (min-width: 1024px) {
  .hero-background {
    background-image: url('hero-desktop.jpg');
    height: 70vh;
  }
}

/* 이미지 최적화 */
.optimized-image {
  max-width: 100%;
  height: auto;
  loading: lazy;
  decoding: async;
}`,
      htmlCode: `<!-- 기본 반응형 이미지 -->
<img src="jjajang.jpg" 
     alt="짜장면" 
     class="responsive-image">

<!-- 고정 비율 이미지 -->
<div class="aspect-ratio-container aspect-16-9">
  <img src="restaurant-interior.jpg" 
       alt="매장 내부" 
       loading="lazy">
</div>

<!-- 현대적인 방식 -->
<img src="menu-photo.jpg" 
     alt="메뉴 사진" 
     class="modern-aspect optimized-image">

<!-- 다양한 해상도 지원 -->
<img src="logo-small.png"
     srcset="logo-small.png 1x,
             logo-medium.png 2x,
             logo-large.png 3x"
     alt="신승반점 로고"
     class="responsive-image">

<!-- 반응형 배경 -->
<div class="hero-background">
  <h1>신승반점</h1>
  <p>인천 차이나타운의 전통 맛집</p>
</div>

<!-- Picture 요소로 아트 디렉션 -->
<picture>
  <source media="(min-width: 1024px)" 
          srcset="hero-desktop.jpg">
  <source media="(min-width: 768px)" 
          srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" 
       alt="매장 전경"
       class="responsive-image">
</picture>`,
      breakpoints: 'Image-based: 1x, 2x, 3x resolution',
      useCase: '메뉴 사진, 매장 이미지, 로고'
    },

    // 내비게이션
    {
      category: 'navigation',
      title: '반응형 내비게이션',
      difficulty: 'intermediate',
      description: '모바일과 데스크톱에 최적화된 내비게이션 패턴',
      cssCode: `/* 모바일 우선 내비게이션 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
}

/* 모바일 메뉴 버튼 */
.menu-toggle {
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* 모바일 메뉴 (숨김) */
.nav-menu {
  position: fixed;
  top: 70px;
  left: -100%;
  width: 100%;
  height: calc(100vh - 70px);
  background: white;
  transition: left 0.3s ease;
  z-index: 1000;
}

.nav-menu.active {
  left: 0;
}

.nav-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu li {
  border-bottom: 1px solid #eee;
}

.nav-menu a {
  display: block;
  padding: 1rem;
  color: #2d3748;
  text-decoration: none;
  font-size: 1.1rem;
}

.nav-menu a:hover {
  background: #f7fafc;
}

/* 데스크톱 버전 */
@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }
  
  .nav-menu {
    position: static;
    width: auto;
    height: auto;
    background: none;
    transition: none;
  }
  
  .nav-menu ul {
    display: flex;
    gap: 2rem;
  }
  
  .nav-menu li {
    border: none;
  }
  
  .nav-menu a {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
  }
  
  .nav-menu a:hover {
    background: #e2e8f0;
  }
}

/* 스티키 내비게이션 */
.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

/* 브레드크럼 */
.breadcrumb {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb span {
  margin: 0 0.5rem;
  color: #6c757d;
}

@media (max-width: 480px) {
  .breadcrumb {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
}`,
      htmlCode: `<nav class="navbar sticky-nav">
  <div class="logo">신승반점</div>
  
  <button class="menu-toggle" id="menuToggle">
    ☰
  </button>
  
  <div class="nav-menu" id="navMenu">
    <ul>
      <li><a href="#home">홈</a></li>
      <li><a href="#menu">메뉴</a></li>
      <li><a href="#about">소개</a></li>
      <li><a href="#location">위치</a></li>
      <li><a href="#contact">연락처</a></li>
    </ul>
  </div>
</nav>

<nav class="breadcrumb">
  <a href="/">홈</a>
  <span>></span>
  <a href="/menu">메뉴</a>
  <span>></span>
  <span>면 요리</span>
</nav>

<script>
// 모바일 메뉴 토글
document.getElementById('menuToggle').addEventListener('click', function() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
});

// 메뉴 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.getElementById('menuToggle');
  
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});
</script>`,
      breakpoints: 'Mobile: <768px, Desktop: 768px+',
      useCase: '사이트 내비게이션, 메뉴 시스템'
    },

    // 컨텐츠 최적화
    {
      category: 'content',
      title: '반응형 타이포그래피',
      difficulty: 'intermediate',
      description: '화면 크기에 맞춰 조정되는 텍스트 크기와 간격',
      cssCode: `/* 기본 타이포그래피 설정 */
html {
  font-size: 16px; /* 기본 크기 */
  line-height: 1.6;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
               'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 
               'Fira Sans', 'Droid Sans', 'Helvetica Neue', 
               sans-serif;
  color: #2d3748;
}

/* 반응형 제목 */
h1 {
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.8rem;
}

h3 {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 0.6rem;
}

/* 반응형 본문 */
p {
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* 모바일 최적화 */
@media (max-width: 480px) {
  html {
    font-size: 14px;
  }
  
  h1, h2, h3 {
    line-height: 1.2;
  }
  
  p {
    line-height: 1.5;
  }
}

/* 태블릿 최적화 */
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
  
  p {
    max-width: 70ch; /* 읽기 편한 줄 길이 */
  }
}

/* 데스크톱 최적화 */
@media (min-width: 1024px) {
  html {
    font-size: 18px;
  }
  
  p {
    max-width: 65ch;
  }
}

/* 메뉴 카드 타이포그래피 */
.menu-card {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.menu-card h3 {
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  margin-bottom: 0.5rem;
  color: #1a202c;
}

.menu-card p {
  font-size: clamp(0.85rem, 2vw, 1rem);
  color: #4a5568;
  margin-bottom: 1rem;
}

.menu-card .price {
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 600;
  color: #e53e3e;
}

/* 접근성 고려 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 고대비 모드 */
@media (prefers-contrast: high) {
  .menu-card {
    border: 2px solid #000;
  }
  
  .menu-card h3 {
    color: #000;
  }
  
  .menu-card p {
    color: #333;
  }
}`,
      htmlCode: `<div class="menu-card">
  <h3>짜장면</h3>
  <p>1963년부터 3대째 이어온 전통 춘장으로 만든 정통 짜장면입니다. 
     달콤하고 고소한 맛이 일품입니다.</p>
  <span class="price">8,000원</span>
</div>

<div class="menu-card">
  <h3>짬뽕</h3>
  <p>신선한 해산물과 야채가 어우러진 얼큰하고 시원한 짬뽕입니다. 
     매콤한 맛을 좋아하시는 분께 추천합니다.</p>
  <span class="price">9,000원</span>
</div>

<div class="menu-card">
  <h3>탕수육</h3>
  <p>바삭하게 튀긴 돼지고기에 새콤달콤한 소스를 곁들인 
     신승반점의 대표 요리입니다.</p>
  <span class="price">25,000원</span>
</div>`,
      breakpoints: 'Fluid: clamp() function, viewport units',
      useCase: '읽기 편한 텍스트, 메뉴 설명, 제목'
    },

    // 성능 최적화
    {
      category: 'performance',
      title: '반응형 성능 최적화',
      difficulty: 'advanced',
      description: '모바일 환경에서 빠른 로딩을 위한 최적화 기법',
      cssCode: `/* 크리티컬 CSS */
/* 페이지 로드 시 즉시 필요한 스타일만 인라인으로 */
.critical-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 지연 로딩 이미지 */
.lazy-image {
  background: #f0f0f0;
  min-height: 200px;
  transition: opacity 0.3s;
}

.lazy-image[data-loaded="true"] {
  opacity: 1;
}

/* 웹폰트 최적화 */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2'),
       url('font.woff') format('woff');
  font-display: swap; /* 텍스트 먼저 표시 */
}

/* 모바일 터치 최적화 */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 12px;
  touch-action: manipulation;
}

/* 하드웨어 가속 */
.animated-element {
  transform: translateZ(0);
  will-change: transform;
}

/* 스크롤 성능 최적화 */
.scroll-container {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);
}

/* 미디어 쿼리 최적화 */
@media (max-width: 768px) {
  /* 모바일에서 불필요한 요소 숨기기 */
  .desktop-only {
    display: none;
  }
  
  /* 모바일 최적화 스타일 */
  .mobile-optimized {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}

/* 프리로딩 힌트 */
.preload-hint {
  /* 중요한 리소스에 대한 힌트 */
  link-rel: preload;
  as: font;
  crossorigin: anonymous;
}

/* 컨테이너 쿼리 최적화 */
.container-query {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 300px) {
  .card-content {
    display: flex;
    gap: 1rem;
  }
}

/* 자원 힌트 */
.resource-hints {
  /* DNS 프리페치 */
  rel: dns-prefetch;
  href: https://fonts.googleapis.com;
  
  /* 프리커넥트 */
  rel: preconnect;
  href: https://fonts.gstatic.com;
  
  /* 프리로드 */
  rel: preload;
  href: critical.css;
  as: style;
}`,
      htmlCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- 자원 힌트 -->
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" href="critical.css" as="style">
  
  <!-- 크리티컬 CSS 인라인 -->
  <style>
    .critical-header { /* 크리티컬 스타일 */ }
  </style>
  
  <!-- 비크리티컬 CSS 지연 로딩 -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  
  <title>신승반점 - 빠른 로딩</title>
</head>
<body>
  <header class="critical-header">
    <div class="logo">신승반점</div>
    <nav class="desktop-only">
      <a href="#menu">메뉴</a>
      <a href="#about">소개</a>
    </nav>
  </header>

  <main>
    <!-- 지연 로딩 이미지 -->
    <img class="lazy-image" 
         data-src="hero-image.jpg" 
         alt="매장 전경"
         loading="lazy">
    
    <!-- 터치 최적화 버튼 -->
    <button class="touch-target mobile-optimized">
      주문하기
    </button>
  </main>

  <script>
    // 이미지 지연 로딩
    const lazyImages = document.querySelectorAll('.lazy-image');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.dataset.loaded = 'true';
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // 서비스 워커 등록
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  </script>
</body>
</html>`,
      breakpoints: 'Performance-based: connection speed, device capability',
      useCase: '빠른 로딩, 모바일 최적화, 성능 향상'
    }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'basics', name: '기본 개념', icon: '🔧' },
    { id: 'media', name: '미디어 쿼리', icon: '📱' },
    { id: 'flexible', name: '플렉시블', icon: '🔄' },
    { id: 'navigation', name: '내비게이션', icon: '🧭' },
    { id: 'content', name: '콘텐츠', icon: '📝' },
    { id: 'performance', name: '성능', icon: '⚡' }
  ];

  const difficulties = [
    { id: 'beginner', name: '초급', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: '중급', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'advanced', name: '고급', color: 'bg-red-100 text-red-800' }
  ];

  const filteredTechniques = responsiveTechniques.filter(technique => {
    const matchesSearch = technique.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         technique.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || technique.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/guide" className="text-primary-600 hover:text-primary-700">
                가이드
              </Link>
              <span className="text-secondary-400">/</span>
              <span className="text-secondary-700">반응형 웹 디자인 실전</span>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">
                📱 반응형 웹 디자인 실전
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                모바일부터 데스크톱까지 모든 기기에 최적화된 웹사이트 만들기
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  4.6점 (1,876개 평가)
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {responsiveTechniques.length}개 기법
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
              <Input
                placeholder="반응형 기법 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Responsive Techniques */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredTechniques.map((technique, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl text-secondary-900">
                        {technique.title}
                      </CardTitle>
                      <Badge 
                        className={`text-xs ${difficulties.find(d => d.id === technique.difficulty)?.color}`}
                      >
                        {difficulties.find(d => d.id === technique.difficulty)?.name}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === technique.category)?.icon}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Monitor className="w-4 h-4 text-secondary-600" />
                        <Tablet className="w-4 h-4 text-secondary-600" />
                        <Smartphone className="w-4 h-4 text-secondary-600" />
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary-600 mb-2">{technique.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {technique.useCase}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {technique.breakpoints}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="css" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="css">CSS</TabsTrigger>
                      <TabsTrigger value="html">HTML</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="css" className="mt-4">
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-secondary-700">
                            반응형 CSS:
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(technique.cssCode)}
                            className="h-8 w-8 p-0"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <pre className="text-sm bg-secondary-50 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
                          {technique.cssCode}
                        </pre>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="html" className="mt-4">
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-secondary-700">
                            HTML 구조:
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(technique.htmlCode)}
                            className="h-8 w-8 p-0"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <pre className="text-sm bg-secondary-50 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
                          {technique.htmlCode}
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredTechniques.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-secondary-900 mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-secondary-600 mb-4">
              다른 검색어나 카테고리를 시도해보세요
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              전체 기법 보기
            </Button>
          </div>
        )}

        {/* Responsive Design Principles */}
        <section className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">📐 반응형 디자인 원칙</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">✅ 핵심 원칙</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• 모바일 퍼스트 접근 방식</li>
                    <li>• 플렉시블 그리드 시스템 사용</li>
                    <li>• 유연한 이미지와 미디어</li>
                    <li>• 적절한 터치 타겟 크기</li>
                    <li>• 성능 최적화 고려</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">❌ 피해야 할 실수</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• 고정된 너비 사용</li>
                    <li>• 작은 터치 타겟</li>
                    <li>• 너무 많은 브레이크포인트</li>
                    <li>• 모바일 성능 무시</li>
                    <li>• 접근성 고려 부족</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Breakpoints Guide */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>📏 표준 브레이크포인트</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Smartphone className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-medium">모바일</h4>
                  <p className="text-sm text-secondary-600">~576px</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Tablet className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium">태블릿</h4>
                  <p className="text-sm text-secondary-600">576px~768px</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Monitor className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium">데스크톱</h4>
                  <p className="text-sm text-secondary-600">768px~1024px</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Monitor className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-medium">대형 화면</h4>
                  <p className="text-sm text-secondary-600">1024px+</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>📚 관련 가이드</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/css-layout">
                    <div>
                      <div className="font-medium">CSS 레이아웃</div>
                      <div className="text-sm text-secondary-600">Flexbox, Grid 활용</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/html-tags">
                    <div>
                      <div className="font-medium">HTML 태그</div>
                      <div className="text-sm text-secondary-600">시맨틱 마크업</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/learning/css">
                    <div>
                      <div className="font-medium">CSS 실습</div>
                      <div className="text-sm text-secondary-600">반응형 사이트 만들기</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ResponsiveGuide; 