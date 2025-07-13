'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  PaintBucket, 
  CheckCircle, 
  AlertCircle,
  Palette,
  Layout,
  Smartphone,
  Zap,
  Eye,
  Lightbulb,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import CheckList from '@/components/CheckList';

const cssSteps = [
  {
    id: 'foundation',
    title: '기본 스타일 설정',
    description: '벽지와 바닥재 기본 시공',
    icon: PaintBucket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    buildingAnalogy: '🎨 벽지, 바닥재, 기본 색상 선택'
  },
  {
    id: 'layout',
    title: '레이아웃 디자인',
    description: '가구 배치와 공간 활용',
    icon: Layout,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    buildingAnalogy: '🪑 가구 배치 & 공간 활용 설계'
  },
  {
    id: 'responsive',
    title: '반응형 디자인',
    description: '다양한 화면 크기 대응',
    icon: Smartphone,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    buildingAnalogy: '📱 가변형 가구 & 멀티 공간'
  },
  {
    id: 'animation',
    title: '애니메이션 효과',
    description: '생동감 있는 인테리어',
    icon: Zap,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    buildingAnalogy: '✨ 조명 효과 & 움직이는 장식'
  },
  {
    id: 'optimization',
    title: '스타일 최적화',
    description: '완벽한 마감 작업',
    icon: Eye,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    buildingAnalogy: '🔧 최종 점검 & 마감 작업'
  }
];

export default function CSSStyles() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleStepCompletion = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const nextStep = () => {
    if (activeStep < cssSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const currentStep = cssSteps[activeStep];
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
                <PaintBucket className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  3단계: CSS 스타일링 (인테리어 & 외관 디자인)
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="progress-bar w-32">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((activeStep + 1) / cssSteps.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {activeStep + 1}/{cssSteps.length}
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
                🎨 CSS 스타일링 단계
              </h3>
              
              <div className="space-y-3">
                {cssSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = completedSteps.includes(step.id);
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-600' 
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

              {/* CSS 속성 시각화 */}
              <div className="mt-8 p-4 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">🏡 신승반점 스타일 요소</h4>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 bg-white rounded border-l-4 border-red-500">
                    color: #ff0000; /* 빨간색 브랜드 */
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-yellow-500">
                    background: gold; /* 고급스러운 금색 */
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-blue-500">
                    font-family: 'Noto Sans KR'; /* 한글 폰트 */
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-green-500">
                    border-radius: 8px; /* 둥근 모서리 */
                  </div>
                </div>
              </div>

              {/* 전체 진행률 */}
              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">전체 진행률</h4>
                <div className="progress-bar">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedSteps.length / cssSteps.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-purple-800 mt-2">
                  {completedSteps.length}/{cssSteps.length} 단계 완료
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
                {activeStep === 1 && <LayoutStep onComplete={() => handleStepCompletion('layout')} />}
                {activeStep === 2 && <ResponsiveStep onComplete={() => handleStepCompletion('responsive')} />}
                {activeStep === 3 && <AnimationStep onComplete={() => handleStepCompletion('animation')} />}
                {activeStep === 4 && <OptimizationStep onComplete={() => handleStepCompletion('optimization')} />}
              </div>

              {/* 네비게이션 */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Link
                  href="/steps/2-html"
                  className="btn btn-outline"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전 단계
                </Link>

                <div className="flex space-x-2">
                  {cssSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      title={`${index + 1}단계로 이동`}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeStep 
                          ? 'bg-purple-600' 
                          : index < activeStep 
                            ? 'bg-green-600' 
                            : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {activeStep === cssSteps.length - 1 ? (
                  <Link 
                    href="/steps/4-javascript"
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

// 1. 기본 스타일 설정 단계
function FoundationStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <PaintBucket className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">CSS = 건물의 벽지, 바닥재, 인테리어</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 CSS가 필요한가?</strong>
              <p className="mt-2">
                집의 뼈대(HTML)가 완성되면 이제 벽지를 바르고, 바닥재를 깔고, 
                가구를 배치해야 합니다. CSS는 웹사이트의 시각적 표현을 담당하여 
                사용자에게 아름답고 사용하기 편한 경험을 제공합니다.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ CSS 없는 웹사이트</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• 밋밋한 흰색 배경</li>
                <li>• 기본 폰트만 사용</li>
                <li>• 레이아웃 정렬 안됨</li>
                <li>• 브랜드 이미지 없음</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ CSS로 꾸민 웹사이트</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 아름다운 색상과 디자인</li>
                <li>• 브랜드에 맞는 폰트</li>
                <li>• 정돈된 레이아웃</li>
                <li>• 전문적인 외관</li>
              </ul>
            </div>
          </div>

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
                  "신승반점 홈페이지의 기본 CSS 스타일을 만들어줘. 
                  브랜드 컬러는 빨간색과 금색을 사용하고, 
                  한글 폰트를 적용해서 전통적이면서도 현대적인 느낌을 만들어줘. 
                  CSS 리셋과 기본 스타일링을 포함해서 완전한 CSS 파일을 만들어줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">🎨 신승반점 브랜드 스타일 가이드</h4>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3">🏮 브랜드 컬러 팔레트</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto mb-2"></div>
                  <span className="text-sm font-mono">#dc2626</span>
                  <p className="text-xs text-gray-600">메인 레드</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg mx-auto mb-2"></div>
                  <span className="text-sm font-mono">#fbbf24</span>
                  <p className="text-xs text-gray-600">골드</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-2"></div>
                  <span className="text-sm font-mono">#1f2937</span>
                  <p className="text-xs text-gray-600">다크 그레이</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                  <span className="text-sm font-mono">#f3f4f6</span>
                  <p className="text-xs text-gray-600">라이트 그레이</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 기본 CSS 스타일 생성하기</h4>

            <CodeBlock
              code={`/* 🏮 신승반점 기본 스타일 */

/* CSS 리셋 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 기본 폰트 설정 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

/* CSS 변수 (브랜드 컬러) */
:root {
    --main-red: #dc2626;
    --main-gold: #fbbf24;
    --dark-gray: #1f2937;
    --light-gray: #f3f4f6;
    --white: #ffffff;
    
    --font-family: 'Noto Sans KR', sans-serif;
    --border-radius: 8px;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 기본 body 스타일 */
body {
    font-family: var(--font-family);
    color: var(--dark-gray);
    line-height: 1.6;
    background-color: var(--white);
}

/* 제목 스타일 */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--dark-gray);
}

h1 {
    font-size: 2.5rem;
    color: var(--main-red);
}

h2 {
    font-size: 2rem;
    color: var(--main-red);
}

h3 {
    font-size: 1.5rem;
}

/* 문단 스타일 */
p {
    margin-bottom: 1rem;
    color: var(--dark-gray);
}

/* 링크 스타일 */
a {
    color: var(--main-red);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--main-gold);
}

/* 버튼 스타일 */
.btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: var(--border-radius);
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: var(--font-family);
}

.btn-primary {
    background-color: var(--main-red);
    color: var(--white);
}

.btn-primary:hover {
    background-color: #b91c1c;
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background-color: var(--main-gold);
    color: var(--dark-gray);
}

.btn-secondary:hover {
    background-color: #f59e0b;
    transform: translateY(-2px);
}

/* 헤더 스타일 */
header {
    background-color: var(--white);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 1rem 0;
}

header h1 {
    font-size: 2rem;
    color: var(--main-red);
    margin-bottom: 0.5rem;
}

header p {
    color: var(--dark-gray);
    margin-bottom: 0;
}

/* 네비게이션 스타일 */
nav {
    background-color: var(--main-red);
    padding: 1rem 0;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: var(--white);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--white);
}

/* 메인 콘텐츠 스타일 */
main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* 섹션 스타일 */
section {
    margin-bottom: 4rem;
    padding: 2rem;
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

/* 푸터 스타일 */
footer {
    background-color: var(--dark-gray);
    color: var(--white);
    text-align: center;
    padding: 2rem;
    margin-top: 4rem;
}

/* 이미지 스타일 */
img {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius);
}`}
              language="css"
              filename="styles.css"
            />
          </div>
        </div>
      </div>

      <CheckList 
        title="기본 스타일 설정 체크리스트"
        items={[
          {
            id: 'css-reset',
            text: 'CSS 리셋 적용',
            description: '브라우저 기본 스타일 초기화로 일관된 출발점 만들기',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'brand-colors',
            text: '브랜드 컬러 설정',
            description: 'CSS 변수로 신승반점 브랜드 컬러 팔레트 정의',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'typography',
            text: '타이포그래피 설정',
            description: '한글 폰트 적용 및 제목, 본문 스타일 정의',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'base-styles',
            text: '기본 요소 스타일링',
            description: '버튼, 링크, 헤더, 네비게이션 기본 스타일 완성',
            difficulty: 'medium',
            estimatedTime: '25분'
          }
        ]}
        storageKey="css-foundation-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 2. 레이아웃 디자인 단계
function LayoutStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Layout className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold">레이아웃 = 가구 배치와 공간 활용</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 레이아웃이 중요한가?</strong>
              <p className="mt-2">
                방에 가구를 배치할 때 동선과 기능을 고려하듯, 웹사이트도 
                콘텐츠의 배치와 정렬이 사용자 경험을 좌우합니다. 
                Flexbox와 Grid를 활용하여 효율적인 레이아웃을 만들어보겠습니다.
              </p>
            </div>
          </div>

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
                  "신승반점 홈페이지의 레이아웃을 Flexbox와 Grid를 사용해서 만들어줘. 
                  헤더는 sticky로 고정하고, 메인 콘텐츠는 중앙 정렬하고, 
                  메뉴 섹션은 Grid로 카드 형태로 배치해줘. 
                  모든 섹션이 균형잡힌 레이아웃을 가지도록 해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📐 레이아웃 설계 원칙</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">🎯 중심 정렬</h5>
                <p className="text-sm text-blue-700">
                  중요한 콘텐츠는 화면 중앙에 배치하여 시선을 집중시킵니다.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">📏 적절한 간격</h5>
                <p className="text-sm text-green-700">
                  요소들 사이에 충분한 여백을 두어 읽기 편하게 합니다.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">🎨 시각적 균형</h5>
                <p className="text-sm text-purple-700">
                  좌우 대칭이나 비대칭 균형을 통해 안정감을 줍니다.
                </p>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 레이아웃 CSS 코드</h4>

            <CodeBlock
              code={`/* 🏠 신승반점 레이아웃 디자인 */

/* 컨테이너 설정 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* 헤더 레이아웃 */
header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: var(--white);
    box-shadow: var(--shadow);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

/* 네비게이션 레이아웃 */
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-menu a {
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: all 0.3s ease;
}

/* Hero Section 레이아웃 */
.hero-section {
    background: linear-gradient(135deg, var(--main-red), var(--main-gold));
    color: var(--white);
    text-align: center;
    padding: 6rem 0;
    position: relative;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    z-index: 2;
    position: relative;
}

.hero-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--white);
}

.hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

/* 메뉴 섹션 Grid 레이아웃 */
.menu-section {
    padding: 4rem 0;
    background-color: var(--light-gray);
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.menu-item {
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.menu-item:hover {
    transform: translateY(-5px);
}

.menu-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.menu-info {
    padding: 1.5rem;
}

.menu-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}

.price {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--main-red);
}

/* About Section 레이아웃 */
.about-section {
    padding: 4rem 0;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
}

.about-image {
    text-align: center;
}

.about-image img {
    max-width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

/* Contact Section 레이아웃 */
.contact-section {
    padding: 4rem 0;
    background-color: var(--light-gray);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info {
    background-color: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.contact-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--light-gray);
}

.contact-form {
    background-color: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--dark-gray);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: var(--border-radius);
    font-family: var(--font-family);
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--main-red);
}

/* 푸터 레이아웃 */
footer {
    background-color: var(--dark-gray);
    color: var(--white);
    padding: 3rem 0;
    text-align: center;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

/* 유틸리티 클래스 */
.text-center {
    text-align: center;
}

.flex {
    display: flex;
}

.justify-center {
    justify-content: center;
}

.items-center {
    align-items: center;
}

.gap-4 {
    gap: 1rem;
}

.mt-4 {
    margin-top: 1rem;
}

.mb-4 {
    margin-bottom: 1rem;
}`}
              language="css"
              filename="layout.css"
            />
          </div>
        </div>
      </div>

      <CheckList 
        title="레이아웃 디자인 체크리스트"
        items={[
          {
            id: 'flexbox-layout',
            text: 'Flexbox 레이아웃 적용',
            description: '헤더, 네비게이션, 버튼 배치에 Flexbox 사용',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'grid-layout',
            text: 'Grid 레이아웃 적용',
            description: '메뉴 섹션과 푸터에 CSS Grid 사용',
            difficulty: 'medium',
            estimatedTime: '25분'
          },
          {
            id: 'spacing-system',
            text: '간격 시스템 구축',
            description: '일관된 padding, margin 시스템 적용',
            difficulty: 'easy',
            estimatedTime: '15분'
          },
          {
            id: 'visual-hierarchy',
            text: '시각적 계층 구조',
            description: '중요도에 따른 요소 배치 및 크기 조정',
            difficulty: 'medium',
            estimatedTime: '20분'
          }
        ]}
        storageKey="css-layout-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 3. 반응형 디자인 단계
function ResponsiveStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Smartphone className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold">반응형 디자인 = 가변형 가구와 멀티 공간</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 반응형 디자인이 필요한가?</strong>
              <p className="mt-2">
                접이식 테이블이나 이동식 파티션처럼 공간 크기에 따라 가구를 조정하듯, 
                웹사이트도 다양한 화면 크기(데스크톱, 태블릿, 모바일)에 맞춰 
                레이아웃이 자동으로 조정되어야 합니다.
              </p>
            </div>
          </div>

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
                  "신승반점 홈페이지를 모바일, 태블릿, 데스크톱에 모두 최적화해줘. 
                  미디어 쿼리를 사용해서 각 화면 크기에 맞는 레이아웃을 만들고, 
                  모바일에서는 햄버거 메뉴를 사용하고, 
                  터치 친화적인 버튼 크기로 조정해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📱 반응형 디자인 원칙</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">📱 모바일 우선</h5>
                <p className="text-sm text-blue-700">
                  모바일 화면부터 디자인하고 점진적으로 확장합니다.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">🔄 유연한 그리드</h5>
                <p className="text-sm text-green-700">
                  화면 크기에 따라 자동으로 조정되는 그리드를 사용합니다.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">👆 터치 최적화</h5>
                <p className="text-sm text-purple-700">
                  모바일에서 터치하기 쉬운 크기와 간격을 적용합니다.
                </p>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 반응형 CSS 코드</h4>

            <CodeBlock
              code={`/* 📱 신승반점 반응형 디자인 */

/* 기본 반응형 설정 */
* {
    box-sizing: border-box;
}

img {
    max-width: 100%;
    height: auto;
}

/* 모바일 기본 스타일 (320px 이상) */
.container {
    padding: 0 1rem;
}

/* 모바일 헤더 */
.header-content {
    flex-direction: column;
    gap: 1rem;
}

.logo {
    justify-content: center;
}

/* 모바일 네비게이션 */
.nav-menu {
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--white);
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
    box-shadow: var(--shadow);
    display: none;
}

.nav-menu.active {
    display: flex;
}

.mobile-menu-toggle {
    display: block;
    background: none;
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    cursor: pointer;
}

/* 모바일 Hero Section */
.hero-title {
    font-size: 2rem;
}

.hero-actions {
    flex-direction: column;
    gap: 1rem;
}

/* 모바일 메뉴 그리드 */
.menu-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* 모바일 About Section */
.about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
}

/* 모바일 Contact Section */
.contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
}

/* 모바일 버튼 */
.btn {
    padding: 16px 24px;
    font-size: 1rem;
    min-height: 48px; /* 터치 친화적 크기 */
}

/* 태블릿 스타일 (768px 이상) */
@media (min-width: 768px) {
    .container {
        padding: 0 2rem;
    }

    .header-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .mobile-menu-toggle {
        display: none;
    }

    .nav-menu {
        position: static;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        background-color: transparent;
        box-shadow: none;
        padding: 0;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-actions {
        flex-direction: row;
        gap: 1rem;
    }

    .menu-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .about-content {
        grid-template-columns: 1fr 1fr;
    }

    .contact-content {
        grid-template-columns: 1fr 1fr;
    }
}

/* 데스크톱 스타일 (1024px 이상) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .hero-title {
        font-size: 3.5rem;
    }

    .menu-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .nav-menu {
        gap: 2rem;
    }

    .section-header h2 {
        font-size: 2.5rem;
    }

    .about-content {
        gap: 3rem;
    }

    .contact-content {
        gap: 3rem;
    }
}

/* 대형 데스크톱 스타일 (1280px 이상) */
@media (min-width: 1280px) {
    .hero-title {
        font-size: 4rem;
    }

    .menu-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .container {
        max-width: 1400px;
    }
}

/* 모바일 퀵 액션 버튼 */
.quick-actions {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1000;
}

.quick-action {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: var(--main-red);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: var(--shadow);
    text-decoration: none;
    transition: all 0.3s ease;
}

.quick-action:hover {
    transform: scale(1.1);
    background-color: var(--main-gold);
    color: var(--dark-gray);
}

/* 데스크톱에서 퀵 액션 숨기기 */
@media (min-width: 1024px) {
    .quick-actions {
        display: none;
    }
}

/* 접근성 개선 */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.visually-hidden-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    padding: 0.5rem;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
}

/* 프린트 스타일 */
@media print {
    .nav-menu,
    .quick-actions,
    .mobile-menu-toggle {
        display: none !important;
    }
    
    body {
        color: black;
        background: white;
    }
    
    .hero-section {
        background: white;
        color: black;
    }
}`}
              language="css"
              filename="responsive.css"
            />
          </div>
        </div>
      </div>

      <CheckList 
        title="반응형 디자인 체크리스트"
        items={[
          {
            id: 'mobile-first',
            text: '모바일 우선 디자인',
            description: '모바일 화면부터 시작하여 점진적으로 확장',
            difficulty: 'medium',
            estimatedTime: '30분'
          },
          {
            id: 'media-queries',
            text: '미디어 쿼리 적용',
            description: '태블릿, 데스크톱용 미디어 쿼리 작성',
            difficulty: 'medium',
            estimatedTime: '25분'
          },
          {
            id: 'flexible-grid',
            text: '유연한 그리드 시스템',
            description: '화면 크기에 따라 자동 조정되는 그리드',
            difficulty: 'hard',
            estimatedTime: '35분'
          },
          {
            id: 'touch-optimization',
            text: '터치 최적화',
            description: '모바일에서 터치하기 쉬운 버튼 크기와 간격',
            difficulty: 'easy',
            estimatedTime: '15분'
          }
        ]}
        storageKey="css-responsive-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 4. 애니메이션 효과 단계
function AnimationStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="h-5 w-5 text-orange-600" />
            <h3 className="text-lg font-semibold">애니메이션 = 생동감 있는 조명과 장식</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 애니메이션이 필요한가?</strong>
              <p className="mt-2">
                집에 따뜻한 조명과 움직이는 장식이 있으면 더 생동감이 느껴지듯, 
                웹사이트도 적절한 애니메이션을 통해 사용자의 관심을 끌고 
                더 매력적인 경험을 제공할 수 있습니다.
              </p>
            </div>
          </div>

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
                  "신승반점 홈페이지에 적절한 애니메이션을 추가해줘. 
                  버튼 호버 효과, 메뉴 카드 애니메이션, 스크롤 시 나타나는 효과, 
                  로딩 애니메이션 등을 CSS transition과 keyframes를 사용해서 만들어줘. 
                  너무 과하지 않고 세련된 애니메이션으로 만들어줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">✨ 애니메이션 디자인 원칙</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">⏱️ 적절한 속도</h5>
                <p className="text-sm text-blue-700">
                  너무 빠르거나 느리지 않은 자연스러운 속도를 사용합니다.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">🎯 목적성</h5>
                <p className="text-sm text-green-700">
                  사용자의 주의를 끌거나 피드백을 제공하는 명확한 목적이 있습니다.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">🎨 일관성</h5>
                <p className="text-sm text-purple-700">
                  사이트 전체에서 일관된 애니메이션 스타일을 유지합니다.
                </p>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 애니메이션 CSS 코드</h4>

            <CodeBlock
              code={`/* ✨ 신승반점 애니메이션 효과 */

/* 기본 transition 설정 */
* {
    transition: all 0.3s ease;
}

/* 버튼 호버 애니메이션 */
.btn {
    position: relative;
    overflow: hidden;
    transform: translateZ(0);
    transition: all 0.3s ease;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.btn:hover::before {
    left: 100%;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
}

/* 메뉴 카드 애니메이션 */
.menu-item {
    transform: translateY(0);
    transition: all 0.3s ease;
}

.menu-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.menu-item:hover .menu-image {
    transform: scale(1.05);
}

.menu-image {
    transition: transform 0.3s ease;
}

/* 네비게이션 링크 애니메이션 */
.nav-menu a {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--main-gold);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-menu a:hover::after {
    width: 100%;
}

/* 페이드 인 애니메이션 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}

/* 스케일 애니메이션 */
@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.scale-in {
    animation: scaleIn 0.5s ease-out;
}

/* 슬라이드 인 애니메이션 */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slide-in-left {
    animation: slideInLeft 0.6s ease-out;
}

.slide-in-right {
    animation: slideInRight 0.6s ease-out;
}

/* 로딩 애니메이션 */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--light-gray);
    border-top: 4px solid var(--main-red);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* 펄스 애니메이션 */
@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}

/* 타이핑 애니메이션 */
@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

@keyframes blink {
    0%, 50% {
        border-color: var(--main-red);
    }
    51%, 100% {
        border-color: transparent;
    }
}

.typing-effect {
    overflow: hidden;
    border-right: 2px solid var(--main-red);
    white-space: nowrap;
    animation: typing 3s steps(30, end), blink 1s step-end infinite;
}

/* 스크롤 시 나타나는 효과 */
.scroll-reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
}

.scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* 플로팅 애니메이션 */
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.float {
    animation: float 3s ease-in-out infinite;
}

/* 그라데이션 애니메이션 */
@keyframes gradientMove {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.gradient-animated {
    background: linear-gradient(-45deg, var(--main-red), var(--main-gold), var(--main-red), var(--main-gold));
    background-size: 400% 400%;
    animation: gradientMove 5s ease infinite;
}

/* 햄버거 메뉴 애니메이션 */
.hamburger-line {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--white);
    margin: 5px 0;
    transition: 0.3s ease;
    border-radius: 3px;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* 폼 입력 필드 애니메이션 */
.form-group {
    position: relative;
}

.form-group input:focus,
.form-group textarea:focus {
    transform: scale(1.02);
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

/* 스크롤 투 탑 버튼 애니메이션 */
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--main-red);
    color: var(--white);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
    z-index: 1000;
}

.scroll-to-top.visible {
    opacity: 1;
    transform: scale(1);
}

.scroll-to-top:hover {
    background-color: var(--main-gold);
    transform: scale(1.1);
}

/* 접근성 고려 (움직임 선호도 설정) */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}`}
              language="css"
              filename="animations.css"
            />
          </div>
        </div>
      </div>

      <CheckList 
        title="애니메이션 효과 체크리스트"
        items={[
          {
            id: 'hover-effects',
            text: '호버 효과 구현',
            description: '버튼, 링크, 카드에 자연스러운 호버 애니메이션 추가',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'keyframe-animations',
            text: 'CSS 키프레임 애니메이션',
            description: '페이드인, 슬라이드, 스케일 등의 키프레임 애니메이션 구현',
            difficulty: 'medium',
            estimatedTime: '25분'
          },
          {
            id: 'scroll-animations',
            text: '스크롤 애니메이션',
            description: '스크롤 시 나타나는 효과와 스크롤 투 탑 버튼',
            difficulty: 'hard',
            estimatedTime: '30분'
          },
          {
            id: 'performance-optimization',
            text: '성능 최적화',
            description: '애니메이션 성능 최적화 및 접근성 고려사항',
            difficulty: 'medium',
            estimatedTime: '15분'
          }
        ]}
        storageKey="css-animation-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 5. 스타일 최적화 단계
function OptimizationStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold">스타일 최적화 = 완벽한 마감 작업</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 최적화가 필요한가?</strong>
              <p className="mt-2">
                집을 다 지은 후 마감 작업을 통해 완벽하게 마무리하듯, 
                CSS도 최적화를 통해 빠른 로딩 속도와 일관된 스타일을 보장해야 합니다. 
                코드 정리, 압축, 브라우저 호환성 등을 점검하겠습니다.
              </p>
            </div>
          </div>

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
                  "신승반점 홈페이지의 CSS를 최적화해줘. 
                  중복 코드 제거, 미사용 스타일 정리, 벤더 프리픽스 추가, 
                  CSS 변수 활용, 성능 최적화를 해줘. 
                  또한 다양한 브라우저에서 동일하게 보이도록 크로스 브라우징 처리도 해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">🔧 최적화 체크리스트</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">✅ 해야 할 것들</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 중복 코드 제거</li>
                  <li>• 미사용 스타일 정리</li>
                  <li>• CSS 변수 활용</li>
                  <li>• 벤더 프리픽스 추가</li>
                  <li>• 성능 최적화</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">❌ 피해야 할 것들</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 인라인 스타일 남용</li>
                  <li>• 과도한 중첩</li>
                  <li>• 하드코딩된 값</li>
                  <li>• 불필요한 !important</li>
                  <li>• 거대한 CSS 파일</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 최적화된 CSS 구조</h4>

            <CodeBlock
              code={`/* 🏮 신승반점 최적화된 CSS */

/* 1. CSS 변수 중앙 관리 */
:root {
    /* 브랜드 컬러 */
    --color-primary: #dc2626;
    --color-secondary: #fbbf24;
    --color-dark: #1f2937;
    --color-light: #f3f4f6;
    --color-white: #ffffff;
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-error: #ef4444;
    
    /* 타이포그래피 */
    --font-family-base: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    /* 스페이싱 */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    
    /* 레이아웃 */
    --container-max-width: 1200px;
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-full: 50%;
    
    /* 그림자 */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
    
    /* 전환 효과 */
    --transition-fast: 0.15s ease-out;
    --transition-base: 0.3s ease-out;
    --transition-slow: 0.5s ease-out;
    
    /* 브레이크포인트 */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
}

/* 2. 브라우저 호환성을 위한 벤더 프리픽스 */
.gradient-animated {
    background: -webkit-linear-gradient(-45deg, var(--color-primary), var(--color-secondary));
    background: -moz-linear-gradient(-45deg, var(--color-primary), var(--color-secondary));
    background: linear-gradient(-45deg, var(--color-primary), var(--color-secondary));
    background-size: 400% 400%;
    -webkit-animation: gradientMove 5s ease infinite;
    -moz-animation: gradientMove 5s ease infinite;
    animation: gradientMove 5s ease infinite;
}

/* 3. 성능 최적화 */
.optimized-element {
    /* GPU 가속 활용 */
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    
    /* 효율적인 애니메이션 속성 사용 */
    will-change: transform, opacity;
    
    /* 하드웨어 가속 */
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
}

/* 4. 유틸리티 클래스 시스템 */
.u-text-center { text-align: center; }
.u-text-left { text-align: left; }
.u-text-right { text-align: right; }

.u-font-light { font-weight: var(--font-weight-light); }
.u-font-normal { font-weight: var(--font-weight-normal); }
.u-font-medium { font-weight: var(--font-weight-medium); }
.u-font-semibold { font-weight: var(--font-weight-semibold); }
.u-font-bold { font-weight: var(--font-weight-bold); }

.u-mb-0 { margin-bottom: 0; }
.u-mb-sm { margin-bottom: var(--spacing-sm); }
.u-mb-md { margin-bottom: var(--spacing-md); }
.u-mb-lg { margin-bottom: var(--spacing-lg); }
.u-mb-xl { margin-bottom: var(--spacing-xl); }

.u-p-0 { padding: 0; }
.u-p-sm { padding: var(--spacing-sm); }
.u-p-md { padding: var(--spacing-md); }
.u-p-lg { padding: var(--spacing-lg); }
.u-p-xl { padding: var(--spacing-xl); }

/* 5. 컴포넌트 기반 구조 */
.c-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--border-radius-md);
    font-family: var(--font-family-base);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition-base);
    min-height: 48px; /* 접근성 고려 */
}

.c-button--primary {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.c-button--secondary {
    background-color: var(--color-secondary);
    color: var(--color-dark);
}

.c-button--outline {
    background-color: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
}

.c-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.c-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.3);
}

/* 6. 반응형 최적화 */
.responsive-container {
    width: 100%;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

@media (min-width: 640px) {
    .responsive-container {
        padding: 0 var(--spacing-lg);
    }
}

@media (min-width: 1024px) {
    .responsive-container {
        padding: 0 var(--spacing-xl);
    }
}

/* 7. 접근성 향상 */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.sr-only:focus {
    position: static;
    width: auto;
    height: auto;
    padding: var(--spacing-sm);
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
}

/* 8. 다크 모드 지원 */
@media (prefers-color-scheme: dark) {
    :root {
        --color-dark: #f3f4f6;
        --color-light: #1f2937;
        --color-white: #111827;
    }
}

/* 9. 모션 감소 설정 */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* 10. 인쇄 최적화 */
@media print {
    *,
    *::before,
    *::after {
        background: transparent !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }
    
    a,
    a:visited {
        text-decoration: underline;
    }
    
    .no-print {
        display: none !important;
    }
    
    .page-break {
        page-break-after: always;
    }
}`}
              language="css"
              filename="optimized-styles.css"
            />

            <div className="alert alert-success">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <strong>CSS 최적화 완료!</strong>
                <p className="mt-2">
                  신승반점 홈페이지의 CSS가 완벽하게 최적화되었습니다. 
                  빠른 로딩 속도, 일관된 스타일, 브라우저 호환성을 모두 갖춘 
                  전문적인 웹사이트가 완성되었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="스타일 최적화 체크리스트"
        items={[
          {
            id: 'css-variables',
            text: 'CSS 변수 시스템',
            description: '중앙 집중식 디자인 토큰 시스템 구축',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'vendor-prefixes',
            text: '벤더 프리픽스 추가',
            description: '크로스 브라우징을 위한 벤더 프리픽스 적용',
            difficulty: 'easy',
            estimatedTime: '15분'
          },
          {
            id: 'performance-optimization',
            text: '성능 최적화',
            description: 'GPU 가속, 효율적인 애니메이션 속성 사용',
            difficulty: 'hard',
            estimatedTime: '25분'
          },
          {
            id: 'accessibility-enhancement',
            text: '접근성 향상',
            description: '스크린 리더, 키보드 네비게이션, 색상 대비 최적화',
            difficulty: 'medium',
            estimatedTime: '20분'
          }
        ]}
        storageKey="css-optimization-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
} 