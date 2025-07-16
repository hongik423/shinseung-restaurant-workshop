'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, Star, BookOpen, Zap, Brain, Code, Keyboard } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const CursorGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cursorFeatures = [
    // 기본 사용법
    {
      category: 'basics',
      title: 'Cursor 설치 및 초기 설정',
      difficulty: 'beginner',
      description: 'Cursor를 설치하고 개발 환경을 설정하는 방법',
      steps: [
        'https://cursor.sh 에서 Cursor 다운로드',
        'OS에 맞는 버전 설치 (Windows, macOS, Linux)',
        'OpenAI API 키 설정 또는 Cursor Pro 구독',
        '워크스페이스 설정 및 확장 프로그램 설치',
        'Git 연동 및 기본 설정 완료'
      ],
      shortcuts: [
        'Ctrl/Cmd + Shift + P: 명령 팔레트',
        'Ctrl/Cmd + K: AI 채팅 열기',
        'Ctrl/Cmd + L: 전체 대화 선택',
        'Ctrl/Cmd + I: 인라인 AI 편집',
        'Ctrl/Cmd + J: 터미널 열기/닫기'
      ],
      tips: [
        '초기 설정 시 AI 모델을 GPT-4로 선택하면 더 정확한 결과',
        '개인 프로젝트는 무료, 상업적 용도는 Pro 버전 권장',
        '확장 프로그램은 필요한 것만 설치하여 성능 최적화',
        'Git 연동으로 변경사항 추적 및 협업 가능',
        '테마와 폰트를 개인 취향에 맞게 설정'
      ],
      useCase: '개발 환경 구축, 초기 설정, 워크스페이스 관리'
    },
    {
      category: 'basics',
      title: 'AI 채팅 기본 사용법',
      difficulty: 'beginner',
      description: 'Cursor AI와 대화하며 코드를 작성하는 기본 방법',
      steps: [
        'Ctrl/Cmd + K로 AI 채팅 창 열기',
        '명확하고 구체적인 질문 작성',
        '코드 컨텍스트 포함하여 질문',
        'AI 응답 검토 및 적용',
        '추가 질문으로 코드 개선'
      ],
      shortcuts: [
        'Ctrl/Cmd + K: AI 채팅 열기',
        'Ctrl/Cmd + Enter: 메시지 전송',
        'Ctrl/Cmd + L: 대화 내용 선택',
        'Escape: 채팅 창 닫기',
        'Tab: 제안된 코드 적용'
      ],
      tips: [
        '질문할 때 프로젝트 맥락과 사용 중인 기술 스택 명시',
        '에러 메시지는 전체 내용을 복사해서 질문',
        '원하는 결과를 구체적으로 설명',
        'AI 답변을 무조건 믿지 말고 검증',
        '단계별로 나누어 질문하면 더 정확한 답변'
      ],
      useCase: '코드 작성, 디버깅, 리팩토링, 학습'
    },
    {
      category: 'basics',
      title: '코드 컨텍스트 활용',
      difficulty: 'beginner',
      description: 'AI가 현재 코드를 이해하고 더 나은 답변을 제공하도록 하는 방법',
      steps: [
        '현재 파일의 코드 선택',
        '@파일명으로 특정 파일 참조',
        '관련 코드 조각을 채팅에 포함',
        '프로젝트 구조 설명',
        '사용 중인 라이브러리/프레임워크 명시'
      ],
      shortcuts: [
        'Ctrl/Cmd + A: 전체 선택',
        'Ctrl/Cmd + C: 코드 복사',
        '@: 파일 참조',
        '#: 심볼 참조',
        'Ctrl/Cmd + Click: 정의로 이동'
      ],
      tips: [
        '에러가 발생한 코드 주변을 함께 선택해서 질문',
        '@파일명을 사용해 다른 파일의 코드 참조',
        '프로젝트의 package.json 내용도 맥락으로 활용',
        '관련 있는 함수나 클래스를 함께 선택',
        '코드 스타일과 컨벤션을 명시하면 일관된 답변'
      ],
      useCase: '정확한 코드 생성, 버그 수정, 코드 개선'
    },

    // 고급 기능
    {
      category: 'advanced',
      title: '인라인 AI 편집',
      difficulty: 'intermediate',
      description: 'Ctrl/Cmd + I로 코드 내에서 직접 AI 편집 요청',
      steps: [
        '편집할 코드 영역 선택',
        'Ctrl/Cmd + I로 인라인 편집 모드 활성화',
        '원하는 변경사항 명시',
        'AI 제안 검토',
        'Accept/Reject로 변경사항 적용/거부'
      ],
      shortcuts: [
        'Ctrl/Cmd + I: 인라인 편집 시작',
        'Tab: 제안 적용',
        'Escape: 편집 취소',
        'Ctrl/Cmd + Z: 실행 취소',
        'Ctrl/Cmd + Enter: 편집 요청 전송'
      ],
      tips: [
        '구체적인 변경 요청을 명시 (예: "이 함수를 async/await로 변경")',
        '코드 스타일 요청도 가능 (예: "더 읽기 쉽게 리팩토링")',
        '여러 변경사항을 한 번에 요청하지 말고 단계별로 진행',
        'AI 제안을 항상 검토하고 테스트 후 적용',
        '복잡한 로직은 주석으로 설명을 추가 요청'
      ],
      useCase: '코드 개선, 리팩토링, 스타일 변경, 최적화'
    },
    {
      category: 'advanced',
      title: '멀티파일 편집',
      difficulty: 'intermediate',
      description: '여러 파일을 동시에 편집하고 일관성 있게 변경',
      steps: [
        '관련 파일들을 탭으로 열기',
        '변경할 파일들을 @파일명으로 참조',
        '전체 변경사항을 한 번에 요청',
        '각 파일별 변경사항 확인',
        'Git으로 변경사항 추적 및 커밋'
      ],
      shortcuts: [
        'Ctrl/Cmd + Tab: 파일 간 전환',
        'Ctrl/Cmd + W: 현재 탭 닫기',
        'Ctrl/Cmd + Shift + T: 닫힌 탭 복원',
        'Ctrl/Cmd + P: 파일 검색',
        'Ctrl/Cmd + Shift + P: 명령 팔레트'
      ],
      tips: [
        '변경 전 Git 커밋으로 백업 생성',
        '파일 간 의존성을 고려한 변경 순서 계획',
        '타입스크립트 프로젝트에서는 타입 정의 파일부터 수정',
        '테스트 파일도 함께 업데이트 요청',
        '변경 후 전체 빌드 테스트 실행'
      ],
      useCase: '대규모 리팩토링, API 변경, 구조 개선'
    },
    {
      category: 'advanced',
      title: 'AI 코드 생성',
      difficulty: 'intermediate',
      description: '복잡한 로직이나 컴포넌트를 AI로 생성하는 방법',
      steps: [
        '생성할 코드의 요구사항 명시',
        '사용할 기술 스택과 라이브러리 지정',
        '예상되는 입력과 출력 설명',
        '코드 스타일과 패턴 요청',
        '생성된 코드 검토 및 테스트'
      ],
      shortcuts: [
        'Ctrl/Cmd + K: AI 채팅으로 코드 생성 요청',
        'Ctrl/Cmd + I: 인라인으로 코드 생성',
        'Tab: 자동완성 적용',
        'Ctrl/Cmd + Space: 제안 표시',
        'Ctrl/Cmd + .: 빠른 수정 제안'
      ],
      tips: [
        '요구사항을 단계별로 나누어 설명',
        '예시 데이터나 사용 사례 제공',
        '에러 처리와 엣지 케이스 고려 요청',
        '코멘트와 타입 정의 포함 요청',
        '생성된 코드의 성능과 보안 검토'
      ],
      useCase: '새로운 기능 개발, 컴포넌트 생성, 알고리즘 구현'
    },

    // 워크플로우 최적화
    {
      category: 'workflow',
      title: '디버깅 워크플로우',
      difficulty: 'intermediate',
      description: 'AI를 활용한 효율적인 버그 찾기와 수정 방법',
      steps: [
        '에러 메시지 전체를 AI에게 제공',
        '관련 코드 영역을 선택하여 컨텍스트 제공',
        '재현 단계와 예상 결과 설명',
        'AI 제안 솔루션 검토',
        '수정 적용 후 테스트 실행'
      ],
      shortcuts: [
        'Ctrl/Cmd + Shift + M: 문제 패널 열기',
        'F8: 다음 오류로 이동',
        'Shift + F8: 이전 오류로 이동',
        'Ctrl/Cmd + F: 파일 내 검색',
        'Ctrl/Cmd + Shift + F: 전체 검색'
      ],
      tips: [
        '콘솔 에러와 네트워크 오류를 모두 포함',
        '브라우저 개발자 도구 스크린샷 첨부',
        '재현 가능한 최소 코드 예제 제공',
        '환경 정보 (OS, 브라우저, Node 버전) 포함',
        '여러 접근 방식을 AI에게 물어보기'
      ],
      useCase: '버그 수정, 성능 최적화, 호환성 문제 해결'
    },
    {
      category: 'workflow',
      title: '코드 리뷰 자동화',
      difficulty: 'advanced',
      description: 'AI를 활용한 코드 품질 향상과 리뷰 프로세스',
      steps: [
        '리뷰할 코드 영역 선택',
        '코드 품질, 성능, 보안 관점에서 검토 요청',
        '개선 사항과 모범 사례 확인',
        '제안된 변경사항 적용',
        '팀 코딩 스타일 가이드 적용'
      ],
      shortcuts: [
        'Ctrl/Cmd + Shift + L: 다중 선택',
        'Ctrl/Cmd + D: 단어 선택',
        'Ctrl/Cmd + F2: 심볼 이름 변경',
        'Ctrl/Cmd + R: 빠른 심볼 이동',
        'Ctrl/Cmd + T: 심볼 검색'
      ],
      tips: [
        '코드 리뷰 체크리스트를 AI에게 제공',
        '프로젝트의 ESLint/Prettier 설정 공유',
        '보안 취약점 검사 요청',
        '성능 최적화 방안 문의',
        '코드 중복 제거 및 재사용성 향상 요청'
      ],
      useCase: '코드 품질 향상, 팀 협업, 유지보수성 개선'
    },
    {
      category: 'workflow',
      title: '테스트 코드 작성',
      difficulty: 'intermediate',
      description: 'AI를 활용한 효율적인 테스트 코드 생성과 관리',
      steps: [
        '테스트할 함수나 컴포넌트 선택',
        '테스트 케이스 시나리오 AI에게 설명',
        '사용할 테스트 프레임워크 지정',
        '테스트 코드 생성 요청',
        '커버리지 확인 및 추가 테스트 작성'
      ],
      shortcuts: [
        'Ctrl/Cmd + Shift + T: 테스트 파일 생성',
        'Ctrl/Cmd + ; : 테스트 실행',
        'Ctrl/Cmd + Shift + ; : 모든 테스트 실행',
        'F5: 디버그 모드로 실행',
        'Ctrl/Cmd + F5: 디버그 없이 실행'
      ],
      tips: [
        '정상 케이스와 에러 케이스 모두 포함',
        '경계값 테스트 케이스 생성 요청',
        '목(Mock) 데이터 생성도 AI에게 요청',
        '테스트 설명을 명확하게 작성',
        '통합 테스트와 단위 테스트 구분'
      ],
      useCase: '테스트 자동화, 품질 보증, 리그레션 방지'
    },

    // 프로젝트 관리
    {
      category: 'project',
      title: '프로젝트 초기 설정',
      difficulty: 'beginner',
      description: '새 프로젝트를 시작할 때 AI를 활용한 효율적인 설정',
      steps: [
        '프로젝트 요구사항과 기술 스택 정리',
        'AI에게 프로젝트 구조 생성 요청',
        '필요한 패키지와 의존성 설치',
        '기본 설정 파일들 생성',
        '초기 코드 템플릿 작성'
      ],
      shortcuts: [
        'Ctrl/Cmd + Shift + N: 새 파일',
        'Ctrl/Cmd + N: 새 폴더',
        'Ctrl/Cmd + O: 폴더 열기',
        'Ctrl/Cmd + S: 저장',
        'Ctrl/Cmd + Shift + S: 다른 이름으로 저장'
      ],
      tips: [
        '프로젝트 목표와 사용자 대상 명확히 정의',
        '확장성을 고려한 폴더 구조 요청',
        '환경 변수와 설정 파일 템플릿 생성',
        'Git 저장소 초기화 및 .gitignore 설정',
        'README.md와 문서 템플릿 생성'
      ],
      useCase: '새 프로젝트 시작, 보일러플레이트 생성, 초기 설정'
    },
    {
      category: 'project',
      title: '코드 문서화',
      difficulty: 'beginner',
      description: 'AI를 활용한 자동 문서 생성과 코드 주석 작성',
      steps: [
        '문서화할 코드 영역 선택',
        'AI에게 JSDoc 또는 타입 주석 생성 요청',
        'README.md 업데이트 요청',
        'API 문서 생성',
        '사용 예제 코드 작성'
      ],
      shortcuts: [
        'Ctrl/Cmd + /: 주석 토글',
        'Shift + Alt + A: 블록 주석',
        'Ctrl/Cmd + K, C: 주석 추가',
        'Ctrl/Cmd + K, U: 주석 제거',
        'Ctrl/Cmd + Shift + V: 마크다운 미리보기'
      ],
      tips: [
        '함수의 매개변수와 반환값 설명 포함',
        '사용 예제와 주의사항 추가',
        '코드 변경 시 문서도 함께 업데이트',
        '팀 컨벤션에 맞는 문서 스타일 요청',
        '외부 라이브러리 사용법도 문서화'
      ],
      useCase: '팀 협업, 유지보수, 지식 공유, 온보딩'
    },
    {
      category: 'project',
      title: '성능 최적화',
      difficulty: 'advanced',
      description: '코드 성능을 분석하고 최적화하는 AI 활용법',
      steps: [
        '성능 이슈가 있는 코드 영역 식별',
        '프로파일링 결과를 AI에게 제공',
        '최적화 방안 문의',
        '제안된 개선사항 적용',
        '성능 테스트로 효과 검증'
      ],
      shortcuts: [
        'Ctrl/Cmd + Shift + P: 성능 분석 도구 실행',
        'F12: 개발자 도구 열기',
        'Ctrl/Cmd + Shift + I: 검사 도구',
        'Ctrl/Cmd + R: 페이지 새로고침',
        'Ctrl/Cmd + Shift + R: 캐시 무시 새로고침'
      ],
      tips: [
        '메모리 사용량과 실행 시간 측정 결과 제공',
        '병목 지점이 되는 코드 영역 선택',
        '사용자 경험에 미치는 영향 설명',
        '캐싱, 지연 로딩 등 최적화 기법 문의',
        '성능 모니터링 도구 활용법 문의'
      ],
      useCase: '앱 속도 향상, 메모리 최적화, 사용자 경험 개선'
    },

    // 특수 활용법
    {
      category: 'special',
      title: '학습 도우미',
      difficulty: 'beginner',
      description: '새로운 기술이나 개념을 배울 때 AI를 활용하는 방법',
      steps: [
        '학습하고 싶은 기술이나 개념 명시',
        '현재 지식 수준과 목표 설명',
        '단계별 학습 계획 요청',
        '실습 예제 코드 생성 요청',
        '이해도 확인을 위한 질문과 답변'
      ],
      shortcuts: [
        'Ctrl/Cmd + K: 궁금한 점 즉시 질문',
        'Ctrl/Cmd + Shift + K: 코드 설명 요청',
        'Ctrl/Cmd + ?: 도움말 열기',
        'F1: 명령 검색',
        'Ctrl/Cmd + F1: 키보드 단축키 도움말'
      ],
      tips: [
        '코드 예제와 함께 동작 원리 설명 요청',
        '실제 프로젝트에 적용할 수 있는 예제 문의',
        '유사한 기술과의 차이점 비교 요청',
        '모범 사례와 안티 패턴 학습',
        '단계별로 복잡도를 높여가며 학습'
      ],
      useCase: '새 기술 학습, 개념 이해, 실습 연습, 지식 확장'
    },
    {
      category: 'special',
      title: '코드 변환',
      difficulty: 'intermediate',
      description: '다른 언어나 프레임워크로 코드를 변환하는 방법',
      steps: [
        '변환할 원본 코드 선택',
        '목표 언어/프레임워크 지정',
        '변환 시 고려사항 명시',
        'AI 변환 결과 검토',
        '변환된 코드 테스트 및 수정'
      ],
      shortcuts: [
        'Ctrl/Cmd + A: 전체 코드 선택',
        'Ctrl/Cmd + C: 복사',
        'Ctrl/Cmd + V: 붙여넣기',
        'Ctrl/Cmd + Z: 실행 취소',
        'Ctrl/Cmd + Y: 다시 실행'
      ],
      tips: [
        '변환 목적과 제약사항 명확히 설명',
        '원본 코드의 의도와 로직 설명',
        '타겟 환경의 특성 고려',
        '변환 후 성능과 호환성 확인',
        '단계별로 나누어 변환 진행'
      ],
      useCase: '언어 마이그레이션, 프레임워크 전환, 레거시 코드 현대화'
    },
    {
      category: 'special',
      title: '협업 도구',
      difficulty: 'intermediate',
      description: '팀 협업을 위한 AI 기능 활용법',
      steps: [
        '팀 코딩 스타일 가이드 설정',
        '공통 템플릿과 스니펫 생성',
        '코드 리뷰 자동화 설정',
        '문서화 표준 수립',
        '지식 공유 시스템 구축'
      ],
      shortcuts: [
        'Ctrl/Cmd + Shift + E: 익스플로러 열기',
        'Ctrl/Cmd + G: 라인 이동',
        'Ctrl/Cmd + Shift + G: 심볼 이동',
        'Ctrl/Cmd + B: 사이드바 토글',
        'Ctrl/Cmd + J: 패널 토글'
      ],
      tips: [
        '팀 컨벤션에 맞는 코드 스타일 요청',
        '새 팀원 온보딩 가이드 생성',
        '자주 사용하는 패턴을 템플릿으로 저장',
        '코드 리뷰 체크리스트 작성',
        '지식 문서를 정기적으로 업데이트'
      ],
      useCase: '팀 협업, 지식 공유, 온보딩, 품질 관리'
    }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'basics', name: '기본 사용법', icon: '🔧' },
    { id: 'advanced', name: '고급 기능', icon: '⚡' },
    { id: 'workflow', name: '워크플로우', icon: '🔄' },
    { id: 'project', name: '프로젝트 관리', icon: '📁' },
    { id: 'special', name: '특수 활용', icon: '🎯' }
  ];

  const difficulties = [
    { id: 'beginner', name: '초급', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: '중급', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'advanced', name: '고급', color: 'bg-red-100 text-red-800' }
  ];

  const filteredFeatures = cursorFeatures.filter(feature => {
    const matchesSearch = feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feature.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || feature.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/guide" className="text-primary-600 hover:text-primary-700">
                가이드
              </Link>
              <span className="text-secondary-400">/</span>
              <span className="text-secondary-700">Cursor 완전 정복</span>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">
                🧠 Cursor 완전 정복
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                AI 코드 에디터 Cursor의 모든 기능을 마스터하여 개발 생산성을 극대화하세요
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  4.9점 (5,432개 평가)
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {cursorFeatures.length}개 기능
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
              <Input
                placeholder="Cursor 기능 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Cursor Features */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl text-secondary-900">
                        {feature.title}
                      </CardTitle>
                      <Badge 
                        className={`text-xs ${difficulties.find(d => d.id === feature.difficulty)?.color}`}
                      >
                        {difficulties.find(d => d.id === feature.difficulty)?.name}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === feature.category)?.icon}
                      </Badge>
                      <Brain className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <p className="text-secondary-600 mb-2">{feature.description}</p>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {feature.useCase}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="steps" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="steps">단계</TabsTrigger>
                      <TabsTrigger value="shortcuts">단축키</TabsTrigger>
                      <TabsTrigger value="tips">팁</TabsTrigger>
                      <TabsTrigger value="examples">예제</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="steps" className="mt-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-secondary-700 mb-3">
                          📋 실행 단계:
                        </h4>
                        <div className="space-y-2">
                          {feature.steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                {i + 1}
                              </div>
                              <p className="text-sm text-secondary-700 pt-1">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="shortcuts" className="mt-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-secondary-700 mb-3">
                          ⌨️ 주요 단축키:
                        </h4>
                        <div className="space-y-2">
                          {feature.shortcuts.map((shortcut, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-secondary-50 rounded">
                              <span className="text-sm text-secondary-700">{shortcut.split(':')[1]}</span>
                              <code className="text-xs bg-secondary-200 px-2 py-1 rounded">
                                {shortcut.split(':')[0]}
                              </code>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="tips" className="mt-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-secondary-700 mb-3">
                          💡 유용한 팁:
                        </h4>
                        <div className="space-y-2">
                          {feature.tips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-primary-500 text-sm">•</span>
                              <p className="text-sm text-secondary-700">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="examples" className="mt-4">
                      <div className="bg-secondary-50 p-4 rounded-lg">
                        <h4 className="font-medium text-secondary-900 mb-2">
                          📝 실제 사용 예시
                        </h4>
                        <div className="space-y-2 text-sm text-secondary-700">
                          <p><strong>상황:</strong> 신승반점 웹사이트 개발</p>
                          <p><strong>적용:</strong> {feature.useCase}</p>
                          <p><strong>결과:</strong> 개발 시간 단축 및 코드 품질 향상</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredFeatures.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-secondary-900 mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-secondary-600 mb-4">
              다른 검색어나 카테고리를 시도해보세요
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              전체 기능 보기
            </Button>
          </div>
        )}

        {/* Cursor Pro Features */}
        <section className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="w-6 h-6 text-purple-600" />
                Cursor Pro 기능
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">🚀 Pro 전용 기능</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• 무제한 AI 요청 (무료: 월 200회)</li>
                    <li>• GPT-4 모델 사용 가능</li>
                    <li>• 고급 코드 완성 기능</li>
                    <li>• 우선순위 고객 지원</li>
                    <li>• 향후 신기능 우선 접근</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">💰 요금제</h3>
                  <div className="space-y-2 text-sm text-secondary-600">
                    <div className="flex justify-between">
                      <span>개인 사용자</span>
                      <span className="font-medium">$20/월</span>
                    </div>
                    <div className="flex justify-between">
                      <span>팀 요금제</span>
                      <span className="font-medium">$40/월</span>
                    </div>
                    <div className="flex justify-between">
                      <span>기업 요금제</span>
                      <span className="font-medium">문의</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🎯 Cursor 활용 모범 사례</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">✅ 효과적인 사용법</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• 구체적이고 명확한 질문하기</li>
                    <li>• 코드 컨텍스트 충분히 제공</li>
                    <li>• 단계별로 나누어 작업</li>
                    <li>• AI 결과를 항상 검토하고 테스트</li>
                    <li>• 팀 컨벤션과 일치하는지 확인</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">❌ 피해야 할 실수</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• AI 결과를 무조건 신뢰</li>
                    <li>• 너무 복잡한 요청 한 번에 하기</li>
                    <li>• 보안에 민감한 정보 포함</li>
                    <li>• 코드 리뷰 없이 바로 배포</li>
                    <li>• 학습 목적 없이 의존만 하기</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Reference */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>📋 필수 단축키 모음</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">AI 기능</h4>
                  <div className="space-y-2 text-sm text-secondary-600">
                    <div className="flex justify-between">
                      <span>AI 채팅</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">Ctrl+K</code>
                    </div>
                    <div className="flex justify-between">
                      <span>인라인 편집</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">Ctrl+I</code>
                    </div>
                    <div className="flex justify-between">
                      <span>코드 완성</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">Tab</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">편집 기능</h4>
                  <div className="space-y-2 text-sm text-secondary-600">
                    <div className="flex justify-between">
                      <span>다중 선택</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">Ctrl+D</code>
                    </div>
                    <div className="flex justify-between">
                      <span>줄 복사</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">Ctrl+C</code>
                    </div>
                    <div className="flex justify-between">
                      <span>줄 이동</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">Alt+↑↓</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">탐색 기능</h4>
                  <div className="space-y-2 text-sm text-secondary-600">
                    <div className="flex justify-between">
                      <span>파일 검색</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">Ctrl+P</code>
                    </div>
                    <div className="flex justify-between">
                      <span>심볼 검색</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">Ctrl+T</code>
                    </div>
                    <div className="flex justify-between">
                      <span>정의로 이동</span>
                      <code className="bg-secondary-100 px-2 py-1 rounded">F12</code>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>📚 관련 가이드</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/github">
                    <div>
                      <div className="font-medium">GitHub 사용법</div>
                      <div className="text-sm text-secondary-600">버전 관리와 협업</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/terminal">
                    <div>
                      <div className="font-medium">터미널 명령어</div>
                      <div className="text-sm text-secondary-600">개발 도구 활용</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/learning/setup">
                    <div>
                      <div className="font-medium">환경 설정</div>
                      <div className="text-sm text-secondary-600">개발 환경 구축</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CursorGuide; 