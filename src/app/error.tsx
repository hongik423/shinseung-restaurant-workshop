'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, RefreshCw, Home, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
            <div className="text-6xl mb-4">😵</div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            앗! 문제가 발생했습니다
          </h1>
          
          <p className="text-lg text-secondary-600 mb-6 max-w-md mx-auto">
            예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
          </p>
          
          {/* Error Details */}
          {error.digest && (
            <div className="mb-6">
              <Badge variant="outline" className="px-3 py-1">
                오류 코드: {error.digest}
              </Badge>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={reset}>
              <RefreshCw className="w-5 h-5 mr-2" />
              다시 시도하기
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                홈으로 돌아가기
              </Link>
            </Button>
          </div>
          
          {/* Help Section */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">
              문제가 계속 발생하나요?
            </h3>
            
            <div className="space-y-3 mb-6">
              <p className="text-sm text-secondary-600">
                다음 방법들을 시도해보세요:
              </p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• 페이지를 새로고침해보세요</li>
                <li>• 브라우저 캐시를 지워보세요</li>
                <li>• 다른 브라우저에서 시도해보세요</li>
                <li>• 인터넷 연결을 확인해보세요</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/faq">
                  FAQ 확인
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/support">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  지원팀 문의
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Technical Details (개발 환경에서만) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
              <h4 className="font-semibold text-gray-900 mb-2">
                개발자 정보 (개발 환경에서만 표시)
              </h4>
              <pre className="text-xs text-gray-700 overflow-auto">
                {error.message}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 