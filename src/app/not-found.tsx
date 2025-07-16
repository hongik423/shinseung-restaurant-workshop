import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, Book, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary-200 mb-4">404</div>
            <div className="text-6xl mb-4">😅</div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            페이지를 찾을 수 없습니다
          </h1>
          
          <p className="text-lg text-secondary-600 mb-8 max-w-md mx-auto">
            찾고 계신 페이지가 존재하지 않거나 이동되었을 수 있습니다. 
            아래 링크를 통해 다른 페이지로 이동해보세요.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                홈으로 돌아가기
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/learning">
                <Book className="w-5 h-5 mr-2" />
                학습 시작하기
              </Link>
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">
              빠른 이동
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/learning">
                  <Book className="w-4 h-4 mr-1" />
                  학습 과정
                </Link>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <Link href="/practice">
                  <Search className="w-4 h-4 mr-1" />
                  실습 프로젝트
                </Link>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <Link href="/guide">
                  <Book className="w-4 h-4 mr-1" />
                  가이드
                </Link>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <Link href="/community">
                  <Search className="w-4 h-4 mr-1" />
                  커뮤니티
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Help Section */}
          <div className="mt-8 p-6 bg-primary-50 rounded-lg">
            <h4 className="font-semibold text-secondary-900 mb-2">
              도움이 필요하시나요?
            </h4>
            <p className="text-sm text-secondary-600 mb-4">
              문제가 계속 발생하면 FAQ를 확인하거나 지원팀에 문의해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/faq">
                  FAQ 확인
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/support">
                  지원 요청
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 