'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
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
  Copy,
  GitBranch,
  Upload,
  Globe,
  Terminal,
  PlayCircle,
  FileText,
  Folder,
  Settings
} from 'lucide-react';

interface EnhancedGitHubGuideProps {
  onComplete: (userData: any) => void;
  onCancel: () => void;
  currentStep?: string;
  userProgress?: {
    completedSteps: string[];
    currentProject?: string;
    githubConnected?: boolean;
  };
}

const EnhancedGitHubGuide: React.FC<EnhancedGitHubGuideProps> = ({ 
  onComplete, 
  onCancel, 
  currentStep = 'setup',
  userProgress = { completedSteps: [], githubConnected: false }
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'success' | 'error'>('idle');
  const [userData, setUserData] = useState<any>(null);
  const [repoCreated, setRepoCreated] = useState(false);
  const [deploymentUrl, setDeploymentUrl] = useState('');
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  const [accountForm, setAccountForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    repositoryName: 'shinseung-restaurant'
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [itemId]: checked }));
  };

  const testGitHubConnection = async () => {
    setIsConnecting(true);
    setConnectionStatus('connecting');
    
    try {
      const response = await fetch(`https://api.github.com/users/${accountForm.username}`);
      
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
        setConnectionStatus('success');
        setCompletedSteps([...completedSteps, 2]);
        setTimeout(() => setActiveStep(3), 1000);
      } else {
        setConnectionStatus('error');
      }
    } catch (error) {
      setConnectionStatus('error');
    } finally {
      setIsConnecting(false);
    }
  };

  const handleStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
    if (stepIndex < steps.length - 1) {
      setActiveStep(stepIndex + 1);
    }
  };

  const steps = [
    {
      id: 'account-setup',
      title: 'GitHub 계정 생성 및 설정',
      description: 'GitHub 계정을 생성하고 기본 설정을 완료하세요',
      duration: '5분',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub 계정 생성
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="github-signup"
                  checked={checkedItems['github-signup']}
                  onCheckedChange={(checked) => handleCheckboxChange('github-signup', checked as boolean)}
                />
                <Label htmlFor="github-signup">GitHub 공식 사이트에서 계정 생성</Label>
              </div>
              <Button 
                onClick={() => {
                  window.open('https://github.com/signup', '_blank');
                  handleCheckboxChange('github-signup', true);
                }}
                className="w-full"
                variant="outline"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub 계정 생성하기
              </Button>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">✅ 계정 생성 체크리스트</h4>
            <div className="space-y-3">
              {[
                { id: 'username', label: '사용자명 설정 (영문, 숫자, 하이픈만 사용)' },
                { id: 'email', label: '이메일 주소 인증 완료' },
                { id: 'password', label: '안전한 비밀번호 설정' },
                { id: 'profile', label: '프로필 기본 정보 입력' },
                { id: 'verify', label: '이메일 인증 완료' }
              ].map(item => (
                <div key={item.id} className="flex items-center gap-2">
                  <Checkbox 
                    id={item.id}
                    checked={checkedItems[item.id]}
                    onCheckedChange={(checked) => handleCheckboxChange(item.id, checked as boolean)}
                  />
                  <Label htmlFor={item.id}>{item.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">💡 계정 생성 팁</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 사용자명은 나중에 변경하기 어려우니 신중하게 선택하세요</li>
              <li>• 이메일은 나중에 GitHub에서 알림을 받을 주소입니다</li>
              <li>• 비밀번호는 15자 이상 또는 8자 이상 + 특수문자 조합</li>
              <li>• 프로필 사진을 설정하면 더 전문적으로 보입니다</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'account-info',
      title: '계정 정보 입력 및 확인',
      description: '생성한 GitHub 계정 정보를 입력하고 연결을 확인하세요',
      duration: '3분',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">📝 계정 정보 입력</h4>
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
                <Label htmlFor="github-email">이메일 주소</Label>
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
                <Label htmlFor="repository-name">저장소 이름</Label>
                <Input
                  id="repository-name"
                  value={accountForm.repositoryName}
                  onChange={(e) => setAccountForm(prev => ({ ...prev, repositoryName: e.target.value }))}
                  placeholder="shinseung-restaurant"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">🔗 연결 테스트</h4>
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
              <div className="flex items-center gap-3 p-3 bg-white rounded border">
                <img 
                  src={userData.avatar_url} 
                  alt={userData.login}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium">{userData.name || userData.login}</div>
                  <div className="text-sm text-gray-600">@{userData.login}</div>
                  <div className="text-sm text-gray-600">저장소: {userData.public_repos}개</div>
                </div>
              </div>
            </div>
          )}

          {connectionStatus === 'error' && (
            <Alert variant="destructive">
              <AlertTriangle className="w-4 h-4" />
              <AlertDescription>
                사용자명을 확인하거나 GitHub 계정이 존재하는지 확인해주세요.
              </AlertDescription>
            </Alert>
          )}
        </div>
      )
    },
    {
      id: 'git-config',
      title: '로컬 Git 설정',
      description: '컴퓨터에 Git 사용자 정보를 설정하세요',
      duration: '2분',
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Git 전역 설정
            </h4>
            <p className="text-sm text-purple-700 mb-3">
              터미널에서 다음 명령어를 실행하여 Git 사용자 정보를 설정하세요:
            </p>
            <div className="space-y-3">
              <div>
                <Label className="text-sm font-medium">사용자명 설정</Label>
                <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
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
                <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
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

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">🔧 설정 확인</h4>
            <p className="text-sm text-blue-700 mb-3">
              설정이 제대로 되었는지 확인하려면 다음 명령어를 실행하세요:
            </p>
            <div className="space-y-2">
              <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                <span>git config --global --list</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard('git config --global --list')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">✅ 설정 완료 체크리스트</h4>
            <div className="space-y-2">
              {[
                { id: 'git-name', label: 'Git 사용자명 설정 완료' },
                { id: 'git-email', label: 'Git 이메일 설정 완료' },
                { id: 'git-verify', label: '설정 확인 명령어 실행' }
              ].map(item => (
                <div key={item.id} className="flex items-center gap-2">
                  <Checkbox 
                    id={item.id}
                    checked={checkedItems[item.id]}
                    onCheckedChange={(checked) => handleCheckboxChange(item.id, checked as boolean)}
                  />
                  <Label htmlFor={item.id}>{item.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'repository-creation',
      title: '저장소 생성 및 초기 설정',
      description: 'GitHub에 프로젝트 저장소를 생성하고 초기 설정을 완료하세요',
      duration: '5분',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Folder className="w-5 h-5" />
              저장소 생성
            </h4>
            <div className="space-y-3">
              <Button 
                onClick={() => {
                  window.open('https://github.com/new', '_blank');
                  handleCheckboxChange('repo-created', true);
                }}
                className="w-full"
                variant="outline"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub에서 새 저장소 생성
              </Button>
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="repo-created"
                  checked={checkedItems['repo-created']}
                  onCheckedChange={(checked) => handleCheckboxChange('repo-created', checked as boolean)}
                />
                <Label htmlFor="repo-created">저장소 생성 완료</Label>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">⚙️ 저장소 설정</h4>
            <div className="space-y-3">
              <div>
                <Label className="text-sm font-medium">저장소 이름</Label>
                <div className="bg-white p-2 rounded border text-sm">
                  {accountForm.repositoryName}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="repo-public"
                    checked={checkedItems['repo-public']}
                    onCheckedChange={(checked) => handleCheckboxChange('repo-public', checked as boolean)}
                  />
                  <Label htmlFor="repo-public">Public 저장소로 설정</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="repo-readme"
                    checked={checkedItems['repo-readme']}
                    onCheckedChange={(checked) => handleCheckboxChange('repo-readme', checked as boolean)}
                  />
                  <Label htmlFor="repo-readme">README.md 파일 생성</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="repo-gitignore"
                    checked={checkedItems['repo-gitignore']}
                    onCheckedChange={(checked) => handleCheckboxChange('repo-gitignore', checked as boolean)}
                  />
                  <Label htmlFor="repo-gitignore">.gitignore 파일 추가</Label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              로컬 프로젝트 연결
            </h4>
            <p className="text-sm text-green-700 mb-3">
              프로젝트 폴더에서 다음 명령어를 실행하여 GitHub 저장소와 연결하세요:
            </p>
            <div className="space-y-2">
              <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                <span>git remote add origin https://github.com/{accountForm.username}/{accountForm.repositoryName}.git</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(`git remote add origin https://github.com/${accountForm.username}/${accountForm.repositoryName}.git`)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                <span>git branch -M main</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard('git branch -M main')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'code-upload',
      title: '코드 업로드 및 배포',
      description: '작성한 코드를 GitHub에 업로드하고 웹사이트로 배포하세요',
      duration: '5분',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              코드 업로드
            </h4>
            <p className="text-sm text-blue-700 mb-3">
              작성한 코드를 GitHub에 업로드하세요:
            </p>
            <div className="space-y-2">
              <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                <span>git add .</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard('git add .')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                <span>git commit -m "신승반점 웹사이트 완성"</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard('git commit -m "신승반점 웹사이트 완성"')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex items-center justify-between">
                <span>git push -u origin main</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard('git push -u origin main')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Vercel 배포
            </h4>
            <p className="text-sm text-green-700 mb-3">
              GitHub 저장소를 Vercel에 연결하여 웹사이트를 배포하세요:
            </p>
            <div className="space-y-3">
              <Button 
                onClick={() => {
                  window.open('https://vercel.com/new', '_blank');
                  handleCheckboxChange('vercel-deploy', true);
                }}
                className="w-full"
                variant="outline"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Vercel에서 배포하기
              </Button>
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="vercel-deploy"
                  checked={checkedItems['vercel-deploy']}
                  onCheckedChange={(checked) => handleCheckboxChange('vercel-deploy', checked as boolean)}
                />
                <Label htmlFor="vercel-deploy">Vercel 배포 완료</Label>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">🚀 배포 완료 확인</h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="deployment-url">배포된 웹사이트 URL</Label>
                <Input
                  id="deployment-url"
                  value={deploymentUrl}
                  onChange={(e) => setDeploymentUrl(e.target.value)}
                  placeholder="https://your-site.vercel.app"
                  className="mt-1"
                />
              </div>
              {deploymentUrl && (
                <Button 
                  onClick={() => window.open(deploymentUrl, '_blank')}
                  className="w-full"
                  variant="outline"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  배포된 웹사이트 확인
                </Button>
              )}
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[activeStep];
  const progressPercentage = ((activeStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Github className="w-6 h-6 text-gray-800" />
                GitHub 연동 가이드
              </CardTitle>
              <p className="text-secondary-600 mt-2">
                실제 진행 가능한 단계별 GitHub 연동 및 배포 가이드
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">
                {currentStepData.duration}
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
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-xs text-secondary-500 mt-1">
              <span>단계 {activeStep + 1} / {steps.length}</span>
              <span>예상 소요시간: {currentStepData.duration}</span>
            </div>
          </div>

          {/* Steps Navigation */}
          <div className="flex justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === activeStep ? 'bg-blue-500 text-white' : 
                  completedSteps.includes(index) ? 'bg-green-500 text-white' : 'bg-gray-200'
                }`}>
                  {completedSteps.includes(index) ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="text-xs text-center mt-1 max-w-[80px]">
                  {step.title.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>

          {/* Current Step Content */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">{currentStepData.title}</CardTitle>
              <p className="text-secondary-600">{currentStepData.description}</p>
            </CardHeader>
            <CardContent>
              {currentStepData.content}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              variant="outline"
            >
              이전 단계
            </Button>
            <Button
              onClick={() => {
                if (activeStep === steps.length - 1) {
                  onComplete({ ...userData, deploymentUrl });
                } else {
                  handleStepComplete(activeStep);
                }
              }}
              className="bg-blue-500 hover:bg-blue-600"
            >
              {activeStep === steps.length - 1 ? '완료' : '다음 단계'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedGitHubGuide; 