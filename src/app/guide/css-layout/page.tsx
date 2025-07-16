'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, Star, BookOpen, Monitor, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const CSSLayoutGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const layoutTechniques = [
    // Flexbox
    {
      category: 'flexbox',
      title: 'Flexbox 기초',
      difficulty: 'beginner',
      description: '가장 널리 사용되는 현대적인 레이아웃 기법',
      cssCode: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.item {
  flex: 1;
  padding: 20px;
  background: #f0f0f0;
  margin: 10px;
}`,
      htmlCode: `<div class="container">
  <div class="item">아이템 1</div>
  <div class="item">아이템 2</div>
  <div class="item">아이템 3</div>
</div>`,
      useCase: '네비게이션 바, 카드 레이아웃, 중앙 정렬'
    },
    {
      category: 'flexbox',
      title: 'Flexbox 방향 제어',
      difficulty: 'beginner',
      description: 'flex-direction으로 아이템 배치 방향 조절',
      cssCode: `.vertical-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header { flex: 0 0 auto; }
.main { flex: 1; }
.footer { flex: 0 0 auto; }`,
      htmlCode: `<div class="vertical-container">
  <header class="header">헤더</header>
  <main class="main">메인 콘텐츠</main>
  <footer class="footer">푸터</footer>
</div>`,
      useCase: '페이지 전체 레이아웃, 사이드바'
    },
    {
      category: 'flexbox',
      title: 'Flexbox 정렬',
      difficulty: 'intermediate',
      description: 'justify-content와 align-items로 정렬 제어',
      cssCode: `.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #333;
  color: white;
}

.logo { font-size: 24px; font-weight: bold; }
.nav { display: flex; gap: 20px; }
.auth { display: flex; gap: 10px; }`,
      htmlCode: `<div class="menu-container">
  <div class="logo">신승반점</div>
  <nav class="nav">
    <a href="#menu">메뉴</a>
    <a href="#about">소개</a>
    <a href="#contact">연락처</a>
  </nav>
  <div class="auth">
    <button>로그인</button>
    <button>회원가입</button>
  </div>
</div>`,
      useCase: '헤더 네비게이션, 툴바'
    },
    {
      category: 'flexbox',
      title: 'Flexbox 반응형',
      difficulty: 'intermediate',
      description: 'flex-wrap과 미디어 쿼리로 반응형 레이아웃',
      cssCode: `.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.card {
  flex: 1 1 300px;
  min-width: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
}

@media (max-width: 768px) {
  .card { flex: 1 1 100%; }
}`,
      htmlCode: `<div class="card-container">
  <div class="card">
    <h3>짜장면</h3>
    <p>전통 춘장으로 만든 정통 짜장면</p>
    <span class="price">8,000원</span>
  </div>
  <div class="card">
    <h3>짬뽕</h3>
    <p>얼큰하고 시원한 해물 짬뽕</p>
    <span class="price">9,000원</span>
  </div>
  <div class="card">
    <h3>탕수육</h3>
    <p>바삭한 옷에 새콤달콤한 소스</p>
    <span class="price">25,000원</span>
  </div>
</div>`,
      useCase: '카드 그리드, 제품 목록'
    },

    // Grid
    {
      category: 'grid',
      title: 'Grid 기초',
      difficulty: 'intermediate',
      description: '2차원 레이아웃을 위한 강력한 Grid 시스템',
      cssCode: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  min-height: 100vh;
}

.header { grid-column: 1 / -1; }
.sidebar { grid-column: 1; }
.main { grid-column: 2 / -1; }
.footer { grid-column: 1 / -1; }`,
      htmlCode: `<div class="grid-container">
  <header class="header">헤더</header>
  <aside class="sidebar">사이드바</aside>
  <main class="main">메인 콘텐츠</main>
  <footer class="footer">푸터</footer>
</div>`,
      useCase: '복잡한 페이지 레이아웃, 대시보드'
    },
    {
      category: 'grid',
      title: 'Grid 템플릿 영역',
      difficulty: 'intermediate',
      description: 'grid-template-areas로 직관적인 레이아웃 설계',
      cssCode: `.restaurant-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`,
      htmlCode: `<div class="restaurant-layout">
  <header class="header">신승반점 헤더</header>
  <nav class="nav">메뉴 네비게이션</nav>
  <main class="main">메인 콘텐츠</main>
  <aside class="aside">추천 메뉴</aside>
  <footer class="footer">푸터</footer>
</div>`,
      useCase: '복잡한 웹사이트 레이아웃'
    },
    {
      category: 'grid',
      title: 'Grid 자동 배치',
      difficulty: 'intermediate',
      description: 'auto-fit, auto-fill로 자동 반응형 그리드',
      cssCode: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.menu-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.menu-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.menu-item-content {
  padding: 20px;
}`,
      htmlCode: `<div class="auto-grid">
  <div class="menu-item">
    <img src="jjajang.jpg" alt="짜장면">
    <div class="menu-item-content">
      <h3>짜장면</h3>
      <p>전통 춘장으로 만든 정통 짜장면</p>
      <span class="price">8,000원</span>
    </div>
  </div>
  <!-- 더 많은 아이템들... -->
</div>`,
      useCase: '상품 그리드, 갤러리'
    },

    // Position
    {
      category: 'position',
      title: '포지셔닝 기초',
      difficulty: 'beginner',
      description: 'static, relative, absolute, fixed 포지셔닝',
      cssCode: `.position-container {
  position: relative;
  height: 300px;
  background: #f0f0f0;
}

.absolute-item {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}

.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #333;
  color: white;
  padding: 15px;
  z-index: 1000;
}`,
      htmlCode: `<nav class="fixed-nav">
  고정 네비게이션
</nav>

<div class="position-container">
  <p>상대적 위치 컨테이너</p>
  <div class="absolute-item">
    절대 위치 아이템
  </div>
</div>`,
      useCase: '고정 헤더, 오버레이, 툴팁'
    },
    {
      category: 'position',
      title: 'Sticky 포지셔닝',
      difficulty: 'intermediate',
      description: '스크롤에 따라 동적으로 변하는 포지셔닝',
      cssCode: `.sticky-header {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
  z-index: 100;
}

.content-section {
  padding: 40px 20px;
  min-height: 100vh;
}

.section-title {
  position: sticky;
  top: 80px;
  background: #f8f9fa;
  padding: 10px 20px;
  margin: 0 -20px 20px -20px;
  border-left: 4px solid #007bff;
}`,
      htmlCode: `<header class="sticky-header">
  <h1>신승반점 메뉴</h1>
</header>

<section class="content-section">
  <h2 class="section-title">면 요리</h2>
  <div class="menu-items">
    <!-- 메뉴 아이템들 -->
  </div>
</section>

<section class="content-section">
  <h2 class="section-title">밥 요리</h2>
  <div class="menu-items">
    <!-- 메뉴 아이템들 -->
  </div>
</section>`,
      useCase: '섹션 헤더, 네비게이션'
    },

    // Float & Clear
    {
      category: 'float',
      title: 'Float 레이아웃',
      difficulty: 'beginner',
      description: '전통적인 Float 기반 레이아웃 (레거시)',
      cssCode: `.float-container {
  overflow: hidden; /* clearfix */
  padding: 20px;
}

.float-left {
  float: left;
  width: 200px;
  margin-right: 20px;
}

.float-right {
  float: right;
  width: 200px;
  margin-left: 20px;
}

.float-content {
  /* 남은 공간을 채움 */
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}`,
      htmlCode: `<div class="float-container clearfix">
  <div class="float-left">
    <img src="restaurant.jpg" alt="매장 사진">
  </div>
  <div class="float-right">
    <h3>영업 정보</h3>
    <p>매일 11:00 - 22:00</p>
    <p>032-123-4567</p>
  </div>
  <div class="float-content">
    <h2>신승반점 소개</h2>
    <p>1963년부터 3대째 이어온 정통 중화요리 전문점...</p>
  </div>
</div>`,
      useCase: '텍스트 감싸기, 이미지 배치'
    },

    // Modern Techniques
    {
      category: 'modern',
      title: '컨테이너 쿼리',
      difficulty: 'advanced',
      description: '컨테이너 크기에 따른 스타일 변경',
      cssCode: `.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  padding: 20px;
  background: white;
  border-radius: 8px;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
  }
  
  .card-image {
    width: 120px;
    height: 120px;
  }
}

@container card (max-width: 399px) {
  .card-image {
    width: 100%;
    height: 200px;
  }
}`,
      htmlCode: `<div class="card-container">
  <div class="card">
    <img class="card-image" src="menu.jpg" alt="메뉴">
    <div class="card-content">
      <h3>오늘의 추천</h3>
      <p>신선한 재료로 만든 특별한 메뉴</p>
    </div>
  </div>
</div>`,
      useCase: '반응형 컴포넌트, 복잡한 레이아웃'
    },
    {
      category: 'modern',
      title: 'Subgrid',
      difficulty: 'advanced',
      description: '부모 그리드를 상속받는 서브그리드',
      cssCode: `.main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}

.card-image { grid-row: 1; }
.card-content { grid-row: 2; }
.card-actions { grid-row: 3; }`,
      htmlCode: `<div class="main-grid">
  <div class="card">
    <img class="card-image" src="menu1.jpg" alt="메뉴1">
    <div class="card-content">
      <h3>짜장면</h3>
      <p>전통 춘장으로 만든 정통 짜장면</p>
    </div>
    <div class="card-actions">
      <button>주문하기</button>
    </div>
  </div>
  <!-- 더 많은 카드들... -->
</div>`,
      useCase: '복잡한 카드 레이아웃, 정렬이 중요한 그리드'
    }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'flexbox', name: 'Flexbox', icon: '📐' },
    { id: 'grid', name: 'Grid', icon: '⚏' },
    { id: 'position', name: 'Position', icon: '📍' },
    { id: 'float', name: 'Float', icon: '🌊' },
    { id: 'modern', name: '최신 기법', icon: '🚀' }
  ];

  const difficulties = [
    { id: 'beginner', name: '초급', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: '중급', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'advanced', name: '고급', color: 'bg-red-100 text-red-800' }
  ];

  const filteredTechniques = layoutTechniques.filter(technique => {
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
              <span className="text-secondary-700">CSS 레이아웃 마스터하기</span>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">
                🎨 CSS 레이아웃 마스터하기
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                Flexbox, Grid부터 최신 기법까지 모든 레이아웃을 마스터하세요
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  4.8점 (2,156개 평가)
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {layoutTechniques.length}개 기법
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
                placeholder="레이아웃 기법 검색..."
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

        {/* Layout Techniques */}
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
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === technique.category)?.icon}
                    </Badge>
                  </div>
                  <p className="text-secondary-600 mb-2">{technique.description}</p>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {technique.useCase}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="css" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="css">CSS</TabsTrigger>
                      <TabsTrigger value="html">HTML</TabsTrigger>
                      <TabsTrigger value="preview">미리보기</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="css" className="mt-4">
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-secondary-700">
                            CSS 코드:
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
                    
                    <TabsContent value="preview" className="mt-4">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-secondary-100 px-4 py-2 text-sm text-secondary-600 border-b flex items-center gap-2">
                          <Monitor className="w-4 h-4" />
                          미리보기
                        </div>
                        <div className="bg-white p-6 min-h-[200px] flex items-center justify-center">
                          <div className="text-secondary-500 text-center">
                            <div className="text-4xl mb-2">🎨</div>
                            <p>실제 브라우저에서 확인하세요</p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-2"
                              onClick={() => {
                                const fullCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    ${technique.cssCode}
  </style>
</head>
<body>
  ${technique.htmlCode}
</body>
</html>`;
                                const blob = new Blob([fullCode], { type: 'text/html' });
                                const url = URL.createObjectURL(blob);
                                window.open(url, '_blank');
                              }}
                            >
                              새 창에서 보기
                            </Button>
                          </div>
                        </div>
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

        {/* CSS Layout Best Practices */}
        <section className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🎯 CSS 레이아웃 모범 사례</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">✅ 권장 사항</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• 모던 브라우저에서는 Flexbox와 Grid를 우선 사용</li>
                    <li>• 1차원 레이아웃은 Flexbox, 2차원은 Grid 사용</li>
                    <li>• 모바일 퍼스트 디자인을 고려한 반응형 레이아웃</li>
                    <li>• 시맨틱 HTML과 함께 레이아웃 구성</li>
                    <li>• 접근성을 고려한 키보드 탐색 가능한 레이아웃</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">❌ 피해야 할 것</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• 테이블을 레이아웃 용도로 사용</li>
                    <li>• 과도한 Float 사용 (레거시 코드가 아닌 경우)</li>
                    <li>• 고정 크기만 사용하는 비반응형 레이아웃</li>
                    <li>• 불필요한 wrapper div 남용</li>
                    <li>• 인라인 스타일로 레이아웃 설정</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Reference */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>📋 빠른 참조</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Flexbox 속성</h4>
                  <div className="space-y-1 text-sm text-secondary-600">
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">display: flex</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">flex-direction</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">justify-content</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">align-items</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">flex-wrap</code></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Grid 속성</h4>
                  <div className="space-y-1 text-sm text-secondary-600">
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">display: grid</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">grid-template-columns</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">grid-template-rows</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">grid-template-areas</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">gap</code></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Position 값</h4>
                  <div className="space-y-1 text-sm text-secondary-600">
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">static</code> (기본값)</div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">relative</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">absolute</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">fixed</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">sticky</code></div>
                  </div>
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
                  <Link href="/guide/html-tags">
                    <div>
                      <div className="font-medium">HTML 태그</div>
                      <div className="text-sm text-secondary-600">레이아웃을 위한 HTML 구조</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/responsive">
                    <div>
                      <div className="font-medium">반응형 디자인</div>
                      <div className="text-sm text-secondary-600">다양한 기기에 맞는 레이아웃</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/learning/css">
                    <div>
                      <div className="font-medium">CSS 실습</div>
                      <div className="text-sm text-secondary-600">직접 만들어보기</div>
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

export default CSSLayoutGuide; 