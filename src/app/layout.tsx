import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "신승반점 실습교재 | 비개발자를 위한 완전 정복 가이드",
  description: "완전 초보자도 전문적인 웹사이트를 만들 수 있는 단계별 실습교재입니다. Node.js, HTML, CSS, JavaScript를 건축 비유로 쉽게 배워보세요.",
  keywords: ["웹개발", "초보자", "실습교재", "HTML", "CSS", "JavaScript", "Node.js", "신승반점"],
  authors: [{ name: "신승반점 TFT팀" }],
  openGraph: {
    title: "신승반점 실습교재 | 비개발자를 위한 완전 정복 가이드",
    description: "완전 초보자도 전문적인 웹사이트를 만들 수 있는 단계별 실습교재",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "신승반점 실습교재",
    description: "완전 초보자도 전문적인 웹사이트를 만들 수 있는 단계별 실습교재",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`} suppressHydrationWarning>
        <div className="min-h-screen">
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
                borderRadius: '8px',
                padding: '16px',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
