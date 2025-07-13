'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Building, 
  CheckCircle, 
  AlertCircle,
  Home,
  Menu,
  Image,
  FileText,
  Users,
  Phone,
  ChevronRight,
  Code,
  Eye,
  Lightbulb,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import CheckList from '@/components/CheckList';

const htmlSteps = [
  {
    id: 'foundation',
    title: '기초 구조 설계',
    description: '건물의 기본 골격을 설계합니다',
    icon: Building,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    buildingAnalogy: '🏗️ 건물 기초 공사 & 기둥 세우기'
  },
  {
    id: 'sections',
    title: '섹션 구조 설계',
    description: '각 층별 공간을 구분합니다',
    icon: Home,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    buildingAnalogy: '🏠 각 층별 공간 분할 & 방 배치'
  },
  {
    id: 'navigation',
    title: '네비게이션 설계',
    description: '건물 내 이동 경로를 설계합니다',
    icon: Menu,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    buildingAnalogy: '🚪 복도, 계단, 엘리베이터 설계'
  },
  {
    id: 'content',
    title: '콘텐츠 구조 설계',
    description: '각 공간의 내용물을 배치합니다',
    icon: FileText,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    buildingAnalogy: '🪑 각 방의 가구와 설비 배치'
  },
  {
    id: 'semantic',
    title: '시맨틱 구조 완성',
    description: '의미있는 구조로 최적화합니다',
    icon: Code,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    buildingAnalogy: '📋 건축 설계도 최종 검토 & 승인'
  }
];

export default function HTMLStructure() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleStepCompletion = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const nextStep = () => {
    if (activeStep < htmlSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const currentStep = htmlSteps[activeStep];
  const Icon = currentStep.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-red-600 hover:text-red-700"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>돌아가기</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  2단계: HTML 구조 설계 (건물 골조 시공)
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="progress-bar w-32">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((activeStep + 1) / htmlSteps.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {activeStep + 1}/{htmlSteps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <div className="sidebar">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                🏗️ HTML 구조 설계 단계
              </h3>
              
              <div className="space-y-3">
                {htmlSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = completedSteps.includes(step.id);
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${step.bgColor}`}>
                        <StepIcon className={`h-4 w-4 ${step.color}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{step.title}</span>
                          {isCompleted && (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {step.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {step.buildingAnalogy}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 건물 구조 시각화 */}
              <div className="mt-8 p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">🏢 신승반점 건물 구조</h4>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 bg-white rounded border-l-4 border-red-500">
                    &lt;header&gt; 🏢 상호명 (로고)
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-blue-500">
                    &lt;nav&gt; 🧭 메뉴 (네비게이션)
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-green-500">
                    &lt;main&gt; 🍜 메인 홀 (콘텐츠)
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-purple-500">
                    &lt;aside&gt; 📞 부대시설 (사이드바)
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-gray-500">
                    &lt;footer&gt; 🏪 1층 정보 (푸터)
                  </div>
                </div>
              </div>

              {/* 전체 진행률 */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">전체 진행률</h4>
                <div className="progress-bar">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedSteps.length / htmlSteps.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-blue-800 mt-2">
                  {completedSteps.length}/{htmlSteps.length} 단계 완료
                </p>
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 현재 단계 헤더 */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${currentStep.bgColor}`}>
                    <Icon className={`h-6 w-6 ${currentStep.color}`} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {currentStep.title}
                    </h1>
                    <p className="text-gray-600 mt-1">
                      {currentStep.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {currentStep.buildingAnalogy}
                    </p>
                  </div>
                </div>
              </div>

              {/* 단계별 상세 내용 */}
              <div className="space-y-6">
                {activeStep === 0 && <FoundationStep onComplete={() => handleStepCompletion('foundation')} />}
                {activeStep === 1 && <SectionsStep onComplete={() => handleStepCompletion('sections')} />}
                {activeStep === 2 && <NavigationStep onComplete={() => handleStepCompletion('navigation')} />}
                {activeStep === 3 && <ContentStep onComplete={() => handleStepCompletion('content')} />}
                {activeStep === 4 && <SemanticStep onComplete={() => handleStepCompletion('semantic')} />}
              </div>

              {/* 네비게이션 */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Link
                  href="/steps/1-environment"
                  className="btn btn-outline"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전 단계
                </Link>

                <div className="flex space-x-2">
                  {htmlSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      title={`${index + 1}단계로 이동`}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeStep 
                          ? 'bg-blue-600' 
                          : index < activeStep 
                            ? 'bg-green-600' 
                            : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {activeStep === htmlSteps.length - 1 ? (
                  <Link 
                    href="/steps/3-css"
                    className="btn btn-primary"
                  >
                    다음 단계로
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                ) : (
                  <button
                    onClick={nextStep}
                    className="btn btn-primary"
                  >
                    다음 단계
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 1. 기초 구조 설계 단계
function FoundationStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Building className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">HTML = 건물의 뼈대와 기본 구조</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 HTML이 필요한가?</strong>
              <p className="mt-2">
                건물을 짓기 위해서는 먼저 기초 공사와 기둥을 세워야 하듯, 
                웹사이트도 HTML로 기본 구조를 만들어야 합니다. 
                HTML은 콘텐츠의 의미와 구조를 정의하는 언어입니다.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ HTML 없이 웹사이트?</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• 텍스트만 나열된 상태</li>
                <li>• 의미 구분이 불가능</li>
                <li>• 검색엔진이 이해 못함</li>
                <li>• 디자인 적용 불가</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ HTML로 구조화된 웹사이트</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 명확한 섹션 구분</li>
                <li>• 의미있는 콘텐츠 구조</li>
                <li>• SEO 최적화 가능</li>
                <li>• 접근성 향상</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">🏗️ 신승반점 기본 구조 설계</h4>
            <p className="text-gray-600">
              실제 신승반점 건물처럼 웹사이트도 층별로 구성해보겠습니다:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3">🏢 신승반점 디지털 본점 구조</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-red-600">🏢</span>
                  <span><strong>Header:</strong> 상호명, 로고, 연락처</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">🧭</span>
                  <span><strong>Navigation:</strong> 메뉴, 이동 경로</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">🍜</span>
                  <span><strong>Main:</strong> 주요 콘텐츠 (메뉴, 소개 등)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-600">📞</span>
                  <span><strong>Aside:</strong> 부가 정보 (위치, 영업시간 등)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">🏪</span>
                  <span><strong>Footer:</strong> 사업자 정보, 저작권</span>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 기본 HTML 구조 생성하기</h4>
            
            <div className="space-y-4">
              <div className="alert alert-warning">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <div>
                  <strong>AI 프롬프터 가이드:</strong>
                  <p className="mt-2 text-sm">
                    Cursor AI에게 이렇게 요청해보세요:
                  </p>
                  <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                    <MessageSquare className="h-4 w-4 inline mr-1" />
                    "신승반점 중식당 홈페이지의 기본 HTML 구조를 만들어줘. 
                    header, nav, main, aside, footer 요소를 사용해서 
                    시맨틱하게 구성해주고, 각 섹션에 주석으로 설명도 달아줘."
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- 🔧 기본 설정 (건물 도면 정보) -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>신승반점 - 인천 차이나타운 짜장면 원조 맛집</title>
    <meta name="description" content="1905년부터 이어진 전통의 맛, 신승반점에서 정통 짜장면을 만나보세요.">
    <meta name="keywords" content="신승반점, 짜장면, 인천 차이나타운, 중식당, 맛집">
    <meta name="author" content="신승반점">
    
    <!-- 🌐 소셜 미디어 공유 설정 -->
    <meta property="og:title" content="신승반점 - 인천 차이나타운 짜장면 원조 맛집">
    <meta property="og:description" content="1905년부터 이어진 전통의 맛을 경험해보세요">
    <meta property="og:image" content="/images/shinseung-logo.jpg">
    <meta property="og:url" content="https://shinseung.com">
    
    <!-- 📱 모바일 앱 설정 -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="신승반점">
    
    <!-- 🎨 파비콘 설정 -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
<body>
    <!-- 🏢 상단 헤더 - 상호명 및 로고 (건물 간판) -->
    <header role="banner">
        <div class="header-top">
            <!-- 로고 및 상호명 -->
            <div class="logo-section">
                <img src="/images/shinseung-logo.png" alt="신승반점 로고" class="logo">
                <h1>신승반점</h1>
                <p class="tagline">인천 차이나타운 짜장면 원조 맛집</p>
            </div>
            
            <!-- 상단 연락처 정보 -->
            <div class="contact-info">
                <span class="phone">📞 032-123-4567</span>
                <span class="hours">🕒 10:00 - 21:00</span>
                <span class="location">📍 인천 중구 차이나타운로 123</span>
            </div>
        </div>
        
        <!-- 메인 네비게이션 -->
        <nav role="navigation" aria-label="메인 메뉴">
            <ul class="main-nav">
                <li><a href="#home" aria-current="page">홈</a></li>
                <li><a href="#menu">메뉴</a></li>
                <li><a href="#about">소개</a></li>
                <li><a href="#gallery">갤러리</a></li>
                <li><a href="#reviews">리뷰</a></li>
                <li><a href="#location">위치</a></li>
                <li><a href="#contact">연락처</a></li>
            </ul>
            
            <!-- 모바일 햄버거 메뉴 -->
            <button class="mobile-menu-toggle" aria-label="모바일 메뉴 열기">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>

    <!-- 🍜 메인 콘텐츠 영역 (식당 홀) -->
    <main role="main">
        <!-- 🌟 히어로 섹션 - 메인 대문 -->
        <section id="home" class="hero-section">
            <div class="hero-content">
                <h2>신승반점에 오신 것을 환영합니다</h2>
                <p class="hero-subtitle">1905년부터 이어진 120년 전통의 맛을 경험해보세요</p>
                <div class="hero-buttons">
                    <a href="#menu" class="btn-primary">메뉴 보기</a>
                    <a href="tel:032-123-4567" class="btn-secondary">전화 주문</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="/images/hero-jjajangmyeon.jpg" alt="신승반점 대표 짜장면" loading="lazy">
            </div>
        </section>

        <!-- 🍽️ 메뉴 섹션 -->
        <section id="menu" class="menu-section">
            <div class="section-header">
                <h2>대표 메뉴</h2>
                <p>정성으로 만든 전통 중식 요리</p>
            </div>
            
            <div class="menu-categories">
                <!-- 면류 -->
                <div class="menu-category">
                    <h3>🍜 면류</h3>
                    <ul class="menu-items">
                        <li class="menu-item">
                            <img src="/images/jjajangmyeon.jpg" alt="짜장면">
                            <div class="menu-details">
                                <h4>짜장면</h4>
                                <p>신승반점 대표 메뉴, 진한 춘장의 깊은 맛</p>
                                <span class="price">8,000원</span>
                            </div>
                        </li>
                        <li class="menu-item">
                            <img src="/images/jjamppong.jpg" alt="짬뽕">
                            <div class="menu-details">
                                <h4>짬뽕</h4>
                                <p>얼큰하고 시원한 국물의 해물 짬뽕</p>
                                <span class="price">9,000원</span>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <!-- 요리류 -->
                <div class="menu-category">
                    <h3>🥘 요리류</h3>
                    <ul class="menu-items">
                        <li class="menu-item">
                            <img src="/images/tangsuyuk.jpg" alt="탕수육">
                            <div class="menu-details">
                                <h4>탕수육</h4>
                                <p>바삭한 튀김과 새콤달콤한 소스</p>
                                <span class="price">25,000원</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 📖 소개 섹션 -->
        <section id="about" class="about-section">
            <div class="about-content">
                <h2>신승반점 소개</h2>
                <div class="about-story">
                    <h3>120년 전통의 맛</h3>
                    <p>1905년 인천 차이나타운에서 시작된 신승반점은 4대째 이어져 내려오는 
                    전통 중식당입니다. 변하지 않는 맛으로 많은 사람들에게 사랑받고 있습니다.</p>
                    
                    <h3>정성스러운 요리</h3>
                    <p>매일 새벽 직접 만드는 수제 면과 엄선된 재료로만 만든 요리를 
                    제공합니다. 건강하고 맛있는 중식 요리를 경험해보세요.</p>
                </div>
                
                <div class="about-awards">
                    <h3>수상 내역</h3>
                    <ul>
                        <li>🏆 인천시 우수 음식점 지정 (2020)</li>
                        <li>🥇 차이나타운 대표 맛집 선정 (2019)</li>
                        <li>⭐ 미슐랭 가이드 추천 (2018)</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 📸 갤러리 섹션 -->
        <section id="gallery" class="gallery-section">
            <h2>갤러리</h2>
            <div class="gallery-grid">
                <img src="/images/gallery-1.jpg" alt="신승반점 외관" loading="lazy">
                <img src="/images/gallery-2.jpg" alt="내부 전경" loading="lazy">
                <img src="/images/gallery-3.jpg" alt="요리 과정" loading="lazy">
                <img src="/images/gallery-4.jpg" alt="완성된 요리" loading="lazy">
            </div>
        </section>

        <!-- ⭐ 리뷰 섹션 -->
        <section id="reviews" class="reviews-section">
            <h2>고객 리뷰</h2>
            <div class="reviews-container">
                <div class="review-item">
                    <div class="review-rating">⭐⭐⭐⭐⭐</div>
                    <p>"정말 맛있어요! 어릴 적 할머니가 해주시던 짜장면 맛이 나네요."</p>
                    <span class="reviewer">- 김○○님</span>
                </div>
                <div class="review-item">
                    <div class="review-rating">⭐⭐⭐⭐⭐</div>
                    <p>"120년 전통이 느껴지는 깊은 맛. 인천 가면 꼭 들르는 곳!"</p>
                    <span class="reviewer">- 박○○님</span>
                </div>
            </div>
        </section>
    </main>

    <!-- 📞 사이드바 - 부가 정보 (접수 및 안내) -->
    <aside role="complementary" class="sidebar">
        <div class="sidebar-widget">
            <h3>🕒 영업 정보</h3>
            <div class="business-hours">
                <p><strong>영업시간:</strong> 10:00 - 21:00</p>
                <p><strong>브레이크타임:</strong> 15:00 - 17:00</p>
                <p><strong>정기휴무:</strong> 매주 월요일</p>
            </div>
        </div>
        
        <div class="sidebar-widget">
            <h3>📞 연락처</h3>
            <div class="contact-details">
                <p><strong>전화:</strong> <a href="tel:032-123-4567">032-123-4567</a></p>
                <p><strong>주소:</strong> 인천 중구 차이나타운로 123</p>
                <p><strong>이메일:</strong> <a href="mailto:info@shinseung.com">info@shinseung.com</a></p>
            </div>
        </div>
        
        <div class="sidebar-widget">
            <h3>🚗 교통 정보</h3>
            <div class="transportation">
                <p><strong>지하철:</strong> 1호선 인천역 도보 5분</p>
                <p><strong>버스:</strong> 12, 24, 45번 차이나타운 정류장</p>
                <p><strong>주차:</strong> 건물 지하 1층 (무료)</p>
            </div>
        </div>
    </aside>

    <!-- 📍 위치 섹션 -->
    <section id="location" class="location-section">
        <h2>찾아오시는 길</h2>
        <div class="location-content">
            <div class="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.8" 
                    width="100%" 
                    height="300" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy"
                    title="신승반점 위치">
                </iframe>
            </div>
            <div class="location-details">
                <address>
                    <strong>신승반점</strong><br>
                    인천광역시 중구 차이나타운로 123<br>
                    (우편번호: 22314)
                </address>
            </div>
        </div>
    </section>

    <!-- 📞 연락처 섹션 -->
    <section id="contact" class="contact-section">
        <h2>연락처 및 예약</h2>
        <div class="contact-content">
            <div class="contact-form">
                <h3>예약 문의</h3>
                <form>
                    <div class="form-group">
                        <label for="name">성함 *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">연락처 *</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="date">예약 날짜 *</label>
                        <input type="date" id="date" name="date" required>
                    </div>
                    <div class="form-group">
                        <label for="people">인원수 *</label>
                        <select id="people" name="people" required>
                            <option value="">선택하세요</option>
                            <option value="1">1명</option>
                            <option value="2">2명</option>
                            <option value="3">3명</option>
                            <option value="4">4명</option>
                            <option value="5">5명 이상</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">특별 요청사항</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn-primary">예약 신청</button>
                </form>
            </div>
        </div>
    </section>

    <!-- 🏪 하단 푸터 - 회사 정보 (건물 1층 정보) -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <h3>신승반점</h3>
                <p>120년 전통의 맛을 이어가는 인천 차이나타운 대표 중식당</p>
                <div class="social-links">
                    <a href="#" aria-label="페이스북">📘</a>
                    <a href="#" aria-label="인스타그램">📷</a>
                    <a href="#" aria-label="네이버 블로그">📝</a>
                </div>
            </div>
            
            <div class="footer-section">
                <h3>영업 정보</h3>
                <p>영업시간: 10:00 - 21:00</p>
                <p>브레이크타임: 15:00 - 17:00</p>
                <p>정기휴무: 매주 월요일</p>
            </div>
            
            <div class="footer-section">
                <h3>연락처</h3>
                <p>전화: 032-123-4567</p>
                <p>주소: 인천 중구 차이나타운로 123</p>
                <p>이메일: info@shinseung.com</p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2024 신승반점. 모든 권리 보유.</p>
            <p>사업자등록번호: 123-45-67890 | 대표자: 홍길동</p>
            <p>통신판매업신고: 2024-인천중구-0123</p>
        </div>
    </footer>

    <!-- 🚀 페이지 맨 위로 가기 버튼 -->
    <button id="scroll-to-top" class="scroll-to-top" aria-label="맨 위로 가기">
        ↑
    </button>

    <!-- 📱 모바일 메뉴 오버레이 -->
    <div class="mobile-menu-overlay"></div>
</body>
</html>`}
                language="html"
                filename="index.html"
              />
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="HTML 기초 구조 체크리스트"
        items={[
          {
            id: 'html-structure',
            text: '기본 HTML 구조 이해하기',
            description: 'DOCTYPE, html, head, body 요소의 역할 이해',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'semantic-elements',
            text: '시맨틱 요소 학습하기',
            description: 'header, nav, main, aside, footer 요소 이해',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'meta-tags',
            text: 'meta 태그 설정하기',
            description: 'charset, viewport, description 설정',
            difficulty: 'medium',
            estimatedTime: '10분'
          },
          {
            id: 'basic-html-create',
            text: '신승반점 기본 HTML 파일 생성',
            description: '위 코드를 참고해서 index.html 파일 생성',
            difficulty: 'easy',
            estimatedTime: '20분'
          }
        ]}
        storageKey="html-foundation-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 2. 섹션 구조 설계 단계
function SectionsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Home className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold">섹션 = 건물의 각 층별 공간 분할</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 섹션 구분이 필요한가?</strong>
              <p className="mt-2">
                아파트에서 거실, 방, 부엌을 구분하듯, 웹사이트도 각 콘텐츠 영역을 
                명확하게 구분해야 합니다. 이렇게 하면 사용자가 쉽게 정보를 찾고, 
                검색엔진도 콘텐츠를 정확하게 이해할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">🏠 신승반점 공간 배치도</h4>
            
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-red-500">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">🏢</span>
                      <strong>Hero Section</strong>
                    </div>
                    <p className="text-sm text-gray-600">메인 대문 - 첫인상을 결정하는 공간</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600">🍜</span>
                      <strong>Menu Section</strong>
                    </div>
                    <p className="text-sm text-gray-600">메뉴 홀 - 대표 요리를 소개하는 공간</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border-l-4 border-green-500">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">📖</span>
                      <strong>About Section</strong>
                    </div>
                    <p className="text-sm text-gray-600">역사관 - 120년 전통을 소개하는 공간</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">📍</span>
                      <strong>Location Section</strong>
                    </div>
                    <p className="text-sm text-gray-600">안내소 - 위치와 찾아오는 길</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-600">📞</span>
                      <strong>Contact Section</strong>
                    </div>
                    <p className="text-sm text-gray-600">접수실 - 예약 및 문의 공간</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border-l-4 border-gray-500">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">🏪</span>
                      <strong>Footer Section</strong>
                    </div>
                    <p className="text-sm text-gray-600">사업자 정보 - 공식 정보 공간</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지의 main 섹션을 여러 개의 section으로 나누어줘. 
                  hero, menu, about, location, contact 섹션을 만들고, 
                  각각에 id를 부여해서 네비게이션과 연결될 수 있도록 해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 섹션 구조 코드 생성하기</h4>

            <CodeBlock
              code={`<main>
    <!-- 🏢 Hero Section - 메인 대문 -->
    <section id="hero" class="hero-section">
        <div class="hero-content">
            <h1>신승반점</h1>
            <p class="tagline">1905년부터 이어진 전통의 맛</p>
            <p class="subtitle">
            인천 차이나타운에서 만나는 정통 중식의 진수<br>
            4대째 이어지는 장인정신으로 만든 진짜 맛
        </p>
            <button class="cta-button">메뉴 보러가기</button>
        </div>
    </section>

    <!-- 🍜 Menu Section - 메뉴 홀 -->
    <section id="menu" class="menu-section">
        <h2>대표 메뉴</h2>
        <div class="menu-grid">
            <div class="menu-item">
                <img src="images/jjajangmyeon.jpg" alt="짜장면">
                <h3>짜장면</h3>
                <p>전통 방식으로 만든 진짜 짜장면</p>
                <span class="price">8,000원</span>
            </div>
            <div class="menu-item">
                <img src="images/jjamppong.jpg" alt="짬뽕">
                <h3>짬뽕</h3>
                <p>칼칼하고 시원한 해물 짬뽕</p>
                <span class="price">9,000원</span>
            </div>
            <div class="menu-item">
                <img src="images/tangsuyuk.jpg" alt="탕수육">
                <h3>탕수육</h3>
                <p>바삭한 겉면, 부드러운 속살</p>
                <span class="price">25,000원</span>
            </div>
        </div>
    </section>

    <!-- 📖 About Section - 역사관 -->
    <section id="about" class="about-section">
        <h2>신승반점 이야기</h2>
        <div class="about-content">
            <div class="history">
                <h3>120년의 전통</h3>
                <p>1905년 인천 차이나타운에서 시작된 신승반점은 
                   4대에 걸쳐 전통의 맛을 이어오고 있습니다.</p>
            </div>
            <div class="philosophy">
                <h3>우리의 철학</h3>
                <p>정성스럽게 만든 음식으로 고객의 마음을 따뜻하게 만드는 것, 
                그것이 바로 신승반점의 철학입니다.</p>
            </div>
        </div>
    </section>

    <!-- 📍 Location Section - 안내소 -->
    <section id="location" class="location-section">
        <h2>찾아오시는 길</h2>
        <div class="location-content">
            <div class="address">
                <h3>주소</h3>
                <p>인천광역시 중구 차이나타운로 123</p>
            </div>
            <div class="hours">
                <h3>영업시간</h3>
                <p>매일 10:00 - 21:00</p>
                <p>연중무휴</p>
            </div>
            <div class="map">
                <!-- 지도 영역 -->
                <div class="map-placeholder">
                    <p>지도가 여기에 표시됩니다</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 📞 Contact Section - 접수실 -->
    <section id="contact" class="contact-section">
        <h2>예약 및 문의</h2>
        <div class="contact-content">
            <div class="contact-info">
                <h3>연락처 정보</h3>
                <div class="contact-details">
                    <div class="contact-item">
                        <strong>전화번호</strong>
                        <a href="tel:032-123-4567">032-123-4567</a>
                    </div>
                    <div class="contact-item">
                        <strong>휴대전화</strong>
                        <a href="tel:010-1234-5678">010-1234-5678</a>
                    </div>
                    <div class="contact-item">
                        <strong>이메일</strong>
                        <a href="mailto:info@shinseung.com">info@shinseung.com</a>
                    </div>
                    <div class="contact-item">
                        <strong>카카오톡</strong>
                        <a href="https://open.kakao.com/o/shinseung" target="_blank">
                            신승반점 오픈채팅
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <h3>예약 문의</h3>
                <form class="reservation-form" action="/submit-reservation" method="POST">
                    <div class="form-group">
                        <label for="name">이름 *</label>
                        <input type="text" id="name" name="name" required 
                               placeholder="성함을 입력해주세요">
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">연락처 *</label>
                        <input type="tel" id="phone" name="phone" required 
                               placeholder="010-1234-5678">
                    </div>
                    
                    <div class="form-group">
                        <label for="date">예약 날짜</label>
                        <input type="date" id="date" name="date">
                    </div>
                    
                    <div class="form-group">
                        <label for="time">예약 시간</label>
                        <select id="time" name="time">
                            <option value="">시간 선택</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="guests">인원수</label>
                        <select id="guests" name="guests">
                            <option value="">인원 선택</option>
                            <option value="1">1명</option>
                            <option value="2">2명</option>
                            <option value="3">3명</option>
                            <option value="4">4명</option>
                            <option value="5+">5명 이상</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">요청사항</label>
                        <textarea id="message" name="message" rows="4" 
                                  placeholder="특별한 요청이나 문의사항이 있으시면 적어주세요"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">예약 문의하기</button>
                </form>
            </div>
        </div>
    </section>
</main>`}
              language="html"
              filename="섹션 구조 확장"
            />
          </div>
        </div>
      </div>

      <CheckList 
        title="섹션 구조 설계 체크리스트"
        items={[
          {
            id: 'section-planning',
            text: '섹션 구조 계획 수립',
            description: '신승반점 웹사이트에 필요한 섹션들을 계획',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'semantic-sections',
            text: '시맨틱 섹션 요소 사용',
            description: 'section 태그를 사용하여 의미있는 구조 생성',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'section-ids',
            text: '섹션 ID 부여하기',
            description: '각 섹션에 고유한 ID를 부여하여 네비게이션 연결',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'content-structure',
            text: '콘텐츠 구조 설계',
            description: '각 섹션 내부의 콘텐츠 구조를 계층적으로 구성',
            difficulty: 'medium',
            estimatedTime: '25분'
          }
        ]}
        storageKey="html-sections-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 3. 네비게이션 설계 단계
function NavigationStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Menu className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold">네비게이션 = 건물의 복도와 안내 시스템</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 네비게이션이 중요한가?</strong>
              <p className="mt-2">
                대형 건물에서 층별 안내판과 복도가 없다면 길을 잃게 되듯, 
                웹사이트도 명확한 네비게이션이 있어야 사용자가 원하는 정보를 
                쉽게 찾을 수 있습니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">🧭 네비게이션 설계 원칙</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">❌ 나쁜 네비게이션</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 메뉴가 너무 많아 혼란스러움</li>
                  <li>• 현재 위치를 알 수 없음</li>
                  <li>• 모바일에서 사용하기 어려움</li>
                  <li>• 일관성이 없는 디자인</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">✅ 좋은 네비게이션</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 간단하고 직관적인 메뉴</li>
                  <li>• 현재 위치 표시</li>
                  <li>• 반응형 디자인</li>
                  <li>• 일관된 스타일</li>
                </ul>
              </div>
            </div>

            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지의 네비게이션을 만들어줘. 
                  홈, 메뉴, 소개, 위치, 연락처 메뉴를 만들고, 
                  각각을 해당 섹션과 연결하는 앵커 링크를 만들어줘. 
                  모바일에서도 사용하기 쉽도록 햄버거 메뉴도 고려해서 만들어줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 네비게이션 구조 코드</h4>

            <CodeBlock
              code={`<!-- 🧭 Main Navigation - 건물 안내 시스템 -->
<nav class="main-navigation">
    <div class="nav-container">
        <!-- 로고 영역 -->
        <div class="nav-logo">
            <a href="#home">
                <img src="images/logo.png" alt="신승반점 로고">
                <span>신승반점</span>
            </a>
        </div>

        <!-- 데스크톱 메뉴 -->
        <ul class="nav-menu">
            <li><a href="#home" class="nav-link">홈</a></li>
            <li><a href="#menu" class="nav-link">메뉴</a></li>
            <li><a href="#about" class="nav-link">소개</a></li>
            <li><a href="#location" class="nav-link">위치</a></li>
            <li><a href="#contact" class="nav-link">연락처</a></li>
        </ul>

        <!-- 모바일 햄버거 메뉴 버튼 -->
        <button class="mobile-menu-toggle" aria-label="메뉴 열기">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
    </div>

    <!-- 모바일 메뉴 -->
    <div class="mobile-menu">
        <ul class="mobile-nav-menu">
            <li><a href="#home" class="mobile-nav-link">🏠 홈</a></li>
            <li><a href="#menu" class="mobile-nav-link">🍜 메뉴</a></li>
            <li><a href="#about" class="mobile-nav-link">📖 소개</a></li>
            <li><a href="#location" class="mobile-nav-link">📍 위치</a></li>
            <li><a href="#contact" class="mobile-nav-link">📞 연락처</a></li>
        </ul>
    </div>
</nav>

<!-- 🔝 페이지 상단으로 이동 버튼 -->
<button class="scroll-to-top" aria-label="페이지 상단으로 이동">
    <span>↑</span>
</button>

<!-- 📱 빠른 실행 버튼 (모바일 최적화) -->
<div class="quick-actions">
    <a href="tel:032-123-4567" class="quick-action phone" aria-label="전화 걸기">
        <span>📞</span>
    </a>
    <a href="#location" class="quick-action location" aria-label="위치 보기">
        <span>📍</span>
    </a>
    <a href="#menu" class="quick-action menu" aria-label="메뉴 보기">
        <span>🍜</span>
    </a>
</div>`}
              language="html"
              filename="네비게이션 구조"
            />

            <div className="alert alert-success">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <strong>네비게이션 설계 완료!</strong>
                <p className="mt-2">
                  사용자가 쉽게 원하는 정보를 찾을 수 있는 직관적인 네비게이션이 완성되었습니다.
                  모바일에서도 사용하기 편리하도록 햄버거 메뉴와 빠른 실행 버튼도 추가했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="네비게이션 설계 체크리스트"
        items={[
          {
            id: 'nav-structure',
            text: '네비게이션 구조 설계',
            description: 'nav 태그와 ul, li 구조를 사용한 의미있는 메뉴 구성',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'anchor-links',
            text: '앵커 링크 연결',
            description: '각 메뉴를 해당 섹션과 연결하는 href 속성 설정',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'mobile-menu',
            text: '모바일 메뉴 구조',
            description: '햄버거 메뉴와 모바일 친화적인 네비게이션 구조',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'accessibility',
            text: '접근성 고려',
            description: 'aria-label, 키보드 접근성 등 접근성 요소 추가',
            difficulty: 'medium',
            estimatedTime: '15분'
          }
        ]}
        storageKey="html-navigation-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 4. 콘텐츠 구조 설계 단계
function ContentStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="h-5 w-5 text-orange-600" />
            <h3 className="text-lg font-semibold">콘텐츠 구조 = 각 방의 가구와 설비 배치</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 콘텐츠 구조가 중요한가?</strong>
              <p className="mt-2">
                방에 가구를 배치할 때 동선을 고려하듯, 웹사이트 콘텐츠도 
                사용자가 정보를 순서대로 이해할 수 있도록 구조화해야 합니다. 
                제목, 본문, 이미지, 링크 등을 적절히 배치하는 것이 중요합니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">🪑 콘텐츠 배치 원칙</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">📝 텍스트 콘텐츠</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 제목 계층 구조 (h1-h6)</li>
                  <li>• 읽기 쉬운 문단 구성</li>
                  <li>• 중요한 내용 강조</li>
                  <li>• 목록을 통한 정보 정리</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">🖼️ 이미지 콘텐츠</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 의미있는 alt 속성</li>
                  <li>• 적절한 크기 설정</li>
                  <li>• 로딩 최적화</li>
                  <li>• 반응형 이미지</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">🔗 상호작용 요소</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• 명확한 링크 텍스트</li>
                  <li>• 버튼 역할 구분</li>
                  <li>• 폼 입력 필드</li>
                  <li>• 접근성 고려</li>
                </ul>
              </div>
            </div>

            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지의 각 섹션에 실제 콘텐츠를 채워넣어줘. 
                  제목 계층을 올바르게 사용하고, 이미지에는 alt 속성을 넣고, 
                  연락처 정보는 실제 클릭 가능한 링크로 만들어줘. 
                  또한 예약 문의 폼도 만들어줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 상세 콘텐츠 구조</h4>

            <CodeBlock
              code={`<!-- 🏢 Hero Section - 완전한 콘텐츠 -->
<section id="hero" class="hero-section">
    <div class="hero-background">
        <img src="images/hero-bg.jpg" alt="신승반점 외관" class="hero-bg-image">
    </div>
    <div class="hero-content">
        <h1 class="hero-title">신승반점</h1>
        <p class="hero-tagline">1905년부터 이어진 전통의 맛</p>
        <p class="hero-subtitle">
            인천 차이나타운에서 만나는 정통 중식의 진수<br>
            4대째 이어지는 장인정신으로 만든 진짜 맛
        </p>
        <div class="hero-actions">
            <a href="#menu" class="btn btn-primary">메뉴 보러가기</a>
            <a href="tel:032-123-4567" class="btn btn-secondary">📞 지금 주문하기</a>
        </div>
    </div>
</section>

<!-- 🍜 Menu Section - 상세 메뉴 -->
<section id="menu" class="menu-section">
    <div class="section-header">
        <h2>대표 메뉴</h2>
        <p>120년 전통의 비법으로 만든 신승반점의 자랑스러운 메뉴들</p>
    </div>
    
    <div class="menu-categories">
        <div class="menu-category">
            <h3>면 요리</h3>
            <div class="menu-items">
                <article class="menu-item">
                    <img src="images/jjajangmyeon.jpg" alt="짜장면" class="menu-image">
                    <div class="menu-info">
                        <h4>짜장면</h4>
                        <p class="menu-description">
                            춘장을 직접 볶아 만든 정통 짜장 소스와 쫄깃한 면발의 완벽한 조화
                        </p>
                        <div class="menu-details">
                            <span class="price">8,000원</span>
                            <span class="cooking-time">⏱️ 8분</span>
                        </div>
                    </div>
                </article>
                
                <article class="menu-item">
                    <img src="images/jjamppong.jpg" alt="짬뽕" class="menu-image">
                    <div class="menu-info">
                        <h4>짬뽕</h4>
                        <p class="menu-description">
                            신선한 해물과 야채가 듬뿍 들어간 칼칼하고 시원한 국물
                        </p>
                        <div class="menu-details">
                            <span class="price">9,000원</span>
                            <span class="cooking-time">⏱️ 10분</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        
        <div class="menu-category">
            <h3>요리</h3>
            <div class="menu-items">
                <article class="menu-item">
                    <img src="images/tangsuyuk.jpg" alt="탕수육" class="menu-image">
                    <div class="menu-info">
                        <h4>탕수육</h4>
                        <p class="menu-description">
                            바삭한 겉면과 부드러운 속살, 새콤달콤한 소스의 환상적인 맛
                        </p>
                        <div class="menu-details">
                            <span class="price">25,000원</span>
                            <span class="serving">👥 2-3인분</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    
    <div class="menu-footer">
        <p class="menu-note">
            * 가격은 변동될 수 있습니다. 정확한 가격은 매장에 문의해주세요.
        </p>
        <a href="#contact" class="btn btn-outline">전체 메뉴 문의하기</a>
    </div>
</section>

<!-- 📞 Contact Section - 예약 폼 -->
<section id="contact" class="contact-section">
    <div class="section-header">
        <h2>예약 및 문의</h2>
        <p>소중한 분들과 함께하는 특별한 시간을 위해 미리 예약해주세요</p>
    </div>
    
    <div class="contact-content">
        <div class="contact-info">
            <h3>연락처 정보</h3>
            <div class="contact-details">
                <div class="contact-item">
                    <strong>전화번호</strong>
                    <a href="tel:032-123-4567">032-123-4567</a>
                </div>
                <div class="contact-item">
                    <strong>휴대전화</strong>
                    <a href="tel:010-1234-5678">010-1234-5678</a>
                </div>
                <div class="contact-item">
                    <strong>이메일</strong>
                    <a href="mailto:info@shinseung.com">info@shinseung.com</a>
                </div>
                <div class="contact-item">
                    <strong>카카오톡</strong>
                    <a href="https://open.kakao.com/o/shinseung" target="_blank">
                        신승반점 오픈채팅
                    </a>
                </div>
            </div>
        </div>
        
        <div class="contact-form">
            <h3>예약 문의</h3>
            <form class="reservation-form" action="/submit" method="POST">
                <fieldset>
                    <legend>예약 정보</legend>
                    
                    <div class="form-group">
                        <label for="name">이름 <span aria-label="필수">*</span></label>
                        <input type="text" id="name" name="name" required 
                               aria-describedby="name-help">
                        <small id="name-help">성함을 정확히 입력해주세요</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">연락처 <span aria-label="필수">*</span></label>
                        <input type="tel" id="phone" name="phone" required 
                               pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                               aria-describedby="phone-help">
                        <small id="phone-help">010-1234-5678 형식으로 입력해주세요</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">요청사항</label>
                        <textarea id="message" name="message" rows="4" 
                                  aria-describedby="message-help"></textarea>
                        <small id="message-help">특별한 요청이나 문의사항을 적어주세요</small>
                    </div>
                </fieldset>
                
                <button type="submit" class="btn btn-primary">예약 문의하기</button>
            </form>
        </div>
    </div>
</section>`}
              language="html"
              filename="상세 콘텐츠 구조"
            />
          </div>
        </div>
      </div>

      <CheckList 
        title="콘텐츠 구조 설계 체크리스트"
        items={[
          {
            id: 'heading-hierarchy',
            text: '제목 계층 구조 설정',
            description: 'h1-h6 태그를 사용한 올바른 제목 계층 구조 생성',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'image-optimization',
            text: '이미지 최적화',
            description: 'img 태그에 alt 속성 추가 및 적절한 크기 설정',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'interactive-elements',
            text: '상호작용 요소 추가',
            description: '전화, 이메일 링크와 예약 폼 등 상호작용 요소 구현',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'content-validation',
            text: '콘텐츠 검증',
            description: '실제 데이터로 콘텐츠 채우기 및 링크 동작 확인',
            difficulty: 'medium',
            estimatedTime: '15분'
          }
        ]}
        storageKey="html-content-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 5. 시맨틱 구조 완성 단계
function SemanticStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Code className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold">시맨틱 구조 = 건축 설계도 최종 검토</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>시맨틱 HTML이란?</strong>
              <p className="mt-2">
                건축 설계도에 각 공간의 용도가 명시되어 있듯, 시맨틱 HTML은 
                각 요소가 무엇을 의미하는지 명확하게 표현합니다. 
                이렇게 하면 검색엔진, 스크린리더, 다른 기기들이 콘텐츠를 
                정확하게 이해할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">🏗️ 시맨틱 요소 최적화</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">❌ 비시맨틱 (의미 없음)</h5>
                <CodeBlock
                  code={`<div class="header">
  <div class="title">신승반점</div>
</div>
<div class="menu">
  <div class="item">홈</div>
  <div class="item">메뉴</div>
</div>
<div class="content">
  <div class="article">내용</div>
</div>`}
                  language="html"
                  filename="잘못된 예시"
                />
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">✅ 시맨틱 (의미 있음)</h5>
                <CodeBlock
                  code={`<header>
  <h1>신승반점</h1>
</header>
<nav>
  <ul>
    <li><a href="#home">홈</a></li>
    <li><a href="#menu">메뉴</a></li>
  </ul>
</nav>
<main>
  <article>내용</article>
</main>`}
                  language="html"
                  filename="올바른 예시"
                />
              </div>
            </div>

            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지의 HTML 구조를 시맨틱하게 최적화해줘. 
                  모든 div를 적절한 시맨틱 요소로 바꾸고, 
                  접근성을 위한 aria 속성도 추가해줘. 
                  SEO 최적화를 위한 meta 태그와 structured data도 넣어줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 완성된 시맨틱 구조</h4>

            <CodeBlock
              code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>신승반점 - 인천 차이나타운 짜장면 원조 맛집</title>
    <meta name="description" content="1905년부터 이어진 전통의 맛, 신승반점에서 정통 짜장면을 만나보세요. 인천 차이나타운 위치, 120년 전통의 중식당.">
    <meta name="keywords" content="신승반점, 짜장면, 짬뽕, 인천, 차이나타운, 중식당, 맛집">
    <meta name="author" content="신승반점">
    
    <!-- Open Graph (소셜 미디어 공유) -->
    <meta property="og:title" content="신승반점 - 인천 차이나타운 짜장면 원조 맛집">
    <meta property="og:description" content="1905년부터 이어진 전통의 맛">
    <meta property="og:image" content="https://shinseung.com/images/og-image.jpg">
    <meta property="og:url" content="https://shinseung.com">
    <meta property="og:type" content="restaurant">
    
    <!-- Structured Data (검색엔진 최적화) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "신승반점",
        "description": "1905년부터 이어진 전통의 맛",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "차이나타운로 123",
            "addressLocality": "인천",
            "addressCountry": "KR"
        },
        "telephone": "032-123-4567",
        "openingHours": "Mo-Su 10:00-21:00",
        "servesCuisine": "중식",
        "priceRange": "$$"
    }
    </script>
</head>
<body>
    <!-- 🏢 사이트 헤더 -->
    <header role="banner">
        <div class="header-content">
            <h1>신승반점</h1>
            <p>인천 차이나타운 짜장면 원조 맛집</p>
        </div>
    </header>

    <!-- 🧭 메인 네비게이션 -->
    <nav role="navigation" aria-label="메인 메뉴">
        <ul>
            <li><a href="#home" aria-current="page">홈</a></li>
            <li><a href="#menu">메뉴</a></li>
            <li><a href="#about">소개</a></li>
            <li><a href="#location">위치</a></li>
            <li><a href="#contact">연락처</a></li>
        </ul>
    </nav>

    <!-- 🍜 메인 콘텐츠 -->
    <main role="main">
        <!-- Hero Section -->
        <section id="home" aria-labelledby="hero-title">
            <h2 id="hero-title" class="visually-hidden">환영합니다</h2>
            <div class="hero-content">
                <p class="hero-tagline">1905년부터 이어진 전통의 맛</p>
                <a href="#menu" class="cta-button">메뉴 보러가기</a>
            </div>
        </section>

        <!-- Menu Section -->
        <section id="menu" aria-labelledby="menu-title">
            <h2 id="menu-title">대표 메뉴</h2>
            <div class="menu-grid">
                <article class="menu-item">
                    <header>
                        <h3>짜장면</h3>
                    </header>
                    <img src="images/jjajangmyeon.jpg" alt="짜장면 사진" loading="lazy">
                    <p>전통 방식으로 만든 진짜 짜장면</p>
                    <footer>
                        <span class="price">8,000원</span>
                    </footer>
                </article>
                
                <article class="menu-item">
                    <header>
                        <h3>짬뽕</h3>
                    </header>
                    <img src="images/jjamppong.jpg" alt="짬뽕 사진" loading="lazy">
                    <p>칼칼하고 시원한 해물 짬뽕</p>
                    <footer>
                        <span class="price">9,000원</span>
                    </footer>
                </article>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" aria-labelledby="about-title">
            <h2 id="about-title">신승반점 이야기</h2>
            <article>
                <h3>120년의 전통</h3>
                <p>1905년 인천 차이나타운에서 시작된 신승반점은 
                   4대에 걸쳐 전통의 맛을 이어오고 있습니다.</p>
            </article>
        </section>

        <!-- Location Section -->
        <section id="location" aria-labelledby="location-title">
            <h2 id="location-title">찾아오시는 길</h2>
            <address>
                <strong>주소:</strong> 인천광역시 중구 차이나타운로 123<br>
                <strong>전화:</strong> <a href="tel:032-123-4567">032-123-4567</a><br>
                <strong>이메일:</strong> <a href="mailto:info@shinseung.com">info@shinseung.com</a>
            </address>
        </section>

        <!-- Contact Section -->
        <section id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title">예약 및 문의</h2>
            <form class="contact-form" action="/submit" method="POST">
                <fieldset>
                    <legend>예약 정보</legend>
                    
                    <div class="form-group">
                        <label for="name">이름 <span aria-label="필수">*</span></label>
                        <input type="text" id="name" name="name" required 
                               aria-describedby="name-help">
                        <small id="name-help">성함을 정확히 입력해주세요</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">연락처 <span aria-label="필수">*</span></label>
                        <input type="tel" id="phone" name="phone" required 
                               pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                               aria-describedby="phone-help">
                        <small id="phone-help">010-1234-5678 형식으로 입력해주세요</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">요청사항</label>
                        <textarea id="message" name="message" rows="4" 
                                  aria-describedby="message-help"></textarea>
                        <small id="message-help">특별한 요청이나 문의사항을 적어주세요</small>
                    </div>
                </fieldset>
                
                <button type="submit" class="btn btn-primary">예약 문의하기</button>
            </form>
        </section>
    </main>

    <!-- 📞 사이드 정보 -->
    <aside role="complementary" aria-labelledby="sidebar-title">
        <h2 id="sidebar-title" class="visually-hidden">부가 정보</h2>
        <section aria-labelledby="hours-title">
            <h3 id="hours-title">영업 시간</h3>
            <time datetime="10:00">오전 10시</time> - 
            <time datetime="21:00">오후 9시</time>
            <p>연중무휴</p>
        </section>
    </aside>

    <!-- 🏪 사이트 푸터 -->
    <footer role="contentinfo">
        <div class="footer-content">
            <p>&copy; 2024 신승반점. 모든 권리 보유.</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>대표: 김신승</p>
        </div>
    </footer>

    <!-- 접근성 개선 -->
    <a href="#main" class="skip-link visually-hidden-focusable">
        메인 콘텐츠로 바로가기
    </a>
</body>
</html>`}
              language="html"
              filename="최종 시맨틱 구조"
            />

            <div className="alert alert-success">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <strong>시맨틱 구조 완성!</strong>
                <p className="mt-2">
                  의미있는 HTML 구조가 완성되었습니다. 이제 검색엔진, 스크린리더, 
                  다른 기기들이 콘텐츠를 정확하게 이해할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="시맨틱 구조 완성 체크리스트"
        items={[
          {
            id: 'semantic-elements',
            text: '시맨틱 요소 적용',
            description: 'div를 header, nav, main, aside, footer 등으로 교체',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'accessibility',
            text: '접근성 속성 추가',
            description: 'aria-label, role, aria-describedby 등 접근성 속성 추가',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'seo-optimization',
            text: 'SEO 최적화',
            description: 'meta 태그, structured data, Open Graph 태그 추가',
            difficulty: 'hard',
            estimatedTime: '25분'
          },
          {
            id: 'validation',
            text: 'HTML 검증',
            description: 'W3C 마크업 검증 및 오류 수정',
            difficulty: 'medium',
            estimatedTime: '10분'
          }
        ]}
        storageKey="html-semantic-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
} 