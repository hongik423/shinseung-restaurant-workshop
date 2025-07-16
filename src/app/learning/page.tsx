'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, CheckCircle, Circle, Play, BookOpen, Users, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const LearningPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 1,
      title: '환경 설정',
      description: '개발 환경을 자동으로 설정합니다',
      duration: '20분',
      icon: '🔧',
      href: '/learning/setup',
      completed: false
    },
    {
      id: 2,
      title: 'HTML 기초',
      description: '웹페이지의 기본 구조를 만들어보세요',
      duration: '30분',
      icon: '🏗️',
      href: '/learning/html',
      completed: false
    },
    {
      id: 3,
      title: 'CSS 스타일링',
      description: '예쁜 디자인을 입혀보세요',
      duration: '60분',
      icon: '🎨',
      href: '/learning/css',
      completed: false
    },
    {
      id: 4,
      title: 'JavaScript 기능',
      description: '동적인 기능을 추가해보세요',
      duration: '40분',
      icon: '⚡',
      href: '/learning/javascript',
      completed: false
    },
    {
      id: 5,
      title: '배포하기',
      description: '실제 인터넷에 공개해보세요',
      duration: '20분',
      icon: '🚀',
      href: '/learning/deploy',
      completed: false
    }
  ];

  const progressPercentage = (completedSteps.length / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-secondary-900">학습 과정</h1>
              <p className="text-secondary-600 mt-2">단계별로 차근차근 웹개발을 배워보세요</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              총 소요시간: 약 3시간
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              전체 진행률
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-600">
                  {completedSteps.length}/{steps.length} 단계 완료
                </span>
                <span className="text-sm font-medium text-secondary-900">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <div className="flex items-center gap-4 text-sm text-secondary-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  예상 남은 시간: {3 - Math.round(completedSteps.length * 0.6)}시간
                </div>
                <div className="flex items-center gap-1">
                  <Circle className="w-4 h-4" />
                  현재 단계: {currentStep}/{steps.length}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step Navigation */}
        <div className="grid gap-6 mb-8">
          <h2 className="text-2xl font-bold text-secondary-900">학습 단계</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <Card 
                key={step.id} 
                className={`transition-all duration-200 hover:shadow-lg ${
                  step.id === currentStep ? 'ring-2 ring-primary-500' : ''
                } ${completedSteps.includes(step.id) ? 'bg-green-50 border-green-200' : ''}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{step.icon}</div>
                      <div className="flex items-center gap-2">
                        {completedSteps.includes(step.id) ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : step.id === currentStep ? (
                          <Play className="w-5 h-5 text-primary-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-secondary-400" />
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 mb-4">{step.description}</p>
                  <Button 
                    asChild 
                    className={`w-full ${
                      completedSteps.includes(step.id) 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-primary-500 hover:bg-primary-600'
                    }`}
                  >
                    <Link href={step.href}>
                      {completedSteps.includes(step.id) ? '다시 보기' : '시작하기'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Lesson Preview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>현재 학습 단계</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-lg">
              <div className="text-3xl">{steps[currentStep - 1]?.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-secondary-900">
                  {steps[currentStep - 1]?.title}
                </h3>
                <p className="text-secondary-600">
                  {steps[currentStep - 1]?.description}
                </p>
              </div>
              <Button asChild className="bg-primary-500 hover:bg-primary-600">
                <Link href={steps[currentStep - 1]?.href || '/learning/setup'}>
                  계속 학습하기
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Panel */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-500" />
                도움이 필요하신가요?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                자주 묻는 질문
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                커뮤니티 질문하기
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <HelpCircle className="w-4 h-4 mr-2" />
                1:1 지원 요청
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>학습 팁</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  각 단계를 완료한 후 다음 단계로 넘어가세요
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  막히는 부분이 있다면 언제든 도움을 요청하세요
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  실시간 미리보기를 통해 결과를 확인하세요
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  자동 저장 기능으로 언제든 이어서 학습할 수 있습니다
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LearningPage; 