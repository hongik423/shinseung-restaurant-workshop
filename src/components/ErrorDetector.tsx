'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Bot, X, Copy, ExternalLink } from 'lucide-react';

interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: Date;
  source?: string;
}

interface ErrorDetectorProps {
  onErrorDetected: (error: ErrorInfo) => void;
}

const ErrorDetector: React.FC<ErrorDetectorProps> = ({ onErrorDetected }) => {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 전역 에러 핸들러
    const handleError = (event: ErrorEvent) => {
      const errorInfo: ErrorInfo = {
        message: event.message,
        stack: event.error?.stack,
        timestamp: new Date(),
        source: event.filename
      };
      
      setErrors(prev => [...prev, errorInfo]);
      setIsVisible(true);
      onErrorDetected(errorInfo);
    };

    // Promise rejection 핸들러
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorInfo: ErrorInfo = {
        message: event.reason?.message || String(event.reason),
        stack: event.reason?.stack,
        timestamp: new Date(),
        source: 'Promise'
      };
      
      setErrors(prev => [...prev, errorInfo]);
      setIsVisible(true);
      onErrorDetected(errorInfo);
    };

    // Next.js 빌드 에러 감지 (콘솔 로그 모니터링)
    const originalError = console.error;
    console.error = (...args) => {
      const errorMessage = args.join(' ');
      
      // Next.js 관련 에러 패턴 감지
      if (errorMessage.includes('Error:') || 
          errorMessage.includes('Failed to compile') ||
          errorMessage.includes('Module not found') ||
          errorMessage.includes('Syntax error')) {
        
        const errorInfo: ErrorInfo = {
          message: errorMessage,
          timestamp: new Date(),
          source: 'Build Error'
        };
        
        setErrors(prev => [...prev, errorInfo]);
        setIsVisible(true);
        onErrorDetected(errorInfo);
      }
      
      originalError.apply(console, args);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      console.error = originalError;
    };
  }, [onErrorDetected]);

  const handleClearErrors = () => {
    setErrors([]);
    setIsVisible(false);
  };

  const handleCopyError = (error: ErrorInfo) => {
    const errorText = `오류 메시지: ${error.message}\n시간: ${error.timestamp.toLocaleString()}\n소스: ${error.source || 'Unknown'}\n\n${error.stack || ''}`;
    navigator.clipboard.writeText(errorText);
  };

  const formatErrorMessage = (message: string) => {
    // 긴 에러 메시지를 줄여서 표시
    if (message.length > 150) {
      return message.substring(0, 150) + '...';
    }
    return message;
  };

  if (!isVisible || errors.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md">
      <Card className="border-red-200 bg-red-50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-5 h-5" />
              오류 감지됨
            </CardTitle>
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {errors.slice(-3).map((error, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-red-200">
              <div className="flex items-start justify-between mb-2">
                <Badge variant="destructive" className="text-xs">
                  {error.source || 'Unknown'}
                </Badge>
                <div className="flex gap-1">
                  <Button
                    onClick={() => handleCopyError(error)}
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button
                    onClick={() => onErrorDetected(error)}
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                  >
                    <Bot className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-red-700 font-mono leading-tight">
                {formatErrorMessage(error.message)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {error.timestamp.toLocaleTimeString()}
              </p>
            </div>
          ))}
          
          <div className="flex gap-2 pt-2">
            <Button
              onClick={handleClearErrors}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              모든 오류 지우기
            </Button>
            <Button
              onClick={() => {
                if (errors.length > 0) {
                  onErrorDetected(errors[errors.length - 1]);
                }
              }}
              variant="default"
              size="sm"
              className="flex-1"
            >
              <Bot className="w-4 h-4 mr-2" />
              AI 도움 받기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorDetector; 