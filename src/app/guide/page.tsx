'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { BookOpen, Code, Download, Search, Star, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const GuidePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const guideCategories = [
    {
      id: 'beginner',
      title: '🔰 초보자 가이드',
      description: '웹개발을 처음 시작하는 분들을 위한 기초 가이드',
      items: [
        {
          title: '웹개발 용어 사전',
          description: 'HTML, CSS, JavaScript 등 기본 용어 설명',
          duration: '읽기 5분',
          link: '/guide/glossary'
        },
        {
          title: '개발 환경 이해하기',
          description: '코드 에디터, 브라우저, 서버의 역할 이해',
          duration: '읽기 10분',
          link: '/guide/environment'
        },
        {
          title: '첫 웹사이트 만들기',
          description: '간단한 HTML 페이지부터 시작하는 웹개발',
          duration: '실습 20분',
          link: '/guide/first-website'
        }
      ]
    },
    {
      id: 'tools',
      title: '🛠️ 도구 사용법',
      description: '개발에 필요한 도구들의 사용법을 익혀보세요',
      items: [
        {
          title: 'Cursor 완전 정복',
          description: 'AI 코드 에디터 Cursor의 모든 기능 활용법',
          duration: '읽기 15분',
          link: '/guide/cursor'
        },
        {
          title: 'GitHub 사용법',
          description: '코드 저장소 GitHub의 기본 사용법',
          duration: '실습 20분',
          link: '/guide/github'
        },
        {
          title: 'Vercel 배포 가이드',
          description: '웹사이트를 무료로 배포하는 방법',
          duration: '실습 15분',
          link: '/guide/vercel'
        },
        {
          title: '터미널 기본 명령어',
          description: '개발자가 알아야 할 터미널 명령어',
          duration: '읽기 10분',
          link: '/guide/terminal'
        }
      ]
    },
    {
      id: 'templates',
      title: '🎯 프로젝트 템플릿',
      description: '바로 사용할 수 있는 프로젝트 템플릿들',
      items: [
        {
          title: '신승반점 템플릿',
          description: '중식당 랜딩페이지 완성 템플릿',
          duration: '다운로드',
          link: '/templates/restaurant'
        },
        {
          title: '기업 소개 템플릿',
          description: '회사 소개 페이지 템플릿',
          duration: '다운로드',
          link: '/templates/company'
        },
        {
          title: 'LinkTree 클론 템플릿',
          description: '개인 링크 모음 페이지 템플릿',
          duration: '다운로드',
          link: '/templates/linktree'
        }
      ]
    }
  ];

  const popularGuides = [
    {
      title: 'HTML 태그 완벽 가이드',
      description: '모든 HTML 태그의 사용법과 예제',
      views: '1.2K',
      rating: 4.9,
      link: '/guide/html-tags'
    },
    {
      title: 'CSS 레이아웃 마스터하기',
      description: 'Flexbox, Grid를 활용한 레이아웃 설계',
      views: '980',
      rating: 4.8,
      link: '/guide/css-layout'
    },
    {
      title: 'JavaScript 기초부터 심화까지',
      description: '변수, 함수, 객체부터 고급 개념까지',
      views: '1.5K',
      rating: 4.7,
      link: '/guide/javascript'
    },
    {
      title: '반응형 웹 디자인 실전',
      description: '모바일 우선 디자인 방법론',
      views: '756',
      rating: 4.6,
      link: '/guide/responsive'
    }
  ];

  const filteredCategories = guideCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              📖 가이드 & 도움말
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              웹개발 여정을 도와줄 완전한 가이드를 찾아보세요
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
              <Input
                placeholder="가이드 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Popular Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            🔥 인기 가이드
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{guide.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-secondary-600">
                      <Users className="w-4 h-4" />
                      {guide.views}
                    </div>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2 line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-secondary-600 mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={guide.link}>
                      읽어보기
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guide Categories */}
        <section className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                  {category.title}
                </h2>
                <p className="text-secondary-600">
                  {category.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-secondary-900 mb-2">
                            {item.title}
                          </CardTitle>
                          <p className="text-sm text-secondary-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-secondary-600">
                          <Clock className="w-4 h-4" />
                          {item.duration}
                        </div>
                        <Button size="sm" asChild>
                          <Link href={item.link}>
                            {item.duration.includes('다운로드') ? '다운로드' : '보기'}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Quick Start */}
        <section className="mt-16">
          <Card className="bg-primary-50 border-primary-200">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                빠른 시작
              </h3>
              <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                가이드를 읽는 것보다 직접 해보고 싶으신가요? 
                바로 실습을 시작해서 웹개발을 배워보세요!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/learning">
                    학습 시작하기
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/practice">
                    실습 프로젝트
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Help Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              도움이 더 필요하신가요?
            </h2>
            <p className="text-secondary-600 mb-6">
              언제든지 도움을 요청하실 수 있습니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">
                  FAQ
                </h3>
                <p className="text-sm text-secondary-600 mb-4">
                  자주 묻는 질문들의 답변을 확인해보세요
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/faq">
                    FAQ 보기
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">
                  커뮤니티
                </h3>
                <p className="text-sm text-secondary-600 mb-4">
                  다른 학습자들과 질문을 주고받아보세요
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/community">
                    커뮤니티 참여
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">
                  1:1 지원
                </h3>
                <p className="text-sm text-secondary-600 mb-4">
                  개인 멘토링을 통해 빠르게 해결해보세요
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/support">
                    지원 요청
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuidePage; 