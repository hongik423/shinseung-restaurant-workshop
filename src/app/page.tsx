'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  BookOpen, 
  Settings, 
  Code, 
  Palette, 
  Zap, 
  Globe,
  CheckCircle,
  Menu,
  X,
  Clock,
  Star,
  Search,
  Filter
} from 'lucide-react';

// Dynamic import for client-only components
const ClientOnlyStats = dynamic(() => Promise.resolve(function ClientOnlyStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
      <div className="text-center">
        <div className="text-lg font-bold text-gray-900">1,000+</div>
        <div className="text-xs text-gray-500">완주자</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-gray-900">4.9★</div>
        <div className="text-xs text-gray-500">평점</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-gray-900">8-10시간</div>
        <div className="text-xs text-gray-500">완주시간</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-gray-900">6단계</div>
        <div className="text-xs text-gray-500">체계적 학습</div>
      </div>
    </div>
  );
}), { ssr: false });

export default function Home() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      id: 1,
      title: '환경설정',
      subtitle: '프롬프트 생성기',
      description: '개발환경 구축을 위한 프롬프트를 생성합니다',
      icon: Settings,
      color: '#FF6B35',
      bgColor: '#FFF5F3',
      link: '/steps/1-environment',
      duration: '15분',
      rating: 4.9,
      category: '개발도구'
    },
    {
      id: 2,
      title: 'HTML 구조',
      subtitle: '프롬프트 생성기',
      description: '웹사이트 구조 설계를 위한 프롬프트를 생성합니다',
      icon: Code,
      color: '#007AFF',
      bgColor: '#F0F8FF',
      link: '/steps/2-html',
      duration: '30분',
      rating: 4.8,
      category: '마크업'
    },
    {
      id: 3,
      title: 'CSS 디자인',
      subtitle: '프롬프트 생성기',
      description: '스타일링과 반응형 디자인을 위한 프롬프트를 생성합니다',
      icon: Palette,
      color: '#AF52DE',
      bgColor: '#F9F5FF',
      link: '/steps/3-css',
      duration: '45분',
      rating: 4.9,
      category: '디자인'
    },
    {
      id: 4,
      title: 'JavaScript',
      subtitle: '기능 프롬프트 생성기',
      description: '인터랙티브 기능 구현을 위한 프롬프트를 생성합니다',
      icon: Zap,
      color: '#FFCC02',
      bgColor: '#FFFBF0',
      link: '/steps/4-javascript',
      duration: '40분',
      rating: 4.7,
      category: '개발'
    },
    {
      id: 5,
      title: '배포 가이드',
      subtitle: '프롬프트 생성기',
      description: 'GitHub과 Vercel을 통한 배포 프롬프트를 생성합니다',
      icon: Globe,
      color: '#34C759',
      bgColor: '#F0FFF4',
      link: '/steps/5-deploy',
      duration: '25분',
      rating: 4.8,
      category: '배포'
    },
    {
      id: 6,
      title: '완성도 검증',
      subtitle: '프롬프트 생성기',
      description: '프로젝트 완성도를 검증하고 개선점을 찾는 프롬프트를 생성합니다',
      icon: CheckCircle,
      color: '#32D74B',
      bgColor: '#F0FFF4',
      link: '/steps/6-validate',
      duration: '20분',
      rating: 4.9,
      category: '품질관리'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('구독:', email);
    setEmail('');
    alert('소식받기 신청이 완료되었습니다!');
  };

  const filteredSteps = steps.filter(step => 
    step.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    step.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    step.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* App Store Style Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* App Store Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">신승반점 실습교재</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                투데이
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                게임
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                앱
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                검색
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
                aria-label="메뉴 토글"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="space-y-2">
                <button className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                  투데이
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                  게임
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                  앱
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                  검색
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* App Store Hero Section */}
      <section className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature App Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-6 md:mb-0 md:pr-8">
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    신규 출시
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Next-Level<br />
                    Web Development
                  </h1>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Cursor AI를 활용한 웹개발 완전정복 가이드.<br />
                    초보자도 8-10시간이면 전문적인 웹사이트를 완성할 수 있습니다.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <Link 
                      href="/steps/1-environment"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                    >
                      시작하기
                    </Link>
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-white bg-opacity-80 text-gray-900 font-semibold rounded-xl hover:bg-opacity-100 transition-all backdrop-blur-sm">
                      미리보기
                    </button>
                  </div>
                  
                  <ClientOnlyStats />
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-white rounded-3xl shadow-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="실습도구 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">필터</span>
            </button>
          </div>
        </div>
      </section>

      {/* App Store Grid Section */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">실습도구</h2>
            <button className="text-blue-500 text-sm font-medium hover:text-blue-600">
              모두 보기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = completedSteps.includes(step.id);
              
              return (
                <Link key={step.id} href={step.link}>
                  <div className="group bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-200 cursor-pointer">
                    {/* App Icon and Info */}
                    <div className="flex items-start space-x-3 mb-3">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        <Icon 
                          className="h-8 w-8" 
                          style={{ color: step.color }}
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 truncate">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">
                          {step.subtitle}
                        </p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-500">{step.rating}</span>
                          </div>
                          <span className="text-xs text-gray-400">{step.category}</span>
                        </div>
                      </div>
                      
                      {isCompleted && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{step.duration}</span>
                      </div>
                      
                      <button className="px-4 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition-colors">
                        시작
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Store Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">신승반점 실습교재</h3>
                  <p className="text-sm text-gray-500">웹개발 완전정복 가이드</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                1905년부터 이어진 전통의 맛처럼, 
                전통적인 웹 개발 기술을 현대적인 방식으로 배워보세요.
              </p>
              
              {/* Newsletter Subscription */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">새 도구 소식 받기</h4>
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일을 입력하세요"
                    className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-r-xl hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    구독
                  </button>
                </form>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">학습 과정</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {['개발환경 구축', 'HTML5 구조 설계', 'CSS3 스타일링', 'JavaScript 기능', '배포 및 운영', '완성도 검증'].map((item, index) => (
                  <li key={index} className="hover:text-gray-900 transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">지원 기능</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {['AI 프롬프트 생성기', '단계별 체크리스트', '진행 상황 추적', '실시간 미리보기', '코드 복사 기능', '24/7 AI 지원'].map((item, index) => (
                  <li key={index} className="hover:text-gray-900 transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 mt-8 text-center text-xs text-gray-500">
            <p>© 2024 신승반점 TFT팀. 모든 권리 보유. Made with ❤️ in Korea</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
