'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Download, Terminal, CheckCircle, Github, Play } from 'lucide-react';
import Link from 'next/link';

import CursorPromptGenerator from '@/components/CursorPromptGenerator';
import ProgressTracker from '@/components/ProgressTracker';
import ActionGuide from '@/components/ActionGuide';
import EnhancedGitHubGuide from '@/components/EnhancedGitHubGuide';
import PracticeMonitor from '@/components/PracticeMonitor';

const SetupPage = () => {
  const [currentStep, setCurrentStep] = useState('setup');
  const [showGitHubGuide, setShowGitHubGuide] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedSteps: [] as string[],
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

  const handlePracticeProgress = (progress: any) => {
    setUserProgress(prev => ({
      ...prev,
      timeSpent: prev.timeSpent + 1
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Settings className="w-8 h-8 text-blue-500" />
                환경 설정
              </h1>
              <p className="text-gray-600 mt-2">
                개발 환경을 설정하고 Cursor로 프로젝트를 시작해보세요
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">1단계 / 5단계</Badge>
              <Badge variant="secondary">소요시간: 20분</Badge>
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
              stepId="setup"
              onActionComplete={handleActionComplete}
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="cursor" className="mt-6">
            <CursorPromptGenerator
              stepId="setup"
              stepTitle="환경 설정"
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="github" className="mt-6">
            {showGitHubGuide ? (
              <EnhancedGitHubGuide
                onComplete={handleGitHubComplete}
                onCancel={() => setShowGitHubGuide(false)}
                currentStep="setup"
                userProgress={userProgress}
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-800" />
                    GitHub 계정 연동
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      코드를 저장하고 웹사이트를 배포하기 위해 GitHub 계정이 필요합니다.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => setShowGitHubGuide(true)}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub 연동 시작
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
                    <Download className="w-5 h-5 text-blue-500" />
                    설치할 도구들
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Terminal className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Node.js</h3>
                        <p className="text-sm text-gray-600">JavaScript 런타임 환경</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Settings className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Cursor IDE</h3>
                        <p className="text-sm text-gray-600">AI 통합 개발환경</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Github className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">GitHub</h3>
                        <p className="text-sm text-gray-600">코드 저장소 서비스</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    설정 완료 후 할 일
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">프로젝트 폴더 생성</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Cursor에서 폴더 열기</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Git 저장소 초기화</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">GitHub 계정 연결</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between">
          <Link href="/learning">
            <Button variant="outline">
              ← 학습 목록으로
            </Button>
          </Link>
          <Link href="/learning/html">
            <Button className="bg-blue-500 hover:bg-blue-600">
              HTML 학습하기 →
            </Button>
          </Link>
        </div>
      </div>
      
      {/* 실습 모니터링 시스템 */}
      <PracticeMonitor
        projectPath="/learning/setup"
        onProgress={handlePracticeProgress}
      />
    </div>
  );
};

export default SetupPage; 