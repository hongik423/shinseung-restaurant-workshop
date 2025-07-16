'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Monitor, 
  Code, 
  TrendingUp, 
  Play, 
  Pause, 
  Square, 
  Settings,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  RotateCcw,
  Zap
} from 'lucide-react';

import LivePreview from './LivePreview';
import ProgressMonitor from './ProgressMonitor';
import CodeEditor from './CodeEditor';

interface PracticeMonitorProps {
  projectPath?: string;
  onProgress?: (progress: any) => void;
}

const PracticeMonitor: React.FC<PracticeMonitorProps> = ({ projectPath, onProgress }) => {
  const [isActive, setIsActive] = useState(false);
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [showProgressMonitor, setShowProgressMonitor] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [currentCode, setCurrentCode] = useState({
    html: '',
    css: '',
    js: ''
  });
  const [sessionData, setSessionData] = useState({
    startTime: new Date(),
    isRunning: false,
    duration: 0,
    tasksCompleted: 0,
    errorsFixed: 0
  });

  // 세션 타이머
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (sessionData.isRunning) {
      interval = setInterval(() => {
        setSessionData(prev => ({
          ...prev,
          duration: prev.duration + 1
        }));
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [sessionData.isRunning]);

  // 키보드 단축키
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'p':
            e.preventDefault();
            setShowLivePreview(!showLivePreview);
            break;
          case 'm':
            e.preventDefault();
            setShowProgressMonitor(!showProgressMonitor);
            break;
          case 'e':
            e.preventDefault();
            setShowCodeEditor(!showCodeEditor);
            break;
        }
      }
    };

    if (isActive) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, showLivePreview, showProgressMonitor, showCodeEditor]);

  const handleStartSession = () => {
    setIsActive(true);
    setSessionData(prev => ({
      ...prev,
      isRunning: true,
      startTime: new Date()
    }));
  };

  const handlePauseSession = () => {
    setSessionData(prev => ({
      ...prev,
      isRunning: !prev.isRunning
    }));
  };

  const handleStopSession = () => {
    setIsActive(false);
    setSessionData(prev => ({
      ...prev,
      isRunning: false,
      duration: 0
    }));
    setShowLivePreview(false);
    setShowProgressMonitor(false);
    setShowCodeEditor(false);
  };

  const handleCodeChange = (code: { html: string; css: string; js: string }) => {
    setCurrentCode(code);
    // 코드 변경 시 진행 상황 업데이트
    if (onProgress) {
      onProgress({
        code,
        timestamp: new Date(),
        linesOfCode: (code.html + code.css + code.js).split('\n').length
      });
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusColor = () => {
    if (!isActive) return 'bg-gray-500';
    if (sessionData.isRunning) return 'bg-green-500';
    return 'bg-orange-500';
  };

  const getStatusText = () => {
    if (!isActive) return '대기 중';
    if (sessionData.isRunning) return '실행 중';
    return '일시정지';
  };

  if (!isActive) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="w-72 bg-white shadow-lg border-2 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Monitor className="w-5 h-5 text-blue-600" />
              실습 모니터링
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                실시간 코딩 실습을 시작하세요!
              </p>
              <Button 
                onClick={handleStartSession}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Play className="w-4 h-4 mr-2" />
                실습 시작하기
              </Button>
            </div>
            
            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex justify-between">
                <span>라이브 미리보기</span>
                <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Ctrl+P</kbd>
              </div>
              <div className="flex justify-between">
                <span>진행 상황</span>
                <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Ctrl+M</kbd>
              </div>
              <div className="flex justify-between">
                <span>코드 편집기</span>
                <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Ctrl+E</kbd>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      {/* 제어판 */}
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="w-80 bg-white shadow-xl border-2 border-blue-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Monitor className="w-5 h-5 text-blue-600" />
                실습 모니터링
              </CardTitle>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
                <span className="text-sm text-gray-600">{getStatusText()}</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* 세션 정보 */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">세션 시간</span>
                <span className="text-lg font-mono font-bold text-blue-600">
                  {formatTime(sessionData.duration)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-bold text-green-600">{sessionData.tasksCompleted}</div>
                  <div className="text-gray-500">완료된 작업</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-orange-600">{sessionData.errorsFixed}</div>
                  <div className="text-gray-500">해결한 오류</div>
                </div>
              </div>
            </div>

            {/* 제어 버튼 */}
            <div className="flex gap-2">
              <Button
                onClick={handlePauseSession}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                {sessionData.isRunning ? (
                  <Pause className="w-4 h-4 mr-1" />
                ) : (
                  <Play className="w-4 h-4 mr-1" />
                )}
                {sessionData.isRunning ? '일시정지' : '재시작'}
              </Button>
              
              <Button
                onClick={handleStopSession}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <Square className="w-4 h-4 mr-1" />
                종료
              </Button>
            </div>

            {/* 도구 토글 버튼 */}
            <div className="space-y-2">
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowLivePreview(!showLivePreview)}
                  variant={showLivePreview ? "default" : "outline"}
                  size="sm"
                  className="flex-1"
                >
                  <Monitor className="w-4 h-4 mr-1" />
                  미리보기
                </Button>
                
                <Button
                  onClick={() => setShowProgressMonitor(!showProgressMonitor)}
                  variant={showProgressMonitor ? "default" : "outline"}
                  size="sm"
                  className="flex-1"
                >
                  <TrendingUp className="w-4 h-4 mr-1" />
                  진행상황
                </Button>
              </div>
              
              <Button
                onClick={() => setShowCodeEditor(!showCodeEditor)}
                variant={showCodeEditor ? "default" : "outline"}
                size="sm"
                className="w-full"
              >
                <Code className="w-4 h-4 mr-1" />
                코드 편집기
              </Button>
            </div>

            {/* 현재 활성 도구 표시 */}
            <div className="text-xs text-gray-500">
              <div className="flex items-center gap-2 mb-1">
                <span>활성 도구:</span>
                <div className="flex gap-1">
                  {showLivePreview && (
                    <Badge variant="secondary" className="text-xs">미리보기</Badge>
                  )}
                  {showProgressMonitor && (
                    <Badge variant="secondary" className="text-xs">진행상황</Badge>
                  )}
                  {showCodeEditor && (
                    <Badge variant="secondary" className="text-xs">편집기</Badge>
                  )}
                  {!showLivePreview && !showProgressMonitor && !showCodeEditor && (
                    <Badge variant="outline" className="text-xs">없음</Badge>
                  )}
                </div>
              </div>
            </div>

            {/* 빠른 액션 */}
            <div className="border-t pt-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">빠른 액션</span>
                <div className="flex gap-1">
                  <Button
                    onClick={() => {
                      setShowLivePreview(true);
                      setShowProgressMonitor(true);
                      setShowCodeEditor(true);
                    }}
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs"
                  >
                    <Maximize2 className="w-3 h-3 mr-1" />
                    모두 열기
                  </Button>
                  <Button
                    onClick={() => {
                      setShowLivePreview(false);
                      setShowProgressMonitor(false);
                      setShowCodeEditor(false);
                    }}
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs"
                  >
                    <Minimize2 className="w-3 h-3 mr-1" />
                    모두 닫기
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 활성 컴포넌트들 */}
      <LivePreview
        isVisible={showLivePreview}
        onClose={() => setShowLivePreview(false)}
        projectPath={projectPath}
      />
      
      <ProgressMonitor
        isVisible={showProgressMonitor}
        onToggle={() => setShowProgressMonitor(!showProgressMonitor)}
      />
      
      <CodeEditor
        isVisible={showCodeEditor}
        onToggle={() => setShowCodeEditor(!showCodeEditor)}
        onCodeChange={handleCodeChange}
      />
    </>
  );
};

export default PracticeMonitor; 