'use client';

import { useState, useEffect } from 'react';
import { Check, Square, CheckSquare, RotateCcw, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CheckListItem {
  id: string;
  text: string;
  description?: string;
  isCompleted?: boolean;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  estimatedTime?: string;
}

interface CheckListProps {
  title: string;
  items: CheckListItem[];
  storageKey?: string;
  showProgress?: boolean;
  showCategories?: boolean;
  onComplete?: (completedCount: number, totalCount: number) => void;
  className?: string;
}

export default function CheckList({
  title,
  items,
  storageKey = 'checklist',
  showProgress = true,
  showCategories = false,
  onComplete,
  className = ''
}: CheckListProps) {
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [showCompleted, setShowCompleted] = useState(true);

  // 로컬 스토리지에서 완료된 항목 로드
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          setCompletedItems(JSON.parse(saved));
        } catch (error) {
          console.error('체크리스트 로드 실패:', error);
        }
      }
    }
  }, [storageKey]);

  // 완료된 항목을 로컬 스토리지에 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(completedItems));
    }
    
    // 완료 콜백 호출
    if (onComplete) {
      onComplete(completedItems.length, items.length);
    }
  }, [completedItems, storageKey, items.length, onComplete]);

  const toggleItem = (itemId: string) => {
    setCompletedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const resetAll = () => {
    setCompletedItems([]);
  };

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const completionRate = (completedItems.length / items.length) * 100;
  const categories = showCategories ? [...new Set(items.map(item => item.category).filter(Boolean))] : [];

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'hard':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyText = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy':
        return '쉬움';
      case 'medium':
        return '보통';
      case 'hard':
        return '어려움';
      default:
        return '';
    }
  };

  const filteredItems = showCompleted 
    ? items 
    : items.filter(item => !completedItems.includes(item.id));

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <CheckSquare className="h-6 w-6 mr-2 text-red-600" />
          {title}
        </h3>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleCompleted}
            className="btn-secondary btn-sm"
            title={showCompleted ? '완료된 항목 숨기기' : '완료된 항목 보기'}
          >
            {showCompleted ? '완료항목 숨기기' : '전체보기'}
          </button>
          
          <button
            onClick={resetAll}
            className="btn-outline btn-sm"
            title="모든 체크 해제"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 진행률 표시 */}
      {showProgress && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              진행률: {completedItems.length}/{items.length}
            </span>
            <span className="text-sm font-semibold text-gray-900">
              {Math.round(completionRate)}%
            </span>
          </div>
          
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${completionRate}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          {/* 완료 축하 메시지 */}
          <AnimatePresence>
            {completionRate === 100 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center text-green-800">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-semibold">
                    🎉 모든 단계를 완료했습니다! 축하합니다!
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* 카테고리별 필터 */}
      {showCategories && categories.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map(category => (
            <span
              key={category}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      )}

      {/* 체크리스트 항목들 */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const isCompleted = completedItems.includes(item.id);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`checklist-item ${isCompleted ? 'completed' : ''}`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex items-start space-x-3 w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {isCompleted ? (
                      <CheckSquare className="h-5 w-5 text-green-600" />
                    ) : (
                      <Square className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${
                        isCompleted ? 'line-through text-gray-500' : 'text-gray-900'
                      }`}>
                        {item.text}
                      </span>
                      
                      <div className="flex items-center space-x-2">
                        {item.difficulty && (
                          <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(item.difficulty)}`}>
                            {getDifficultyText(item.difficulty)}
                          </span>
                        )}
                        
                        {item.estimatedTime && (
                          <span className="text-xs text-gray-500">
                            {item.estimatedTime}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {item.description && (
                      <p className={`mt-1 text-sm ${
                        isCompleted ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    )}
                    
                    {item.category && (
                      <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {item.category}
                      </span>
                    )}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* 빈 상태 메시지 */}
      {filteredItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Check className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p>표시할 항목이 없습니다.</p>
          {!showCompleted && (
            <button
              onClick={toggleCompleted}
              className="btn-primary btn-sm mt-4"
            >
              완료된 항목 보기
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// 사용 예시를 위한 샘플 체크리스트 데이터
export const sampleCheckLists = {
  environmentSetup: {
    title: '🔧 1단계: 개발환경 구축',
    items: [
      {
        id: 'node-install',
        text: 'Node.js 설치 및 확인',
        description: 'Node.js 공식 사이트에서 LTS 버전 다운로드 후 설치',
        category: '기본 설정',
        difficulty: 'easy' as const,
        estimatedTime: '10분'
      },
      {
        id: 'cursor-install',
        text: 'Cursor AI 에디터 설치',
        description: 'AI 기반 코드 에디터 다운로드 및 설치',
        category: '기본 설정',
        difficulty: 'easy' as const,
        estimatedTime: '15분'
      },
      {
        id: 'api-key-setup',
        text: 'AI API 키 설정',
        description: 'OpenAI API 키 발급 및 Cursor 설정',
        category: '고급 설정',
        difficulty: 'medium' as const,
        estimatedTime: '20분'
      },
      {
        id: 'git-setup',
        text: 'Git 설정 및 GitHub 계정 생성',
        description: 'Git 초기 설정 및 GitHub 계정 생성',
        category: '기본 설정',
        difficulty: 'easy' as const,
        estimatedTime: '15분'
      },
      {
        id: 'project-init',
        text: '프로젝트 폴더 생성',
        description: '신승반점 프로젝트 폴더 구조 생성',
        category: '프로젝트 설정',
        difficulty: 'easy' as const,
        estimatedTime: '5분'
      }
    ]
  },
  
  htmlStructure: {
    title: '🏗️ 2단계: HTML 구조 설계',
    items: [
      {
        id: 'html-boilerplate',
        text: '기본 HTML 구조 작성',
        description: 'HTML5 기본 구조 및 메타 태그 설정',
        category: '기본 구조',
        difficulty: 'easy' as const,
        estimatedTime: '15분'
      },
      {
        id: 'header-section',
        text: '헤더 섹션 구현',
        description: '로고, 네비게이션 메뉴 HTML 구조',
        category: '레이아웃',
        difficulty: 'medium' as const,
        estimatedTime: '20분'
      },
      {
        id: 'hero-section',
        text: '히어로 섹션 제작',
        description: '메인 배너 및 CTA 버튼 HTML 구조',
        category: '레이아웃',
        difficulty: 'medium' as const,
        estimatedTime: '25분'
      },
      {
        id: 'content-sections',
        text: '컨텐츠 섹션 구현',
        description: '소개, 메뉴, 연락처 섹션 HTML 구조',
        category: '레이아웃',
        difficulty: 'medium' as const,
        estimatedTime: '30분'
      },
      {
        id: 'footer-section',
        text: '푸터 섹션 완성',
        description: '하단 정보 및 링크 HTML 구조',
        category: '레이아웃',
        difficulty: 'easy' as const,
        estimatedTime: '10분'
      }
    ]
  },
  
  cssDesign: {
    title: '🎨 3단계: CSS 스타일링',
    items: [
      {
        id: 'css-reset',
        text: 'CSS 리셋 및 기본 스타일',
        description: '브라우저 기본 스타일 리셋 및 공통 스타일 설정',
        category: '기본 스타일',
        difficulty: 'easy' as const,
        estimatedTime: '10분'
      },
      {
        id: 'header-styling',
        text: '헤더 스타일링',
        description: '네비게이션 메뉴 및 로고 스타일링',
        category: '컴포넌트',
        difficulty: 'medium' as const,
        estimatedTime: '30분'
      },
      {
        id: 'hero-styling',
        text: '히어로 섹션 스타일링',
        description: '메인 배너 배경, 타이포그래피 스타일링',
        category: '컴포넌트',
        difficulty: 'medium' as const,
        estimatedTime: '35분'
      },
      {
        id: 'responsive-design',
        text: '반응형 디자인 적용',
        description: '모바일, 태블릿 환경 대응 미디어 쿼리',
        category: '반응형',
        difficulty: 'hard' as const,
        estimatedTime: '45분'
      },
      {
        id: 'animations',
        text: '애니메이션 효과',
        description: '호버 효과, 트랜지션 등 인터랙티브 요소',
        category: '고급 효과',
        difficulty: 'hard' as const,
        estimatedTime: '40분'
      }
    ]
  }
}; 