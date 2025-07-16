'use client';

import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { href: '/learning', label: '학습 시작하기' },
    { href: '/guide', label: '가이드' },
    { href: '/practice', label: '실습 프로젝트' },
    { href: '/community', label: '커뮤니티' },
  ];

  const resources = [
    { href: '/guide/beginner', label: '초보자 가이드' },
    { href: '/guide/tools', label: '도구 사용법' },
    { href: '/guide/templates', label: '프로젝트 템플릿' },
    { href: '/progress', label: '내 진도' },
  ];

  const support = [
    { href: '/info', label: '서비스 소개' },
    { href: '/info/team', label: '팀 소개' },
    { href: '/info/contact', label: '문의하기' },
    { href: '/info/privacy', label: '개인정보처리방침' },
  ];

  const socialLinks = [
    { href: 'https://github.com/shinseung-learning', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com/shinseung_dev', icon: Twitter, label: 'Twitter' },
    { href: 'https://youtube.com/shinseung-learning', icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-primary-400">
                🍜 신승반점 개발 실습
              </div>
            </Link>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              코딩을 한 번도 해보지 않은 사람도 3시간 안에 멋진 웹사이트를 만들 수 있는 
              100% 성공 보장형 완전초보자 맞춤 실습 플랫폼입니다.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-secondary-400">support@shinseung-learning.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-secondary-400">1588-1234</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">학습 자료</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">지원</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-secondary-400 text-sm">
            © 2024 신승반점 개발 실습 플랫폼. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-secondary-700">
          <div className="text-center text-secondary-400 text-sm">
            <p className="mb-2">
              이 서비스는 완전 무료로 제공되며, 누구나 자유롭게 학습할 수 있습니다.
            </p>
            <p>
              문의사항이 있으시면 언제든지 연락주세요. 빠른 시간 내에 답변드리겠습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 