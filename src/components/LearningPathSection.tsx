'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Code, 
  Palette, 
  Zap, 
  Rocket, 
  Clock,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const LearningPathSection = () => {
  const steps = [
    {
      id: 1,
      icon: Settings,
      title: '환경 설정',
      duration: '20분',
      description: '시스템 체크부터 자동 설치까지',
      tasks: [
        '시스템 요구사항 자동 확인',
        'Node.js 자동 다운로드 & 설치',
        'Cursor 자동 다운로드 & 설치',
        'GitHub 계정 생성 도우미'
      ],
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      icon: Code,
      title: 'HTML 기초',
      duration: '30분',
      description: '신승반점 웹사이트 구조 만들기',
      tasks: [
        '헤더 섹션 작성',
        '메뉴 소개 섹션',
        '매장 정보 섹션',
        '푸터 섹션'
      ],
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      icon: Palette,
      title: 'CSS 스타일링',
      duration: '60분',
      description: '아름다운 디자인 적용하기',
      tasks: [
        '기본 레이아웃 설정',
        '색상 및 폰트 적용',
        '반응형 디자인 구현',
        '마이크로 애니메이션 추가'
      ],
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      icon: Zap,
      title: 'JavaScript 기능',
      duration: '40분',
      description: '인터랙티브 기능 구현하기',
      tasks: [
        '메뉴 네비게이션 구현',
        '이미지 갤러리 기능',
        '연락처 폼 연결'
      ],
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 5,
      icon: Rocket,
      title: '배포하기',
      duration: '20분',
      description: '전 세계에 내 웹사이트 공개하기',
      tasks: [
        'GitHub 업로드',
        'Vercel 배포',
        '실제 URL 확인'
      ],
      color: 'bg-red-500',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            <span className="text-primary-600">5단계 학습 로드맵</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            체계적인 단계별 학습으로 3시간 안에 완성하는 웹사이트 개발 여정
          </p>
          <div className="flex items-center justify-center mt-6">
            <Clock className="w-5 h-5 text-primary-500 mr-2" />
            <span className="text-primary-600 font-semibold">총 170분 (약 3시간)</span>
          </div>
        </div>

        {/* Learning Path Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative mb-12 last:mb-0">
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center z-10 hidden lg:flex">
                <span className="text-primary-600 font-bold text-sm">{step.id}</span>
              </div>

              {/* Step Card */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto'}`}>
                <Card className="bg-white shadow-lg border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${step.bgColor} px-6 py-4 border-b`}>
                      <div className="flex items-center space-x-3">
                        <div className={`${step.color} p-2 rounded-lg`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-secondary-900">
                            {step.title}
                          </h3>
                          <p className="text-secondary-600 text-sm">
                            {step.description}
                          </p>
                        </div>
                        <Badge className="bg-primary-100 text-primary-700">
                          {step.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-accent-success mt-0.5 flex-shrink-0" />
                            <span className="text-secondary-700 text-sm">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              지금 바로 시작해보세요!
            </h3>
            <p className="text-secondary-600 mb-6">
              완전 무료로 제공되는 실습 환경에서 첫 번째 웹사이트를 만들어보세요
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg"
            >
              <Link href="/learning">1단계부터 시작하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection; 