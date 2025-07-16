'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Download, Terminal, CheckCircle, Github, Play, Code, MousePointer } from 'lucide-react';
import Link from 'next/link';

import CursorPromptGenerator from '@/components/CursorPromptGenerator';
import ProgressTracker from '@/components/ProgressTracker';
import ActionGuide from '@/components/ActionGuide';
import EnhancedGitHubGuide from '@/components/EnhancedGitHubGuide';

const JavaScriptPage = () => {
  const [currentStep, setCurrentStep] = useState('javascript');
  const [showGitHubGuide, setShowGitHubGuide] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedSteps: ['setup', 'html', 'css'] as string[],
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Zap className="w-8 h-8 text-yellow-500" />
                JavaScript 기능
              </h1>
              <p className="text-gray-600 mt-2">
                동적인 기능을 추가해서 신승반점 웹사이트를 완성해보세요
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">4단계 / 5단계</Badge>
              <Badge variant="secondary">소요시간: 40분</Badge>
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
              stepId="javascript"
              onActionComplete={handleActionComplete}
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="cursor" className="mt-6">
            <CursorPromptGenerator
              stepId="javascript"
              stepTitle="JavaScript 기능"
              userProgress={userProgress}
            />
          </TabsContent>

          <TabsContent value="github" className="mt-6">
            {showGitHubGuide ? (
              <EnhancedGitHubGuide
                onComplete={handleGitHubComplete}
                onCancel={() => setShowGitHubGuide(false)}
                currentStep="javascript"
                userProgress={userProgress}
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-800" />
                    JavaScript 코드 저장 및 관리
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      작성한 JavaScript 코드를 GitHub에 저장하고 기능별로 버전 관리를 해보세요.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => setShowGitHubGuide(true)}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub에 JS 코드 저장
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
                    <Zap className="w-5 h-5 text-yellow-500" />
                    JavaScript 학습 목표
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <MousePointer className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">상호작용 기능</h3>
                        <p className="text-sm text-gray-600">클릭, 호버, 스크롤 이벤트 처리</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Code className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">DOM 조작</h3>
                        <p className="text-sm text-gray-600">요소 선택, 스타일 변경, 동적 콘텐츠</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">폼 검증</h3>
                        <p className="text-sm text-gray-600">입력값 검증 및 오류 처리</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    구현할 기능들
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">부드러운 네비게이션 스크롤</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">메뉴 아이템 클릭 상호작용</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">이미지 갤러리 기능</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">예약 폼 검증</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">모바일 햄버거 메뉴</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* JavaScript 코드 예시 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>JavaScript 기능 예시</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// 부드러운 스크롤 기능
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 메뉴 아이템 상호작용
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const menuName = this.querySelector('h3').textContent;
        const price = this.querySelector('.price').textContent;
        
        alert(\`\${menuName} - \${price}\`);
    });
    
    // 호버 효과
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 예약 폼 검증
const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        
        if (!name || !phone || !date) {
            alert('모든 필수 항목을 입력해주세요.');
            return;
        }
        
        alert('예약이 완료되었습니다!');
        this.reset();
    });
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* 기능별 설명 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">이벤트 리스너</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      • <code className="bg-gray-100 px-2 py-1 rounded">addEventListener</code> - 이벤트 등록
                    </p>
                    <p className="text-sm text-gray-600">
                      • <code className="bg-gray-100 px-2 py-1 rounded">click</code> - 클릭 이벤트
                    </p>
                    <p className="text-sm text-gray-600">
                      • <code className="bg-gray-100 px-2 py-1 rounded">mouseenter/mouseleave</code> - 호버 이벤트
                    </p>
                    <p className="text-sm text-gray-600">
                      • <code className="bg-gray-100 px-2 py-1 rounded">submit</code> - 폼 제출 이벤트
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">DOM 조작</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      • <code className="bg-gray-100 px-2 py-1 rounded">querySelector</code> - 요소 선택
                    </p>
                    <p className="text-sm text-gray-600">
                      • <code className="bg-gray-100 px-2 py-1 rounded">textContent</code> - 텍스트 내용
                    </p>
                    <p className="text-sm text-gray-600">
                      • <code className="bg-gray-100 px-2 py-1 rounded">style</code> - 스타일 변경
                    </p>
                    <p className="text-sm text-gray-600">
                      • <code className="bg-gray-100 px-2 py-1 rounded">scrollIntoView</code> - 스크롤 이동
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between">
          <Link href="/learning/css">
            <Button variant="outline">
              ← CSS 스타일링
            </Button>
          </Link>
          <Link href="/learning/deploy">
            <Button className="bg-yellow-500 hover:bg-yellow-600">
              배포하기 →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptPage; 