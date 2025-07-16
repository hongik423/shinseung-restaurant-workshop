'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Eye, 
  Code, 
  RefreshCw, 
  Maximize2, 
  Minimize2,
  X,
  Play,
  Square,
  Monitor,
  Smartphone,
  Tablet,
  AlertCircle,
  CheckCircle,
  Clock,
  FileText,
  Settings
} from 'lucide-react';

interface LivePreviewProps {
  projectPath?: string;
  isVisible: boolean;
  onClose: () => void;
}

interface FileChange {
  path: string;
  type: 'html' | 'css' | 'js' | 'tsx' | 'jsx';
  content: string;
  timestamp: Date;
}

interface PreviewState {
  html: string;
  css: string;
  js: string;
  errors: string[];
  isLoading: boolean;
  lastUpdate: Date;
}

const LivePreview: React.FC<LivePreviewProps> = ({ projectPath, isVisible, onClose }) => {
  const [previewState, setPreviewState] = useState<PreviewState>({
    html: '',
    css: '',
    js: '',
    errors: [],
    isLoading: false,
    lastUpdate: new Date()
  });
  const [isMinimized, setIsMinimized] = useState(false);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [fileChanges, setFileChanges] = useState<FileChange[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const wsRef = useRef<WebSocket | null>(null);

  // 웹소켓 연결 설정 (실제 파일 변경 감지)
  useEffect(() => {
    if (!isVisible) return;

    // 개발 서버의 HMR 웹소켓에 연결
    const connectWebSocket = () => {
      try {
        wsRef.current = new WebSocket('ws://localhost:3000/_next/webpack-hmr');
        
        wsRef.current.onopen = () => {
          console.log('Live Preview WebSocket connected');
        };

        wsRef.current.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.action === 'building' || data.action === 'built') {
              handleFileChange();
            }
          } catch (error) {
            console.log('WebSocket message parsing error:', error);
          }
        };

        wsRef.current.onclose = () => {
          console.log('Live Preview WebSocket disconnected');
          // 자동 재연결
          if (isVisible) {
            setTimeout(connectWebSocket, 2000);
          }
        };

        wsRef.current.onerror = (error) => {
          console.log('WebSocket error:', error);
        };
      } catch (error) {
        console.log('WebSocket connection error:', error);
      }
    };

    if (autoRefresh) {
      connectWebSocket();
    }

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [isVisible, autoRefresh]);

  // 파일 변경 감지 및 처리
  const handleFileChange = () => {
    if (!autoRefresh) return;

    setPreviewState(prev => ({
      ...prev,
      isLoading: true,
      lastUpdate: new Date()
    }));

    // 실제 애플리케이션 새로고침
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }

    // 로딩 상태 해제
    setTimeout(() => {
      setPreviewState(prev => ({
        ...prev,
        isLoading: false
      }));
    }, 1000);
  };

  // 수동 새로고침
  const handleManualRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
    setPreviewState(prev => ({
      ...prev,
      lastUpdate: new Date()
    }));
  };

  // 디바이스 모드별 스타일
  const getDeviceStyle = () => {
    switch (deviceMode) {
      case 'mobile':
        return { width: '375px', height: '667px' };
      case 'tablet':
        return { width: '768px', height: '1024px' };
      default:
        return { width: '100%', height: '100%' };
    }
  };

  // 간단한 HTML 템플릿 생성
  const generatePreviewHTML = () => {
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Preview</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        ${previewState.css}
    </style>
</head>
<body>
    <div class="container">
        <h1>🏮 신승반점 - 실시간 미리보기</h1>
        <p>코드를 작성하면 실시간으로 결과가 여기에 표시됩니다.</p>
        
        <div class="preview-content">
            ${previewState.html || `
                <div style="text-align: center; padding: 40px;">
                    <h2>아직 콘텐츠가 없습니다</h2>
                    <p>HTML 파일을 수정하면 여기에 실시간으로 반영됩니다.</p>
                </div>
            `}
        </div>
    </div>
    
    <script>
        ${previewState.js}
        
        // 실시간 업데이트 알림
        console.log('Live Preview 업데이트됨:', new Date().toLocaleTimeString());
    </script>
</body>
</html>
    `;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className={`w-full max-w-6xl h-[90vh] ${isMinimized ? 'h-16' : ''} transition-all duration-300 bg-white shadow-2xl`}>
        <CardHeader className="pb-3 border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <Monitor className="w-6 h-6 text-blue-600" />
              실시간 미리보기
              {previewState.isLoading && (
                <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
              )}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {previewState.lastUpdate.toLocaleTimeString()}
              </Badge>
              <Button
                onClick={() => setIsMinimized(!isMinimized)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                onClick={onClose}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {!isMinimized && (
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1">
                <Button
                  onClick={() => setDeviceMode('desktop')}
                  variant={deviceMode === 'desktop' ? 'default' : 'outline'}
                  size="sm"
                >
                  <Monitor className="w-4 h-4 mr-1" />
                  데스크톱
                </Button>
                <Button
                  onClick={() => setDeviceMode('tablet')}
                  variant={deviceMode === 'tablet' ? 'default' : 'outline'}
                  size="sm"
                >
                  <Tablet className="w-4 h-4 mr-1" />
                  태블릿
                </Button>
                <Button
                  onClick={() => setDeviceMode('mobile')}
                  variant={deviceMode === 'mobile' ? 'default' : 'outline'}
                  size="sm"
                >
                  <Smartphone className="w-4 h-4 mr-1" />
                  모바일
                </Button>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                <Button
                  onClick={handleManualRefresh}
                  variant="outline"
                  size="sm"
                >
                  <RefreshCw className="w-4 h-4 mr-1" />
                  새로고침
                </Button>
                <Button
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  variant={autoRefresh ? 'default' : 'outline'}
                  size="sm"
                >
                  {autoRefresh ? <CheckCircle className="w-4 h-4 mr-1" /> : <Square className="w-4 h-4 mr-1" />}
                  자동 새로고침
                </Button>
              </div>
            </div>
          )}
        </CardHeader>
        
        {!isMinimized && (
          <CardContent className="p-0 flex-1">
            <Tabs defaultValue="preview" className="h-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="preview">
                  <Eye className="w-4 h-4 mr-2" />
                  미리보기
                </TabsTrigger>
                <TabsTrigger value="code">
                  <Code className="w-4 h-4 mr-2" />
                  코드 뷰
                </TabsTrigger>
                <TabsTrigger value="monitor">
                  <Settings className="w-4 h-4 mr-2" />
                  모니터링
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview" className="h-[calc(100%-3rem)] m-0">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
                  <div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    style={getDeviceStyle()}
                  >
                    <iframe
                      ref={iframeRef}
                      src="http://localhost:3000"
                      className="w-full h-full border-0"
                      title="Live Preview"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="code" className="h-[calc(100%-3rem)] m-0 p-4">
                <div className="space-y-4">
                  <Alert>
                    <FileText className="h-4 w-4" />
                    <AlertDescription>
                      현재 프로젝트의 코드가 실시간으로 여기에 반영됩니다.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">HTML 구조</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-40">
                          <code>{previewState.html || '// HTML 코드가 여기에 표시됩니다'}</code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">CSS 스타일</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-40">
                          <code>{previewState.css || '/* CSS 코드가 여기에 표시됩니다 */'}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">JavaScript 기능</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-32">
                        <code>{previewState.js || '// JavaScript 코드가 여기에 표시됩니다'}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="monitor" className="h-[calc(100%-3rem)] m-0 p-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          연결 상태
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">개발 서버</span>
                            <Badge variant="outline" className="text-green-600">연결됨</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">자동 새로고침</span>
                            <Badge variant={autoRefresh ? 'default' : 'secondary'}>
                              {autoRefresh ? '활성' : '비활성'}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">마지막 업데이트</span>
                            <span className="text-sm text-gray-500">
                              {previewState.lastUpdate.toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-500" />
                          오류 로그
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {previewState.errors.length === 0 ? (
                            <p className="text-sm text-gray-500">오류가 없습니다</p>
                          ) : (
                            previewState.errors.map((error, index) => (
                              <div key={index} className="text-sm text-red-600 bg-red-50 p-2 rounded">
                                {error}
                              </div>
                            ))
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">파일 변경 히스토리</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {fileChanges.length === 0 ? (
                          <p className="text-sm text-gray-500">아직 변경사항이 없습니다</p>
                        ) : (
                          fileChanges.map((change, index) => (
                            <div key={index} className="flex items-center justify-between text-sm border-b pb-2">
                              <span>{change.path}</span>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {change.type}
                                </Badge>
                                <span className="text-xs text-gray-500">
                                  {change.timestamp.toLocaleTimeString()}
                                </span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default LivePreview; 