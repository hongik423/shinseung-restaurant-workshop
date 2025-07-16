'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Download, Terminal, CheckCircle, Github, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

import CursorPromptGenerator from '@/components/CursorPromptGenerator';
import ProgressTracker from '@/components/ProgressTracker';
import ActionGuide from '@/components/ActionGuide';
import EnhancedGitHubGuide from '@/components/EnhancedGitHubGuide';

const CSSPage = () => {
  const [currentStep, setCurrentStep] = useState('css');
  const [showGitHubGuide, setShowGitHubGuide] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedSteps: ['setup', 'html'] as string[],
    completedActions: [] as string[],
    currentProject: 'shinseung-restaurant',
    githubConnected: false,
    timeSpent: 0
  });

  const handleStepComplete = (stepId: string) => {
    setUserProgress(prev => ({
      ...prev,
      completedSteps: [...prev.completedSteps.filter(id => id !== stepId), stepId]
    }));
  };

  const handleActionComplete = (actionId: string) => {
    setUserProgress(prev => ({
      ...prev,
      completedActions: [...prev.completedActions.filter(id => id !== actionId), actionId]
    }));
  };

  const handleGitHubComplete = (userData: any) => {
    setUserProgress(prev => ({
      ...prev,
      githubConnected: true
    }));
    setShowGitHubGuide(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Palette className="w-8 h-8 text-purple-500" />
                CSS 스타일링
              </h1>
              <p className="text-gray-600 mt-2">
                아름다운 디자인을 입혀서 신승반점 웹사이트를 완성해보세요
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">3단계 / 5단계</Badge>
              <Badge variant="secondary">소요시간: 60분</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 진행률 트래커 */}
        <div className="mb-8">
          <ProgressTracker
            currentStep={currentStep}
            onStepComplete={handleStepComplete}
            onStepChange={setCurrentStep}
            userProgress={userProgress}
          />
        </div>

        {/* 메인 콘텐츠 */}
        <Tabs defaultValue="guide" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              실습 가이드
            </TabsTrigger>
            <TabsTrigger value="cursor" className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Cursor 프롬프터
            </TabsTrigger>
            <TabsTrigger value="github" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub 연동
            </TabsTrigger>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              전체 개요
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guide" className="mt-6">
            <ActionGuide
              stepId="css"
              onActionComplete={handleActionComplete}
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="cursor" className="mt-6">
            <CursorPromptGenerator
              stepId="css"
              stepTitle="CSS 스타일링"
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="github" className="mt-6">
            {showGitHubGuide ? (
              <EnhancedGitHubGuide
                onComplete={handleGitHubComplete}
                onCancel={() => setShowGitHubGuide(false)}
                currentStep="css"
                userProgress={userProgress}
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-800" />
                    CSS 코드 저장 및 버전 관리
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      작성한 CSS 스타일 코드를 GitHub에 저장하고 변경 사항을 추적해보세요.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => setShowGitHubGuide(true)}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub에 스타일 저장
                      </Button>
                      {userProgress.githubConnected && (
                        <Badge variant="outline" className="text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          연결됨
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    CSS 학습 목표
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Palette className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">기본 스타일링</h3>
                        <p className="text-sm text-gray-600">색상, 폰트, 레이아웃 기본 속성</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Download className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">레이아웃 구성</h3>
                        <p className="text-sm text-gray-600">Flexbox, Grid를 활용한 레이아웃</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Terminal className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">반응형 디자인</h3>
                        <p className="text-sm text-gray-600">미디어 쿼리로 모바일 대응</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    완성 결과물
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">중국 음식점 테마 색상 적용</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">아름다운 헤더 디자인</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">메뉴 카드 레이아웃</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">호버 효과 및 애니메이션</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">모바일 반응형 디자인</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CSS 스타일 미리보기 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>CSS 스타일 미리보기</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`/* 기본 스타일 초기화 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 기본 폰트 및 색상 */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

/* 헤더 스타일 */
header {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* 네비게이션 스타일 */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 메뉴 그리드 */
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
}

/* 메뉴 아이템 스타일 */
.menu-item {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.menu-item:hover {
    transform: translateY(-5px);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
    .menu-grid {
        grid-template-columns: 1fr;
    }
    
    nav {
        flex-direction: column;
        gap: 1rem;
    }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* 색상 팔레트 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>신승반점 색상 팔레트</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-full h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">메인 컬러</p>
                    <p className="text-xs text-gray-600">#ff6b6b - #ee5a24</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-yellow-400 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">액센트 컬러</p>
                    <p className="text-xs text-gray-600">#ffd700</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-gray-800 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">텍스트 컬러</p>
                    <p className="text-xs text-gray-600">#2c3e50</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-gray-100 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">배경 컬러</p>
                    <p className="text-xs text-gray-600">#f4f4f4</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between">
          <Link href="/learning/html">
            <Button variant="outline">
              ← HTML 기초
            </Button>
          </Link>
          <Link href="/learning/javascript">
            <Button className="bg-purple-500 hover:bg-purple-600">
              JavaScript 기능 →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CSSPage; 