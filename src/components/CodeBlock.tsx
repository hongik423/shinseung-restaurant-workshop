'use client';

import { useState } from 'react';
import { Copy, Check, Terminal, FileText, Code } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  className?: string;
}

export default function CodeBlock({
  code,
  language = 'text',
  filename,
  showLineNumbers = false,
  highlightLines = [],
  className = ''
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('코드가 복사되었습니다!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('복사에 실패했습니다.');
    }
  };

  const getLanguageIcon = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'terminal':
      case 'bash':
      case 'sh':
        return <Terminal className="h-4 w-4" />;
      case 'html':
      case 'xml':
        return <FileText className="h-4 w-4" />;
      case 'javascript':
      case 'js':
      case 'typescript':
      case 'ts':
      case 'css':
      case 'json':
        return <Code className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'terminal':
      case 'bash':
      case 'sh':
        return 'text-green-400';
      case 'html':
      case 'xml':
        return 'text-orange-400';
      case 'javascript':
      case 'js':
        return 'text-yellow-400';
      case 'typescript':
      case 'ts':
        return 'text-blue-400';
      case 'css':
        return 'text-purple-400';
      case 'json':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const lines = code.split('\n');

  return (
    <div className={`code-block ${className}`}>
      {/* Header */}
      <div className="code-header">
        <div className="flex items-center space-x-2">
          <span className={getLanguageColor(language)}>
            {getLanguageIcon(language)}
          </span>
          <span className="text-sm font-medium">
            {filename || language.toUpperCase()}
          </span>
        </div>
        
        <button
          onClick={handleCopy}
          className="copy-button flex items-center space-x-1"
          title="코드 복사"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              <span>복사됨</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>복사</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code className="text-gray-100">
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, index) => (
                    <tr 
                      key={index}
                      className={highlightLines.includes(index + 1) ? 'bg-blue-900/30' : ''}
                    >
                      <td className="text-gray-500 text-right pr-4 select-none w-8">
                        {index + 1}
                      </td>
                      <td className="text-gray-100">
                        {line || '\u00A0'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}

// 사용 예시를 위한 샘플 코드 블록들
export const sampleCodes = {
  nodeInstall: `# Node.js 설치 확인
node --version
npm --version

# 프로젝트 폴더 생성
mkdir shinseung-restaurant
cd shinseung-restaurant`,

  htmlStructure: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>신승반점 - 짜장면의 원조</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="logo">
                🍜 신승반점
            </div>
            <ul class="nav-menu">
                <li><a href="#home">홈</a></li>
                <li><a href="#about">소개</a></li>
                <li><a href="#menu">메뉴</a></li>
                <li><a href="#contact">연락처</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home" class="hero">
            <h1>짜장면의 원조 신승반점</h1>
            <p>1905년부터 이어온 전통의 맛</p>
        </section>
    </main>
</body>
</html>`,

  cssStyles: `/* 기본 스타일 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* 헤더 스타일 */
.header {
    background: #d32f2f;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #ffeb3b;
}`,

  jsInteraction: `// 메뉴 토글 기능
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 스크롤 시 헤더 배경 변경
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});`
}; 