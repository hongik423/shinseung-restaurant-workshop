'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  Eye,
  Zap,
  Globe,
  Star,
  Trophy,
  Target,
  Lightbulb,
  MessageSquare,
  Github,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import CheckList from '@/components/CheckList';

const validationSteps = [
  {
    id: 'functionality',
    title: '기능 테스트',
    description: '웹사이트 기능 완성도 검증',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    buildingAnalogy: '🔧 건물 설비 점검'
  },
  {
    id: 'design',
    title: '디자인 검증',
    description: '시각적 완성도 및 사용성 검증',
    icon: Eye,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    buildingAnalogy: '🎨 인테리어 마감 점검'
  },
  {
    id: 'performance',
    title: '성능 최적화',
    description: '로딩 속도 및 성능 최적화',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    buildingAnalogy: '⚡ 전력 효율 점검'
  },
  {
    id: 'deployment',
    title: '배포 완성',
    description: '실제 서비스 배포 및 검증',
    icon: Globe,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    buildingAnalogy: '🏢 건물 개관 준비'
  },
  {
    id: 'certification',
    title: '완성도 인증',
    description: '프로젝트 완성 인증서 발급',
    icon: Trophy,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    buildingAnalogy: '🏆 건축 준공 인증'
  }
];

export default function ValidationStep() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleStepCompletion = (stepId: string) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) ? prev : [...prev, stepId]
    );
  };

  const nextStep = () => {
    if (activeStep < validationSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const currentStep = validationSteps[activeStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              완성도 검증 & 인증
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              신승반점 웹사이트를 완성하고 전문적인 품질을 검증받으세요
            </p>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              진행률: {Math.round((activeStep + 1) / validationSteps.length * 100)}%
            </span>
            <span className="text-sm text-gray-500">
              {activeStep + 1} / {validationSteps.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / validationSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-sm">
            {validationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    index === activeStep
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline text-sm font-medium">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl ${currentStep.bgColor}`}>
                <currentStep.icon className={`h-6 w-6 ${currentStep.color}`} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {currentStep.title}
                </h2>
                <p className="text-gray-600">
                  {currentStep.description}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {currentStep.buildingAnalogy}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {activeStep === 0 && <FunctionalityStep onComplete={() => handleStepCompletion('functionality')} />}
            {activeStep === 1 && <DesignStep onComplete={() => handleStepCompletion('design')} />}
            {activeStep === 2 && <PerformanceStep onComplete={() => handleStepCompletion('performance')} />}
            {activeStep === 3 && <DeploymentStep onComplete={() => handleStepCompletion('deployment')} />}
            {activeStep === 4 && <CertificationStep onComplete={() => handleStepCompletion('certification')} />}
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={prevStep}
              disabled={activeStep === 0}
              className={`btn btn-outline ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              이전
            </button>

            {activeStep < validationSteps.length - 1 ? (
              <button
                onClick={nextStep}
                className="btn btn-primary"
              >
                다음
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            ) : (
              <Link href="/" className="btn btn-primary">
                완료
                <CheckCircle className="h-4 w-4 ml-2" />
              </Link>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/steps/5-deploy"
            className="btn btn-outline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            5. 배포하기
          </Link>
          
          <Link
            href="/"
            className="btn btn-primary"
          >
            <Trophy className="h-4 w-4 mr-2" />
            프로젝트 완성
          </Link>
        </div>
      </div>
    </div>
  );
}

// 1. 기능 테스트 단계
function FunctionalityStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="alert alert-info">
        <AlertCircle className="h-5 w-5 text-blue-600" />
        <div>
          <strong>왜 기능 테스트가 필요한가?</strong>
          <p className="mt-2">
            건물 완공 전 전기, 상하수도, 엘리베이터 등 모든 설비가 정상 작동하는지 
            점검하듯, 웹사이트도 모든 기능이 정상 작동하는지 체계적으로 검증해야 합니다.
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
              "신승반점 웹사이트의 모든 기능을 체계적으로 테스트해줘. 
              네비게이션, 메뉴 필터링, 모바일 햄버거 메뉴, 
              스크롤 효과, 버튼 클릭, 폼 입력 등 모든 인터랙션이 
              정상 작동하는지 확인하고 문제점을 리포트해줘."
            </div>
          </div>
        </div>

        <h4 className="text-lg font-semibold">🧪 기능 테스트 체크리스트</h4>

        <CheckList
          title="기능 테스트 체크리스트"
          items={[
            { id: 'navigation', text: '네비게이션 메뉴 동작 확인' },
            { id: 'mobile-menu', text: '모바일 햄버거 메뉴 테스트' },
            { id: 'smooth-scroll', text: '스무스 스크롤 기능 확인' },
            { id: 'menu-filter', text: '메뉴 필터링 기능 테스트' },
            { id: 'form-validation', text: '폼 입력 및 검증 테스트' },
            { id: 'responsive', text: '반응형 디자인 확인' },
            { id: 'animations', text: '애니메이션 효과 확인' },
            { id: 'accessibility', text: '접근성 기능 테스트' }
          ]}
          onComplete={(completed, total) => {
            if (completed >= 6) {
              onComplete();
            }
          }}
        />
      </div>
    </div>
  );
}

// 2. 디자인 검증 단계
function DesignStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="alert alert-info">
        <AlertCircle className="h-5 w-5 text-purple-600" />
        <div>
          <strong>디자인 품질 검증</strong>
          <p className="mt-2">
            건물의 마감재부터 인테리어까지 전체적인 완성도를 점검하듯, 
            웹사이트의 시각적 완성도와 사용자 경험을 체계적으로 검증합니다.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">🎨 디자인 검증 항목</h4>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h5 className="font-semibold text-purple-800 mb-2">시각적 완성도</h5>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• 색상 조화 및 일관성</li>
              <li>• 타이포그래피 가독성</li>
              <li>• 이미지 품질 및 최적화</li>
              <li>• 레이아웃 균형감</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">사용자 경험</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 직관적인 네비게이션</li>
              <li>• 명확한 정보 구조</li>
              <li>• 효과적인 CTA 배치</li>
              <li>• 로딩 시간 최적화</li>
            </ul>
          </div>
        </div>

        <CheckList
          title="디자인 검증 체크리스트"
          items={[
            { id: 'color-scheme', text: '색상 테마 일관성 확인' },
            { id: 'typography', text: '폰트 크기 및 가독성 검증' },
            { id: 'layout-balance', text: '레이아웃 균형 및 정렬 확인' },
            { id: 'image-quality', text: '이미지 품질 및 최적화 확인' },
            { id: 'icon-consistency', text: '아이콘 스타일 일관성 확인' },
            { id: 'spacing', text: '여백 및 간격 최적화 확인' }
          ]}
          onComplete={(completed, total) => {
            if (completed >= 5) {
              onComplete();
            }
          }}
        />
      </div>
    </div>
  );
}

// 3. 성능 최적화 단계
function PerformanceStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="alert alert-info">
        <AlertCircle className="h-5 w-5 text-blue-600" />
        <div>
          <strong>성능 최적화 검증</strong>
          <p className="mt-2">
            건물의 에너지 효율성을 점검하듯, 웹사이트의 로딩 속도와 
            성능을 최적화하여 사용자 경험을 향상시킵니다.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">⚡ 성능 측정 도구</h4>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h5 className="font-semibold text-green-800 mb-2">🔍 Lighthouse 점수</h5>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Performance: 90+ 목표</li>
              <li>• Accessibility: 95+ 목표</li>
              <li>• Best Practices: 95+ 목표</li>
              <li>• SEO: 95+ 목표</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">📊 핵심 성능 지표</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• FCP (First Contentful Paint)</li>
              <li>• LCP (Largest Contentful Paint)</li>
              <li>• CLS (Cumulative Layout Shift)</li>
              <li>• FID (First Input Delay)</li>
            </ul>
          </div>
        </div>

        <CodeBlock
          code={`// 성능 측정 명령어

// 1. Lighthouse 성능 측정
npx lighthouse https://your-site.vercel.app --output=html --output-path=./lighthouse-report.html

// 2. 번들 크기 분석
npm run build
npm run analyze

// 3. Core Web Vitals 측정
// Chrome DevTools > Performance 탭에서 측정

// 4. 이미지 최적화 확인
// Network 탭에서 이미지 로딩 시간 확인`}
          language="bash"
        />

        <CheckList
          items={[
            { id: 'lighthouse-score', text: 'Lighthouse 점수 90+ 달성' },
            { id: 'image-optimization', text: '이미지 최적화 완료' },
            { id: 'bundle-size', text: '번들 크기 최적화' },
            { id: 'lazy-loading', text: '지연 로딩 구현' },
            { id: 'caching', text: '캐싱 전략 적용' },
            { id: 'mobile-performance', text: '모바일 성능 최적화' }
          ]}
          onComplete={(completed, total) => {
            if (completed >= 4) {
              onComplete();
            }
          }}
        />
      </div>
    </div>
  );
}

// 4. 배포 완성 단계
function DeploymentStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="alert alert-info">
        <AlertCircle className="h-5 w-5 text-green-600" />
        <div>
          <strong>실제 서비스 배포</strong>
          <p className="mt-2">
            건물의 최종 준공 검사를 받듯, 웹사이트를 실제 서비스 환경에 
            배포하고 모든 기능이 정상 작동하는지 최종 검증합니다.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">🚀 배포 단계별 가이드</h4>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-2">1. GitHub에 코드 푸시</h5>
            <CodeBlock
              code={`# Git 저장소 초기화 및 푸시
git init
git add .
git commit -m "신승반점 웹사이트 완성"
git branch -M main
git remote add origin https://github.com/your-username/shinseung-restaurant.git
git push -u origin main`}
              language="bash"
            />
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">2. Vercel 배포</h5>
            <div className="space-y-2 text-sm">
              <p>• <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vercel 웹사이트</a>에 접속</p>
              <p>• GitHub 계정으로 로그인</p>
              <p>• "New Project" 클릭</p>
              <p>• GitHub 저장소 선택 후 "Import"</p>
              <p>• 자동으로 빌드 및 배포 완료</p>
            </div>
          </div>
        </div>

        <CheckList
          items={[
            { id: 'github-push', text: 'GitHub 저장소에 코드 푸시' },
            { id: 'vercel-deploy', text: 'Vercel 배포 완료' },
            { id: 'domain-check', text: '배포된 URL 접속 확인' },
            { id: 'mobile-test', text: '모바일에서 정상 작동 확인' },
            { id: 'ssl-check', text: 'HTTPS 보안 인증서 확인' },
            { id: 'performance-live', text: '실제 환경 성능 테스트' }
          ]}
          onComplete={(completed, total) => {
            if (completed >= 5) {
              onComplete();
            }
          }}
        />
      </div>
    </div>
  );
}

// 5. 완성도 인증 단계
function CertificationStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="alert alert-success">
        <Trophy className="h-5 w-5 text-green-600" />
        <div>
          <strong>🎉 축하합니다!</strong>
          <p className="mt-2">
            신승반점 웹사이트를 성공적으로 완성했습니다. 
            이제 전문적인 웹개발자로서의 첫 프로젝트를 완료하셨습니다!
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">🏆 프로젝트 완성 인증</h4>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
          <div className="text-center">
            <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              웹개발 완성 인증서
            </h3>
            <p className="text-gray-600 mb-4">
              신승반점 중식당 웹사이트 개발 프로젝트를 성공적으로 완성했습니다.
            </p>
            <div className="flex justify-center space-x-4">
              <Star className="h-5 w-5 text-yellow-500" />
              <Star className="h-5 w-5 text-yellow-500" />
              <Star className="h-5 w-5 text-yellow-500" />
              <Star className="h-5 w-5 text-yellow-500" />
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h5 className="font-semibold text-green-800 mb-2">📊 달성 성과</h5>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 시맨틱 HTML 구조 구현</li>
              <li>• 반응형 CSS 디자인 완성</li>
              <li>• JavaScript 인터랙션 구현</li>
              <li>• 실제 서비스 배포 완료</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">🎯 학습 목표 달성</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Cursor AI 활용 능력 향상</li>
              <li>• 프론트엔드 개발 기초 습득</li>
              <li>• 프로젝트 완성 경험 획득</li>
              <li>• 배포 프로세스 이해</li>
            </ul>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h4 className="text-lg font-semibold">🚀 다음 단계 추천</h4>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/your-username/shinseung-restaurant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub 저장소
            </a>
            <a 
              href="https://your-project.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              완성된 웹사이트 보기
            </a>
          </div>
        </div>

        <CheckList
          items={[
            { id: 'project-complete', text: '프로젝트 완성 확인' },
            { id: 'code-quality', text: '코드 품질 검토' },
            { id: 'documentation', text: '프로젝트 문서화' },
            { id: 'portfolio', text: '포트폴리오에 추가' },
            { id: 'share', text: '완성작 공유' }
          ]}
          onComplete={(completed, total) => {
            if (completed >= 3) {
              onComplete();
            }
          }}
        />
      </div>
    </div>
  );
} 