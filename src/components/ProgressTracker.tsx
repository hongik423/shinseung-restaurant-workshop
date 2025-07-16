'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  AlertTriangle, 
  Trophy, 
  Target,
  PlayCircle,
  FileText,
  Code,
  Palette,
  Zap,
  Rocket,
  Github,
  Eye,
  HelpCircle,
  RefreshCw,
  ChevronRight
} from 'lucide-react';

interface ProgressTrackerProps {
  currentStep: string;
  onStepComplete: (stepId: string) => void;
  onStepChange: (stepId: string) => void;
  userProgress?: {
    completedSteps: string[];
    currentProject?: string;
    githubConnected?: boolean;
    timeSpent?: number;
  };
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  currentStep,
  onStepComplete,
  onStepChange,
  userProgress = { completedSteps: [], githubConnected: false, timeSpent: 0 }
}) => {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  const [timeSpent, setTimeSpent] = useState(userProgress.timeSpent || 0);
  const [currentStepTime, setCurrentStepTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
      setCurrentStepTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [itemId]: checked }));
    
    // 체크박스 상태에 따라 진행률 업데이트
    const stepData = steps.find(s => s.id === currentStep);
    if (stepData) {
      const allItems = stepData.checklistItems || [];
      const completedItems = allItems.filter(item => 
        checkedItems[item.id] || (item.id === itemId && checked)
      );
      
      if (completedItems.length === allItems.length) {
        onStepComplete(currentStep);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}시간 ${minutes}분`;
    } else if (minutes > 0) {
      return `${minutes}분 ${secs}초`;
    } else {
      return `${secs}초`;
    }
  };

  const steps = [
    {
      id: 'setup',
      title: '환경 설정',
      description: '개발 환경을 자동으로 설정합니다',
      duration: '20분',
      icon: <Code className="w-5 h-5" />,
      color: 'bg-blue-500',
      checklistItems: [
        { id: 'nodejs-install', label: 'Node.js 설치 완료' },
        { id: 'cursor-install', label: 'Cursor IDE 설치 완료' },
        { id: 'project-create', label: '프로젝트 폴더 생성' },
        { id: 'files-setup', label: '기본 파일 구조 설정' },
        { id: 'git-init', label: 'Git 초기화 완료' }
      ]
    },
    {
      id: 'html',
      title: 'HTML 기초',
      description: '웹페이지의 기본 구조를 만들어보세요',
      duration: '30분',
      icon: <FileText className="w-5 h-5" />,
      color: 'bg-green-500',
      checklistItems: [
        { id: 'html-structure', label: '기본 HTML 구조 작성' },
        { id: 'header-section', label: '헤더 섹션 완성' },
        { id: 'menu-section', label: '메뉴 섹션 완성' },
        { id: 'content-section', label: '컨텐츠 섹션 완성' },
        { id: 'footer-section', label: '푸터 섹션 완성' },
        { id: 'html-validation', label: 'HTML 유효성 검사 통과' }
      ]
    },
    {
      id: 'css',
      title: 'CSS 스타일링',
      description: '예쁜 디자인을 입혀보세요',
      duration: '60분',
      icon: <Palette className="w-5 h-5" />,
      color: 'bg-purple-500',
      checklistItems: [
        { id: 'css-reset', label: 'CSS 초기화 및 기본 스타일' },
        { id: 'layout-design', label: '레이아웃 디자인 완성' },
        { id: 'color-scheme', label: '색상 스키마 적용' },
        { id: 'typography', label: '타이포그래피 설정' },
        { id: 'responsive-design', label: '반응형 디자인 적용' },
        { id: 'animations', label: '애니메이션 효과 추가' }
      ]
    },
    {
      id: 'javascript',
      title: 'JavaScript 기능',
      description: '동적인 기능을 추가해보세요',
      duration: '40분',
      icon: <Zap className="w-5 h-5" />,
      color: 'bg-yellow-500',
      checklistItems: [
        { id: 'js-setup', label: 'JavaScript 기본 설정' },
        { id: 'menu-navigation', label: '메뉴 네비게이션 기능' },
        { id: 'image-gallery', label: '이미지 갤러리 기능' },
        { id: 'contact-form', label: '연락처 폼 기능' },
        { id: 'scroll-effects', label: '스크롤 효과 추가' },
        { id: 'js-validation', label: 'JavaScript 오류 검사' }
      ]
    },
    {
      id: 'deploy',
      title: '배포하기',
      description: '실제 인터넷에 공개해보세요',
      duration: '20분',
      icon: <Rocket className="w-5 h-5" />,
      color: 'bg-red-500',
      checklistItems: [
        { id: 'github-setup', label: 'GitHub 저장소 생성' },
        { id: 'code-commit', label: '코드 커밋 및 푸시' },
        { id: 'vercel-deploy', label: 'Vercel 배포 완료' },
        { id: 'domain-check', label: '도메인 연결 확인' },
        { id: 'final-test', label: '최종 기능 테스트' },
        { id: 'deployment-complete', label: '배포 완료 인증' }
      ]
    }
  ];

  const currentStepData = steps.find(s => s.id === currentStep);
  const currentStepIndex = steps.findIndex(s => s.id === currentStep);
  const totalSteps = steps.length;
  const completedStepCount = userProgress.completedSteps.length;
  const overallProgress = (completedStepCount / totalSteps) * 100;

  const getStepStatus = (stepId: string) => {
    if (userProgress.completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  const getStepProgress = (stepId: string) => {
    const stepData = steps.find(s => s.id === stepId);
    if (!stepData) return 0;
    
    const totalItems = stepData.checklistItems.length;
    const completedItems = stepData.checklistItems.filter(item => 
      checkedItems[item.id]
    ).length;
    
    return (completedItems / totalItems) * 100;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 전체 진행률 대시보드 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary-500" />
            전체 진행률 대시보드
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600">완료된 단계</p>
                  <p className="text-2xl font-bold text-blue-800">{completedStepCount}/{totalSteps}</p>
                </div>
                <Trophy className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600">진행률</p>
                  <p className="text-2xl font-bold text-green-800">{Math.round(overallProgress)}%</p>
                </div>
                <Target className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600">소요 시간</p>
                  <p className="text-2xl font-bold text-purple-800">{formatTime(timeSpent)}</p>
                </div>
                <Clock className="w-8 h-8 text-purple-500" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">전체 진행률</span>
              <span className="text-sm text-gray-600">{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* 단계별 진행 상황 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 단계 목록 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary-500" />
              학습 단계
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {steps.map((step, index) => {
                const status = getStepStatus(step.id);
                const progress = getStepProgress(step.id);
                
                return (
                  <div
                    key={step.id}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      status === 'current' ? 'border-blue-500 bg-blue-50' :
                      status === 'completed' ? 'border-green-500 bg-green-50' :
                      'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => onStepChange(step.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          status === 'completed' ? 'bg-green-500 text-white' :
                          status === 'current' ? 'bg-blue-500 text-white' :
                          'bg-gray-200'
                        }`}>
                          {status === 'completed' ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            step.icon
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{step.title}</h3>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {step.duration}
                        </Badge>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    
                    {status !== 'pending' && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>진행률</span>
                          <span>{Math.round(progress)}%</span>
                        </div>
                        <Progress value={progress} className="h-2 mt-1" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 현재 단계 상세 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {currentStepData?.icon}
              {currentStepData?.title} 체크리스트
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{currentStepData?.duration}</Badge>
              <Badge variant="outline">
                {formatTime(currentStepTime)} 진행 중
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {currentStepData && (
              <div className="space-y-4">
                <Alert>
                  <PlayCircle className="h-4 w-4" />
                  <AlertDescription>
                    {currentStepData.description}
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  {currentStepData.checklistItems.map((item, index) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.id}
                        checked={checkedItems[item.id] || false}
                        onCheckedChange={(checked) => handleCheckboxChange(item.id, checked as boolean)}
                      />
                      <label
                        htmlFor={item.id}
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                          checkedItems[item.id] ? 'line-through text-gray-500' : ''
                        }`}
                      >
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span>단계 완료율</span>
                    <span>{Math.round(getStepProgress(currentStep))}%</span>
                  </div>
                  <Progress value={getStepProgress(currentStep)} className="h-2 mt-1" />
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => {
                      // 모든 항목 체크
                      const newCheckedItems = { ...checkedItems };
                      currentStepData.checklistItems.forEach(item => {
                        newCheckedItems[item.id] = true;
                      });
                      setCheckedItems(newCheckedItems);
                      onStepComplete(currentStep);
                    }}
                    className="flex-1"
                    disabled={getStepProgress(currentStep) === 100}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    단계 완료
                  </Button>
                  <Button
                    onClick={() => {
                      // 진행 초기화
                      const newCheckedItems = { ...checkedItems };
                      currentStepData.checklistItems.forEach(item => {
                        newCheckedItems[item.id] = false;
                      });
                      setCheckedItems(newCheckedItems);
                      setCurrentStepTime(0);
                    }}
                    variant="outline"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    초기화
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 도움말 및 추가 정보 */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary-500" />
            진행 가이드
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">📝 진행 팁</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 각 단계의 체크리스트를 완료한 후 다음 단계로 진행하세요</li>
                <li>• 막히는 부분이 있다면 Cursor AI 프롬프터를 활용하세요</li>
                <li>• 실시간 미리보기로 결과를 확인하며 진행하세요</li>
                <li>• 자동 저장 기능으로 언제든 이어서 학습할 수 있습니다</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">🎯 성공 기준</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 각 단계의 모든 체크리스트 완료</li>
                <li>• 실제 작동하는 웹사이트 완성</li>
                <li>• GitHub에 코드 업로드 완료</li>
                <li>• 인터넷에 웹사이트 배포 완료</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracker; 