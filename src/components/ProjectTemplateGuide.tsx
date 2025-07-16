'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Rocket, 
  CheckCircle, 
  AlertTriangle, 
  ExternalLink,
  Info,
  Terminal,
  Copy,
  Download,
  FolderOpen,
  Globe,
  Users,
  Link2,
  ChefHat,
  Building,
  Zap,
  Code,
  Play,
  Settings
} from 'lucide-react';

interface ProjectTemplateGuideProps {
  onComplete: () => void;
  onCancel: () => void;
}

const ProjectTemplateGuide: React.FC<ProjectTemplateGuideProps> = ({ onComplete, onCancel }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const projectTemplates = {
    restaurant: {
      name: '신승반점 템플릿',
      description: '중식당 랜딩페이지 완성 템플릿',
      icon: ChefHat,
      color: 'red',
      difficulty: '초급',
      duration: '60분',
      features: ['반응형 디자인', '메뉴 갤러리', '온라인 주문', '매장 정보', '고객 리뷰'],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Icons'],
      demo: 'https://sinseung-restaurant.vercel.app'
    },
    corporate: {
      name: '기업 소개 템플릿',
      description: '회사 소개 페이지 템플릿',
      icon: Building,
      color: 'blue',
      difficulty: '중급',
      duration: '90분',
      features: ['회사 소개', '서비스 안내', '팀 소개', '연락처', '블로그'],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      demo: 'https://corporate-template.vercel.app'
    },
    linktree: {
      name: 'LinkTree 클론 템플릿',
      description: '개인 링크 모음 페이지 템플릿',
      icon: Link2,
      color: 'green',
      difficulty: '초급',
      duration: '45분',
      features: ['프로필 정보', '링크 모음', '소셜 미디어', '테마 변경', '방문자 통계'],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
      demo: 'https://my-linktree-clone.vercel.app'
    }
  };

  const handleTemplateSelect = (templateKey: string) => {
    setSelectedTemplate(templateKey);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const handleComplete = () => {
    onComplete();
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Rocket className="w-6 h-6 text-blue-500" />
                프로젝트 템플릿 실습 가이드
              </CardTitle>
              <p className="text-secondary-600 mt-2">
                실제 프로젝트를 만들면서 배우는 실무 중심 학습 과정입니다
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">
                실무 프로젝트
              </Badge>
              <Button variant="outline" onClick={onCancel}>
                닫기
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {!selectedTemplate ? (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">🎯 프로젝트 템플릿 선택</h3>
                <p className="text-gray-600">
                  원하는 프로젝트 템플릿을 선택하여 실습을 시작하세요
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(projectTemplates).map(([key, template]) => (
                  <Card key={key} className="border-2 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <template.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">{template.name}</h4>
                        <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex justify-center gap-2">
                            <Badge variant="outline">{template.difficulty}</Badge>
                            <Badge variant="outline">{template.duration}</Badge>
                          </div>
                          
                          <div className="text-left">
                            <div className="text-sm font-medium mb-2">주요 기능:</div>
                            <div className="space-y-1">
                              {template.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-left">
                            <div className="text-sm font-medium mb-2">기술 스택:</div>
                            <div className="flex flex-wrap gap-1">
                              {template.techStack.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 space-y-2">
                          <Button 
                            onClick={() => handleTemplateSelect(key)}
                            className="w-full"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            실습 시작하기
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(template.demo, '_blank')}
                            className="w-full"
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            데모 보기
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">🚀 프로젝트 실습 시작</h3>
                <p className="text-gray-600">
                  {projectTemplates[selectedTemplate as keyof typeof projectTemplates].name} 프로젝트를 시작합니다
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">📚 단계별 실습 가이드</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <div className="font-medium">프로젝트 초기화</div>
                      <div className="text-sm text-gray-600">Next.js 프로젝트 생성 및 기본 설정</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <div className="font-medium">컴포넌트 구성</div>
                      <div className="text-sm text-gray-600">UI 컴포넌트 생성 및 레이아웃 구성</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <div className="font-medium">스타일링 및 최적화</div>
                      <div className="text-sm text-gray-600">Tailwind CSS를 활용한 스타일링</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <div className="font-medium">배포 및 완성</div>
                      <div className="text-sm text-gray-600">Vercel을 통한 배포 및 프로젝트 완성</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">🤖 Cursor AI 활용 팁</h4>
                <div className="space-y-2 text-sm">
                  <p>• <strong>프롬프트 예시:</strong> "중식당 웹사이트의 헤더 컴포넌트를 만들어주세요"</p>
                  <p>• <strong>코드 생성:</strong> Ctrl+K를 눌러 AI에게 코드 생성 요청</p>
                  <p>• <strong>코드 설명:</strong> 코드를 선택하고 AI에게 설명 요청</p>
                  <p>• <strong>버그 수정:</strong> 오류가 있는 코드를 AI에게 수정 요청</p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={handleComplete} className="bg-green-500 hover:bg-green-600">
                  실습 완료
                </Button>
                <Button variant="outline" onClick={() => setSelectedTemplate('')}>
                  다른 템플릿 선택
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectTemplateGuide; 