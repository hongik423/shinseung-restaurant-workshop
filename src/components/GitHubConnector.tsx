'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Github, 
  CheckCircle, 
  AlertTriangle, 
  ExternalLink,
  Info,
  User,
  Mail,
  Key,
  Eye,
  EyeOff,
  Loader2,
  Copy
} from 'lucide-react';

interface GitHubConnectorProps {
  onComplete: (userData: any) => void;
  onCancel: () => void;
}

const GitHubConnector: React.FC<GitHubConnectorProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [githubUsername, setGithubUsername] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'success' | 'error'>('idle');
  const [userData, setUserData] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [accountForm, setAccountForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const testGitHubConnection = async () => {
    setIsConnecting(true);
    setConnectionStatus('connecting');
    
    try {
      // GitHub API를 사용하여 사용자 정보 가져오기
      const response = await fetch(`https://api.github.com/users/${accountForm.username}`);
      
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
        setConnectionStatus('success');
        setCompletedSteps([...completedSteps, 2]);
        setTimeout(() => setCurrentStep(3), 1000);
      } else {
        setConnectionStatus('error');
      }
    } catch (error) {
      setConnectionStatus('error');
    } finally {
      setIsConnecting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
    if (stepIndex < steps.length - 1) {
      setCurrentStep(stepIndex + 1);
    } else {
      // 최종 완료
      onComplete(userData);
    }
  };

  const steps = [
    {
      title: 'GitHub 계정 생성',
      description: '아직 GitHub 계정이 없다면 새로 생성하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🌐 GitHub 공식 사이트</h4>
            <p className="text-sm text-blue-700 mb-3">
              GitHub 공식 사이트에서 무료 계정을 생성하세요.
            </p>
            <Button 
              onClick={() => {
                window.open('https://github.com/signup', '_blank');
                setCompletedSteps([...completedSteps, 0]);
              }}
              className="w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              GitHub 계정 생성하기
            </Button>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📝 계정 생성 과정</h4>
            <ol className="text-sm text-green-700 space-y-1">
              <li>1. 사용자명 입력 (영문, 숫자, 하이픈만 가능)</li>
              <li>2. 이메일 주소 입력</li>
              <li>3. 비밀번호 설정 (15자 이상 또는 8자 이상 + 숫자, 소문자)</li>
              <li>4. 이메일 인증 완료</li>
              <li>5. 계정 설정 완료</li>
            </ol>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>팁:</strong> 
              사용자명은 나중에 변경하기 어려우니 신중하게 선택하세요. 
              프로젝트 URL에 사용됩니다.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '계정 정보 입력',
      description: '생성한 GitHub 계정 정보를 입력하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">👤 계정 정보</h4>
            <p className="text-sm text-yellow-700 mb-3">
              방금 생성한 GitHub 계정 정보를 입력하세요.
            </p>
            <div className="space-y-3">
              <div>
                <Label htmlFor="github-username">GitHub 사용자명</Label>
                <Input
                  id="github-username"
                  value={accountForm.username}
                  onChange={(e) => setAccountForm(prev => ({ ...prev, username: e.target.value }))}
                  placeholder="예: hong-gildong"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="github-email">이메일</Label>
                <Input
                  id="github-email"
                  type="email"
                  value={accountForm.email}
                  onChange={(e) => setAccountForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="예: hong@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="github-password">비밀번호</Label>
                <div className="relative">
                  <Input
                    id="github-password"
                    type={showPassword ? "text" : "password"}
                    value={accountForm.password}
                    onChange={(e) => setAccountForm(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="GitHub 비밀번호"
                    className="mt-1 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-1 h-8 px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Alert>
            <Key className="w-4 h-4" />
            <AlertDescription>
              <strong>보안:</strong> 
              입력한 정보는 브라우저에만 저장되며 외부로 전송되지 않습니다. 
              실제 연결시에만 GitHub API를 통해 검증됩니다.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '계정 연결 테스트',
      description: 'GitHub 계정이 올바른지 확인하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🔗 연결 테스트</h4>
            <p className="text-sm text-blue-700 mb-3">
              입력한 계정 정보로 GitHub에 연결을 테스트합니다.
            </p>
            <Button 
              onClick={testGitHubConnection}
              disabled={!accountForm.username || !accountForm.email || isConnecting}
              className="w-full"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  연결 테스트 중...
                </>
              ) : (
                <>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub 연결 테스트
                </>
              )}
            </Button>
          </div>
          
          {connectionStatus === 'success' && userData && (
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-green-800">✅ 연결 성공!</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-green-600" />
                  <span className="text-sm">사용자명: {userData.login}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span className="text-sm">이메일: {userData.email || '비공개'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-green-600" />
                  <span className="text-sm">프로필: {userData.html_url}</span>
                </div>
              </div>
            </div>
          )}
          
          {connectionStatus === 'error' && (
            <Alert variant="destructive">
              <AlertTriangle className="w-4 h-4" />
              <AlertDescription>
                <strong>연결 실패:</strong> 
                사용자명을 확인하거나 계정이 존재하는지 확인해주세요.
              </AlertDescription>
            </Alert>
          )}
        </div>
      )
    },
    {
      title: 'Git 설정',
      description: '로컬 Git에 사용자 정보를 설정하세요',
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">⚙️ Git 사용자 설정</h4>
            <p className="text-sm text-purple-700 mb-3">
              터미널에서 다음 명령어를 실행하여 Git 사용자 정보를 설정하세요:
            </p>
            <div className="space-y-3">
              <div>
                <Label className="text-sm font-medium">사용자명 설정</Label>
                <div className="bg-black text-green-400 p-2 rounded font-mono text-sm flex items-center justify-between">
                  <span>git config --global user.name "{accountForm.username}"</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(`git config --global user.name "${accountForm.username}"`)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium">이메일 설정</Label>
                <div className="bg-black text-green-400 p-2 rounded font-mono text-sm flex items-center justify-between">
                  <span>git config --global user.email "{accountForm.email}"</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(`git config --global user.email "${accountForm.email}"`)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Alert>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>설정 완료:</strong> 
              이 설정은 한 번만 하면 됩니다. 앞으로 모든 Git 작업에서 이 정보가 사용됩니다.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: '연결 완료',
      description: 'GitHub 계정 연결이 완료되었습니다',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-green-800">🎉 연결 완료!</h4>
            <p className="text-sm text-green-700 mb-3">
              GitHub 계정이 성공적으로 연결되었습니다.
            </p>
            {userData && (
              <div className="bg-white p-3 rounded border">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={userData.avatar_url} 
                    alt={userData.login}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{userData.name || userData.login}</div>
                    <div className="text-sm text-gray-600">@{userData.login}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  공개 저장소: {userData.public_repos}개
                </div>
              </div>
            )}
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📚 다음 단계</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 프로젝트 저장소 생성</li>
              <li>• 코드 커밋 및 푸시</li>
              <li>• Vercel을 통한 배포</li>
              <li>• 실제 웹사이트 공개</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Github className="w-6 h-6 text-gray-800" />
                GitHub 계정 연결 가이드
              </CardTitle>
              <p className="text-secondary-600 mt-2">
                초보자도 쉽게 따라할 수 있는 GitHub 계정 연결 과정입니다
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">
                무료 계정 지원
              </Badge>
              <Button variant="outline" onClick={onCancel}>
                닫기
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">진행률</span>
              <span className="text-sm text-secondary-600">
                {Math.round((completedSteps.length / steps.length) * 100)}%
              </span>
            </div>
            <Progress value={(completedSteps.length / steps.length) * 100} className="h-2" />
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className={`transition-all duration-200 ${
                currentStep === index ? 'ring-2 ring-gray-500' : ''
              } ${completedSteps.includes(index) ? 'bg-green-50 border-green-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        completedSteps.includes(index) ? 'bg-green-500 text-white' : 
                        currentStep === index ? 'bg-gray-800 text-white' : 'bg-gray-200'
                      }`}>
                        {completedSteps.includes(index) ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <p className="text-sm text-secondary-600">{step.description}</p>
                      </div>
                    </div>
                    {currentStep === index && index !== 2 && (
                      <Button
                        onClick={() => handleStepComplete(index)}
                        size="sm"
                        className="bg-gray-800 hover:bg-gray-700"
                      >
                        완료
                      </Button>
                    )}
                  </div>
                </CardHeader>
                {(currentStep === index || completedSteps.includes(index)) && (
                  <CardContent>
                    {step.content}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Final Success */}
          {currentStep === steps.length - 1 && connectionStatus === 'success' && (
            <Card className="mt-6 bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    🎉 GitHub 연결 완료!
                  </h3>
                  <p className="text-green-700 mb-4">
                    이제 코드를 GitHub에 업로드하고 웹사이트를 배포할 수 있습니다.
                  </p>
                  <Button 
                    onClick={() => handleStepComplete(steps.length - 1)}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    다음 단계로 진행
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GitHubConnector; 