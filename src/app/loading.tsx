import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardContent className="p-12 text-center">
          {/* Loading Icon */}
          <div className="mb-8">
            <Loader2 className="w-16 h-16 text-primary-500 mx-auto mb-4 animate-spin" />
            <div className="text-4xl mb-4">🍜</div>
          </div>
          
          {/* Loading Message */}
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            잠깐만 기다려주세요
          </h2>
          
          <p className="text-lg text-secondary-600 mb-8">
            페이지를 불러오고 있습니다...
          </p>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <Progress value={undefined} className="w-full" />
          </div>
          
          {/* Tips */}
          <div className="text-sm text-secondary-500">
            💡 로딩 중에는 브라우저의 새로고침 버튼을 누르지 마세요
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 