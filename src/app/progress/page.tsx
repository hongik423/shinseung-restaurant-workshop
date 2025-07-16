'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CheckCircle, Clock, Trophy, Target, BookOpen, Code, Calendar, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const ProgressPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  const userStats = {
    name: '김학습자',
    avatar: 'https://github.com/shadcn.png',
    level: '초급 개발자',
    totalHours: 24,
    completedProjects: 3,
    currentStreak: 7,
    totalPoints: 1250
  };

  const learningProgress = {
    currentCourse: 'HTML 기초',
    currentStep: 3,
    totalSteps: 5,
    overallProgress: 60,
    timeSpent: '2시간 30분',
    estimatedRemaining: '1시간 30분'
  };

  const completedSteps = [
    {
      id: 1,
      title: '환경 설정',
      completedAt: '2024-01-15',
      timeSpent: '20분',
      score: 100,
      type: 'setup'
    },
    {
      id: 2,
      title: 'HTML 기초',
      completedAt: '2024-01-16',
      timeSpent: '30분',
      score: 95,
      type: 'html'
    },
    {
      id: 3,
      title: 'CSS 스타일링',
      completedAt: '2024-01-17',
      timeSpent: '60분',
      score: 88,
      type: 'css'
    }
  ];

  const nextTasks = [
    {
      id: 1,
      title: 'JavaScript 기능 추가',
      description: '동적인 웹페이지 만들기',
      estimatedTime: '40분',
      difficulty: 'intermediate',
      priority: 'high'
    },
    {
      id: 2,
      title: '웹사이트 배포',
      description: '완성된 사이트를 인터넷에 공개',
      estimatedTime: '20분',
      difficulty: 'beginner',
      priority: 'medium'
    },
    {
      id: 3,
      title: '포트폴리오 프로젝트',
      description: '개인 포트폴리오 웹사이트 제작',
      estimatedTime: '3시간',
      difficulty: 'advanced',
      priority: 'low'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: '첫 걸음',
      description: '첫 번째 프로젝트 완료',
      icon: '🎯',
      unlockedAt: '2024-01-15',
      rarity: 'common'
    },
    {
      id: 2,
      title: '꾸준함',
      description: '7일 연속 학습',
      icon: '🔥',
      unlockedAt: '2024-01-17',
      rarity: 'rare'
    },
    {
      id: 3,
      title: '스피드러너',
      description: '예상 시간보다 빠르게 완료',
      icon: '⚡',
      unlockedAt: '2024-01-16',
      rarity: 'common'
    }
  ];

  const weeklyActivity = [
    { day: '월', hours: 2, completed: true },
    { day: '화', hours: 1.5, completed: true },
    { day: '수', hours: 0, completed: false },
    { day: '목', hours: 3, completed: true },
    { day: '금', hours: 2.5, completed: true },
    { day: '토', hours: 1, completed: true },
    { day: '일', hours: 2, completed: true }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600';
      case 'intermediate': return 'text-yellow-600';
      case 'advanced': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      case 'legendary': return 'border-yellow-300 bg-yellow-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="w-16 h-16">
                <AvatarImage src={userStats.avatar} />
                <AvatarFallback>{userStats.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-secondary-900">
                  {userStats.name}님의 학습 현황
                </h1>
                <p className="text-lg text-secondary-600 mt-1">
                  {userStats.level} • {userStats.totalHours}시간 학습 완료
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {userStats.currentStreak}
                </div>
                <div className="text-sm text-secondary-600">연속 학습일</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-900">
                  {userStats.totalPoints}
                </div>
                <div className="text-sm text-secondary-600">포인트</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Current Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-500" />
              현재 학습 중
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  {learningProgress.currentCourse}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-secondary-600">
                        {learningProgress.currentStep}/{learningProgress.totalSteps} 단계 완료
                      </span>
                      <span className="font-medium">
                        {learningProgress.overallProgress}%
                      </span>
                    </div>
                    <Progress value={learningProgress.overallProgress} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between text-sm text-secondary-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      학습 시간: {learningProgress.timeSpent}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      남은 시간: {learningProgress.estimatedRemaining}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <Button size="lg" asChild>
                  <Link href="/learning">
                    학습 계속하기
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">
                {userStats.completedProjects}
              </div>
              <div className="text-sm text-secondary-600">완료한 프로젝트</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">
                {userStats.totalHours}
              </div>
              <div className="text-sm text-secondary-600">총 학습 시간</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">
                {achievements.length}
              </div>
              <div className="text-sm text-secondary-600">획득한 뱃지</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">
                {userStats.totalPoints}
              </div>
              <div className="text-sm text-secondary-600">포인트</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Completed Steps */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  완료한 단계
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedSteps.map((step) => (
                    <div key={step.id} className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-secondary-900">{step.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-secondary-600">
                          <span>{step.completedAt}</span>
                          <span>{step.timeSpent}</span>
                          <Badge variant="outline" className="text-xs">
                            {step.score}점
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Activity */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  주간 활동
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {weeklyActivity.map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-secondary-600 mb-2">{day.day}</div>
                      <div 
                        className={`w-full h-16 rounded-lg border-2 flex items-center justify-center ${
                          day.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        {day.completed && (
                          <div className="text-center">
                            <div className="text-sm font-medium text-green-600">
                              {day.hours}h
                            </div>
                            <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Next Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-500" />
                  다음 할 일
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {nextTasks.map((task) => (
                    <div key={task.id} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-secondary-900 text-sm">
                          {task.title}
                        </h4>
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                      </div>
                      <p className="text-xs text-secondary-600 mb-2">
                        {task.description}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.estimatedTime}
                        </div>
                        <Badge variant="outline" className={`text-xs ${getDifficultyColor(task.difficulty)}`}>
                          {task.difficulty}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  최근 달성 뱃지
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className={`p-3 border rounded-lg ${getRarityColor(achievement.rarity)}`}>
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-medium text-secondary-900 text-sm">
                            {achievement.title}
                          </h4>
                          <p className="text-xs text-secondary-600">
                            {achievement.description}
                          </p>
                          <div className="text-xs text-secondary-500 mt-1">
                            {achievement.unlockedAt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage; 