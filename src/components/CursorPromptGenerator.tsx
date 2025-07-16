'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Copy, CheckCircle, Sparkles, Terminal, Code, FileText, GitBranch } from 'lucide-react';

interface CursorPromptGeneratorProps {
  stepId: string;
  stepTitle: string;
  userProgress?: {
    completedSteps: string[];
    currentProject?: string;
    githubConnected?: boolean;
  };
}

const CursorPromptGenerator: React.FC<CursorPromptGeneratorProps> = ({
  stepId,
  stepTitle,
  userProgress = { completedSteps: [], githubConnected: false }
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [selectedPromptType, setSelectedPromptType] = useState<'setup' | 'code' | 'review' | 'deploy'>('setup');

  const copyToClipboard = async (text: string, promptType: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompt(promptType);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  const generatePrompt = (type: 'setup' | 'code' | 'review' | 'deploy') => {
    const baseContext = `
안녕하세요! 신승반점 웹사이트 개발 실습을 진행하고 있습니다.

현재 진행 상황:
- 단계: ${stepTitle}
- 완료된 단계: ${userProgress.completedSteps.join(', ') || '없음'}
- GitHub 연결 상태: ${userProgress.githubConnected ? '연결됨' : '미연결'}

프로젝트 요구사항:
- 인천 차이나타운 신승반점 웹사이트
- 반응형 디자인
- 초보자 친화적인 코드 구조
- 실습 교육용 프로젝트
`;

    const prompts = {
      setup: {
        title: '🔧 환경 설정 프롬프트',
        content: `${baseContext}

요청사항:
@Codebase 신승반점 웹사이트 프로젝트를 시작해주세요.

프로젝트 구조:
📁 shinseung-restaurant/
├── 📄 index.html (메인 페이지)
├── 📁 css/
│   ├── 📄 style.css (메인 스타일)
│   └── 📄 responsive.css (반응형 스타일)
├── 📁 js/
│   ├── 📄 main.js (메인 기능)
│   └── 📄 components.js (컴포넌트)
├── 📁 images/
│   └── 📄 .gitkeep
├── 📄 README.md
└── 📄 .gitignore

필요한 기본 파일들:
1. HTML5 기본 구조
2. CSS 리셋 및 기본 스타일
3. JavaScript 기본 설정
4. 반응형 디자인 기본 구조

초보자가 이해하기 쉽도록 주석을 상세히 달아주세요.`
      },
      code: {
        title: '💻 코드 작성 프롬프트', 
        content: `${baseContext}

요청사항:
${stepId}에 해당하는 코드를 작성해주세요.

구현해야 할 기능:
${getStepFeatures(stepId)}

코딩 가이드라인:
- 초보자가 이해하기 쉬운 코드 작성
- 한글 주석으로 상세한 설명
- 단계별로 나누어 구현
- 실시간 미리보기 가능한 구조
- 반응형 디자인 적용

실습 방식:
1. 먼저 전체 구조를 설명해주세요
2. 단계별로 코드를 작성해주세요
3. 각 단계마다 결과를 확인할 수 있게 해주세요
4. 완료 후 다음 단계 안내를 해주세요`
      },
      review: {
        title: '🔍 코드 리뷰 프롬프트',
        content: `${baseContext}

요청사항:
현재 작성된 코드를 리뷰해주세요.

리뷰 포인트:
- 코드 품질 및 구조
- 반응형 디자인 적용 상태
- 접근성 (accessibility) 준수
- 성능 최적화 가능성
- 초보자 친화적 코드 작성 여부

개선 제안:
- 더 나은 구조나 방법 제안
- 주석 추가 및 개선
- 오류 가능성 체크
- 다음 단계 준비사항

리뷰 결과를 단계별로 정리해서 알려주세요.`
      },
      deploy: {
        title: '🚀 배포 프롬프트',
        content: `${baseContext}

요청사항:
신승반점 웹사이트를 배포해주세요.

배포 단계:
1. GitHub 저장소 생성 및 업로드
2. Vercel/Netlify 배포 설정
3. 도메인 연결 (선택사항)
4. 배포 완료 확인

배포 가이드라인:
- 초보자도 따라할 수 있도록 단계별 안내
- 각 단계별 스크린샷 또는 상세 설명
- 오류 발생시 해결 방법 제시
- 최종 결과 확인 방법 안내

GitHub 연결 상태: ${userProgress.githubConnected ? '연결됨' : '미연결 (연결 방법 안내 필요)'}

배포 완료 후 실제 URL을 제공해주세요.`
      }
    };

    return prompts[type];
  };

  const getStepFeatures = (stepId: string) => {
    const features = {
      'setup': '개발 환경 설정 및 프로젝트 초기화',
      'html': 'HTML 기본 구조 (헤더, 메뉴, 매장정보, 푸터)',
      'css': 'CSS 스타일링 (레이아웃, 색상, 폰트, 반응형)',
      'javascript': 'JavaScript 기능 (메뉴 네비게이션, 이미지 갤러리, 연락처 폼)',
      'deploy': '웹사이트 배포 및 공개'
    };
    return features[stepId as keyof typeof features] || '해당 단계의 기능';
  };

  const getPromptsByStep = () => {
    const stepPrompts = {
      'setup': ['setup', 'code'],
      'html': ['code', 'review'],
      'css': ['code', 'review'],
      'javascript': ['code', 'review'],
      'deploy': ['deploy', 'review']
    };
    return stepPrompts[stepId as keyof typeof stepPrompts] || ['setup', 'code'];
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-500" />
            Cursor AI 프롬프터
            <Badge variant="secondary" className="ml-2">
              {stepTitle}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <Terminal className="h-4 w-4" />
            <AlertDescription>
              아래 프롬프트를 복사하여 Cursor AI에 붙여넣으세요. 
              각 단계별로 최적화된 프롬프트를 제공합니다.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              {getPromptsByStep().map(type => (
                <TabsTrigger key={type} value={type} className="flex items-center gap-2">
                  {type === 'setup' && <Code className="w-4 h-4" />}
                  {type === 'code' && <FileText className="w-4 h-4" />}
                  {type === 'review' && <CheckCircle className="w-4 h-4" />}
                  {type === 'deploy' && <GitBranch className="w-4 h-4" />}
                  {type === 'setup' && '환경설정'}
                  {type === 'code' && '코드작성'}
                  {type === 'review' && '리뷰'}
                  {type === 'deploy' && '배포'}
                </TabsTrigger>
              ))}
            </TabsList>

            {(['setup', 'code', 'review', 'deploy'] as const).map(type => (
              <TabsContent key={type} value={type} className="mt-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center justify-between">
                      {generatePrompt(type).title}
                      <Button
                        onClick={() => copyToClipboard(generatePrompt(type).content, type)}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        {copiedPrompt === type ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            복사됨!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            복사하기
                          </>
                        )}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                      <pre className="text-sm whitespace-pre-wrap text-gray-800 font-mono">
                        {generatePrompt(type).content}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* 사용법 안내 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary-500" />
            사용법 안내
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold">Cursor 실행</h4>
                <p className="text-sm text-gray-600">Cursor IDE를 실행하고 프로젝트 폴더를 엽니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold">프롬프트 복사</h4>
                <p className="text-sm text-gray-600">위의 '복사하기' 버튼을 클릭하여 프롬프트를 복사합니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold">AI 채팅</h4>
                <p className="text-sm text-gray-600">Cursor의 AI 채팅 (Ctrl+L)을 열고 복사한 프롬프트를 붙여넣습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-semibold">실행 및 확인</h4>
                <p className="text-sm text-gray-600">AI가 제공하는 코드를 실행하고 결과를 확인합니다.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CursorPromptGenerator; 