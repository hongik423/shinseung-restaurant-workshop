'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  MousePointer,
  Smartphone,
  Eye,
  Settings,
  Lightbulb,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import CheckList from '@/components/CheckList';

const jsSteps = [
  {
    id: 'events',
    title: '이벤트 처리',
    description: '스위치와 버튼 설치',
    icon: MousePointer,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    buildingAnalogy: '💡 전등 스위치 & 버튼 설치'
  },
  {
    id: 'dom',
    title: 'DOM 조작',
    description: '전기 기기 제어 시스템',
    icon: Settings,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    buildingAnalogy: '🔧 전자 기기 제어 시스템'
  },
  {
    id: 'mobile',
    title: '모바일 최적화',
    description: '스마트 홈 시스템',
    icon: Smartphone,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    buildingAnalogy: '📱 스마트 홈 자동화 시스템'
  },
  {
    id: 'validation',
    title: '폼 검증',
    description: '보안 시스템 설치',
    icon: Eye,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    buildingAnalogy: '🔒 보안 시스템 & 접근 제어'
  },
  {
    id: 'performance',
    title: '성능 최적화',
    description: '효율적인 전력 관리',
    icon: Zap,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    buildingAnalogy: '⚡ 스마트 전력 관리 시스템'
  }
];

export default function JavaScriptFunctions() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleStepCompletion = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const nextStep = () => {
    if (activeStep < jsSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const currentStep = jsSteps[activeStep];
  const Icon = currentStep.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-red-600 hover:text-red-700"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>돌아가기</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  4단계: JavaScript 기능 구현 (전기/수도/냉난방 설치)
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="progress-bar w-32">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((activeStep + 1) / jsSteps.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {activeStep + 1}/{jsSteps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sidebar">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                ⚡ JavaScript 기능 구현 단계
              </h3>
              
              <div className="space-y-3">
                {jsSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = completedSteps.includes(step.id);
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-yellow-50 text-yellow-700 border-l-4 border-yellow-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${step.bgColor}`}>
                        <StepIcon className={`h-4 w-4 ${step.color}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{step.title}</span>
                          {isCompleted && (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {step.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {step.buildingAnalogy}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-3">⚡ 신승반점 스마트 기능</h4>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 bg-white rounded border-l-4 border-blue-500">
                    onClick() // 클릭 이벤트
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-green-500">
                    getElementById() // DOM 조작
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-purple-500">
                    addEventListener() // 이벤트 리스너
                  </div>
                  <div className="p-2 bg-white rounded border-l-4 border-orange-500">
                    validate() // 폼 검증
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">전체 진행률</h4>
                <div className="progress-bar">
                  <div 
                    className="bg-yellow-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedSteps.length / jsSteps.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-yellow-800 mt-2">
                  {completedSteps.length}/{jsSteps.length} 단계 완료
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${currentStep.bgColor}`}>
                    <Icon className={`h-6 w-6 ${currentStep.color}`} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {currentStep.title}
                    </h1>
                    <p className="text-gray-600 mt-1">
                      {currentStep.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {currentStep.buildingAnalogy}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {activeStep === 0 && <EventsStep onComplete={() => handleStepCompletion('events')} />}
                {activeStep === 1 && <DOMStep onComplete={() => handleStepCompletion('dom')} />}
                {activeStep === 2 && <MobileStep onComplete={() => handleStepCompletion('mobile')} />}
                {activeStep === 3 && <ValidationStep onComplete={() => handleStepCompletion('validation')} />}
                {activeStep === 4 && <PerformanceStep onComplete={() => handleStepCompletion('performance')} />}
              </div>

              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Link
                  href="/steps/3-css"
                  className="btn btn-outline"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전 단계
                </Link>

                <div className="flex space-x-2">
                  {jsSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      title={`${index + 1}단계로 이동`}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeStep 
                          ? 'bg-yellow-600' 
                          : index < activeStep 
                            ? 'bg-green-600' 
                            : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {activeStep === jsSteps.length - 1 ? (
                  <Link 
                    href="/steps/5-deploy"
                    className="btn btn-primary"
                  >
                    다음 단계로
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                ) : (
                  <button
                    onClick={nextStep}
                    className="btn btn-primary"
                  >
                    다음 단계
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 1. 이벤트 처리 단계
function EventsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <MousePointer className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">이벤트 처리 = 전등 스위치와 버튼 설치</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <div>
              <strong>왜 이벤트 처리가 필요한가?</strong>
              <p className="mt-2">
                집에 전등 스위치가 없다면 불을 켜고 끌 수 없듯, 웹사이트도 
                사용자가 버튼을 클릭하거나 입력할 때 반응하는 기능이 필요합니다. 
                JavaScript 이벤트는 사용자의 행동에 웹사이트가 반응하게 해줍니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지에 JavaScript 이벤트 처리를 추가해줘. 
                  모바일 햄버거 메뉴 토글, 메뉴 카드 클릭 시 상세 정보 표시, 
                  스크롤 시 네비게이션 스타일 변경, 스크롤 투 탑 버튼 기능을 구현해줘. 
                  모든 이벤트는 접근성을 고려해서 키보드로도 작동하게 해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">💡 주요 이벤트 처리 기능</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">🖱️ 마우스 이벤트</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 버튼 클릭 (click)</li>
                  <li>• 마우스 오버 (mouseover)</li>
                  <li>• 마우스 아웃 (mouseout)</li>
                  <li>• 더블 클릭 (dblclick)</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">⌨️ 키보드 이벤트</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 키 누름 (keydown)</li>
                  <li>• 키 뗌 (keyup)</li>
                  <li>• 엔터 키 (Enter)</li>
                  <li>• ESC 키 (Escape)</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 이벤트 처리 JavaScript 코드</h4>

            <CodeBlock
              code={`// 💡 신승반점 이벤트 처리 시스템

// 1. 햄버거 메뉴 토글 기능
class MobileMenu {
    constructor() {
        this.menuToggle = document.querySelector('.mobile-menu-toggle');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.navLinks = document.querySelectorAll('.mobile-nav-link');
        
        this.init();
    }
    
    init() {
        // 햄버거 메뉴 버튼 클릭 이벤트
        this.menuToggle.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        // 키보드 접근성 (Enter, Space)
        this.menuToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleMenu();
            }
        });
        
        // 메뉴 링크 클릭 시 메뉴 닫기
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
        
        // ESC 키로 메뉴 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        const isOpen = this.mobileMenu.classList.contains('active');
        
        if (isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.mobileMenu.classList.add('active');
        this.menuToggle.classList.add('active');
        this.menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
    
    closeMenu() {
        this.mobileMenu.classList.remove('active');
        this.menuToggle.classList.remove('active');
        this.menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // 스크롤 복원
    }
}

// 2. 메뉴 카드 상호작용
class MenuCard {
    constructor() {
        this.menuItems = document.querySelectorAll('.menu-item');
        this.init();
    }
    
    init() {
        this.menuItems.forEach(item => {
            // 클릭 이벤트
            item.addEventListener('click', (e) => {
                this.showMenuDetail(item);
            });
            
            // 키보드 접근성
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.showMenuDetail(item);
                }
            });
            
            // 호버 효과
            item.addEventListener('mouseenter', () => {
                this.animateCard(item, 'enter');
            });
            
            item.addEventListener('mouseleave', () => {
                this.animateCard(item, 'leave');
            });
        });
    }
    
    showMenuDetail(item) {
        const menuName = item.querySelector('h4').textContent;
        const menuPrice = item.querySelector('.price').textContent;
        const menuDescription = item.querySelector('.menu-description').textContent;
        
        // 모달 창 생성
        const modal = this.createModal(menuName, menuPrice, menuDescription);
        document.body.appendChild(modal);
        
        // 모달 열기 애니메이션
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
    
    createModal(name, price, description) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = \`
            <div class="modal-content">
                <button class="modal-close" aria-label="모달 닫기">&times;</button>
                <h3>\${name}</h3>
                <p class="modal-price">\${price}</p>
                <p class="modal-description">\${description}</p>
                <div class="modal-actions">
                    <button class="btn btn-primary">주문하기</button>
                    <button class="btn btn-secondary">장바구니</button>
                </div>
            </div>
        \`;
        
        // 모달 닫기 이벤트
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            this.closeModal(modal);
        });
        
        // 배경 클릭 시 닫기
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });
        
        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal(modal);
            }
        });
        
        return modal;
    }
    
    closeModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    animateCard(item, action) {
        const image = item.querySelector('.menu-image');
        const info = item.querySelector('.menu-info');
        
        if (action === 'enter') {
            image.style.transform = 'scale(1.05)';
            info.style.transform = 'translateY(-5px)';
        } else {
            image.style.transform = 'scale(1)';
            info.style.transform = 'translateY(0)';
        }
    }
}

// 3. 스크롤 이벤트 처리
class ScrollHandler {
    constructor() {
        this.header = document.querySelector('header');
        this.scrollToTopBtn = document.querySelector('.scroll-to-top');
        this.lastScrollTop = 0;
        
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
        
        // 스크롤 투 탑 버튼 클릭
        this.scrollToTopBtn.addEventListener('click', () => {
            this.scrollToTop();
        });
    }
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 헤더 스타일 변경
        if (scrollTop > 100) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
        
        // 스크롤 투 탑 버튼 표시/숨김
        if (scrollTop > 300) {
            this.scrollToTopBtn.classList.add('visible');
        } else {
            this.scrollToTopBtn.classList.remove('visible');
        }
        
        // 스크롤 방향 감지
        if (scrollTop > this.lastScrollTop) {
            // 아래로 스크롤
            this.header.classList.add('scroll-down');
        } else {
            // 위로 스크롤
            this.header.classList.remove('scroll-down');
        }
        
        this.lastScrollTop = scrollTop;
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// 4. 스무스 스크롤 네비게이션
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('a[href^="#"]');
        this.init();
    }
    
    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    this.scrollToElement(targetElement);
                }
            });
        });
    }
    
    scrollToElement(element) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// 5. 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
    new MenuCard();
    new ScrollHandler();
    new SmoothScroll();
    
    console.log('🍜 신승반점 스마트 시스템 활성화 완료!');
});`}
              language="javascript"
              filename="events.js"
            />
          </div>
        </div>
      </div>

      <CheckList 
        title="이벤트 처리 체크리스트"
        items={[
          {
            id: 'click-events',
            text: '클릭 이벤트 구현',
            description: '버튼, 메뉴, 링크 클릭 이벤트 처리',
            difficulty: 'easy',
            estimatedTime: '20분'
          },
          {
            id: 'keyboard-events',
            text: '키보드 이벤트 구현',
            description: 'Enter, Space, ESC 키 이벤트 처리',
            difficulty: 'medium',
            estimatedTime: '15분'
          },
          {
            id: 'scroll-events',
            text: '스크롤 이벤트 구현',
            description: '스크롤 시 헤더 변경, 스크롤 투 탑 버튼',
            difficulty: 'medium',
            estimatedTime: '25분'
          },
          {
            id: 'mobile-menu',
            text: '모바일 메뉴 구현',
            description: '햄버거 메뉴 토글 기능 구현',
            difficulty: 'medium',
            estimatedTime: '20분'
          }
        ]}
        storageKey="js-events-checklist"
        onComplete={(completed, total) => {
          if (completed === total) {
            onComplete();
          }
        }}
      />
    </div>
  );
} 

// 2. DOM 조작 단계
function DOMStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Settings className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold">DOM 조작 = 전자 기기 제어 시스템</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-green-600" />
            <div>
              <strong>왜 DOM 조작이 필요한가?</strong>
              <p className="mt-2">
                집의 전자 기기를 리모컨으로 제어하듯, 웹사이트의 내용과 스타일을 
                JavaScript로 동적으로 변경할 수 있습니다. DOM 조작은 사용자 상호작용에 
                따라 페이지 내용을 실시간으로 업데이트하는 핵심 기능입니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지에 DOM 조작 기능을 추가해줘. 
                  메뉴 필터링, 장바구니 아이템 추가/삭제, 
                  좋아요 버튼 토글, 리뷰 동적 로딩, 
                  이미지 슬라이드쇼 기능을 구현해줘. 
                  모든 변경사항은 부드러운 애니메이션과 함께 적용해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">🔧 주요 DOM 조작 기능</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">📝 내용 변경</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 텍스트 업데이트</li>
                  <li>• HTML 내용 변경</li>
                  <li>• 이미지 소스 변경</li>
                  <li>• 속성 값 수정</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">🎨 스타일 변경</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• CSS 클래스 추가/제거</li>
                  <li>• 인라인 스타일 적용</li>
                  <li>• 요소 보이기/숨기기</li>
                  <li>• 애니메이션 효과</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 DOM 조작 JavaScript 코드</h4>

            <CodeBlock
              code={`// 🔧 신승반점 DOM 조작 시스템

// 1. 메뉴 필터링 시스템
class MenuFilter {
    constructor() {
        this.menuItems = document.querySelectorAll('.menu-item');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.searchInput = document.querySelector('.menu-search');
        
        this.init();
    }
    
    init() {
        // 카테고리 필터 버튼 이벤트
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterByCategory(category);
                this.updateActiveFilter(btn);
            });
        });
        
        // 검색 입력 이벤트
        this.searchInput.addEventListener('input', (e) => {
            this.searchMenuItems(e.target.value);
        });
    }
    
    filterByCategory(category) {
        this.menuItems.forEach(item => {
            const itemCategory = item.dataset.category;
            const shouldShow = category === 'all' || itemCategory === category;
            
            if (shouldShow) {
                item.style.display = 'block';
                item.classList.remove('fade-out');
                item.classList.add('fade-in');
            } else {
                item.classList.remove('fade-in');
                item.classList.add('fade-out');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
    
    searchMenuItems(query) {
        const normalizedQuery = query.toLowerCase().trim();
        
        this.menuItems.forEach(item => {
            const itemName = item.querySelector('.menu-name').textContent.toLowerCase();
            const itemDescription = item.querySelector('.menu-description').textContent.toLowerCase();
            
            const matches = itemName.includes(normalizedQuery) || 
                          itemDescription.includes(normalizedQuery);
            
            if (matches) {
                item.style.display = 'block';
                item.classList.add('highlight');
            } else {
                item.style.display = 'none';
                item.classList.remove('highlight');
            }
        });
    }
    
    updateActiveFilter(activeBtn) {
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }
}

// 2. 장바구니 시스템
class ShoppingCart {
    constructor() {
        this.items = [];
        this.cartCount = document.querySelector('.cart-count');
        this.cartTotal = document.querySelector('.cart-total');
        this.cartItems = document.querySelector('.cart-items');
        
        this.init();
    }
    
    init() {
        // 메뉴 아이템 추가 버튼 이벤트
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const menuItem = e.target.closest('.menu-item');
                this.addItem(menuItem);
            });
        });
    }
    
    addItem(menuElement) {
        const item = {
            id: menuElement.dataset.id,
            name: menuElement.querySelector('.menu-name').textContent,
            price: parseInt(menuElement.dataset.price),
            image: menuElement.querySelector('.menu-image').src,
            quantity: 1
        };
        
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push(item);
        }
        
        this.updateCartUI();
        this.showAddToCartAnimation(menuElement);
    }
    
    updateCartUI() {
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // 장바구니 개수 업데이트
        this.cartCount.textContent = totalItems;
        this.cartCount.classList.add('bounce');
        setTimeout(() => {
            this.cartCount.classList.remove('bounce');
        }, 300);
        
        // 총 가격 업데이트
        this.cartTotal.textContent = totalPrice.toLocaleString() + '원';
        
        // 장바구니 아이템 목록 업데이트
        this.renderCartItems();
    }
    
    renderCartItems() {
        this.cartItems.innerHTML = '';
        
        this.items.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = \`
                <img src="\${item.image}" alt="\${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>\${item.name}</h4>
                    <p>\${item.price.toLocaleString()}원</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-id="\${item.id}">-</button>
                        <span class="quantity">\${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="\${item.id}">+</button>
                    </div>
                </div>
            \`;
            
            this.cartItems.appendChild(cartItem);
        });
        
        // 수량 조절 버튼 이벤트
        this.cartItems.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                const action = e.target.classList.contains('plus') ? 'increase' : 'decrease';
                this.updateQuantity(id, action);
            });
        });
    }
    
    showAddToCartAnimation(menuElement) {
        const addButton = menuElement.querySelector('.add-to-cart');
        addButton.innerHTML = '<i class="fas fa-check"></i> 추가됨!';
        addButton.classList.add('success');
        
        setTimeout(() => {
            addButton.innerHTML = '<i class="fas fa-plus"></i> 장바구니';
            addButton.classList.remove('success');
        }, 2000);
    }
}

// 3. 스크롤 이벤트 처리
class ScrollHandler {
    constructor() {
        this.header = document.querySelector('header');
        this.scrollToTopBtn = document.querySelector('.scroll-to-top');
        this.lastScrollTop = 0;
        
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
        
        // 스크롤 투 탑 버튼 클릭
        this.scrollToTopBtn.addEventListener('click', () => {
            this.scrollToTop();
        });
    }
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 헤더 스타일 변경
        if (scrollTop > 100) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
        
        // 스크롤 투 탑 버튼 표시/숨김
        if (scrollTop > 300) {
            this.scrollToTopBtn.classList.add('visible');
        } else {
            this.scrollToTopBtn.classList.remove('visible');
        }
        
        // 스크롤 방향 감지
        if (scrollTop > this.lastScrollTop) {
            // 아래로 스크롤
            this.header.classList.add('scroll-down');
        } else {
            // 위로 스크롤
            this.header.classList.remove('scroll-down');
        }
        
        this.lastScrollTop = scrollTop;
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// 4. 스무스 스크롤 네비게이션
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('a[href^="#"]');
        this.init();
    }
    
    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    this.scrollToElement(targetElement);
                }
            });
        });
    }
    
    scrollToElement(element) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// 5. 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MenuFilter();
    new ShoppingCart();
    new ScrollHandler();
    new SmoothScroll();
});`}
              language="javascript"
            />

            <CheckList
              title="DOM 조작 체크리스트"
              items={[
                { id: 'dom-elements', text: '요소 선택 및 조작 방법 이해' },
                { id: 'content-update', text: '텍스트 및 HTML 내용 동적 변경' },
                { id: 'style-manipulation', text: 'CSS 클래스 및 스타일 조작' },
                { id: 'element-creation', text: '새 요소 생성 및 추가' },
                { id: 'event-handling', text: '이벤트 리스너 등록 및 처리' },
                { id: 'animation-effects', text: '부드러운 애니메이션 효과 구현' }
              ]}
              onComplete={(completed, total) => {
                if (completed >= 4) {
                  onComplete();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. 모바일 최적화 단계
function MobileStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Smartphone className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold">모바일 최적화 = 스마트 홈 자동화 시스템</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-purple-600" />
            <div>
              <strong>왜 모바일 최적화가 필요한가?</strong>
              <p className="mt-2">
                스마트폰이 일상화된 시대에 웹사이트의 70% 이상이 모바일에서 접속됩니다. 
                작은 화면에서도 편리하게 사용할 수 있는 터치 친화적인 인터페이스와 
                빠른 로딩 속도가 필수입니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지를 모바일 최적화해줘. 
                  터치 친화적인 버튼 크기, 스와이프 제스처 지원, 
                  모바일 네비게이션 메뉴, 빠른 로딩을 위한 이미지 최적화, 
                  가로/세로 화면 회전 대응을 구현해줘. 
                  모든 터치 인터랙션에 시각적 피드백을 추가해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📱 주요 모바일 최적화 기능</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">👆 터치 최적화</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• 44px 이상의 터치 타겟</li>
                  <li>• 스와이프 제스처 지원</li>
                  <li>• 터치 피드백 효과</li>
                  <li>• 긴 터치 메뉴</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">⚡ 성능 최적화</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 이미지 지연 로딩</li>
                  <li>• 압축 및 최적화</li>
                  <li>• 캐시 활용</li>
                  <li>• 번들 사이즈 최소화</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 모바일 최적화 JavaScript 코드</h4>

            <CodeBlock
              code={`// 📱 신승반점 모바일 최적화 시스템

// 1. 터치 제스처 핸들러
class TouchHandler {
    constructor() {
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.minSwipeDistance = 50;
        
        this.init();
    }
    
    init() {
        // 터치 이벤트 리스너 등록
        document.addEventListener('touchstart', this.handleTouchStart.bind(this));
        document.addEventListener('touchmove', this.handleTouchMove.bind(this));
        document.addEventListener('touchend', this.handleTouchEnd.bind(this));
        
        // 터치 피드백 효과
        this.addTouchFeedback();
    }
    
    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
    }
    
    handleTouchMove(e) {
        if (!this.startX || !this.startY) return;
        
        this.endX = e.touches[0].clientX;
        this.endY = e.touches[0].clientY;
        
        // 스크롤 방향 감지 및 최적화
        this.optimizeScrolling();
    }
    
    handleTouchEnd(e) {
        if (!this.startX || !this.startY) return;
        
        const deltaX = this.endX - this.startX;
        const deltaY = this.endY - this.startY;
        
        // 스와이프 제스처 감지
        if (Math.abs(deltaX) > this.minSwipeDistance) {
            if (deltaX > 0) {
                this.handleSwipeRight();
            } else {
                this.handleSwipeLeft();
            }
        }
        
        if (Math.abs(deltaY) > this.minSwipeDistance) {
            if (deltaY > 0) {
                this.handleSwipeDown();
            } else {
                this.handleSwipeUp();
            }
        }
        
        // 초기화
        this.startX = 0;
        this.startY = 0;
    }
    
    handleSwipeLeft() {
        // 좌측 스와이프: 다음 메뉴 카테고리
        const currentCategory = document.querySelector('.filter-btn.active');
        const nextCategory = currentCategory.nextElementSibling;
        if (nextCategory) {
            nextCategory.click();
        }
    }
    
    handleSwipeRight() {
        // 우측 스와이프: 이전 메뉴 카테고리
        const currentCategory = document.querySelector('.filter-btn.active');
        const prevCategory = currentCategory.previousElementSibling;
        if (prevCategory) {
            prevCategory.click();
        }
    }
    
    handleSwipeUp() {
        // 위쪽 스와이프: 상단으로 스크롤
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    addTouchFeedback() {
        // 터치 가능한 모든 요소에 피드백 추가
        const touchElements = document.querySelectorAll('button, .menu-item, .nav-link');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', (e) => {
                element.classList.add('touch-active');
                
                // 햅틱 피드백 (지원 기기에서만)
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            });
            
            element.addEventListener('touchend', (e) => {
                setTimeout(() => {
                    element.classList.remove('touch-active');
                }, 150);
            });
        });
    }
    
    optimizeScrolling() {
        // 스크롤 최적화: 불필요한 리플로우 방지
        let ticking = false;
        
        if (!ticking) {
            requestAnimationFrame(() => {
                this.updateScrollPosition();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    updateScrollPosition() {
        const scrollY = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

// 2. 반응형 이미지 최적화
class ResponsiveImageOptimizer {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.imageObserver = null;
        
        this.init();
    }
    
    init() {
        // Intersection Observer로 지연 로딩
        this.imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        this.images.forEach(img => {
            this.imageObserver.observe(img);
        });
        
        // 네트워크 상태에 따른 이미지 품질 조정
        this.adjustImageQuality();
    }
    
    loadImage(img) {
        const src = img.dataset.src;
        const srcset = img.dataset.srcset;
        
        // 이미지 로딩 시작
        img.classList.add('loading');
        
        const imageLoader = new Image();
        imageLoader.onload = () => {
            img.src = src;
            if (srcset) {
                img.srcset = srcset;
            }
            img.classList.remove('loading');
            img.classList.add('loaded');
        };
        
        imageLoader.onerror = () => {
            img.classList.remove('loading');
            img.classList.add('error');
        };
        
        imageLoader.src = src;
        this.imageObserver.unobserve(img);
    }
    
    adjustImageQuality() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        
        if (connection) {
            const { effectiveType, saveData } = connection;
            
            // 느린 연결 또는 데이터 절약 모드
            if (effectiveType === 'slow-2g' || effectiveType === '2g' || saveData) {
                this.setLowQualityImages();
            }
        }
    }
    
    setLowQualityImages() {
        this.images.forEach(img => {
            const lowQualitySrc = img.dataset.srcLow || img.dataset.src;
            img.dataset.src = lowQualitySrc;
        });
    }
}

// 3. 디바이스 회전 대응
class OrientationHandler {
    constructor() {
        this.currentOrientation = window.orientation || 0;
        this.init();
    }
    
    init() {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleOrientationChange();
            }, 100);
        });
        
        // 초기 설정
        this.handleOrientationChange();
    }
    
    handleOrientationChange() {
        const orientation = window.orientation || 0;
        const isLandscape = Math.abs(orientation) === 90;
        
        document.body.classList.toggle('landscape', isLandscape);
        document.body.classList.toggle('portrait', !isLandscape);
        
        // 가로 모드에서 네비게이션 조정
        if (isLandscape) {
            this.optimizeForLandscape();
        } else {
            this.optimizeForPortrait();
        }
        
        // 뷰포트 높이 재계산 (모바일 주소창 대응)
        this.updateViewportHeight();
    }
    
    optimizeForLandscape() {
        const navbar = document.querySelector('.navbar');
        const content = document.querySelector('.main-content');
        
        // 가로 모드에서 내비게이션 최소화
        navbar.classList.add('landscape-mode');
        content.style.paddingTop = '60px';
    }
    
    optimizeForPortrait() {
        const navbar = document.querySelector('.navbar');
        const content = document.querySelector('.main-content');
        
        navbar.classList.remove('landscape-mode');
        content.style.paddingTop = '80px';
    }
    
    updateViewportHeight() {
        // CSS 변수로 실제 뷰포트 높이 설정
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
    }
}

// 시스템 초기화
document.addEventListener('DOMContentLoaded', () => {
    new TouchHandler();
    new ResponsiveImageOptimizer();
    new OrientationHandler();
});`}
              language="javascript"
            />

            <CheckList
              title="모바일 최적화 체크리스트"
              items={[
                { id: 'touch-targets', text: '터치 타겟 크기 최적화 (44px 이상)' },
                { id: 'gesture-support', text: '스와이프 제스처 지원' },
                { id: 'touch-feedback', text: '터치 피드백 효과 구현' },
                { id: 'lazy-loading', text: '이미지 지연 로딩' },
                { id: 'orientation-handling', text: '화면 회전 대응' },
                { id: 'performance-optimization', text: '모바일 성능 최적화' }
              ]}
              onComplete={(completed, total) => {
                if (completed >= 4) {
                  onComplete();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. 유효성 검증 단계
function ValidationStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="h-5 w-5 text-orange-600" />
            <h3 className="text-lg font-semibold">유효성 검증 = 보안 시스템</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <div>
              <strong>왜 유효성 검증이 필요한가?</strong>
              <p className="mt-2">
                집에 보안 시스템을 설치하여 무단 침입을 방지하듯, 웹사이트도 
                잘못된 데이터나 악의적인 입력을 방지해야 합니다. 
                사용자 경험을 개선하고 보안을 강화하는 핵심 기능입니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지에 폼 유효성 검증을 추가해줘. 
                  예약 폼, 리뷰 작성, 연락처 입력에 대한 실시간 검증, 
                  이메일 형식 확인, 전화번호 형식 검증, 
                  필수 항목 검사, 길이 제한 등을 구현해줘. 
                  사용자 친화적인 에러 메시지와 성공 피드백을 포함해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">🔍 주요 유효성 검증 기능</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-2">📋 입력 검증</h5>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• 필수 항목 검사</li>
                  <li>• 형식 유효성 검사</li>
                  <li>• 길이 제한 검사</li>
                  <li>• 특수 문자 필터링</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">🛡️ 보안 검증</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• XSS 방지</li>
                  <li>• SQL 인젝션 방지</li>
                  <li>• CSRF 토큰 검증</li>
                  <li>• 입력 값 새니타이징</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 유효성 검증 JavaScript 코드</h4>

            <CodeBlock
              code={`// 🔍 신승반점 유효성 검증 시스템

// 1. 폼 유효성 검증 클래스
class FormValidator {
    constructor(form) {
        this.form = form;
        this.errors = {};
        this.rules = {};
        
        this.init();
    }
    
    init() {
        // 실시간 검증 이벤트 리스너
        this.form.addEventListener('input', this.handleInput.bind(this));
        this.form.addEventListener('blur', this.handleBlur.bind(this), true);
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        
        // 기본 검증 규칙 설정
        this.setDefaultRules();
    }
    
    setDefaultRules() {
        this.rules = {
            required: {
                test: (value) => value.trim() !== '',
                message: '필수 입력 항목입니다'
            },
            email: {
                test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                message: '올바른 이메일 형식이 아닙니다'
            },
            phone: {
                test: (value) => /^(010|011|016|017|018|019)-?\d{3,4}-?\d{4}$/.test(value),
                message: '올바른 전화번호 형식이 아닙니다'
            },
            minLength: {
                test: (value, min) => value.length >= min,
                message: (min) => \`최소 \${min}자 이상 입력해주세요\`
            },
            maxLength: {
                test: (value, max) => value.length <= max,
                message: (max) => \`최대 \${max}자까지 입력 가능합니다\`
            },
            noScript: {
                test: (value) => !/<script.*?>.*?<\/script>/gi.test(value),
                message: '스크립트 태그는 사용할 수 없습니다'
            }
        };
    }
    
    handleInput(e) {
        const field = e.target;
        if (field.dataset.validate) {
            this.validateField(field);
        }
    }
    
    handleBlur(e) {
        const field = e.target;
        if (field.dataset.validate) {
            this.validateField(field);
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const isValid = this.validateForm();
        if (isValid) {
            this.handleSuccessfulSubmit();
        } else {
            this.handleFailedSubmit();
        }
    }
    
    validateField(field) {
        const fieldName = field.name;
        const fieldValue = field.value;
        const rules = field.dataset.validate.split('|');
        
        this.errors[fieldName] = [];
        
        rules.forEach(rule => {
            const [ruleName, ruleValue] = rule.split(':');
            
            if (this.rules[ruleName]) {
                const ruleConfig = this.rules[ruleName];
                let isValid;
                
                if (ruleValue) {
                    isValid = ruleConfig.test(fieldValue, ruleValue);
                } else {
                    isValid = ruleConfig.test(fieldValue);
                }
                
                if (!isValid) {
                    let message = ruleConfig.message;
                    if (typeof message === 'function') {
                        message = message(ruleValue);
                    }
                    this.errors[fieldName].push(message);
                }
            }
        });
        
        this.displayFieldErrors(field);
        return this.errors[fieldName].length === 0;
    }
    
    validateForm() {
        const fields = this.form.querySelectorAll('[data-validate]');
        let isValid = true;
        
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    displayFieldErrors(field) {
        const fieldName = field.name;
        const errorContainer = field.parentElement.querySelector('.error-message');
        const fieldErrors = this.errors[fieldName] || [];
        
        if (fieldErrors.length > 0) {
            field.classList.add('error');
            field.classList.remove('success');
            
            if (errorContainer) {
                errorContainer.textContent = fieldErrors[0];
                errorContainer.style.display = 'block';
            }
        } else {
            field.classList.remove('error');
            field.classList.add('success');
            
            if (errorContainer) {
                errorContainer.style.display = 'none';
            }
        }
    }
    
    handleSuccessfulSubmit() {
        // 성공 메시지 표시
        this.showSuccessMessage();
        
        // 폼 데이터 수집 및 전송
        const formData = new FormData(this.form);
        this.submitForm(formData);
    }
    
    handleFailedSubmit() {
        // 첫 번째 오류 필드로 스크롤
        const firstErrorField = this.form.querySelector('.error');
        if (firstErrorField) {
            firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstErrorField.focus();
        }
        
        // 오류 요약 표시
        this.showErrorSummary();
    }
    
    showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = \`
            <div class="success-icon">✓</div>
            <h3>전송 완료!</h3>
            <p>귀하의 요청이 성공적으로 전송되었습니다.</p>
        \`;
        
        this.form.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
    
    showErrorSummary() {
        const errorFields = Object.keys(this.errors).filter(
            field => this.errors[field].length > 0
        );
        
        if (errorFields.length === 0) return;
        
        const errorSummary = document.createElement('div');
        errorSummary.className = 'error-summary';
        errorSummary.innerHTML = \`
            <h3>다음 항목을 확인해주세요:</h3>
            <ul>
                \${errorFields.map(field => 
                    \`<li>\${this.getFieldLabel(field)}: \${this.errors[field][0]}</li>\`
                ).join('')}
            </ul>
        \`;
        
        this.form.insertBefore(errorSummary, this.form.firstChild);
        
        setTimeout(() => {
            errorSummary.remove();
        }, 5000);
    }
    
    getFieldLabel(fieldName) {
        const field = this.form.querySelector(\`[name="\${fieldName}"]\`);
        const label = field.closest('.form-group').querySelector('label');
        return label ? label.textContent : fieldName;
    }
    
    submitForm(formData) {
        // 실제 서버 전송 로직
        fetch('/api/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                this.form.reset();
                this.clearErrors();
            } else {
                this.handleServerErrors(data.errors);
            }
        })
        .catch(error => {
            console.error('전송 오류:', error);
            this.showErrorMessage('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
        });
    }
    
    clearErrors() {
        this.errors = {};
        this.form.querySelectorAll('.error').forEach(field => {
            field.classList.remove('error', 'success');
        });
        this.form.querySelectorAll('.error-message').forEach(msg => {
            msg.style.display = 'none';
        });
    }
}

// 2. 예약 폼 특별 검증
class ReservationValidator extends FormValidator {
    constructor(form) {
        super(form);
        this.setReservationRules();
    }
    
    setReservationRules() {
        this.rules = {
            ...this.rules,
            futureDate: {
                test: (value) => {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return selectedDate >= today;
                },
                message: '오늘 이후 날짜를 선택해주세요'
            },
            businessHours: {
                test: (value) => {
                    const time = parseInt(value.replace(':', ''));
                    return time >= 1100 && time <= 2200;
                },
                message: '영업시간(11:00~22:00) 내에서 선택해주세요'
            },
            partySize: {
                test: (value) => {
                    const size = parseInt(value);
                    return size >= 1 && size <= 10;
                },
                message: '1명 이상 10명 이하로 선택해주세요'
            }
        };
    }
}

// 3. 리뷰 폼 검증
class ReviewValidator extends FormValidator {
    constructor(form) {
        super(form);
        this.setReviewRules();
    }
    
    setReviewRules() {
        this.rules = {
            ...this.rules,
            rating: {
                test: (value) => {
                    const rating = parseInt(value);
                    return rating >= 1 && rating <= 5;
                },
                message: '1점 이상 5점 이하로 평가해주세요'
            },
            profanity: {
                test: (value) => {
                    const profanityWords = ['욕설1', '욕설2', '부적절한단어'];
                    return !profanityWords.some(word => value.includes(word));
                },
                message: '부적절한 내용이 포함되어 있습니다'
            }
        };
    }
}

// 폼 검증 시스템 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 예약 폼 검증
    const reservationForm = document.querySelector('#reservation-form');
    if (reservationForm) {
        new ReservationValidator(reservationForm);
    }
    
    // 리뷰 폼 검증
    const reviewForm = document.querySelector('#review-form');
    if (reviewForm) {
        new ReviewValidator(reviewForm);
    }
    
    // 일반 폼 검증
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        new FormValidator(contactForm);
    }
});`}
              language="javascript"
            />

            <CheckList
              title="유효성 검증 체크리스트"
              items={[
                { id: 'input-validation', text: '입력 값 유효성 검사' },
                { id: 'real-time-feedback', text: '실시간 피드백 제공' },
                { id: 'error-handling', text: '사용자 친화적 에러 메시지' },
                { id: 'security-validation', text: '보안 검증 (XSS, 인젝션 방지)' },
                { id: 'form-submission', text: '폼 제출 처리' },
                { id: 'success-feedback', text: '성공 피드백 표시' }
              ]}
              onComplete={(completed, total) => {
                if (completed >= 4) {
                  onComplete();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. 성능 최적화 단계
function PerformanceStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="h-5 w-5 text-yellow-600" />
            <h3 className="text-lg font-semibold">성능 최적화 = 전력 효율화 시스템</h3>
          </div>
          
          <div className="alert alert-info mb-4">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <div>
              <strong>왜 성능 최적화가 필요한가?</strong>
              <p className="mt-2">
                건물의 전력 효율화로 에너지 비용을 절약하듯, 웹사이트도 
                로딩 속도와 메모리 사용량을 최적화하여 사용자 경험을 개선하고 
                서버 비용을 절약할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="alert alert-warning">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <div>
                <strong>AI 프롬프터 가이드:</strong>
                <p className="mt-2 text-sm">
                  Cursor AI에게 이렇게 요청해보세요:
                </p>
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  "신승반점 홈페이지 성능을 최적화해줘. 
                  코드 스플리팅, 이미지 최적화, 캐싱 전략, 
                  번들 크기 최소화, 메모리 누수 방지, 
                  지연 로딩, 프리페치 등을 구현해줘. 
                  Lighthouse 점수 90점 이상을 목표로 해줘."
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold">⚡ 주요 성능 최적화 기법</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">🚀 로딩 최적화</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 코드 스플리팅</li>
                  <li>• 지연 로딩</li>
                  <li>• 프리페치/프리로드</li>
                  <li>• 이미지 최적화</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">🧠 메모리 최적화</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 이벤트 리스너 정리</li>
                  <li>• 메모리 누수 방지</li>
                  <li>• 객체 풀링</li>
                  <li>• 가비지 컬렉션 최적화</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold">📝 성능 최적화 JavaScript 코드</h4>

            <CodeBlock
              code={`// ⚡ 신승반점 성능 최적화 시스템

// 1. 지연 로딩 매니저
class LazyLoadManager {
    constructor() {
        this.observers = new Map();
        this.loadedResources = new Set();
        
        this.init();
    }
    
    init() {
        // 이미지 지연 로딩
        this.initImageLazyLoad();
        
        // 컴포넌트 지연 로딩
        this.initComponentLazyLoad();
        
        // 스크립트 지연 로딩
        this.initScriptLazyLoad();
    }
    
    initImageLazyLoad() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
        
        this.observers.set('images', imageObserver);
    }
    
    initComponentLazyLoad() {
        const componentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadComponent(entry.target);
                }
            });
        }, {
            rootMargin: '100px'
        });
        
        document.querySelectorAll('[data-component]').forEach(element => {
            componentObserver.observe(element);
        });
        
        this.observers.set('components', componentObserver);
    }
    
    loadImage(img) {
        return new Promise((resolve, reject) => {
            const actualImg = new Image();
            
            actualImg.onload = () => {
                // 이미지 로드 완료 시 부드러운 페이드인 효과
                img.src = actualImg.src;
                img.classList.add('loaded');
                
                // WebP 지원 확인 및 적용
                if (this.supportsWebP() && img.dataset.webp) {
                    img.src = img.dataset.webp;
                }
                
                resolve();
            };
            
            actualImg.onerror = reject;
            actualImg.src = img.dataset.src;
        });
    }
    
    loadComponent(element) {
        const componentName = element.dataset.component;
        
        if (this.loadedResources.has(componentName)) {
            return;
        }
        
        // 동적 import로 컴포넌트 로드
        import(\`./components/\${componentName}.js\`)
            .then(module => {
                const Component = module.default;
                new Component(element);
                this.loadedResources.add(componentName);
            })
            .catch(error => {
                console.error(\`Failed to load component: \${componentName}\`, error);
            });
    }
    
    supportsWebP() {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
}

// 2. 캐시 매니저
class CacheManager {
    constructor() {
        this.cache = new Map();
        this.cacheExpiry = new Map();
        this.maxCacheSize = 100;
        this.defaultTTL = 5 * 60 * 1000; // 5분
        
        this.init();
    }
    
    init() {
        // 서비스 워커 등록
        this.registerServiceWorker();
        
        // API 응답 캐싱
        this.setupAPICache();
        
        // 정적 리소스 캐싱
        this.setupStaticCache();
    }
    
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker 등록 성공:', registration);
                })
                .catch(error => {
                    console.log('Service Worker 등록 실패:', error);
                });
        }
    }
    
    setupAPICache() {
        const originalFetch = window.fetch;
        
        window.fetch = (input, init) => {
            const url = typeof input === 'string' ? input : input.url;
            const cacheKey = this.getCacheKey(url, init);
            
            // 캐시된 응답 확인
            if (this.hasValidCache(cacheKey)) {
                return Promise.resolve(this.cache.get(cacheKey).clone());
            }
            
            return originalFetch(input, init)
                .then(response => {
                    if (response.ok && this.shouldCache(url)) {
                        this.setCache(cacheKey, response.clone());
                    }
                    return response;
                });
        };
    }
    
    setupStaticCache() {
        // 중요한 정적 리소스 프리캐싱
        const criticalResources = [
            '/css/critical.css',
            '/js/core.js',
            '/images/logo.webp'
        ];
        
        criticalResources.forEach(resource => {
            this.preloadResource(resource);
        });
    }
    
    preloadResource(url) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    }
    
    getCacheKey(url, init) {
        const method = init?.method || 'GET';
        const body = init?.body || '';
        return \`\${method}:\${url}:\${body}\`;
    }
    
    hasValidCache(key) {
        if (!this.cache.has(key)) return false;
        
        const expiry = this.cacheExpiry.get(key);
        if (expiry && Date.now() > expiry) {
            this.cache.delete(key);
            this.cacheExpiry.delete(key);
            return false;
        }
        
        return true;
    }
    
    setCache(key, value, ttl = this.defaultTTL) {
        // 캐시 크기 제한
        if (this.cache.size >= this.maxCacheSize) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
            this.cacheExpiry.delete(firstKey);
        }
        
        this.cache.set(key, value);
        this.cacheExpiry.set(key, Date.now() + ttl);
    }
    
    shouldCache(url) {
        // API 엔드포인트만 캐싱
        return url.includes('/api/') && !url.includes('/api/user');
    }
}

// 3. 메모리 최적화 매니저
class MemoryOptimizer {
    constructor() {
        this.eventListeners = new Map();
        this.intervals = new Set();
        this.timeouts = new Set();
        this.objectPools = new Map();
        
        this.init();
    }
    
    init() {
        // 페이지 언로드 시 정리
        window.addEventListener('beforeunload', () => {
            this.cleanup();
        });
        
        // 메모리 사용량 모니터링
        this.monitorMemoryUsage();
        
        // 객체 풀 초기화
        this.initObjectPools();
    }
    
    // 이벤트 리스너 관리
    addEventListener(element, event, handler, options) {
        const key = \`\${element.tagName}:\${event}\`;
        
        if (!this.eventListeners.has(key)) {
            this.eventListeners.set(key, []);
        }
        
        this.eventListeners.get(key).push({
            element,
            event,
            handler,
            options
        });
        
        element.addEventListener(event, handler, options);
    }
    
    removeEventListener(element, event, handler) {
        const key = \`\${element.tagName}:\${event}\`;
        const listeners = this.eventListeners.get(key);
        
        if (listeners) {
            const index = listeners.findIndex(l => 
                l.element === element && l.handler === handler
            );
            
            if (index !== -1) {
                listeners.splice(index, 1);
                element.removeEventListener(event, handler);
            }
        }
    }
    
    // 타이머 관리
    setTimeout(callback, delay) {
        const id = setTimeout(() => {
            callback();
            this.timeouts.delete(id);
        }, delay);
        
        this.timeouts.add(id);
        return id;
    }
    
    setInterval(callback, interval) {
        const id = setInterval(callback, interval);
        this.intervals.add(id);
        return id;
    }
    
    clearTimeout(id) {
        clearTimeout(id);
        this.timeouts.delete(id);
    }
    
    clearInterval(id) {
        clearInterval(id);
        this.intervals.delete(id);
    }
    
    // 객체 풀링
    initObjectPools() {
        this.objectPools.set('menuItems', {
            pool: [],
            create: () => ({ name: '', price: 0, description: '', image: '' }),
            reset: (obj) => {
                obj.name = '';
                obj.price = 0;
                obj.description = '';
                obj.image = '';
            }
        });
    }
    
    getPooledObject(type) {
        const pool = this.objectPools.get(type);
        if (!pool) return null;
        
        if (pool.pool.length > 0) {
            return pool.pool.pop();
        }
        
        return pool.create();
    }
    
    returnToPool(type, obj) {
        const pool = this.objectPools.get(type);
        if (!pool) return;
        
        pool.reset(obj);
        pool.pool.push(obj);
    }
    
    // 메모리 사용량 모니터링
    monitorMemoryUsage() {
        if ('memory' in performance) {
            setInterval(() => {
                const memInfo = performance.memory;
                const usedMemory = memInfo.usedJSHeapSize;
                const totalMemory = memInfo.totalJSHeapSize;
                const limit = memInfo.jsHeapSizeLimit;
                
                console.log(\`메모리 사용량: \${(usedMemory / 1024 / 1024).toFixed(2)}MB / \${(totalMemory / 1024 / 1024).toFixed(2)}MB\`);
                
                // 메모리 사용량이 80% 이상이면 정리
                if (usedMemory / limit > 0.8) {
                    this.forceGarbageCollection();
                }
            }, 30000);
        }
    }
    
    forceGarbageCollection() {
        // 캐시 정리
        if (window.cacheManager) {
            window.cacheManager.cache.clear();
            window.cacheManager.cacheExpiry.clear();
        }
        
        // 불필요한 DOM 참조 제거
        document.querySelectorAll('[data-cleanup]').forEach(el => {
            el.remove();
        });
        
        // 강제 가비지 컬렉션 (개발 환경)
        if (window.gc) {
            window.gc();
        }
    }
    
    cleanup() {
        // 모든 이벤트 리스너 제거
        this.eventListeners.forEach(listeners => {
            listeners.forEach(({ element, event, handler }) => {
                element.removeEventListener(event, handler);
            });
        });
        
        // 모든 타이머 정리
        this.timeouts.forEach(id => clearTimeout(id));
        this.intervals.forEach(id => clearInterval(id));
        
        // 객체 풀 정리
        this.objectPools.clear();
        
        console.log('메모리 정리 완료');
    }
}

// 시스템 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.lazyLoadManager = new LazyLoadManager();
    window.cacheManager = new CacheManager();
    window.memoryOptimizer = new MemoryOptimizer();
});`}
              language="javascript"
            />

            <CheckList
              title="성능 최적화 체크리스트"
              items={[
                { id: 'lazy-loading', text: '지연 로딩 구현' },
                { id: 'code-splitting', text: '코드 스플리팅 적용' },
                { id: 'caching-strategy', text: '캐싱 전략 구현' },
                { id: 'memory-optimization', text: '메모리 최적화' },
                { id: 'bundle-optimization', text: '번들 크기 최적화' },
                { id: 'performance-monitoring', text: '성능 모니터링 설정' }
              ]}
              onComplete={(completed, total) => {
                if (completed >= 4) {
                  onComplete();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 