'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, Star, BookOpen, Terminal, Zap, Code, FileText } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const TerminalGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const terminalCommands = [
    // 기본 명령어
    {
      category: 'basic',
      title: '파일 시스템 탐색',
      difficulty: 'beginner',
      description: '디렉토리 이동과 파일 확인을 위한 기본 명령어',
      commands: [
        { cmd: 'pwd', desc: '현재 위치 확인' },
        { cmd: 'ls', desc: '현재 디렉토리의 파일 목록' },
        { cmd: 'ls -la', desc: '숨긴 파일 포함 상세 정보' },
        { cmd: 'cd /path/to/directory', desc: '디렉토리 이동' },
        { cmd: 'cd ~', desc: '홈 디렉토리로 이동' },
        { cmd: 'cd ..', desc: '상위 디렉토리로 이동' },
        { cmd: 'cd -', desc: '이전 디렉토리로 돌아가기' }
      ],
      examples: [
        'pwd → /Users/username/Documents',
        'ls → index.html  style.css  script.js',
        'cd ~/projects/restaurant → 프로젝트 폴더로 이동'
      ],
      tips: [
        'Tab 키로 자동 완성 활용',
        'ls -la로 파일 권한과 크기 확인',
        'cd만 입력하면 홈 디렉토리로 이동',
        '경로에 공백이 있으면 따옴표 사용',
        'history 명령어로 이전 명령 확인'
      ],
      useCase: '프로젝트 탐색, 파일 위치 확인, 디렉토리 구조 파악'
    },
    {
      category: 'basic',
      title: '파일 및 디렉토리 조작',
      difficulty: 'beginner',
      description: '파일과 폴더를 생성, 복사, 이동, 삭제하는 명령어',
      commands: [
        { cmd: 'mkdir folder-name', desc: '새 디렉토리 생성' },
        { cmd: 'mkdir -p path/to/folder', desc: '중간 디렉토리도 함께 생성' },
        { cmd: 'touch filename.txt', desc: '빈 파일 생성' },
        { cmd: 'cp source.txt destination.txt', desc: '파일 복사' },
        { cmd: 'cp -r folder/ new-folder/', desc: '디렉토리 복사' },
        { cmd: 'mv oldname.txt newname.txt', desc: '파일 이름 변경' },
        { cmd: 'rm filename.txt', desc: '파일 삭제' },
        { cmd: 'rm -rf folder/', desc: '디렉토리 강제 삭제' }
      ],
      examples: [
        'mkdir restaurant-project → 프로젝트 폴더 생성',
        'touch index.html → HTML 파일 생성',
        'cp index.html backup.html → 백업 파일 생성'
      ],
      tips: [
        'rm -rf는 복구 불가능하므로 주의',
        'mv는 파일 이동과 이름 변경 모두 가능',
        'cp할 때 -r 옵션으로 하위 디렉토리 포함',
        'mkdir -p로 여러 레벨 디렉토리 한 번에 생성',
        'tab 자동완성으로 파일명 실수 방지'
      ],
      useCase: '프로젝트 설정, 파일 관리, 구조 정리'
    },
    {
      category: 'basic',
      title: '파일 내용 보기',
      difficulty: 'beginner',
      description: '파일의 내용을 확인하고 편집하는 명령어',
      commands: [
        { cmd: 'cat filename.txt', desc: '파일 전체 내용 출력' },
        { cmd: 'head -n 10 filename.txt', desc: '파일 첫 10줄 출력' },
        { cmd: 'tail -n 10 filename.txt', desc: '파일 마지막 10줄 출력' },
        { cmd: 'tail -f logfile.txt', desc: '파일 실시간 모니터링' },
        { cmd: 'less filename.txt', desc: '파일 내용 페이지별로 보기' },
        { cmd: 'grep "search" filename.txt', desc: '파일에서 텍스트 검색' },
        { cmd: 'wc -l filename.txt', desc: '파일 줄 수 세기' }
      ],
      examples: [
        'cat package.json → 패키지 정보 확인',
        'tail -f npm-debug.log → 실시간 로그 확인',
        'grep "error" build.log → 에러 메시지 찾기'
      ],
      tips: [
        'less에서 q로 종료, /로 검색',
        'grep -i로 대소문자 구분 없이 검색',
        'tail -f로 실시간 로그 모니터링',
        'head와 tail로 대용량 파일 빠르게 확인',
        'cat > filename.txt로 새 파일 생성 후 내용 입력'
      ],
      useCase: '로그 분석, 설정 파일 확인, 디버깅'
    },

    // 개발 도구
    {
      category: 'development',
      title: 'Node.js 및 npm 명령어',
      difficulty: 'intermediate',
      description: 'Node.js 프로젝트 관리를 위한 필수 명령어',
      commands: [
        { cmd: 'node --version', desc: 'Node.js 버전 확인' },
        { cmd: 'npm --version', desc: 'npm 버전 확인' },
        { cmd: 'npm init', desc: '새 프로젝트 초기화' },
        { cmd: 'npm install', desc: '의존성 패키지 설치' },
        { cmd: 'npm install package-name', desc: '특정 패키지 설치' },
        { cmd: 'npm install -D package-name', desc: '개발 의존성 설치' },
        { cmd: 'npm run build', desc: '빌드 스크립트 실행' },
        { cmd: 'npm start', desc: '애플리케이션 시작' },
        { cmd: 'npm test', desc: '테스트 실행' }
      ],
      examples: [
        'npm init → package.json 생성',
        'npm install react → React 설치',
        'npm run build → 프로덕션 빌드'
      ],
      tips: [
        'npm i는 npm install의 축약형',
        'package-lock.json은 삭제하지 말 것',
        'npm ci는 빠른 설치 (CI/CD용)',
        'npm audit으로 보안 취약점 확인',
        'npx로 로컬 패키지 실행'
      ],
      useCase: '프로젝트 초기화, 의존성 관리, 빌드 및 테스트'
    },
    {
      category: 'development',
      title: 'Git 명령어',
      difficulty: 'intermediate',
      description: '버전 관리를 위한 Git 명령어',
      commands: [
        { cmd: 'git status', desc: '현재 상태 확인' },
        { cmd: 'git add .', desc: '모든 변경사항 스테이징' },
        { cmd: 'git commit -m "message"', desc: '변경사항 커밋' },
        { cmd: 'git push origin main', desc: '원격 저장소에 푸시' },
        { cmd: 'git pull origin main', desc: '원격 저장소에서 가져오기' },
        { cmd: 'git branch', desc: '브랜치 목록 확인' },
        { cmd: 'git checkout -b feature/menu', desc: '새 브랜치 생성 및 전환' },
        { cmd: 'git merge branch-name', desc: '브랜치 병합' },
        { cmd: 'git log --oneline', desc: '커밋 히스토리 확인' }
      ],
      examples: [
        'git add . → 모든 파일 스테이징',
        'git commit -m "Add menu component" → 커밋',
        'git push origin main → GitHub에 업로드'
      ],
      tips: [
        'git status로 항상 현재 상태 확인',
        'git add -A로 삭제된 파일도 포함',
        'git commit -am으로 add와 commit 동시 실행',
        'git stash로 임시 저장',
        'git reset --hard로 변경사항 되돌리기'
      ],
      useCase: '버전 관리, 협업, 백업, 배포'
    },
    {
      category: 'development',
      title: '개발 서버 및 도구',
      difficulty: 'intermediate',
      description: '개발 서버 실행과 도구 사용 명령어',
      commands: [
        { cmd: 'python -m http.server 8000', desc: 'Python 간단 서버 실행' },
        { cmd: 'live-server', desc: '실시간 리로드 서버 실행' },
        { cmd: 'code .', desc: 'VS Code에서 현재 폴더 열기' },
        { cmd: 'code filename.js', desc: 'VS Code에서 파일 열기' },
        { cmd: 'curl -X GET http://localhost:3000', desc: 'API 테스트' },
        { cmd: 'wget https://example.com/file.zip', desc: '파일 다운로드' },
        { cmd: 'which node', desc: 'Node.js 설치 경로 확인' },
        { cmd: 'kill -9 1234', desc: '프로세스 강제 종료' }
      ],
      examples: [
        'python -m http.server 8000 → 로컬 서버 실행',
        'code . → VS Code에서 프로젝트 열기',
        'curl -X POST -d "data" http://localhost:3000/api → API 테스트'
      ],
      tips: [
        'Ctrl+C로 실행 중인 서버 중지',
        'lsof -i :8000으로 포트 사용 확인',
        'nohup command &로 백그라운드 실행',
        'ps aux | grep node로 Node.js 프로세스 확인',
        'netstat -tulpn으로 포트 상태 확인'
      ],
      useCase: '로컬 개발, API 테스트, 서버 관리'
    },

    // 시스템 관리
    {
      category: 'system',
      title: '시스템 정보 확인',
      difficulty: 'intermediate',
      description: '시스템 상태와 리소스 사용량을 확인하는 명령어',
      commands: [
        { cmd: 'top', desc: '실시간 시스템 리소스 모니터링' },
        { cmd: 'ps aux', desc: '실행 중인 프로세스 목록' },
        { cmd: 'df -h', desc: '디스크 사용량 확인' },
        { cmd: 'du -sh folder/', desc: '폴더 크기 확인' },
        { cmd: 'free -h', desc: '메모리 사용량 확인' },
        { cmd: 'uptime', desc: '시스템 가동시간 확인' },
        { cmd: 'whoami', desc: '현재 사용자 확인' },
        { cmd: 'uname -a', desc: '시스템 정보 확인' }
      ],
      examples: [
        'top → CPU, 메모리 사용량 실시간 확인',
        'df -h → 디스크 용량 확인',
        'du -sh node_modules/ → 폴더 크기 확인'
      ],
      tips: [
        'top에서 q로 종료, M으로 메모리 정렬',
        'htop이 더 보기 좋음 (설치 필요)',
        'du -sh *로 모든 파일/폴더 크기 확인',
        'ps aux | grep node로 특정 프로세스 찾기',
        'kill -9 PID로 프로세스 강제 종료'
      ],
      useCase: '성능 모니터링, 디스크 관리, 프로세스 관리'
    },
    {
      category: 'system',
      title: '네트워크 및 연결',
      difficulty: 'intermediate',
      description: '네트워크 상태와 연결을 확인하는 명령어',
      commands: [
        { cmd: 'ping google.com', desc: '네트워크 연결 테스트' },
        { cmd: 'curl -I https://example.com', desc: 'HTTP 헤더 확인' },
        { cmd: 'wget https://example.com/file.zip', desc: '파일 다운로드' },
        { cmd: 'netstat -tulpn', desc: '포트 사용 상태 확인' },
        { cmd: 'lsof -i :3000', desc: '특정 포트 사용 프로세스 확인' },
        { cmd: 'ifconfig', desc: '네트워크 인터페이스 정보' },
        { cmd: 'ssh user@server.com', desc: '원격 서버 접속' },
        { cmd: 'scp file.txt user@server:/path/', desc: '파일 원격 복사' }
      ],
      examples: [
        'ping google.com → 인터넷 연결 확인',
        'curl -I https://shinseung.com → 사이트 응답 확인',
        'lsof -i :3000 → 3000번 포트 사용 확인'
      ],
      tips: [
        'ping -c 4로 횟수 제한',
        'curl -o filename으로 파일 저장',
        'ssh-keygen으로 SSH 키 생성',
        'netstat -an | grep :80으로 웹서버 확인',
        'traceroute로 네트워크 경로 추적'
      ],
      useCase: '네트워크 디버깅, 서버 관리, 파일 전송'
    },
    {
      category: 'system',
      title: '권한 및 소유권 관리',
      difficulty: 'advanced',
      description: '파일 권한과 소유권을 관리하는 명령어',
      commands: [
        { cmd: 'ls -la', desc: '파일 권한 정보 확인' },
        { cmd: 'chmod 755 filename', desc: '파일 권한 변경' },
        { cmd: 'chmod +x script.sh', desc: '실행 권한 추가' },
        { cmd: 'chown user:group filename', desc: '파일 소유권 변경' },
        { cmd: 'sudo command', desc: '관리자 권한으로 실행' },
        { cmd: 'su - username', desc: '사용자 전환' },
        { cmd: 'umask 022', desc: '기본 권한 설정' }
      ],
      examples: [
        'chmod 755 deploy.sh → 스크립트 실행 가능하게',
        'sudo npm install -g package → 전역 패키지 설치',
        'chown $USER:$USER ~/.ssh → SSH 키 소유권 변경'
      ],
      tips: [
        '755는 rwxr-xr-x (소유자 모든 권한, 그룹/기타 읽기+실행)',
        '644는 rw-r--r-- (소유자 읽기+쓰기, 그룹/기타 읽기만)',
        'sudo -u user command로 특정 사용자로 실행',
        'visudo로 sudo 권한 설정',
        'groups 명령어로 소속 그룹 확인'
      ],
      useCase: '보안 설정, 배포 스크립트, 서버 관리'
    },

    // 고급 활용
    {
      category: 'advanced',
      title: '텍스트 처리 및 검색',
      difficulty: 'advanced',
      description: '고급 텍스트 처리와 검색을 위한 명령어',
      commands: [
        { cmd: 'grep -r "pattern" .', desc: '디렉토리 전체에서 패턴 검색' },
        { cmd: 'find . -name "*.js"', desc: '특정 확장자 파일 찾기' },
        { cmd: 'find . -type f -mtime -7', desc: '최근 7일 내 수정된 파일' },
        { cmd: 'sed "s/old/new/g" file.txt', desc: '텍스트 치환' },
        { cmd: 'awk "{print $1}" file.txt', desc: '첫 번째 컬럼 출력' },
        { cmd: 'sort file.txt | uniq', desc: '중복 제거 후 정렬' },
        { cmd: 'wc -l *.js', desc: '모든 JS 파일 줄 수' },
        { cmd: 'xargs -I {} echo "File: {}"', desc: '파이프 결과 처리' }
      ],
      examples: [
        'grep -r "TODO" src/ → 소스코드에서 TODO 찾기',
        'find . -name "*.log" -delete → 로그 파일 삭제',
        'sed "s/localhost/production/g" config.js → 설정 일괄 변경'
      ],
      tips: [
        'grep -n으로 줄 번호 표시',
        'find -exec로 찾은 파일에 명령 실행',
        'sed -i로 파일 직접 수정',
        'awk는 복잡한 텍스트 처리에 강력',
        '| (파이프)로 명령어 연결'
      ],
      useCase: '코드 분석, 로그 처리, 일괄 수정'
    },
    {
      category: 'advanced',
      title: '프로세스 및 백그라운드 실행',
      difficulty: 'advanced',
      description: '프로세스 관리와 백그라운드 실행을 위한 명령어',
      commands: [
        { cmd: 'command &', desc: '백그라운드에서 실행' },
        { cmd: 'nohup command &', desc: '터미널 종료 후에도 실행' },
        { cmd: 'jobs', desc: '백그라운드 작업 목록' },
        { cmd: 'fg %1', desc: '백그라운드 작업을 포그라운드로' },
        { cmd: 'bg %1', desc: '일시정지된 작업을 백그라운드로' },
        { cmd: 'kill %1', desc: '작업 번호로 프로세스 종료' },
        { cmd: 'killall node', desc: '모든 node 프로세스 종료' },
        { cmd: 'screen -S session', desc: '새 스크린 세션 생성' }
      ],
      examples: [
        'npm start & → 개발 서버 백그라운드 실행',
        'nohup python script.py & → 스크립트 지속 실행',
        'jobs → 현재 백그라운드 작업 확인'
      ],
      tips: [
        'Ctrl+Z로 현재 작업 일시정지',
        'Ctrl+C로 현재 작업 종료',
        'disown으로 작업을 셸에서 분리',
        'screen이나 tmux로 세션 관리',
        'ps aux | grep command로 프로세스 찾기'
      ],
      useCase: '서버 관리, 장시간 작업, 멀티태스킹'
    },
    {
      category: 'advanced',
      title: '자동화 및 스크립트',
      difficulty: 'advanced',
      description: '작업 자동화를 위한 스크립트와 도구',
      commands: [
        { cmd: 'crontab -e', desc: '작업 스케줄러 편집' },
        { cmd: 'crontab -l', desc: '등록된 크론 작업 확인' },
        { cmd: 'history', desc: '명령어 히스토리 확인' },
        { cmd: '!123', desc: '히스토리 123번 명령 실행' },
        { cmd: 'alias ll="ls -la"', desc: '명령어 별칭 생성' },
        { cmd: 'which command', desc: '명령어 위치 확인' },
        { cmd: 'export PATH=$PATH:/new/path', desc: '환경 변수 설정' },
        { cmd: 'source ~/.bashrc', desc: '설정 파일 재로드' }
      ],
      examples: [
        'crontab -e → 정기 백업 스케줄 설정',
        'alias gs="git status" → Git 명령어 축약',
        'export NODE_ENV=production → 환경 변수 설정'
      ],
      tips: [
        '.bashrc나 .zshrc에 alias 저장',
        'cron 표현식: 분 시 일 월 요일',
        '!! 로 이전 명령 반복',
        'history | grep git으로 Git 명령 검색',
        'env로 모든 환경 변수 확인'
      ],
      useCase: '자동화, 개발 환경 설정, 생산성 향상'
    }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'basic', name: '기본', icon: '🌱' },
    { id: 'development', name: '개발', icon: '💻' },
    { id: 'system', name: '시스템', icon: '⚙️' },
    { id: 'advanced', name: '고급', icon: '🚀' }
  ];

  const difficulties = [
    { id: 'beginner', name: '초급', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: '중급', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'advanced', name: '고급', color: 'bg-red-100 text-red-800' }
  ];

  const filteredCommands = terminalCommands.filter(command => {
    const matchesSearch = command.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || command.category === selectedCategory;
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
              <span className="text-secondary-700">터미널 기본 명령어</span>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">
                💻 터미널 기본 명령어
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                개발자 필수 터미널 명령어를 익혀 생산성을 극대화하세요
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  4.7점 (3,567개 평가)
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {terminalCommands.length}개 주제
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
                placeholder="터미널 명령어 검색..."
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

        {/* Terminal Commands */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredCommands.map((command, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl text-secondary-900">
                        {command.title}
                      </CardTitle>
                      <Badge 
                        className={`text-xs ${difficulties.find(d => d.id === command.difficulty)?.color}`}
                      >
                        {difficulties.find(d => d.id === command.difficulty)?.name}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === command.category)?.icon}
                      </Badge>
                      <Terminal className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <p className="text-secondary-600 mb-2">{command.description}</p>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {command.useCase}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="commands" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="commands">명령어</TabsTrigger>
                      <TabsTrigger value="examples">예제</TabsTrigger>
                      <TabsTrigger value="tips">팁</TabsTrigger>
                      <TabsTrigger value="cheat">치트시트</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="commands" className="mt-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-medium text-secondary-700">
                            💻 주요 명령어:
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(command.commands.map(c => c.cmd).join('\n'))}
                            className="h-8 w-8 p-0"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          {command.commands.map((cmd, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-black text-green-400 rounded font-mono text-sm">
                              <div className="flex items-center gap-3">
                                <span className="text-gray-400">$</span>
                                <code className="text-green-400">{cmd.cmd}</code>
                              </div>
                              <span className="text-gray-400 text-xs">{cmd.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="examples" className="mt-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-secondary-700 mb-3">
                          📝 실제 사용 예제:
                        </h4>
                        <div className="space-y-2">
                          {command.examples.map((example, i) => (
                            <div key={i} className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                              <code className="text-sm text-blue-800">{example}</code>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="tips" className="mt-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-secondary-700 mb-3">
                          💡 실무 팁:
                        </h4>
                        <div className="space-y-2">
                          {command.tips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-primary-500 text-sm">•</span>
                              <p className="text-sm text-secondary-700">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="cheat" className="mt-4">
                      <div className="bg-secondary-50 p-4 rounded-lg">
                        <h4 className="font-medium text-secondary-900 mb-2">
                          📋 빠른 참조
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium text-secondary-700 mb-2">자주 사용하는 명령어</h5>
                            <div className="space-y-1">
                              {command.commands.slice(0, 3).map((cmd, i) => (
                                <div key={i} className="flex justify-between text-xs">
                                  <code className="bg-white px-2 py-1 rounded">{cmd.cmd}</code>
                                  <span className="text-secondary-600">{cmd.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-secondary-700 mb-2">단축키</h5>
                            <div className="space-y-1 text-xs text-secondary-600">
                              <div>• Tab: 자동 완성</div>
                              <div>• Ctrl+C: 명령 취소</div>
                              <div>• Ctrl+L: 화면 정리</div>
                              <div>• ↑/↓: 이전 명령어</div>
                            </div>
                          </div>
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
        {filteredCommands.length === 0 && (
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
              전체 명령어 보기
            </Button>
          </div>
        )}

        {/* Quick Reference */}
        <section className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-600" />
                필수 명령어 치트시트
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">📁 파일 관리</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">ls</code>
                      <span className="text-secondary-600">파일 목록</span>
                    </div>
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">cd</code>
                      <span className="text-secondary-600">디렉토리 이동</span>
                    </div>
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">mkdir</code>
                      <span className="text-secondary-600">폴더 생성</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">🔧 개발 도구</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">npm install</code>
                      <span className="text-secondary-600">패키지 설치</span>
                    </div>
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">git status</code>
                      <span className="text-secondary-600">Git 상태</span>
                    </div>
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">code .</code>
                      <span className="text-secondary-600">VS Code 열기</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">⚙️ 시스템</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">top</code>
                      <span className="text-secondary-600">시스템 모니터</span>
                    </div>
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">ps aux</code>
                      <span className="text-secondary-600">프로세스 목록</span>
                    </div>
                    <div className="flex justify-between">
                      <code className="bg-white px-2 py-1 rounded">kill</code>
                      <span className="text-secondary-600">프로세스 종료</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Keyboard Shortcuts */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">⌨️ 터미널 단축키</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">편집 단축키</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + A</kbd>
                      <span className="text-secondary-600">줄 시작으로 이동</span>
                    </div>
                    <div className="flex justify-between">
                      <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + E</kbd>
                      <span className="text-secondary-600">줄 끝으로 이동</span>
                    </div>
                    <div className="flex justify-between">
                      <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + K</kbd>
                      <span className="text-secondary-600">커서 뒤 삭제</span>
                    </div>
                    <div className="flex justify-between">
                      <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + U</kbd>
                      <span className="text-secondary-600">커서 앞 삭제</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">제어 단축키</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + C</kbd>
                      <span className="text-secondary-600">명령 중단</span>
                    </div>
                    <div className="flex justify-between">
                      <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + Z</kbd>
                      <span className="text-secondary-600">작업 일시정지</span>
                    </div>
                    <div className="flex justify-between">
                      <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + L</kbd>
                      <span className="text-secondary-600">화면 정리</span>
                    </div>
                    <div className="flex justify-between">
                      <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + D</kbd>
                      <span className="text-secondary-600">터미널 종료</span>
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
              <CardTitle className="text-2xl">🎯 터미널 사용 모범 사례</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">✅ 좋은 습관</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Tab 키로 자동 완성 적극 활용</li>
                    <li>• 명령어 실행 전 현재 위치 확인</li>
                    <li>• 중요한 작업 전 백업 생성</li>
                    <li>• 별칭(alias) 설정으로 생산성 향상</li>
                    <li>• 명령어 히스토리 적극 활용</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">❌ 피해야 할 실수</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• rm -rf 명령어 무분별 사용</li>
                    <li>• sudo 권한 남용</li>
                    <li>• 경로 확인 없이 파일 삭제</li>
                    <li>• 백그라운드 프로세스 방치</li>
                    <li>• 긴 명령어 반복 입력</li>
                  </ul>
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
                      <div className="text-sm text-secondary-600">Git 명령어 활용</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/cursor">
                    <div>
                      <div className="font-medium">Cursor 사용법</div>
                      <div className="text-sm text-secondary-600">통합 터미널 활용</div>
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

export default TerminalGuide; 