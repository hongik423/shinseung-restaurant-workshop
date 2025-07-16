'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Target, 
  Code,
  FileText,
  Zap,
  Award,
  Activity,
  BarChart3,
  Timer,
  BookOpen,
  GitBranch,
  Users
} from 'lucide-react';

interface ProgressData {
  currentStep: number;
  totalSteps: number;
  completedTasks: string[];
  currentTask: string;
  timeSpent: number;
  errorsFixed: number;
  linesOfCode: number;
  filesModified: string[];
  achievements: string[];
}

interface ProgressMonitorProps {
  isVisible: boolean;
  onToggle: () => void;
  projectData?: any;
}

const ProgressMonitor: React.FC<ProgressMonitorProps> = ({ isVisible, onToggle, projectData }) => {
  const [progressData, setProgressData] = useState<ProgressData>({
    currentStep: 2,
    totalSteps: 5,
    completedTasks: [
      'Node.js 설치 완료',
      'Cursor IDE 설치 완료',
      'GitHub 계정 생성 완료',
      'HTML 기본 구조 작성'
    ],
    currentTask: 'CSS 스타일 적용하기',
    timeSpent: 47,
    errorsFixed: 3,
    linesOfCode: 156,
    filesModified: [
      'index.html',
      'style.css',
      'script.js'
    ],
    achievements: [
      '첫 번째 웹페이지 완성',
      '오류 없는 코드 작성',
      '반응형 디자인 적용'
    ]
  });

  const [recentActivity, setRecentActivity] = useState([
    { time: '13:45', action: 'CSS 파일 수정', type: 'edit' },
    { time: '13:42', action: '오류 수정 완료', type: 'fix' },
    { time: '13:40', action: 'HTML 구조 완성', type: 'complete' },
    { time: '13:35', action: '새로운 함수 추가', type: 'add' }
  ]);

  const [stats, setStats] = useState({
    todayProgress: 68,
    weeklyGoal: 85,
    totalTime: 180,
    averageTime: 25,
    successRate: 92,
    helpRequests: 2
  });

  // 실시간 데이터 업데이트 시뮬레이션
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgressData(prev => ({
        ...prev,
        timeSpent: prev.timeSpent + 1,
        linesOfCode: prev.linesOfCode + Math.floor(Math.random() * 3)
      }));
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(interval);
  }, [isVisible]);

  const getProgressPercentage = () => {
    return Math.round((progressData.currentStep / progressData.totalSteps) * 100);
  };

  const getTaskCompletionPercentage = () => {
    const totalTasks = progressData.completedTasks.length + 1; // +1 for current task
    return Math.round((progressData.completedTasks.length / totalTasks) * 100);
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}시간 ${mins}분` : `${mins}분`;
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'edit':
        return <Code className="w-4 h-4 text-blue-500" />;
      case 'fix':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'complete':
        return <Award className="w-4 h-4 text-purple-500" />;
      case 'add':
        return <Zap className="w-4 h-4 text-orange-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 z-40 w-80 max-h-[90vh] overflow-y-auto">
      <Card className="bg-white shadow-xl border-l-4 border-l-blue-500">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              학습 진행 상황
            </CardTitle>
            <Button
              onClick={onToggle}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              ×
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* 전체 진행률 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">전체 진행률</span>
              <span className="text-sm text-gray-600">{getProgressPercentage()}%</span>
            </div>
            <Progress value={getProgressPercentage()} className="h-2" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>단계 {progressData.currentStep}/{progressData.totalSteps}</span>
              <span>{progressData.currentTask}</span>
            </div>
          </div>

          {/* 현재 작업 */}
          <Alert>
            <Target className="h-4 w-4" />
            <AlertDescription>
              <strong>현재 작업:</strong> {progressData.currentTask}
            </AlertDescription>
          </Alert>

          {/* 통계 카드들 */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">학습 시간</p>
                  <p className="text-sm font-bold">{formatTime(progressData.timeSpent)}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-xs text-gray-500">코드 줄 수</p>
                  <p className="text-sm font-bold">{progressData.linesOfCode}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500" />
                <div>
                  <p className="text-xs text-gray-500">해결한 오류</p>
                  <p className="text-sm font-bold">{progressData.errorsFixed}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-500" />
                <div>
                  <p className="text-xs text-gray-500">수정한 파일</p>
                  <p className="text-sm font-bold">{progressData.filesModified.length}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* 완료된 작업 목록 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              완료된 작업
            </h4>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {progressData.completedTasks.map((task, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 최근 활동 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" />
              최근 활동
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  {getActivityIcon(activity.type)}
                  <span className="text-xs text-gray-500">{activity.time}</span>
                  <span className="text-gray-700">{activity.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 성취 뱃지 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              성취 뱃지
            </h4>
            <div className="flex flex-wrap gap-1">
              {progressData.achievements.map((achievement, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>

          {/* 오늘의 통계 */}
          <Card className="p-3 bg-gradient-to-r from-blue-50 to-purple-50">
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-500" />
              오늘의 통계
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">오늘 진행률</span>
                <span className="text-xs font-bold text-blue-600">{stats.todayProgress}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">주간 목표</span>
                <span className="text-xs font-bold text-purple-600">{stats.weeklyGoal}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">성공률</span>
                <span className="text-xs font-bold text-green-600">{stats.successRate}%</span>
              </div>
            </div>
          </Card>

          {/* 수정된 파일 목록 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-gray-500" />
              수정된 파일
            </h4>
            <div className="space-y-1">
              {progressData.filesModified.map((file, index) => (
                <div key={index} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded">
                  <FileText className="w-3 h-3 text-gray-500" />
                  <span className="text-gray-700 font-mono text-xs">{file}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 다음 단계 */}
          <Alert className="border-blue-200 bg-blue-50">
            <BookOpen className="h-4 w-4 text-blue-600" />
            <AlertDescription>
              <strong>다음 단계:</strong> JavaScript 기능 구현하기
              <br />
              <small className="text-gray-600">예상 소요 시간: 30분</small>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressMonitor; 