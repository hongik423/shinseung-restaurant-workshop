'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Eye, 
  Shield, 
  BarChart3, 
  Code, 
  RefreshCw 
} from 'lucide-react';

const FeaturesSection = () => {
  const simpleFeatures = [
    {
      icon: ArrowRight,
      title: 'Step-by-Step',
      subtitle: '한 번에 하나씩만',
      description: '각 화면에서 단일 액션만 요구하여 학습 부담을 최소화합니다',
      color: 'bg-blue-500'
    },
    {
      icon: Eye,
      title: 'Immediate Feedback',
      subtitle: '즉시 결과 확인',
      description: '실시간 미리보기로 변경사항을 즉시 확인할 수 있습니다',
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Mistake Prevention',
      subtitle: '실수 방지',
      description: '자동 검증 및 가이드로 오류 없는 학습 환경을 제공합니다',
      color: 'bg-red-500'
    },
    {
      icon: BarChart3,
      title: 'Progress Visible',
      subtitle: '진행상황 가시화',
      description: '상세한 진행률 표시로 학습 현황을 명확히 파악할 수 있습니다',
      color: 'bg-purple-500'
    },
    {
      icon: Code,
      title: 'Learn by Doing',
      subtitle: '실습 중심 학습',
      description: '이론 최소화, 실습 최대화로 실제 개발 경험을 쌓습니다',
      color: 'bg-orange-500'
    },
    {
      icon: RefreshCw,
      title: 'Easy Recovery',
      subtitle: '쉬운 복구',
      description: '자동 백업 및 복원 기능으로 언제든 이전 상태로 돌아갈 수 있습니다',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            <span className="text-primary-600">SIMPLE</span> 원칙으로 누구나 성공
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            완전 초보자도 실패하지 않는 6가지 핵심 원칙으로 설계된 학습 시스템
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simpleFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`${feature.color} p-3 rounded-lg flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {feature.subtitle}
                    </p>
                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SIMPLE Acronym */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              SIMPLE 원칙
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {simpleFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {feature.title.charAt(0)}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {feature.title.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 