'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Terminal,
  Github,
  Zap,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import CodeBlock, { sampleCodes } from '@/components/CodeBlock';
import CheckList from '@/components/CheckList';

const steps = [
  {
    id: 'nodejs',
    title: 'Node.js 설치',
    description: '웹 개발의 기본 도구인 Node.js를 설치합니다',
    icon: Terminal,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'cursor',
    title: 'Cursor AI 설치',
    description: 'AI 기반 코드 에디터를 설치합니다',
    icon: Zap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'api',
    title: 'API 키 설정',
    description: 'AI 기능을 위한 API 키를 설정합니다',
    icon: Settings,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'git',
    title: 'Git/GitHub 설정',
    description: '버전 관리 시스템을 설정합니다',
    icon: Github,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50'
  }
];

export default function EnvironmentSetup() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleStepCompletion = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const currentStep = steps[activeStep];
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
                <BookOpen className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  1단계: 개발환경 구축
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="progress-bar w-32">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {activeStep + 1}/{steps.length}
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
                🔧 환경 구축 단계
              </h3>
              
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = completedSteps.includes(step.id);
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-red-50 text-red-700 border-l-4 border-red-600' 
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
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 전체 진행률 */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">전체 진행률</h4>
                <div className="progress-bar">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-blue-800 mt-2">
                  {completedSteps.length}/{steps.length} 단계 완료
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
                  </div>
                </div>
              </div>

              {/* 단계별 상세 내용 */}
              <div className="space-y-6">
                {activeStep === 0 && <NodeJSStep onComplete={() => handleStepCompletion('nodejs')} />}
                {activeStep === 1 && <CursorStep onComplete={() => handleStepCompletion('cursor')} />}
                {activeStep === 2 && <APIStep onComplete={() => handleStepCompletion('api')} />}
                {activeStep === 3 && <GitStep onComplete={() => handleStepCompletion('git')} />}
              </div>

              {/* 네비게이션 */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <button
                  onClick={prevStep}
                  disabled={activeStep === 0}
                  className="btn btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전 단계
                </button>

                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      title={`${index + 1}단계로 이동`}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeStep 
                          ? 'bg-red-600' 
                          : index < activeStep 
                            ? 'bg-green-600' 
                            : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {activeStep === steps.length - 1 ? (
                  <Link 
                    href="/steps/2-html"
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

// Node.js 설치 단계 컴포넌트
function NodeJSStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold">Node.js = 건축 현장의 중앙 전력 공급소</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 Node.js가 필요한가?</strong>
              <p className="mt-2">
                실제 건축 현장에서 전력이 필요하듯, 웹 개발에서도 JavaScript 실행 환경과 
                패키지 관리 도구가 필요합니다. Node.js는 이 모든 것을 제공합니다.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">🏚️ 구식 방식 (Node.js 없음)</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• 수동 파일 관리</li>
                <li>• 라이브러리 개별 다운로드</li>
                <li>• 테스트 서버 실행 불가</li>
                <li>• 개발 도구 사용 제한</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">🏗️ 현대식 방식 (Node.js 사용)</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 자동 패키지 관리</li>
                <li>• 풍부한 라이브러리 생태계</li>
                <li>• 로컬 개발 서버 실행</li>
                <li>• 전문 개발 도구 사용</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">📥 Node.js 직접 다운로드</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Download className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h5 className="font-semibold mb-2">Windows 사용자</h5>
                  <p className="text-sm text-gray-600 mb-4">Windows용 Node.js LTS 버전</p>
                  <a 
                    href="https://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    바로 다운로드
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Terminal className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                  <h5 className="font-semibold mb-2">Mac 사용자</h5>
                  <p className="text-sm text-gray-600 mb-4">macOS용 Node.js LTS 버전</p>
                  <a 
                    href="https://nodejs.org/dist/v20.10.0/node-v20.10.0.pkg" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    바로 다운로드
                  </a>
                </div>
              </div>
            </div>

            <div className="alert alert-warning">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>주의사항:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• LTS (Long Term Support) 버전을 선택하세요</li>
                  <li>• 설치 시 &ldquo;Add to PATH&rdquo; 옵션을 체크하세요</li>
                  <li>• 설치 완료 후 컴퓨터를 재부팅하세요</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold">🔍 설치 확인</h4>
            <p className="text-gray-600 mb-4">
              설치가 완료되었다면 다음 명령어로 확인해보세요:
            </p>

            <CodeBlock
              code={sampleCodes.nodeInstall}
              language="terminal"
              filename="터미널에서 실행"
            />

            <div className="alert alert-success">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <strong>정상 출력 예시:</strong>
                <pre className="mt-2 text-sm bg-green-100 p-2 rounded">
                  v20.10.0<br />
                  10.2.3
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="Node.js 설치 체크리스트"
        items={[
          {
            id: 'node-download',
            text: 'Node.js LTS 버전 직접 다운로드',
            description: '위의 직접 다운로드 링크를 사용하여 LTS 버전 다운로드',
            difficulty: 'easy',
            estimatedTime: '2분'
          },
          {
            id: 'node-install',
            text: 'Node.js 설치 프로그램 실행',
            description: '다운로드한 파일을 실행하여 설치 진행 (PATH 추가 옵션 체크)',
            difficulty: 'easy',
            estimatedTime: '5분'
          },
          {
            id: 'node-verify',
            text: 'Node.js 설치 확인',
            description: '터미널에서 node --version 명령어로 확인',
            difficulty: 'easy',
            estimatedTime: '2분'
          },
          {
            id: 'npm-verify',
            text: 'npm 패키지 매니저 확인',
            description: '터미널에서 npm --version 명령어로 확인',
            difficulty: 'easy',
            estimatedTime: '2분'
          }
        ]}
        storageKey="nodejs-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// Cursor AI 설치 단계 컴포넌트
function CursorStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Cursor AI = 세계 최고의 AI 설계 전문가</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 AI 에디터가 필요한가?</strong>
              <p className="mt-2">
                전통적인 코드 에디터는 타이핑만 도와주지만, Cursor AI는 마치 옆에서 
                도와주는 전문가처럼 코드를 제안하고 오류를 잡아줍니다.
              </p>
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="bg-blue-50 p-8 rounded-lg">
              <Zap className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-4">Cursor AI 에디터</h4>
              <p className="text-gray-600 mb-6">
                AI 기반 코드 에디터로 초보자도 전문가처럼 코딩할 수 있습니다
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href="https://download.cursor.sh/windows" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  download
                >
                  <Download className="h-5 w-5 mr-2" />
                  Windows 바로 다운로드
                </a>
                
                <a 
                  href="https://download.cursor.sh/mac" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  download
                >
                  <Download className="h-5 w-5 mr-2" />
                  Mac 바로 다운로드
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-2">🤖 AI 코드 생성</h5>
              <p className="text-sm text-purple-700">
                자연어로 설명하면 코드를 자동으로 생성해줍니다
              </p>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">🔧 실시간 수정</h5>
              <p className="text-sm text-green-700">
                오류를 즉시 감지하고 수정 방법을 제안합니다
              </p>
            </div>

            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">📚 학습 도우미</h5>
              <p className="text-sm text-yellow-700">
                코드 설명과 학습 가이드를 제공합니다
              </p>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="Cursor AI 설치 체크리스트"
        items={[
          {
            id: 'cursor-download',
            text: 'Cursor AI 직접 다운로드',
            description: '위의 직접 다운로드 링크를 사용하여 운영체제에 맞는 버전 다운로드',
            difficulty: 'easy',
            estimatedTime: '3분'
          },
          {
            id: 'cursor-install',
            text: 'Cursor AI 설치 및 실행',
            description: '다운로드한 파일을 실행하여 설치 완료',
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'cursor-setup',
            text: '기본 설정 완료',
            description: '테마, 언어, 키보드 단축키 등 기본 설정',
            difficulty: 'easy',
            estimatedTime: '5분'
          }
        ]}
        storageKey="cursor-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// API 키 설정 단계 컴포넌트
function APIStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Settings className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold">API 키 설정 = AI 전문가 고용 계약</h3>
          </div>
          
          <div className="alert alert-warning mb-4">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <div>
              <strong>선택사항:</strong>
              <p className="mt-2">
                API 키 설정은 선택사항입니다. 무료로도 기본 기능을 사용할 수 있지만, 
                더 강력한 AI 기능을 원한다면 설정하세요.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">🤖 AI 서비스 선택</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2 text-blue-800">Claude (추천)</h5>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  <li>• 한국어 최적화</li>
                  <li>• 월 $20 정도 비용</li>
                  <li>• 뛰어난 코드 품질</li>
                </ul>
                <a 
                  href="https://console.anthropic.com/account/keys" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Claude API 키 발급
                </a>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2 text-green-800">OpenAI</h5>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  <li>• 가장 강력한 AI 모델</li>
                  <li>• 월 $20 정도 비용</li>
                  <li>• 전문가급 코드 생성</li>
                </ul>
                <a 
                  href="https://platform.openai.com/api-keys" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  OpenAI API 키 발급
                </a>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2 text-purple-800">Google Gemini</h5>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  <li>• 무료 사용량 제공</li>
                  <li>• 빠른 응답 속도</li>
                  <li>• 초보자에게 적합</li>
                </ul>
                <a 
                  href="https://aistudio.google.com/app/apikey" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Gemini API 키 발급
                </a>
              </div>
            </div>

            <div className="alert alert-info">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <div>
                <strong>Claude API 키 설정 방법:</strong>
                <ol className="mt-2 space-y-1 list-decimal list-inside">
                  <li>위의 Claude API 키 발급 링크 클릭</li>
                  <li>Anthropic 계정 생성 또는 로그인</li>
                  <li>"Create Key" 버튼 클릭하여 새 API 키 생성</li>
                  <li>생성된 키를 안전한 곳에 복사하여 저장</li>
                  <li>Cursor 설정에서 Claude API 키 입력</li>
                </ol>
              </div>
            </div>

            <div className="alert alert-error">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <div>
                <strong>보안 주의사항:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• API 키는 절대 다른 사람과 공유하지 마세요</li>
                  <li>• 안전한 곳에 보관하세요</li>
                  <li>• 주기적으로 키를 갱신하세요</li>
                  <li>• GitHub 등 공개 저장소에 업로드하지 마세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="API 키 설정 체크리스트"
        items={[
          {
            id: 'api-service-select',
            text: 'AI 서비스 선택',
            description: 'Claude (추천), OpenAI 또는 Google Gemini 중 선택',
            difficulty: 'easy',
            estimatedTime: '5분'
          },
          {
            id: 'api-key-generate',
            text: 'API 키 발급',
            description: '선택한 서비스에서 직접 링크를 통해 API 키 생성',
            difficulty: 'medium',
            estimatedTime: '10분'
          },
          {
            id: 'api-key-setup',
            text: 'Cursor에 API 키 설정',
            description: 'Cursor 설정에서 API 키 입력 및 테스트',
            difficulty: 'medium',
            estimatedTime: '5분'
          }
        ]}
        storageKey="api-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
}

// Git/GitHub 설정 단계 컴포넌트
function GitStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Github className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold">Git/GitHub = 설계도 보관소</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 Git/GitHub가 필요한가?</strong>
              <p className="mt-2">
                건축가가 설계도를 안전하게 보관하고 버전을 관리하듯, 
                개발자도 코드를 안전하게 보관하고 변경 내역을 추적해야 합니다.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Github className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                <h5 className="font-semibold mb-2">GitHub 계정 생성</h5>
                <p className="text-sm text-gray-600 mb-4">
                  전 세계 개발자들이 사용하는 코드 저장소
                </p>
                <a 
                  href="https://github.com/join" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub 가입
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-50 p-6 rounded-lg">
                <Terminal className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h5 className="font-semibold mb-2">Git 직접 다운로드</h5>
                <p className="text-sm text-gray-600 mb-4">
                  Git 버전 관리 시스템 설치
                </p>
                <div className="space-y-2">
                  <a 
                    href="https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm w-full"
                    download
                  >
                    Windows Git 다운로드
                  </a>
                  <a 
                    href="https://git-scm.com/download/mac" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm w-full"
                  >
                    Mac Git 다운로드
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">⚙️ Git 기본 설정</h4>
            <p className="text-gray-600">
              Git을 사용하기 위해 개인 정보를 설정합니다:
            </p>

            <CodeBlock
              code={`# 사용자 이름 설정
git config --global user.name "본인 이름"

# 사용자 이메일 설정
git config --global user.email "본인이메일@example.com"

# 설정 확인
git config --list`}
              language="terminal"
              filename="Git 초기 설정"
            />

            <div className="alert alert-success">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <strong>설정 완료!</strong>
                <p className="mt-2">
                  이제 Git을 사용해 코드 버전을 관리하고 GitHub에 업로드할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckList 
        title="Git/GitHub 설정 체크리스트"
        items={[
          {
            id: 'github-signup',
            text: '1️⃣ GitHub 계정 만들기',
            description: `🎯 실행 단계:
• https://github.com 접속
• "Sign up" 클릭
• 사용자명, 이메일, 비밀번호 입력
• 이메일 인증 완료`,
            difficulty: 'easy',
            estimatedTime: '5분'
          },
          {
            id: 'git-download',
            text: '2️⃣ Git 설치하기',
            description: `🎯 실행 단계:
• 위의 다운로드 버튼 클릭
• 설치 파일 실행
• 모든 옵션 기본값으로 "Next" 계속 클릭
• 설치 완료`,
            difficulty: 'easy',
            estimatedTime: '10분'
          },
          {
            id: 'git-config',
            text: '3️⃣ Git 정보 설정하기',
            description: `🎯 실행 단계:
• 터미널(Windows: cmd, Mac: 터미널) 열기
• 다음 명령어 입력 후 엔터:

git config --global user.name "본인이름"
git config --global user.email "본인이메일@gmail.com"

⚠️ 따옴표 안에 실제 정보 입력`,
            difficulty: 'medium',
            estimatedTime: '5분'
          },
          {
            id: 'github-verify',
            text: '4️⃣ 설정 확인하기',
            description: `🎯 실행 단계:
• 터미널에서 다음 명령어 입력:

git config --list

• user.name과 user.email이 올바르게 표시되면 성공
• 'q' 키로 나가기`,
            difficulty: 'easy',
            estimatedTime: '2분'
          }
        ]}
        storageKey="git-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
} 