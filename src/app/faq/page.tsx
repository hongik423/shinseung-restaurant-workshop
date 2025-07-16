'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, HelpCircle, MessageCircle, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      id: 'general',
      title: '일반적인 질문',
      items: [
        {
          id: 'q1',
          question: '이 교육 과정은 무료인가요?',
          answer: '네, 저희 신승반점 개발 실습 과정은 완전 무료입니다. 별도의 가입비나 이용료 없이 누구나 자유롭게 학습할 수 있습니다.',
          tags: ['무료', '가격', '비용']
        },
        {
          id: 'q2',
          question: '프로그래밍 경험이 전혀 없어도 괜찮나요?',
          answer: '물론입니다! 저희 과정은 완전 초보자를 위해 설계되었습니다. HTML, CSS, JavaScript의 기초부터 차근차근 배우실 수 있습니다.',
          tags: ['초보자', '경험', '기초']
        },
        {
          id: 'q3',
          question: '수료증이나 인증서를 받을 수 있나요?',
          answer: '현재는 공식 수료증을 제공하지 않지만, 프로젝트를 완료하면 포트폴리오에 추가할 수 있는 완성작을 얻을 수 있습니다.',
          tags: ['수료증', '인증서', '포트폴리오']
        }
      ]
    },
    {
      id: 'technical',
      title: '기술적인 질문',
      items: [
        {
          id: 'q4',
          question: '어떤 프로그램을 미리 설치해야 하나요?',
          answer: '기본적으로 Cursor AI 에디터, Node.js, Git만 설치하면 됩니다. 설치 과정은 학습 과정에서 자세히 안내해드립니다.',
          tags: ['설치', '프로그램', '환경설정']
        },
        {
          id: 'q5',
          question: '맥과 윈도우 모두 지원하나요?',
          answer: '네, 맥과 윈도우 모두 지원합니다. 각 운영체제에 맞는 설치 방법을 별도로 안내해드립니다.',
          tags: ['맥', '윈도우', '운영체제']
        },
        {
          id: 'q6',
          question: '코드가 제대로 작동하지 않을 때는 어떻게 하나요?',
          answer: '커뮤니티 Q&A 게시판에 질문을 올려주시면 다른 학습자들과 함께 문제를 해결할 수 있습니다. 또한 터미널 체커 기능을 통해 설치 상태를 확인할 수 있습니다.',
          tags: ['오류', '문제해결', '디버깅']
        }
      ]
    },
    {
      id: 'learning',
      title: '학습 관련 질문',
      items: [
        {
          id: 'q7',
          question: '하루에 얼마나 시간을 투자해야 하나요?',
          answer: '개인차가 있지만, 하루 1-2시간 정도 꾸준히 학습하시면 2-3주 안에 첫 프로젝트를 완성할 수 있습니다.',
          tags: ['시간', '학습량', '기간']
        },
        {
          id: 'q8',
          question: '순서대로 학습해야 하나요?',
          answer: '네, 기초부터 차근차근 배우는 것이 중요합니다. 환경설정 → HTML → CSS → JavaScript 순으로 진행하시길 권장합니다.',
          tags: ['순서', '학습방법', '단계']
        },
        {
          id: 'q9',
          question: '중간에 막히면 어떻게 하나요?',
          answer: '언제든지 이전 단계로 돌아가서 복습하거나, 커뮤니티에서 도움을 요청할 수 있습니다. 또한 가이드 섹션에서 자세한 설명을 확인할 수 있습니다.',
          tags: ['막힘', '복습', '도움']
        }
      ]
    },
    {
      id: 'project',
      title: '프로젝트 관련 질문',
      items: [
        {
          id: 'q10',
          question: '신승반점 프로젝트는 어떤 내용인가요?',
          answer: '인천 차이나타운의 전통 중식당 랜딩페이지를 만드는 프로젝트입니다. 실제 음식점 웹사이트와 유사한 구조로 실무 경험을 쌓을 수 있습니다.',
          tags: ['프로젝트', '신승반점', '랜딩페이지']
        },
        {
          id: 'q11',
          question: '완성한 프로젝트를 배포할 수 있나요?',
          answer: '네, Vercel을 통해 무료로 배포할 수 있습니다. 배포 과정도 학습 과정에 포함되어 있습니다.',
          tags: ['배포', 'Vercel', '호스팅']
        },
        {
          id: 'q12',
          question: '프로젝트를 수정하거나 개선할 수 있나요?',
          answer: '물론입니다! 기본 프로젝트를 완성한 후 자유롭게 수정하고 개선해보세요. 이것이 진정한 학습입니다.',
          tags: ['수정', '개선', '커스터마이징']
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              ❓ 자주 묻는 질문 (FAQ)
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              궁금한 점이 있으시면 먼저 여기서 답을 찾아보세요
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
              <Input
                placeholder="질문 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary-900 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary-500" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {category.items.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="text-left text-secondary-900 hover:text-primary-600">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <p className="text-secondary-600 leading-relaxed">
                            {item.answer}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="mt-12 bg-primary-50 border-primary-200">
          <CardContent className="p-8">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                원하는 답을 찾지 못하셨나요?
              </h3>
              <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                여기서 답을 찾지 못하셨다면, 커뮤니티에서 질문하거나 1:1 지원을 요청해보세요. 
                친절한 멘토들이 도움을 드릴 것입니다.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/community">
                    <Users className="w-5 h-5 mr-2" />
                    커뮤니티 질문하기
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/support">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    1:1 지원 요청
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/guide">
                    <BookOpen className="w-5 h-5 mr-2" />
                    가이드 읽어보기
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="font-semibold text-secondary-900 mb-2">
                학습 시작하기
              </h3>
              <p className="text-sm text-secondary-600 mb-4">
                지금 바로 웹개발 학습을 시작해보세요
              </p>
              <Button size="sm" asChild>
                <Link href="/learning">
                  학습하기
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <HelpCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-secondary-900 mb-2">
                가이드 문서
              </h3>
              <p className="text-sm text-secondary-600 mb-4">
                상세한 가이드와 튜토리얼을 확인하세요
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/guide">
                  가이드 보기
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-secondary-900 mb-2">
                커뮤니티
              </h3>
              <p className="text-sm text-secondary-600 mb-4">
                다른 학습자들과 소통하고 도움을 받아보세요
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/community">
                  커뮤니티 참여
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 