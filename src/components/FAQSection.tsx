'use client';

import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs = [
    {
      question: '정말 코딩 경험이 전혀 없어도 할 수 있나요?',
      answer: '네, 물론입니다! 이 플랫폼은 완전 초보자를 위해 설계되었습니다. 컴퓨터 기본 조작만 할 수 있다면 누구나 3시간 안에 웹사이트를 만들 수 있습니다. 모든 과정이 단계별로 안내되고, 실시간으로 에러를 체크하고 수정해줍니다.'
    },
    {
      question: '정말 3시간 안에 완성할 수 있나요?',
      answer: '평균적으로 2시간 30분에서 3시간 30분 사이에 완성하실 수 있습니다. 개인차가 있지만, 환경설정 20분, HTML 30분, CSS 60분, JavaScript 40분, 배포 20분으로 총 170분(약 3시간)이 목표입니다.'
    },
    {
      question: '어떤 컴퓨터가 필요한가요?',
      answer: 'Windows, Mac, Linux 모두 지원합니다. 최소 4GB 메모리, 인터넷 연결만 있으면 됩니다. 모바일이나 태블릿으로는 학습이 어려우니 PC나 노트북을 준비해주세요.'
    },
    {
      question: '실수를 하면 어떻게 되나요?',
      answer: '걱정하지 마세요! 실시간 에러 검사 시스템이 있어서 문제가 생기면 즉시 알려주고 자동으로 수정해줍니다. 또한 30초마다 자동 백업되므로 언제든 이전 상태로 돌아갈 수 있습니다.'
    },
    {
      question: '완성된 웹사이트는 어떻게 활용할 수 있나요?',
      answer: '실제로 인터넷에 배포되어 누구나 접속할 수 있는 웹사이트가 됩니다. 개인 포트폴리오, 사업 홍보, 취업 준비 등 다양하게 활용 가능합니다. GitHub과 Vercel을 통해 무료로 호스팅됩니다.'
    },
    {
      question: '학습 중에 막히면 어떻게 도움을 받을 수 있나요?',
      answer: '3단계 도움말 시스템을 제공합니다. 1단계: 자동 힌트 및 가이드, 2단계: 커뮤니티 Q&A, 3단계: 실시간 1:1 지원. 대부분의 문제는 1단계에서 해결됩니다.'
    },
    {
      question: '비용이 얼마인가요?',
      answer: '완전 무료입니다! 회원가입, 학습 과정, 배포까지 모든 과정이 무료로 제공됩니다. 추가 비용 없이 평생 이용할 수 있습니다.'
    },
    {
      question: '완성 후에도 계속 수정할 수 있나요?',
      answer: '물론입니다! 완성 후에도 언제든지 코드를 수정하고 다시 배포할 수 있습니다. 또한 새로운 기능을 추가하거나 디자인을 변경하는 고급 과정도 준비되어 있습니다.'
    },
    {
      question: '다른 사람들과 함께 학습할 수 있나요?',
      answer: '네! 커뮤니티 기능을 통해 다른 학습자들과 소통할 수 있습니다. 스터디 그룹 매칭, 작품 공유, 멘토링 등 다양한 협력 학습 기능을 제공합니다.'
    },
    {
      question: '모바일에서도 잘 보이는 웹사이트가 되나요?',
      answer: '네, 반응형 디자인을 학습하므로 PC, 태블릿, 모바일에서 모두 예쁘게 보이는 웹사이트가 완성됩니다. 다양한 기기에서 테스트해볼 수 있는 기능도 제공합니다.'
    }
  ];

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            <span className="text-primary-600">자주 묻는 질문</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            학습을 시작하기 전에 궁금한 점들을 확인해보세요
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {mounted ? (
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="mb-4">
                  <AccordionTrigger className="text-left bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-lg font-semibold text-secondary-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 pb-4 rounded-b-lg">
                    <p className="text-secondary-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <div className="text-left bg-white px-6 py-4 rounded-lg shadow-sm">
                    <span className="text-lg font-semibold text-secondary-900">
                      {faq.question}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              더 궁금한 점이 있으신가요?
            </h3>
            <p className="text-secondary-600 mb-6">
              언제든지 문의해 주세요. 빠른 시간 내에 답변드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@shinseung-learning.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                📧 이메일로 문의하기
              </a>
              <a
                href="/community"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                💬 커뮤니티에서 질문하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 