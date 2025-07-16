'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const stats = [
    { icon: TrendingUp, value: '95%', label: '완료율' },
    { icon: Clock, value: '3시간', label: '평균 학습시간' },
    { icon: Star, value: '80+', label: '만족도 NPS' },
    { icon: Users, value: '1,000+', label: '누적 학습자' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-primary-100 text-primary-700 border-primary-200">
            💯 100% 성공 보장형 완전초보자 맞춤 실습 플랫폼
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            코딩을 한 번도 해보지 않은 사람도
            <br />
            <span className="text-primary-600">3시간 안에 멋진 웹사이트</span>를
            <br />
            만들 수 있다
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            신승반점 랜딩페이지 제작을 통해 HTML, CSS, JavaScript, 배포까지의 
            전체 웹개발 프로세스를 학습하는 인터랙티브 교육 서비스
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg"
            >
              <Link href="/learning">무료로 시작하기</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-500 text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg"
            >
              <Link href="/guide">미리보기 영상 보기</Link>
            </Button>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <div className="text-2xl font-bold text-secondary-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-secondary-100 px-6 py-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-sm text-secondary-600">
                shinseung-restaurant.vercel.app
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🍜</div>
                <div className="text-xl font-semibold text-secondary-700">
                  신승반점 랜딩페이지 미리보기
                </div>
                <div className="text-secondary-500 mt-2">
                  실제 완성될 웹사이트 모습
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 