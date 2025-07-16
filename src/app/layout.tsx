import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChatButton from '@/components/FloatingChatButton';
import FloatingErrorSupportButton from '@/components/FloatingErrorSupportButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '신승반점 개발 실습 | 웹개발 무료 교육 플랫폼',
  description: '인천 차이나타운 신승반점 랜딩페이지를 만들어보며 HTML, CSS, JavaScript를 배우는 무료 웹개발 교육 플랫폼입니다.',
  keywords: ['웹개발', '프론트엔드', 'HTML', 'CSS', 'JavaScript', '신승반점', '무료교육', '코딩'],
  authors: [{ name: '신승반점 개발팀' }],
  creator: '신승반점 개발팀',
  publisher: '신승반점 개발팀',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shinseung-learning.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '신승반점 개발 실습 | 웹개발 무료 교육 플랫폼',
    description: '인천 차이나타운 신승반점 랜딩페이지를 만들어보며 HTML, CSS, JavaScript를 배우는 무료 웹개발 교육 플랫폼입니다.',
    url: 'https://shinseung-learning.com',
    siteName: '신승반점 개발 실습',
    images: [
      {
        url: '/easynext.png',
        width: 800,
        height: 600,
        alt: '신승반점 개발 실습',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '신승반점 개발 실습 | 웹개발 무료 교육 플랫폼',
    description: '인천 차이나타운 신승반점 랜딩페이지를 만들어보며 HTML, CSS, JavaScript를 배우는 무료 웹개발 교육 플랫폼입니다.',
    images: ['/easynext.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingChatButton />
            <FloatingErrorSupportButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
