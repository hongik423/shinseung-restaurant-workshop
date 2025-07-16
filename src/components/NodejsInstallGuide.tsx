'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Play,
  Pause,
  Info,
  ArrowRight
} from 'lucide-react';

interface NodejsInstallGuideProps {
  onComplete: () => void;
  onCancel: () => void;
}

const NodejsInstallGuide: React.FC<NodejsInstallGuideProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const windowsSteps = [
    {
      title: 'Node.js 공식 사이트 접속',
      description: '안전한 공식 사이트에서 다운로드하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🌐 공식 사이트 접속</h4>
            <p className="text-sm text-blue-700 mb-3">
              Node.js 공식 사이트에 접속하여 안전한 파일을 다운로드하세요.
            </p>
            <Button 
              onClick={() => {
                window.open('https://nodejs.org/ko', '_blank');
                setCompletedSteps([...completedSteps, 0]);
              }}
              className="w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Node.js 공식 사이트 열기
            </Button>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>중요:</strong> 반드시 공식 사이트(nodejs.org)에서 다운로드하세요. 
              다른 사이트에서 받은 파일은 안전하지 않을 수 있습니다.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '올바른 버전 선택',
      description: 'LTS 버전을 선택하여 안정성을 확보하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">✅ LTS 버전 선택</h4>
            <p className="text-sm text-green-700 mb-3">
              공식 사이트에서 "LTS" 라고 표시된 버전을 선택하세요. 
              LTS는 Long Term Support의 약자로 가장 안정적인 버전입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-green-800">✅ 추천: LTS 버전</div>
                <div className="text-sm text-green-600">안정적이고 오래 지원됨</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-orange-800">⚠️ 피하세요: Current 버전</div>
                <div className="text-sm text-orange-600">최신이지만 불안정할 수 있음</div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🔍 화면에서 찾는 방법</h4>
            <ol className="text-sm text-yellow-700 space-y-1">
              <li>1. 홈페이지 메인에서 초록색 버튼 확인</li>
              <li>2. "권장 사용자용" 또는 "LTS" 문구 확인</li>
              <li>3. 버전 번호 확인 (18.x.x 이상)</li>
              <li>4. Windows용 (.msi) 파일 선택</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: '파일 다운로드',
      description: '선택한 파일을 컴퓨터에 다운로드하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📥 다운로드 진행</h4>
            <p className="text-sm text-purple-700 mb-3">
              대용량 파일이므로 다운로드에 시간이 걸릴 수 있습니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                <span className="text-sm">파일 크기: 약 30MB</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span className="text-sm">예상 시간: 1-3분</span>
              </div>
            </div>
          </div>
          <Alert>
            <AlertTriangle className="w-4 h-4" />
            <AlertDescription>
              <strong>다운로드 팁:</strong>
              <ul className="mt-2 text-sm space-y-1">
                <li>• 다운로드 중에는 인터넷 연결을 끊지 마세요</li>
                <li>• 바이러스 백신이 차단하면 임시로 비활성화하세요</li>
                <li>• 다운로드 폴더를 기억해 두세요</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '설치 프로그램 실행',
      description: '다운로드한 파일을 실행하여 설치를 시작하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🚀 설치 시작</h4>
            <p className="text-sm text-blue-700 mb-3">
              다운로드한 .msi 파일을 더블클릭하여 설치를 시작하세요.
            </p>
            <ol className="text-sm text-blue-700 space-y-1">
              <li>1. 다운로드 폴더에서 "node-v18.x.x-x64.msi" 파일 찾기</li>
              <li>2. 파일을 더블클릭하여 실행</li>
              <li>3. "사용자 계정 컨트롤" 창에서 "예" 클릭</li>
              <li>4. 설치 마법사가 시작됩니다</li>
            </ol>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>관리자 권한 필요:</strong> 
              Windows에서 "이 앱이 디바이스를 변경할 수 있도록 허용하시겠습니까?"라고 묻는 창이 나타나면 
              "예"를 클릭하세요.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '설치 옵션 설정',
      description: '설치 마법사에서 올바른 옵션을 선택하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">⚙️ 설치 옵션</h4>
            <p className="text-sm text-green-700 mb-3">
              대부분의 설정은 기본값으로 두고 "Next"를 클릭하면 됩니다.
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">1. 라이선스 동의</div>
                <div className="text-sm text-gray-600">✅ "I accept the terms..." 체크 후 Next</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">2. 설치 위치</div>
                <div className="text-sm text-gray-600">✅ 기본값 유지 (C:\Program Files\nodejs\)</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">3. 추가 도구</div>
                <div className="text-sm text-gray-600">✅ "Automatically install..." 체크 권장</div>
              </div>
            </div>
          </div>
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
              설치가 완료되면 컴퓨터를 재시작하거나 새로운 터미널을 열어주세요.
            </p>
            <div className="space-y-2">
              <Button 
                onClick={() => {
                  alert('Windows키 + R을 누르고 "cmd"를 입력한 후 Enter를 누르세요.');
                  setCompletedSteps([...completedSteps, 5]);
                }}
                variant="outline" 
                className="w-full"
              >
                <Terminal className="w-4 h-4 mr-2" />
                명령 프롬프트 열기 방법 보기
              </Button>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">✅ 확인 방법</h4>
            <p className="text-sm text-blue-700 mb-2">
              터미널에서 다음 명령어를 입력하여 설치를 확인하세요:
            </p>
            <div className="bg-black text-green-400 p-2 rounded font-mono text-sm">
              node --version
            </div>
            <p className="text-sm text-blue-700 mt-2">
              "v18.17.0" 같은 버전이 나타나면 설치 성공입니다!
            </p>
          </div>
        </div>
      )
    }
  ];

  const macSteps = [
    {
      title: 'Node.js 공식 사이트 접속',
      description: '안전한 공식 사이트에서 다운로드하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🌐 공식 사이트 접속</h4>
            <p className="text-sm text-blue-700 mb-3">
              Node.js 공식 사이트에 접속하여 안전한 파일을 다운로드하세요.
            </p>
            <Button 
              onClick={() => {
                window.open('https://nodejs.org/ko', '_blank');
                setCompletedSteps([...completedSteps, 0]);
              }}
              className="w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Node.js 공식 사이트 열기
            </Button>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>중요:</strong> 반드시 공식 사이트(nodejs.org)에서 다운로드하세요.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: 'macOS용 파일 다운로드',
      description: 'macOS에 맞는 설치 파일을 다운로드하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🍎 macOS 버전 선택</h4>
            <p className="text-sm text-green-700 mb-3">
              "macOS Installer" 또는 ".pkg" 파일을 선택하세요.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-green-800">✅ Intel Mac</div>
                <div className="text-sm text-green-600">x64 버전 선택</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-green-800">✅ Apple Silicon (M1/M2)</div>
                <div className="text-sm text-green-600">ARM64 버전 선택</div>
              </div>
            </div>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>Mac 종류 확인:</strong> 
              사과 메뉴 → "이 Mac에 관하여"에서 프로세서를 확인하세요.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '설치 파일 실행',
      description: '다운로드한 .pkg 파일을 실행하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📦 설치 시작</h4>
            <p className="text-sm text-blue-700 mb-3">
              다운로드한 .pkg 파일을 더블클릭하여 설치를 시작하세요.
            </p>
            <ol className="text-sm text-blue-700 space-y-1">
              <li>1. 다운로드 폴더에서 "node-v18.x.x.pkg" 파일 찾기</li>
              <li>2. 파일을 더블클릭하여 실행</li>
              <li>3. "열기" 버튼 클릭</li>
              <li>4. 설치 마법사가 시작됩니다</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: '설치 진행',
      description: '설치 마법사를 따라 진행하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">⚙️ 설치 과정</h4>
            <p className="text-sm text-green-700 mb-3">
              관리자 비밀번호를 입력하라고 할 수 있습니다.
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">1. 소개</div>
                <div className="text-sm text-gray-600">✅ "계속" 클릭</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">2. 라이선스</div>
                <div className="text-sm text-gray-600">✅ "동의함" 클릭</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">3. 설치 위치</div>
                <div className="text-sm text-gray-600">✅ 기본값 유지</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium">4. 관리자 인증</div>
                <div className="text-sm text-gray-600">✅ Mac 비밀번호 입력</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '설치 완료 및 확인',
      description: '터미널에서 설치를 확인하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🎉 설치 완료</h4>
            <p className="text-sm text-green-700 mb-3">
              설치가 완료되면 터미널을 열어 확인하세요.
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
              터미널 열기 방법 보기
            </Button>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">✅ 확인 방법</h4>
            <p className="text-sm text-blue-700 mb-2">
              터미널에서 다음 명령어를 입력하여 설치를 확인하세요:
            </p>
            <div className="bg-black text-green-400 p-2 rounded font-mono text-sm">
              node --version
            </div>
            <p className="text-sm text-blue-700 mt-2">
              "v18.17.0" 같은 버전이 나타나면 설치 성공입니다!
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
    if (stepIndex < windowsSteps.length - 1) {
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
                <Download className="w-6 h-6 text-blue-500" />
                Node.js 설치 완벽 가이드
              </CardTitle>
              <p className="text-secondary-600 mt-2">
                초보자도 쉽게 따라할 수 있는 단계별 설치 가이드입니다
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
                currentStep === index ? 'ring-2 ring-blue-500' : ''
              } ${completedSteps.includes(index) ? 'bg-green-50 border-green-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        completedSteps.includes(index) ? 'bg-green-500 text-white' : 
                        currentStep === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
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
                        className="bg-blue-500 hover:bg-blue-600"
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
                    🎉 Node.js 설치 완료!
                  </h3>
                  <p className="text-green-700 mb-4">
                    이제 터미널에서 node --version을 입력하여 설치를 확인하세요.
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

export default NodejsInstallGuide; 