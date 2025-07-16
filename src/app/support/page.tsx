'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Clock, Users, CheckCircle, AlertCircle, HeadphonesIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
    urgency: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const supportCategories = [
    { value: 'technical', label: '기술적 문제' },
    { value: 'account', label: '계정 관련' },
    { value: 'learning', label: '학습 관련' },
    { value: 'project', label: '프로젝트 관련' },
    { value: 'general', label: '일반 문의' }
  ];

  const urgencyLevels = [
    { value: 'low', label: '낮음 (3일 이내 답변)' },
    { value: 'medium', label: '보통 (1일 이내 답변)' },
    { value: 'high', label: '높음 (몇 시간 이내 답변)' }
  ];

  const recentTickets = [
    {
      id: 'T001',
      subject: 'Node.js 설치 오류',
      status: 'resolved',
      createdAt: '2024-01-15',
      resolvedAt: '2024-01-15',
      category: 'technical'
    },
    {
      id: 'T002',
      subject: 'CSS 스타일링 문제',
      status: 'in-progress',
      createdAt: '2024-01-16',
      category: 'learning'
    },
    {
      id: 'T003',
      subject: '프로젝트 배포 질문',
      status: 'pending',
      createdAt: '2024-01-17',
      category: 'project'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현에서는 여기서 서버로 데이터를 전송
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('지원 요청이 성공적으로 제출되었습니다!');
    
    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      category: '',
      subject: '',
      message: '',
      urgency: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'pending': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'resolved': return '해결됨';
      case 'in-progress': return '진행중';
      case 'pending': return '대기중';
      default: return '알 수 없음';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              🎧 1:1 지원 센터
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              개인 맞춤형 지원을 받아 학습 문제를 빠르게 해결하세요
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center gap-8 text-sm text-secondary-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>평균 답변 시간: 2시간</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>만족도: 98%</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                <span>해결율: 99%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Support Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary-900 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary-500" />
                  지원 요청 작성
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 기본 정보 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">이름 *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="이름을 입력하세요"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">이메일 *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="이메일을 입력하세요"
                        required
                      />
                    </div>
                  </div>

                  {/* 카테고리 및 긴급도 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">문의 카테고리 *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="카테고리를 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="urgency">긴급도 *</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="긴급도를 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* 제목 */}
                  <div>
                    <Label htmlFor="subject">제목 *</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="문제를 간단히 요약해주세요"
                      required
                    />
                  </div>

                  {/* 메시지 */}
                  <div>
                    <Label htmlFor="message">상세 내용 *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="문제 상황을 자세히 설명해주세요. 오류 메시지나 스크린샷이 있다면 함께 공유해주세요."
                      rows={6}
                      required
                    />
                  </div>

                  {/* 안내 메시지 */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">📝 효과적인 지원 요청을 위한 팁</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• 문제 발생 환경 (운영체제, 브라우저 등)을 명시해주세요</li>
                      <li>• 오류 메시지가 있다면 정확히 복사해서 붙여넣어주세요</li>
                      <li>• 문제 재현 단계를 순서대로 설명해주세요</li>
                      <li>• 스크린샷이나 코드 스니펫을 첨부하면 더 빠른 해결이 가능합니다</li>
                    </ul>
                  </div>

                  {/* 제출 버튼 */}
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        제출 중...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        지원 요청 제출
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* 빠른 도움말 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-secondary-900">
                  🚀 빠른 도움말
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-secondary-600">
                  <p className="mb-2">지원 요청 전에 먼저 확인해보세요:</p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" asChild className="w-full justify-start">
                      <Link href="/faq">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        FAQ 확인하기
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full justify-start">
                      <Link href="/guide">
                        <HeadphonesIcon className="w-4 h-4 mr-2" />
                        가이드 문서 읽기
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full justify-start">
                      <Link href="/community">
                        <Users className="w-4 h-4 mr-2" />
                        커뮤니티 질문하기
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 최근 지원 티켓 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-secondary-900">
                  📋 최근 지원 요청
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTickets.map((ticket) => (
                    <div key={ticket.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-secondary-900">
                          {ticket.id}
                        </span>
                        <Badge className={`${getStatusColor(ticket.status)} text-white text-xs`}>
                          {getStatusLabel(ticket.status)}
                        </Badge>
                      </div>
                      <p className="text-sm text-secondary-600 mb-2">
                        {ticket.subject}
                      </p>
                      <div className="text-xs text-secondary-500">
                        요청일: {ticket.createdAt}
                        {ticket.resolvedAt && (
                          <span className="ml-2">
                            완료일: {ticket.resolvedAt}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 연락처 정보 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-secondary-900">
                  📞 기타 연락처
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-secondary-600">
                  <p className="font-medium mb-1">긴급 문의</p>
                  <p>이메일: support@shinseung-learning.com</p>
                  <p>운영시간: 평일 09:00 - 18:00</p>
                </div>
                <div className="text-sm text-secondary-600">
                  <p className="font-medium mb-1">커뮤니티</p>
                  <p>24시간 언제든지 다른 학습자들과 소통 가능</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage; 