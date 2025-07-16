'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Info, 
  BookOpen, 
  Target, 
  Zap,
  Download,
  Settings,
  Github,
  User,
  HelpCircle
} from 'lucide-react';

interface StepExplanationProps {
  stepId: number;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
  estimatedTime: string;
}

const StepExplanation: React.FC<StepExplanationProps> = ({
  stepId,
  title,
  description,
  isActive,
  isCompleted,
  estimatedTime
}) => {
  const getStepDetails = (id: number) => {
    switch (id) {
      case 1:
        return {
          icon: User,
          color: 'bg-blue-500',
          why: '학습 진행상황을 개인별로 추적하고 관리하기 위해 계정이 필요합니다.',
          what: '이름, 이메일, 비밀번호를 입력하여 계정을 생성합니다.',
          how: [
            '정확한 이름을 입력해주세요 (완료증에 표시됩니다)',
            '유효한 이메일 주소를 입력해주세요 (진행상황 알림용)',
            '8자 이상의 안전한 비밀번호를 설정해주세요',
            'GitHub 사용자명은 선택사항입니다 (나중에 추가 가능)'
          ],
          tips: [
            '💡 비밀번호는 영문, 숫자, 특수문자를 조합하면 더 안전합니다',
            '💡 GitHub 사용자명을 미리 입력하면 5단계에서 더 쉽게 연결됩니다',
            '💡 모든 정보는 브라우저에만 저장되며 외부로 전송되지 않습니다'
          ],
          troubleshooting: [
            { problem: '이메일 형식이 올바르지 않습니다', solution: '@가 포함된 올바른 이메일 형식을 입력해주세요' },
            { problem: '비밀번호가 일치하지 않습니다', solution: '비밀번호와 비밀번호 확인이 동일한지 확인해주세요' },
            { problem: '필수 항목이 누락되었습니다', solution: '이름, 이메일, 비밀번호는 모두 필수 입력 사항입니다' }
          ]
        };
      case 2:
        return {
          icon: Settings,
          color: 'bg-green-500',
          why: '개발 환경이 학습에 적합한지 미리 확인하여 문제를 예방하기 위해서입니다.',
          what: '브라우저, 운영체제, 메모리, 네트워크 연결 상태를 자동으로 확인합니다.',
          how: [
            '시스템 체크 버튼을 클릭하세요',
            '자동으로 시스템 정보를 수집합니다',
            '결과를 검토하고 문제가 있으면 해결 방법을 확인하세요',
            '모든 항목이 정상이면 자동으로 다음 단계로 진행됩니다'
          ],
          tips: [
            '💡 Chrome이나 Edge 브라우저를 사용하면 가장 안정적입니다',
            '💡 최소 4GB 메모리가 권장됩니다',
            '💡 안정적인 인터넷 연결이 필요합니다'
          ],
          troubleshooting: [
            { problem: '브라우저가 지원되지 않습니다', solution: 'Chrome, Edge, Firefox 최신 버전을 사용해주세요' },
            { problem: '메모리가 부족합니다', solution: '다른 프로그램을 종료하거나 메모리를 추가해주세요' },
            { problem: '네트워크 연결이 불안정합니다', solution: '인터넷 연결을 확인하거나 안정적인 네트워크를 사용해주세요' }
          ]
        };
      case 3:
        return {
          icon: Download,
          color: 'bg-purple-500',
          why: 'JavaScript 개발과 패키지 관리를 위해 Node.js와 npm이 필요합니다.',
          what: '터미널에서 Node.js 버전을 확인하고 설치 상태를 점검합니다.',
          how: [
            '터미널(명령 프롬프트)을 열어주세요',
            '"node --version" 명령어를 복사하여 실행하세요',
            '출력 결과를 텍스트 영역에 붙여넣기 하세요',
            '"설치 확인" 버튼을 클릭하여 검증하세요'
          ],
          tips: [
            '💡 Node.js 18.0.0 이상 버전을 권장합니다',
            '💡 npm은 Node.js와 함께 자동으로 설치됩니다',
            '💡 설치 후 터미널을 재시작해야 할 수 있습니다'
          ],
          troubleshooting: [
            { problem: 'node를 찾을 수 없습니다', solution: 'Node.js 공식 사이트에서 다운로드하여 설치해주세요' },
            { problem: '버전이 너무 낮습니다', solution: '최신 LTS 버전으로 업데이트해주세요' },
            { problem: '명령어가 인식되지 않습니다', solution: '환경 변수 PATH에 Node.js가 추가되었는지 확인하세요' }
          ]
        };
      case 4:
        return {
          icon: Download,
          color: 'bg-orange-500',
          why: '코드 버전 관리와 GitHub 연동을 위해 Git이 필요합니다.',
          what: '터미널에서 Git 버전을 확인하고 설치 상태를 점검합니다.',
          how: [
            '터미널(명령 프롬프트)을 열어주세요',
            '"git --version" 명령어를 복사하여 실행하세요',
            '출력 결과를 텍스트 영역에 붙여넣기 하세요',
            '"설치 확인" 버튼을 클릭하여 검증하세요'
          ],
          tips: [
            '💡 Git 2.30.0 이상 버전을 권장합니다',
            '💡 Windows에서는 Git Bash도 함께 설치됩니다',
            '💡 Mac에서는 Xcode Command Line Tools가 필요할 수 있습니다'
          ],
          troubleshooting: [
            { problem: 'git를 찾을 수 없습니다', solution: 'Git 공식 사이트에서 다운로드하여 설치해주세요' },
            { problem: '버전이 너무 낮습니다', solution: '최신 버전으로 업데이트해주세요' },
            { problem: 'Mac에서 개발자 도구가 없습니다', solution: 'xcode-select --install 명령어를 실행하세요' }
          ]
        };
      case 5:
        return {
          icon: Github,
          color: 'bg-gray-800',
          why: '완성된 웹사이트를 인터넷에 배포하기 위해 GitHub이 필요합니다.',
          what: 'GitHub 계정을 생성하고 학습 시스템과 연결합니다.',
          how: [
            'GitHub 계정이 없다면 "GitHub 계정 생성" 버튼을 클릭하세요',
            'GitHub 사이트에서 계정을 생성하세요',
            '계정 생성 후 "GitHub 계정 연결 완료" 버튼을 클릭하세요',
            '연결이 완료되면 자동으로 다음 단계로 진행됩니다'
          ],
          tips: [
            '💡 GitHub 사용자명은 영문, 숫자, 하이픈(-)만 사용 가능합니다',
            '💡 무료 계정으로도 모든 기능을 사용할 수 있습니다',
            '💡 이메일 인증을 완료하면 더 많은 기능을 사용할 수 있습니다'
          ],
          troubleshooting: [
            { problem: '사용자명이 이미 존재합니다', solution: '다른 사용자명을 시도해보세요' },
            { problem: '이메일 인증이 오지 않습니다', solution: '스팸 폴더를 확인하거나 다른 이메일을 사용해보세요' },
            { problem: '계정 생성이 안됩니다', solution: '브라우저 쿠키와 캐시를 지우고 다시 시도해보세요' }
          ]
        };
      default:
        return {
          icon: HelpCircle,
          color: 'bg-gray-500',
          why: '단계별 설명을 확인하세요.',
          what: '각 단계의 목적과 방법을 이해하고 실행합니다.',
          how: ['단계별 가이드를 따라해보세요'],
          tips: ['💡 문제가 있으면 도움말을 확인하세요'],
          troubleshooting: []
        };
    }
  };

  const stepDetails = getStepDetails(stepId);
  const IconComponent = stepDetails.icon;

  return (
    <Card className={`transition-all duration-300 ${
      isActive ? 'ring-2 ring-primary-500 shadow-lg' : ''
    } ${isCompleted ? 'bg-green-50 border-green-200' : ''}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${stepDetails.color} text-white`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-secondary-600">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              <Clock className="w-3 h-3 mr-1" />
              {estimatedTime}
            </Badge>
            {isCompleted && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
          </div>
        </div>
      </CardHeader>

      {isActive && (
        <CardContent className="space-y-6">
          {/* Why - 왜 필요한가? */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" />
              왜 이 단계가 필요한가요?
            </h4>
            <p className="text-sm text-blue-700">{stepDetails.why}</p>
          </div>

          {/* What - 무엇을 하는가? */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              무엇을 하나요?
            </h4>
            <p className="text-sm text-green-700">{stepDetails.what}</p>
          </div>

          {/* How - 어떻게 하는가? */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              어떻게 하나요?
            </h4>
            <ol className="text-sm text-yellow-700 space-y-1">
              {stepDetails.how.map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tips */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
              <Info className="w-4 h-4" />
              유용한 팁
            </h4>
            <ul className="text-sm text-purple-700 space-y-1">
              {stepDetails.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* Troubleshooting */}
          {stepDetails.troubleshooting.length > 0 && (
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                문제 해결
              </h4>
              <div className="space-y-2">
                {stepDetails.troubleshooting.map((item, index) => (
                  <div key={index} className="text-sm">
                    <div className="font-medium text-red-700">❌ {item.problem}</div>
                    <div className="text-red-600 ml-4">✅ {item.solution}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Progress encouragement */}
          <Alert>
            <CheckCircle className="w-4 h-4" />
            <AlertDescription>
              <strong>진행 상황:</strong> 현재 {stepId}/5 단계를 진행 중입니다. 
              {stepId === 5 ? '마지막 단계입니다!' : '차근차근 따라해보세요!'}
            </AlertDescription>
          </Alert>
        </CardContent>
      )}
    </Card>
  );
};

export default StepExplanation; 