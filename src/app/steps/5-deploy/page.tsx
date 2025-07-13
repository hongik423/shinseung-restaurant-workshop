'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Globe, 
  CheckCircle, 
  AlertCircle,
  Github,
  Upload,
  Eye,
  Settings,
  Lightbulb,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import CheckList from '@/components/CheckList';

const deploySteps = [
  {
    id: 'github',
    title: 'GitHub 업로드',
    description: '설계도 보관소에 저장',
    icon: Github,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    buildingAnalogy: '📋 건축 설계도 공식 보관소 등록'
  },
  {
    id: 'vercel',
    title: 'Vercel 배포',
    description: '실제 주소 발급',
    icon: Upload,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    buildingAnalogy: '🏠 실제 주소 발급 & 입주 허가'
  },
  {
    id: 'domain',
    title: '도메인 설정',
    description: '멋진 주소 이름 설정',
    icon: Globe,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    buildingAnalogy: '🎯 기억하기 쉬운 주소명 설정'
  },
  {
    id: 'seo',
    title: 'SEO 최적화',
    description: '검색엔진 등록',
    icon: Eye,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    buildingAnalogy: '📍 지도 앱 등록 & 네비게이션 연결'
  },
  {
    id: 'monitoring',
    title: '모니터링 설정',
    description: '건물 관리 시스템',
    icon: Settings,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    buildingAnalogy: '🔧 건물 관리사무소 & 유지보수 시스템'
  }
];

export default function DeploymentGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleStepCompletion = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const nextStep = () => {
    if (activeStep < deploySteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const currentStep = deploySteps[activeStep];
  const Icon = currentStep.icon;

  return (
    <div className="min-h-screen bg-gray-50">
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
                <Globe className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  5단계: 배포 및 운영 (준공 & 입주)
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="progress-bar w-32">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((activeStep + 1) / deploySteps.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {activeStep + 1}/{deploySteps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sidebar">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                🚀 배포 및 운영 단계
              </h3>
              
              <div className="space-y-3">
                {deploySteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = completedSteps.includes(step.id);
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-green-50 text-green-700 border-l-4 border-green-600' 
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

              <div className="mt-8 p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">🏠 신승반점 온라인 주소</h4>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border-l-4 border-gray-500">
                    <span className="font-mono">GitHub Repository</span>
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-blue-500">
                    <span className="font-mono">Vercel App</span>
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-green-500">
                    <span className="font-mono">Custom Domain</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">전체 진행률</h4>
                <div className="progress-bar">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedSteps.length / deploySteps.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-green-800 mt-2">
                  {completedSteps.length}/{deploySteps.length} 단계 완료
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
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

              <div className="space-y-6">
                {activeStep === 0 && <GitHubStep onComplete={() => handleStepCompletion('github')} />}
                {activeStep === 1 && <VercelStep onComplete={() => handleStepCompletion('vercel')} />}
                {activeStep === 2 && <DomainStep onComplete={() => handleStepCompletion('domain')} />}
                {activeStep === 3 && <SEOStep onComplete={() => handleStepCompletion('seo')} />}
                {activeStep === 4 && <MonitoringStep onComplete={() => handleStepCompletion('monitoring')} />}
              </div>

              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Link
                  href="/steps/4-javascript"
                  className="btn btn-outline"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전 단계
                </Link>

                <div className="flex space-x-2">
                  {deploySteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      title={`${index + 1}단계로 이동`}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeStep 
                          ? 'bg-green-600' 
                          : index < activeStep 
                            ? 'bg-green-600' 
                            : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {activeStep === deploySteps.length - 1 ? (
                  <Link 
                    href="/"
                    className="btn btn-primary"
                  >
                    완료! 🎉
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

// 1. GitHub 업로드 단계
function GitHubStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Github className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold">GitHub = 건축 설계도 공식 보관소</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 GitHub에 업로드해야 하나요?</strong>
              <p className="mt-2">
                건축 설계도를 공식 보관소에 등록하듯, 웹사이트 코드도 GitHub에 저장하여 
                안전하게 보관하고 다른 사람들과 공유할 수 있습니다. 
                또한 이후 배포 과정에서 GitHub이 필요합니다.
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
                  "신승반점 홈페이지 프로젝트를 GitHub에 업로드하려고 해. 
                  .gitignore 파일을 만들고, README.md 파일을 작성하고, 
                  Git 저장소를 초기화해서 GitHub에 푸시하는 과정을 단계별로 안내해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📋 GitHub 업로드 과정</h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold mb-2">1단계: GitHub 저장소 생성</h5>
                <p className="text-sm text-gray-600 mb-3">
                  GitHub 웹사이트에서 새로운 저장소를 생성합니다.
                </p>
                <a 
                  href="https://github.com/new" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub에서 저장소 생성하기
                </a>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold mb-2">2단계: 로컬 Git 저장소 초기화</h5>
                <CodeBlock
                  code={`# 프로젝트 폴더에서 실행
git init

# 사용자 정보 설정 (한 번만)
git config --global user.name "본인 이름"
git config --global user.email "본인이메일@example.com"

# 현재 상태 확인
git status`}
                  language="bash"
                  filename="터미널에서 실행"
                />
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold mb-2">3단계: .gitignore 파일 생성</h5>
                <CodeBlock
                  code={`# 운영체제 파일
.DS_Store
Thumbs.db

# 에디터 파일
.vscode/
.idea/

# 로그 파일
*.log

# 백업 파일
*.bak
*.tmp

# 압축 파일
*.zip
*.tar.gz

# 개발 도구
node_modules/
.env
.env.local`}
                  language="gitignore"
                  filename=".gitignore"
                />
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold mb-2">4단계: README.md 파일 작성</h5>
                <CodeBlock
                  code={`# 🍜 신승반점 공식 홈페이지

1905년부터 이어진 전통의 맛, 신승반점의 공식 웹사이트입니다.

## 🏮 프로젝트 소개

- **식당명**: 신승반점
- **위치**: 인천 차이나타운
- **특징**: 120년 전통의 짜장면 원조 맛집
- **기술**: HTML, CSS, JavaScript

## 🎯 주요 기능

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🍜 메뉴 소개 및 가격 정보
- 📍 위치 정보 및 찾아오는 길
- 📞 예약 및 문의 시스템
- ⚡ 빠른 로딩 속도

## 🚀 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Design**: 반응형 웹 디자인
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

## 📱 미리보기

![신승반점 홈페이지 미리보기](images/preview.jpg)

## 🔧 로컬 개발 환경 설정

\`\`\`bash
# 저장소 복제
git clone https://github.com/사용자명/shinseung-restaurant.git

# 프로젝트 폴더로 이동
cd shinseung-restaurant

# 로컬 서버 실행
npx http-server -p 3000 -o
\`\`\`

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 📞 문의

- 📧 이메일: info@shinseung.com
- 📱 전화: 032-123-4567
- 🌐 웹사이트: https://shinseung-restaurant.vercel.app

---

© 2024 신승반점. 모든 권리 보유.`}
                  language="markdown"
                  filename="README.md"
                />
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold mb-2">5단계: GitHub에 업로드</h5>
                <CodeBlock
                  code={`# 모든 파일 추가
git add .

# 커밋 메시지와 함께 저장
git commit -m "🍜 신승반점 홈페이지 초기 버전"

# GitHub 저장소 연결
git remote add origin https://github.com/사용자명/shinseung-restaurant.git

# GitHub에 업로드
git push -u origin main`}
                  language="bash"
                  filename="터미널에서 실행"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="GitHub 업로드 체크리스트"
        items={[
          {
            id: 'github-repo',
            text: 'GitHub 저장소 생성',
            description: 'GitHub에서 새로운 public 저장소 생성',
            difficulty: 'easy',
            estimatedTime: '5분'
          },
          {
            id: 'git-init',
            text: 'Git 저장소 초기화',
            description: 'git init 명령어로 로컬 저장소 초기화',
            difficulty: 'easy',
            estimatedTime: '5분'
          },
          {
            id: 'gitignore',
            text: '.gitignore 파일 생성',
            description: '불필요한 파일 제외를 위한 .gitignore 설정',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'readme',
            text: 'README.md 파일 작성',
            description: '프로젝트 소개 및 사용법 문서 작성',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'first-commit',
            text: 'GitHub에 첫 번째 커밋',
            description: 'git add, commit, push 과정 완료',
            difficulty: 'medium',
            estimatedTime: '10분'
          }
        ]}
        storageKey="deploy-github-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 2. Vercel 배포 단계
function VercelStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Upload className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Vercel = 실제 주소 발급 & 입주 허가</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 Vercel을 사용하나요?</strong>
              <p className="mt-2">
                건물을 다 지은 후 실제 주소를 발급받고 입주 허가를 받듯, 
                웹사이트도 인터넷에 공개하려면 배포 서비스가 필요합니다. 
                Vercel은 무료로 빠르고 안정적인 배포를 제공합니다.
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
                  "신승반점 홈페이지를 Vercel에 배포하려고 해. 
                  GitHub 저장소를 Vercel에 연결하고, 
                  배포 설정을 최적화하는 방법을 단계별로 안내해줘. 
                  또한 배포 후 확인해야 할 사항들도 알려줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">🚀 Vercel 배포 과정</h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold mb-2">1단계: Vercel 계정 생성</h5>
                <p className="text-sm text-gray-600 mb-3">
                  GitHub 계정으로 Vercel에 로그인합니다.
                </p>
                <a 
                  href="https://vercel.com/signup" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Vercel 계정 만들기
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold mb-2">2단계: 프로젝트 배포</h5>
                <div className="space-y-2 text-sm">
                  <p>✅ "New Project" 버튼 클릭</p>
                  <p>✅ GitHub 저장소 선택</p>
                  <p>✅ 프로젝트 설정 확인</p>
                  <p>✅ "Deploy" 버튼 클릭</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold mb-2">3단계: vercel.json 설정 파일</h5>
                <CodeBlock
                  code={`{
  "version": 2,
  "name": "shinseung-restaurant",
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}`}
                  language="json"
                  filename="vercel.json"
                />
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold mb-2">4단계: 배포 확인</h5>
                <div className="space-y-2 text-sm">
                  <p>🎉 배포가 완료되면 Vercel이 자동으로 URL을 생성합니다!</p>
                  <p>📱 모바일, 태블릿, 데스크톱에서 테스트해보세요</p>
                  <p>⚡ 페이지 로딩 속도를 확인해보세요</p>
                  <p>🔗 모든 링크가 정상 작동하는지 확인하세요</p>
                </div>
              </div>

              <div className="alert alert-success">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <strong>배포 완료!</strong>
                  <p className="mt-2">
                    축하합니다! 신승반점 홈페이지가 전 세계에 공개되었습니다. 
                    이제 누구나 인터넷에서 접속할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="Vercel 배포 체크리스트"
        items={[
          {
            id: 'vercel-account',
            text: 'Vercel 계정 생성',
            description: 'GitHub 계정으로 Vercel에 로그인',
            difficulty: 'easy',
            estimatedTime: '5분'
          },
          {
            id: 'project-import',
            text: 'GitHub 저장소 연결',
            description: 'Vercel에서 GitHub 저장소 import',
            difficulty: 'easy',
            estimatedTime: '5분'
          },
          {
            id: 'deploy-settings',
            text: '배포 설정 확인',
            description: '빌드 설정 및 환경 변수 확인',
            difficulty: 'medium',
            estimatedTime: '10분'
          },
          {
            id: 'first-deploy',
            text: '첫 번째 배포',
            description: 'Deploy 버튼 클릭하여 사이트 배포',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'deploy-test',
            text: '배포 테스트',
            description: '여러 기기에서 사이트 정상 작동 확인',
            difficulty: 'medium',
            estimatedTime: '15분'
          }
        ]}
        storageKey="deploy-vercel-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// 나머지 단계들은 간략하게 구현
function DomainStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold">도메인 설정 = 기억하기 쉬운 주소명</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>도메인이 왜 필요한가요?</strong>
              <p className="mt-2">
                복잡한 Vercel 주소 대신 'shinseung.com'처럼 기억하기 쉬운 
                도메인을 사용하면 고객들이 더 쉽게 찾을 수 있습니다.
              </p>
            </div>
          </div>

          <div className="alert alert-success">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <strong>선택사항:</strong>
              <p className="mt-2">
                도메인 구매는 선택사항입니다. Vercel이 제공하는 무료 도메인으로도 
                충분히 사용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="도메인 설정 체크리스트"
        items={[
          {
            id: 'domain-research',
            text: '도메인 이름 검색',
            description: '원하는 도메인 이름 사용 가능 여부 확인',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'domain-purchase',
            text: '도메인 구매 (선택사항)',
            description: '도메인 등록 업체에서 도메인 구매',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'domain-connect',
            text: 'Vercel에 도메인 연결',
            description: 'Vercel 설정에서 커스텀 도메인 추가',
            difficulty: 'medium',
            estimatedTime: '15분'
          }
        ]}
        storageKey="deploy-domain-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

function SEOStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold">SEO 최적화 = 지도 앱 등록</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>SEO가 왜 중요한가요?</strong>
              <p className="mt-2">
                식당을 지도 앱에 등록해야 사람들이 찾을 수 있듯, 
                웹사이트도 검색엔진에 등록하고 최적화해야 더 많은 방문자를 유치할 수 있습니다.
              </p>
            </div>
          </div>

          <h4 className="text-lg font-semibold">🔍 SEO 체크포인트</h4>
          <ul className="space-y-2 text-sm">
            <li>✅ 페이지 제목과 메타 설명 최적화</li>
            <li>✅ 이미지 alt 속성 추가</li>
            <li>✅ 구조화된 데이터 추가</li>
            <li>✅ 사이트맵 생성</li>
            <li>✅ Google Search Console 등록</li>
          </ul>
        </div>
      </div>

      <CheckList 
        title="SEO 최적화 체크리스트"
        items={[
          {
            id: 'meta-tags',
            text: 'Meta 태그 최적화',
            description: '제목, 설명, 키워드 meta 태그 설정',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'structured-data',
            text: '구조화된 데이터 추가',
            description: 'JSON-LD 형식으로 레스토랑 정보 추가',
            difficulty: 'hard',
            estimatedTime: '30분'
          },
          {
            id: 'search-console',
            text: 'Google Search Console 등록',
            description: '사이트를 Google에 등록하여 검색 결과에 노출',
            difficulty: 'medium',
            estimatedTime: '15분'
          }
        ]}
        storageKey="deploy-seo-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

function MonitoringStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Settings className="h-5 w-5 text-orange-600" />
            <h3 className="text-lg font-semibold">모니터링 = 건물 관리 시스템</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>모니터링이 왜 필요한가요?</strong>
              <p className="mt-2">
                건물 관리사무소에서 시설을 점검하고 유지보수하듯, 
                웹사이트도 지속적으로 모니터링하고 개선해야 합니다.
              </p>
            </div>
          </div>

          <div className="alert alert-success">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <strong>🎉 신승반점 홈페이지 완성!</strong>
              <p className="mt-2">
                축하합니다! 120년 전통의 신승반점이 디지털 세상에도 
                멋진 모습으로 자리를 잡았습니다. 
                이제 전 세계 사람들이 신승반점의 맛있는 짜장면을 만날 수 있습니다!
              </p>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="모니터링 설정 체크리스트"
        items={[
          {
            id: 'analytics',
            text: 'Google Analytics 설정',
            description: '방문자 통계 및 행동 패턴 분석',
            difficulty: 'medium',
            estimatedTime: '20분'
          },
          {
            id: 'performance',
            text: '성능 모니터링',
            description: '페이지 속도 및 성능 지표 추적',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'uptime',
            text: '가동률 모니터링',
            description: '사이트 다운타임 알림 설정',
            difficulty: 'easy',
            estimatedTime: '10분'
          }
        ]}
        storageKey="deploy-monitoring-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
} 