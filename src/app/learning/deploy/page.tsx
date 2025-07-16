'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Rocket, Download, Terminal, CheckCircle, Github, Play, Globe, Upload } from 'lucide-react';
import Link from 'next/link';

import CursorPromptGenerator from '@/components/CursorPromptGenerator';
import ProgressTracker from '@/components/ProgressTracker';
import ActionGuide from '@/components/ActionGuide';
import EnhancedGitHubGuide from '@/components/EnhancedGitHubGuide';

const DeployPage = () => {
  const [currentStep, setCurrentStep] = useState('deploy');
  const [showGitHubGuide, setShowGitHubGuide] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedSteps: ['setup', 'html', 'css', 'javascript'] as string[],
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Rocket className="w-8 h-8 text-blue-500" />
                배포하기
              </h1>
              <p className="text-gray-600 mt-2">
                완성된 신승반점 웹사이트를 실제 인터넷에 공개해보세요
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">5단계 / 5단계</Badge>
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
              stepId="deploy"
              onActionComplete={handleActionComplete}
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="cursor" className="mt-6">
            <CursorPromptGenerator
              stepId="deploy"
              stepTitle="배포하기"
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="github" className="mt-6">
            {showGitHubGuide ? (
              <EnhancedGitHubGuide
                onComplete={handleGitHubComplete}
                onCancel={() => setShowGitHubGuide(false)}
                currentStep="deploy"
                userProgress={userProgress}
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-800" />
                    GitHub 최종 배포
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      완성된 프로젝트를 GitHub에 업로드하고 실제 웹사이트로 배포해보세요.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => setShowGitHubGuide(true)}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub 배포 시작
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
                    <Rocket className="w-5 h-5 text-blue-500" />
                    배포 학습 목표
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Upload className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">GitHub 업로드</h3>
                        <p className="text-sm text-gray-600">코드 저장소에 프로젝트 업로드</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">웹사이트 배포</h3>
                        <p className="text-sm text-gray-600">Vercel을 통한 실제 배포</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">도메인 연결</h3>
                        <p className="text-sm text-gray-600">실제 URL로 접속 가능</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    배포 완료 후 결과
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">실제 접속 가능한 웹사이트</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">공유 가능한 URL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">자동 HTTPS 보안</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">모바일 최적화</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">빠른 로딩 속도</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 배포 과정 설명 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>배포 과정 설명</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Github className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">1. GitHub 업로드</h3>
                    <p className="text-sm text-gray-600">
                      작성한 모든 코드를 GitHub 저장소에 업로드합니다.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">2. Vercel 배포</h3>
                    <p className="text-sm text-gray-600">
                      Vercel과 GitHub를 연결하여 자동 배포를 설정합니다.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">3. 웹사이트 확인</h3>
                    <p className="text-sm text-gray-600">
                      실제 URL로 접속하여 웹사이트가 정상 작동하는지 확인합니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 배포 명령어 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>배포 명령어 모음</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Git 초기 설정</h4>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`git init
git add .
git commit -m "신승반점 웹사이트 초기 버전"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shinseung-restaurant.git
git push -u origin main`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">코드 업데이트</h4>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`git add .
git commit -m "웹사이트 업데이트"
git push origin main`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">배포 상태 확인</h4>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`git status
git log --oneline
git remote -v`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 배포 플랫폼 비교 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>배포 플랫폼 비교</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-blue-600">Vercel</h4>
                    <ul className="text-sm space-y-1">
                      <li>✅ 무료 플랜</li>
                      <li>✅ 자동 배포</li>
                      <li>✅ 빠른 CDN</li>
                      <li>✅ 초보자 친화적</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Netlify</h4>
                    <ul className="text-sm space-y-1">
                      <li>✅ 무료 플랜</li>
                      <li>✅ 폼 처리</li>
                      <li>✅ 분석 도구</li>
                      <li>✅ 플러그인 지원</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-purple-600">GitHub Pages</h4>
                    <ul className="text-sm space-y-1">
                      <li>✅ 완전 무료</li>
                      <li>✅ GitHub 통합</li>
                      <li>✅ 간단한 설정</li>
                      <li>⚠️ 정적 사이트만</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 완료 축하 섹션 */}
        {userProgress.completedSteps.includes('deploy') && (
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="pt-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  🎉 축하합니다! 프로젝트 완성!
                </h3>
                <p className="text-gray-600 mb-6">
                  신승반점 웹사이트가 성공적으로 배포되었습니다. 
                  이제 전 세계 누구나 접속할 수 있는 실제 웹사이트가 완성되었습니다!
                </p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <Globe className="w-4 h-4 mr-2" />
                    웹사이트 방문하기
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    수료증 다운로드
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between">
          <Link href="/learning/javascript">
            <Button variant="outline">
              ← JavaScript 기능
            </Button>
          </Link>
          <Link href="/learning">
            <Button className="bg-blue-500 hover:bg-blue-600">
              학습 완료 →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeployPage; 