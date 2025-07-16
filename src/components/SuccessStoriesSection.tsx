'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, Clock, User } from 'lucide-react';

const SuccessStoriesSection = () => {
  const testimonials = [
    {
      name: '김소상',
      age: '45세',
      profession: '카페 운영',
      rating: 5,
      completionTime: '2시간 50분',
      comment: '정말 놀라워요! 코딩을 한 번도 해보지 않았는데 3시간도 안 걸려서 제 카페 웹사이트를 만들었어요. 단계별로 너무 친절하게 알려주셔서 막힐 때가 없었습니다.',
      projectUrl: 'https://sodam-cafe.vercel.app',
      avatar: '☕'
    },
    {
      name: '박준혁',
      age: '24세',
      profession: '취업준비생',
      rating: 5,
      completionTime: '2시간 30분',
      comment: '비전공자라 개발이 어려울 줄 알았는데 이렇게 쉽게 웹사이트를 만들 수 있다니! 이제 포트폴리오에 들어갈 프로젝트가 생겼어요. 면접에서 어필하기 좋을 것 같아요.',
      projectUrl: 'https://junhyuk-portfolio.vercel.app',
      avatar: '💼'
    },
    {
      name: '이미영',
      age: '52세',
      profession: '플라워샵 운영',
      rating: 5,
      completionTime: '3시간 15분',
      comment: '컴퓨터가 어려워서 걱정했는데 정말 쉽게 따라할 수 있었어요. 실시간으로 변하는 걸 보면서 만드니까 재미있었고, 에러가 나면 자동으로 수정해줘서 편했어요.',
      projectUrl: 'https://flower-garden.vercel.app',
      avatar: '🌸'
    }
  ];

  const showcaseProjects = [
    {
      title: '신승반점 - 인천 차이나타운',
      description: '전통 짜장면 맛집의 따뜻한 감성을 담은 랜딩페이지',
      image: '🍜',
      tags: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://shinseung-restaurant.vercel.app'
    },
    {
      title: '소담카페 - 홍대 감성 카페',
      description: '아늑하고 편안한 분위기의 카페 소개 사이트',
      image: '☕',
      tags: ['반응형', '애니메이션', '갤러리'],
      url: 'https://sodam-cafe.vercel.app'
    },
    {
      title: '꽃정원 - 플라워샵',
      description: '계절별 꽃과 화분을 소개하는 아름다운 웹사이트',
      image: '🌸',
      tags: ['이미지 갤러리', '연락처 폼'],
      url: 'https://flower-garden.vercel.app'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            <span className="text-primary-600">성공 스토리</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            완전 초보자부터 시작해서 멋진 웹사이트를 완성한 실제 학습자들의 이야기
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      {testimonial.age} · {testimonial.profession}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center ml-4 text-sm text-secondary-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {testimonial.completionTime}
                  </div>
                </div>

                <p className="text-secondary-700 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-500">완성 작품</span>
                  <a
                    href={testimonial.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 hover:text-primary-700 text-sm"
                  >
                    보기 <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Showcase */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              완성 작품 쇼케이스
            </h3>
            <p className="text-secondary-600">
              학습자들이 3시간 안에 완성한 실제 웹사이트들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <div className="text-6xl">{project.image}</div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-primary-100 text-primary-700 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      사이트 보기 <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Before/After Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Before & After
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4">😟</div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    학습 전
                  </h4>
                  <ul className="text-secondary-600 space-y-1">
                    <li>• 코딩이 너무 어려워 보여요</li>
                    <li>• 어디서부터 시작해야 할지 모르겠어요</li>
                    <li>• 에러가 나면 해결할 수 없을 것 같아요</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    학습 후
                  </h4>
                  <ul className="text-secondary-600 space-y-1">
                    <li>• 3시간 만에 웹사이트 완성!</li>
                    <li>• 단계별로 따라하니 쉬워요</li>
                    <li>• 에러도 자동으로 수정되니 편해요</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection; 