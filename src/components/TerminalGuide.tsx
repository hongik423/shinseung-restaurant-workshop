'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Terminal, Play, Copy, ChevronRight, Monitor, Apple, Zap, CheckCircle } from 'lucide-react';

interface TerminalGuideProps {
  onComplete: () => void;
}

const TerminalGuide: React.FC<TerminalGuideProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const windowsSteps = [
    {
      title: '1단계: 명령 프롬프트 열기',
      description: 'Windows에서 명령 프롬프트를 여는 방법을 배워보세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">💡 3가지 방법으로 열 수 있습니다:</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">방법 1</Badge>
                <span className="text-sm">Windows키 + R → "cmd" 입력 → Enter</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">방법 2</Badge>
                <span className="text-sm">시작 메뉴 → "명령 프롬프트" 검색</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">방법 3</Badge>
                <span className="text-sm">Windows키 + X → "Windows PowerShell" 선택</span>
              </div>
            </div>
          </div>
          <Alert>
            <Terminal className="w-4 h-4" />
            <AlertDescription>
              <strong>주의사항:</strong> 명령 프롬프트나 PowerShell 둘 다 사용할 수 있습니다. 
              PowerShell이 더 강력하고 추천됩니다.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '2단계: 터미널 화면 이해하기',
      description: '터미널 화면의 구성 요소를 알아보세요',
      content: (
        <div className="space-y-4">
          <div className="bg-black text-white p-4 rounded-lg font-mono text-sm">
            <div className="text-green-400">Microsoft Windows [Version 10.0.26100.4652]</div>
            <div className="text-green-400">(c) Microsoft Corporation. All rights reserved.</div>
            <div className="mt-2">
              <span className="text-blue-400">C:\Users\사용자명&gt;</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-semibold text-green-800">현재 경로</h4>
              <p className="text-sm text-green-700">C:\Users\사용자명&gt; 부분은 현재 위치를 나타냅니다</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-blue-800">커서</h4>
              <p className="text-sm text-blue-700">깜빡이는 _ 표시는 명령어를 입력할 수 있는 위치입니다</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '3단계: 첫 번째 명령어 실행',
      description: '간단한 명령어를 실행해보세요',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📝 실습: 현재 날짜 확인하기</h4>
            <p className="text-sm text-secondary-600 mb-3">
              먼저 간단한 명령어로 연습해보겠습니다.
            </p>
            <div className="bg-black text-white p-3 rounded font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">C:\Users\사용자명&gt;</span>
                <span className="text-yellow-400">date</span>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <p className="text-sm">1. 위의 명령어를 정확히 입력하세요</p>
              <p className="text-sm">2. Enter 키를 누르세요</p>
              <p className="text-sm">3. 현재 날짜가 표시되면 성공입니다!</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const macSteps = [
    {
      title: '1단계: 터미널 열기',
      description: 'Mac에서 터미널을 여는 방법을 배워보세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">💡 3가지 방법으로 열 수 있습니다:</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">방법 1</Badge>
                <span className="text-sm">Command + Space → "터미널" 입력</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">방법 2</Badge>
                <span className="text-sm">응용 프로그램 → 유틸리티 → 터미널</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">방법 3</Badge>
                <span className="text-sm">Launchpad → 기타 → 터미널</span>
              </div>
            </div>
          </div>
          <Alert>
            <Terminal className="w-4 h-4" />
            <AlertDescription>
              <strong>추천:</strong> 자주 사용하게 되니 독에 터미널을 추가해두세요!
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '2단계: 터미널 화면 이해하기',
      description: '터미널 화면의 구성 요소를 알아보세요',
      content: (
        <div className="space-y-4">
          <div className="bg-black text-white p-4 rounded-lg font-mono text-sm">
            <div className="text-green-400">Last login: Thu Jan 16 20:30:45 on ttys000</div>
            <div className="mt-2">
              <span className="text-blue-400">사용자명@MacBook-Pro ~ %</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-semibold text-green-800">프롬프트</h4>
              <p className="text-sm text-green-700">사용자명@컴퓨터명 ~ % 부분은 현재 상태를 나타냅니다</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-blue-800">홈 디렉토리</h4>
              <p className="text-sm text-blue-700">~ 표시는 홈 디렉토리(사용자 폴더)를 의미합니다</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '3단계: 첫 번째 명령어 실행',
      description: '간단한 명령어를 실행해보세요',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📝 실습: 현재 날짜 확인하기</h4>
            <p className="text-sm text-secondary-600 mb-3">
              먼저 간단한 명령어로 연습해보겠습니다.
            </p>
            <div className="bg-black text-white p-3 rounded font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">사용자명@MacBook-Pro ~ %</span>
                <span className="text-yellow-400">date</span>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <p className="text-sm">1. 위의 명령어를 정확히 입력하세요</p>
              <p className="text-sm">2. Enter 키를 누르세요</p>
              <p className="text-sm">3. 현재 날짜가 표시되면 성공입니다!</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const commonTips = [
    {
      title: '기본 명령어 익히기',
      items: [
        { command: 'pwd', description: '현재 디렉토리 확인 (Mac/Linux)' },
        { command: 'cd', description: '현재 디렉토리 확인 (Windows)' },
        { command: 'ls', description: '파일 목록 보기 (Mac/Linux)' },
        { command: 'dir', description: '파일 목록 보기 (Windows)' },
        { command: 'clear', description: '화면 지우기 (Mac/Linux)' },
        { command: 'cls', description: '화면 지우기 (Windows)' }
      ]
    },
    {
      title: '유용한 단축키',
      items: [
        { command: 'Tab', description: '명령어/파일명 자동 완성' },
        { command: '↑/↓', description: '이전/다음 명령어 기록' },
        { command: 'Ctrl+C', description: '현재 명령어 중단' },
        { command: 'Ctrl+L', description: '화면 지우기 (Linux/Mac)' },
        { command: 'Ctrl+A', description: '줄 맨 앞으로 이동' },
        { command: 'Ctrl+E', description: '줄 맨 뒤로 이동' }
      ]
    }
  ];

  const markStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Terminal className="w-6 h-6" />
          터미널 사용법 완벽 가이드
        </CardTitle>
        <p className="text-sm text-secondary-600">
          처음 터미널을 사용하는 분들을 위한 단계별 가이드입니다. 천천히 따라해보세요!
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">기본 사용법</TabsTrigger>
            <TabsTrigger value="windows">Windows</TabsTrigger>
            <TabsTrigger value="mac">Mac</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tip.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3 p-2 bg-secondary-50 rounded">
                          <code className="bg-secondary-200 px-2 py-1 rounded text-sm font-mono">
                            {item.command}
                          </code>
                          <span className="text-sm text-secondary-600">{item.description}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="windows" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Windows 사용자 가이드</h3>
            </div>
            {windowsSteps.map((step, index) => (
              <Card key={index} className={`${completedSteps.includes(index) ? 'bg-green-50 border-green-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {completedSteps.includes(index) ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                      )}
                      {step.title}
                    </CardTitle>
                    {!completedSteps.includes(index) && (
                      <Button
                        size="sm"
                        onClick={() => markStepComplete(index)}
                        variant="outline"
                      >
                        완료
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-secondary-600">{step.description}</p>
                </CardHeader>
                <CardContent>
                  {step.content}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="mac" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Apple className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold">Mac 사용자 가이드</h3>
            </div>
            {macSteps.map((step, index) => (
              <Card key={index} className={`${completedSteps.includes(index) ? 'bg-green-50 border-green-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {completedSteps.includes(index) ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                      )}
                      {step.title}
                    </CardTitle>
                    {!completedSteps.includes(index) && (
                      <Button
                        size="sm"
                        onClick={() => markStepComplete(index)}
                        variant="outline"
                      >
                        완료
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-secondary-600">{step.description}</p>
                </CardHeader>
                <CardContent>
                  {step.content}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">🎉 축하합니다!</h4>
          <p className="text-sm text-green-700 mb-4">
            터미널 사용법을 익혔다면 이제 실제 개발 환경 설정을 시작할 수 있습니다.
          </p>
          <Button 
            onClick={onComplete}
            className="bg-green-500 hover:bg-green-600"
          >
            환경 설정 시작하기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TerminalGuide; 