'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Download, 
  CheckCircle, 
  AlertTriangle, 
  Monitor, 
  Apple, 
  Terminal,
  ExternalLink,
  Info,
  Settings,
  GitBranch
} from 'lucide-react';

interface GitInstallGuideProps {
  onComplete: () => void;
  onCancel: () => void;
}

const GitInstallGuide: React.FC<GitInstallGuideProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const windowsSteps = [
    {
      title: 'Git 공식 사이트 접속',
      description: '안전한 공식 사이트에서 다운로드하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🌐 Git 공식 사이트 접속</h4>
            <p className="text-sm text-blue-700 mb-3">
              Git 공식 사이트에 접속하여 안전한 파일을 다운로드하세요.
            </p>
            <Button 
              onClick={() => {
                window.open('https://git-scm.com', '_blank');
                setCompletedSteps([...completedSteps, 0]);
              }}
              className="w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Git 공식 사이트 열기
            </Button>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>중요:</strong> 반드시 공식 사이트(git-scm.com)에서 다운로드하세요. 
              다른 사이트에서 받은 파일은 안전하지 않을 수 있습니다.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: 'Windows용 Git 다운로드',
      description: 'Windows에 맞는 Git 설치 파일을 다운로드하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">💻 Windows 버전 다운로드</h4>
            <p className="text-sm text-green-700 mb-3">
              홈페이지에서 "Download for Windows" 버튼을 클릭하세요.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                <span className="text-sm">32bit 또는 64bit 자동 감지</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span className="text-sm">파일 크기: 약 50MB</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📋 포함된 구성요소</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Git 명령줄 도구</li>
              <li>• Git Bash (리눅스 스타일 터미널)</li>
              <li>• Git GUI (그래픽 인터페이스)</li>
              <li>• Windows 탐색기 통합</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: '설치 프로그램 실행',
      description: '다운로드한 설치 파일을 실행하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🚀 설치 시작</h4>
            <p className="text-sm text-blue-700 mb-3">
              다운로드한 .exe 파일을 더블클릭하여 설치를 시작하세요.
            </p>
            <ol className="text-sm text-blue-700 space-y-1">
              <li>1. 다운로드 폴더에서 "Git-2.x.x-64-bit.exe" 파일 찾기</li>
              <li>2. 파일을 더블클릭하여 실행</li>
              <li>3. "사용자 계정 컨트롤" 창에서 "예" 클릭</li>
              <li>4. 설치 마법사가 시작됩니다</li>
            </ol>
          </div>
          <Alert>
            <AlertTriangle className="w-4 h-4" />
            <AlertDescription>
              <strong>바이러스 백신 알림:</strong> 
              일부 바이러스 백신 프로그램이 설치를 차단할 수 있습니다. 
              "허용" 또는 "예외 추가"를 선택하세요.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '설치 옵션 설정',
      description: '설치 과정에서 중요한 옵션들을 설정하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">⚙️ 중요한 설정들</h4>
            <p className="text-sm text-green-700 mb-3">
              다음 설정들을 확인하며 설치를 진행하세요:
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">1. 구성요소 선택</div>
                <div className="text-sm text-gray-600">✅ 모든 항목 체크 유지 (권장)</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">2. 에디터 선택</div>
                <div className="text-sm text-gray-600">✅ 기본값 (Vim) 유지</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">3. PATH 환경 변수</div>
                <div className="text-sm text-gray-600">✅ "Git from the command line..."</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">4. 터미널 에뮬레이터</div>
                <div className="text-sm text-gray-600">✅ "Use Windows' default console window"</div>
              </div>
            </div>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>설치 팁:</strong> 
              처음 사용하는 분들은 대부분의 설정을 기본값으로 두고 "Next"를 클릭하면 됩니다.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '설치 완료 및 확인',
      description: '설치가 완료되면 터미널에서 확인하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🎉 설치 완료</h4>
            <p className="text-sm text-green-700 mb-3">
              설치가 완료되면 새로운 터미널을 열어 확인하세요.
            </p>
            <div className="space-y-2">
              <Button 
                onClick={() => {
                  alert('Windows키 + R을 누르고 "cmd"를 입력한 후 Enter를 누르세요.');
                  setCompletedSteps([...completedSteps, 4]);
                }}
                variant="outline" 
                className="w-full"
              >
                <Terminal className="w-4 h-4 mr-2" />
                명령 프롬프트 열기
              </Button>
              <Button 
                onClick={() => {
                  alert('시작 메뉴에서 "Git Bash"를 검색하여 실행하세요.');
                }}
                variant="outline" 
                className="w-full"
              >
                <Terminal className="w-4 h-4 mr-2" />
                Git Bash 열기 (추천)
              </Button>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">✅ 확인 방법</h4>
            <p className="text-sm text-blue-700 mb-2">
              터미널에서 다음 명령어를 입력하여 설치를 확인하세요:
            </p>
            <div className="bg-black text-green-400 p-2 rounded font-mono text-sm">
              git --version
            </div>
            <p className="text-sm text-blue-700 mt-2">
              "git version 2.x.x" 같은 버전이 나타나면 설치 성공입니다!
            </p>
          </div>
        </div>
      )
    }
  ];

  const macSteps = [
    {
      title: 'Git 설치 방법 선택',
      description: 'Mac에서 Git을 설치하는 방법을 선택하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🍎 macOS 설치 방법</h4>
            <p className="text-sm text-blue-700 mb-3">
              Mac에서는 여러 방법으로 Git을 설치할 수 있습니다:
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-green-800">✅ 방법 1: Homebrew (추천)</div>
                <div className="text-sm text-green-600">가장 쉽고 업데이트가 편함</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-blue-800">⚡ 방법 2: 공식 설치 파일</div>
                <div className="text-sm text-blue-600">Git 공식 사이트에서 다운로드</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-orange-800">🔧 방법 3: Xcode Command Line Tools</div>
                <div className="text-sm text-orange-600">개발 도구와 함께 설치</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Homebrew로 Git 설치',
      description: '가장 쉬운 방법으로 Git을 설치하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🍺 Homebrew 설치</h4>
            <p className="text-sm text-green-700 mb-3">
              먼저 Homebrew가 설치되어 있는지 확인하세요:
            </p>
            <div className="bg-black text-green-400 p-2 rounded font-mono text-sm mb-2">
              brew --version
            </div>
            <p className="text-sm text-green-700 mb-3">
              설치되어 있지 않다면 다음 명령어로 설치하세요:
            </p>
            <div className="bg-black text-green-400 p-2 rounded font-mono text-sm">
              /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">⚡ Git 설치</h4>
            <p className="text-sm text-blue-700 mb-2">
              Homebrew가 설치되면 Git을 설치하세요:
            </p>
            <div className="bg-black text-green-400 p-2 rounded font-mono text-sm">
              brew install git
            </div>
          </div>
        </div>
      )
    },
    {
      title: '공식 설치 파일 사용',
      description: '공식 사이트에서 설치 파일을 다운로드하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🌐 공식 사이트 다운로드</h4>
            <p className="text-sm text-blue-700 mb-3">
              Git 공식 사이트에서 macOS용 설치 파일을 다운로드하세요.
            </p>
            <Button 
              onClick={() => {
                window.open('https://git-scm.com/download/mac', '_blank');
                setCompletedSteps([...completedSteps, 2]);
              }}
              className="w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              macOS용 Git 다운로드
            </Button>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📦 설치 진행</h4>
            <ol className="text-sm text-green-700 space-y-1">
              <li>1. 다운로드한 .pkg 파일을 더블클릭</li>
              <li>2. "열기" 버튼 클릭</li>
              <li>3. 설치 마법사 따라 진행</li>
              <li>4. 관리자 비밀번호 입력</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: 'Xcode Command Line Tools',
      description: '개발자 도구와 함께 Git을 설치하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🔧 Command Line Tools 설치</h4>
            <p className="text-sm text-orange-700 mb-3">
              터미널에서 다음 명령어를 실행하세요:
            </p>
            <div className="bg-black text-green-400 p-2 rounded font-mono text-sm">
              xcode-select --install
            </div>
            <p className="text-sm text-orange-700 mt-2">
              설치 창이 나타나면 "설치"를 클릭하세요.
            </p>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>참고:</strong> 
              이 방법은 Git 외에도 다른 개발 도구들을 함께 설치합니다. 
              용량이 크므로 시간이 걸릴 수 있습니다.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '설치 확인',
      description: '터미널에서 Git 설치를 확인하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🎉 설치 확인</h4>
            <p className="text-sm text-green-700 mb-3">
              터미널을 열어 Git이 제대로 설치되었는지 확인하세요.
            </p>
            <Button 
              onClick={() => {
                alert('Command + Space를 누르고 "터미널"을 입력한 후 Enter를 누르세요.');
                setCompletedSteps([...completedSteps, 4]);
              }}
              variant="outline" 
              className="w-full"
            >
              <Terminal className="w-4 h-4 mr-2" />
              터미널 열기
            </Button>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">✅ 확인 방법</h4>
            <p className="text-sm text-blue-700 mb-2">
              터미널에서 다음 명령어를 입력하여 설치를 확인하세요:
            </p>
            <div className="bg-black text-green-400 p-2 rounded font-mono text-sm">
              git --version
            </div>
            <p className="text-sm text-blue-700 mt-2">
              "git version 2.x.x" 같은 버전이 나타나면 설치 성공입니다!
            </p>
          </div>
        </div>
      )
    }
  ];

  const handleStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
    if (stepIndex < getCurrentSteps().length - 1) {
      setCurrentStep(stepIndex + 1);
    }
  };

  const getCurrentSteps = () => {
    return window.navigator.platform.includes('Mac') ? macSteps : windowsSteps;
  };

  const steps = getCurrentSteps();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <GitBranch className="w-6 h-6 text-orange-500" />
                Git 설치 완벽 가이드
              </CardTitle>
              <p className="text-secondary-600 mt-2">
                초보자도 쉽게 따라할 수 있는 단계별 Git 설치 가이드입니다
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">
                {window.navigator.platform.includes('Mac') ? 'macOS' : 'Windows'}
              </Badge>
              <Button variant="outline" onClick={onCancel}>
                닫기
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">진행률</span>
              <span className="text-sm text-secondary-600">
                {Math.round((completedSteps.length / steps.length) * 100)}%
              </span>
            </div>
            <Progress value={(completedSteps.length / steps.length) * 100} className="h-2" />
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className={`transition-all duration-200 ${
                currentStep === index ? 'ring-2 ring-orange-500' : ''
              } ${completedSteps.includes(index) ? 'bg-green-50 border-green-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        completedSteps.includes(index) ? 'bg-green-500 text-white' : 
                        currentStep === index ? 'bg-orange-500 text-white' : 'bg-gray-200'
                      }`}>
                        {completedSteps.includes(index) ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <p className="text-sm text-secondary-600">{step.description}</p>
                      </div>
                    </div>
                    {currentStep === index && (
                      <Button
                        onClick={() => handleStepComplete(index)}
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600"
                      >
                        완료
                      </Button>
                    )}
                  </div>
                </CardHeader>
                {(currentStep === index || completedSteps.includes(index)) && (
                  <CardContent>
                    {step.content}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Completion */}
          {completedSteps.length === steps.length && (
            <Card className="mt-6 bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    🎉 Git 설치 완료!
                  </h3>
                  <p className="text-green-700 mb-4">
                    이제 터미널에서 git --version을 입력하여 설치를 확인하세요.
                  </p>
                  <Button 
                    onClick={onComplete}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    설치 확인하러 가기
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GitInstallGuide; 