'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Terminal, CheckCircle, Github, Play, Code } from 'lucide-react';
import Link from 'next/link';

import CursorPromptGenerator from '@/components/CursorPromptGenerator';
import ProgressTracker from '@/components/ProgressTracker';
import ActionGuide from '@/components/ActionGuide';
import EnhancedGitHubGuide from '@/components/EnhancedGitHubGuide';

const HTMLPage = () => {
  const [currentStep, setCurrentStep] = useState('html');
  const [showGitHubGuide, setShowGitHubGuide] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedSteps: ['setup'] as string[],
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-8 h-8 text-green-500" />
                HTML 기초
              </h1>
              <p className="text-gray-600 mt-2">
                웹페이지의 기본 구조를 만들고 신승반점 사이트를 구성해보세요
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">2단계 / 5단계</Badge>
              <Badge variant="secondary">소요시간: 30분</Badge>
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
              stepId="html"
              onActionComplete={handleActionComplete}
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="cursor" className="mt-6">
            <CursorPromptGenerator
              stepId="html"
              stepTitle="HTML 기초"
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="github" className="mt-6">
            {showGitHubGuide ? (
              <EnhancedGitHubGuide
                onComplete={handleGitHubComplete}
                onCancel={() => setShowGitHubGuide(false)}
                currentStep="html"
                userProgress={userProgress}
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-800" />
                    GitHub 코드 저장
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      작성한 HTML 코드를 GitHub에 저장하고 버전 관리를 시작하세요.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => setShowGitHubGuide(true)}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub에 코드 저장
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
                    <Code className="w-5 h-5 text-green-500" />
                    HTML 학습 목표
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">HTML5 기본 구조</h3>
                        <p className="text-sm text-gray-600">DOCTYPE, html, head, body 태그 이해</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Code className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">시맨틱 태그</h3>
                        <p className="text-sm text-gray-600">header, nav, main, section, footer 활용</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Terminal className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">콘텐츠 구조화</h3>
                        <p className="text-sm text-gray-600">제목, 단락, 목록, 링크 구성</p>
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
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">신승반점 웹사이트 기본 구조</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">헤더와 네비게이션 메뉴</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">메인 콘텐츠 영역</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">메뉴 소개 섹션</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">연락처 정보 푸터</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* HTML 구조 미리보기 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>HTML 구조 미리보기</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>신승반점 - 인천 차이나타운 맛집</title>
</head>
<body>
    <header>
        <nav>
            <h1>신승반점</h1>
            <ul>
                <li><a href="#home">홈</a></li>
                <li><a href="#menu">메뉴</a></li>
                <li><a href="#about">소개</a></li>
                <li><a href="#contact">연락처</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>인천 차이나타운 대표 맛집</h2>
            <p>1970년부터 이어온 전통의 맛</p>
        </section>
        
        <section id="menu">
            <h2>대표 메뉴</h2>
            <!-- 메뉴 항목들 -->
        </section>
    </main>
    
    <footer>
        <p>연락처: 032-123-4567</p>
        <p>주소: 인천광역시 중구 차이나타운로 123</p>
    </footer>
</body>
</html>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between">
          <Link href="/learning/setup">
            <Button variant="outline">
              ← 환경 설정
            </Button>
          </Link>
          <Link href="/learning/css">
            <Button className="bg-green-500 hover:bg-green-600">
              CSS 스타일링 →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HTMLPage; 