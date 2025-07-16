const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// 파일 생성 헬퍼 함수
function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
}

// package.json 생성
function createPackageJson(projectName) {
  return JSON.stringify({
    name: projectName,
    version: "0.1.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint"
    },
    dependencies: {
      "next": "15.1.0",
      "react": "^19.0.0",
      "react-dom": "^19.0.0",
      "lucide-react": "^0.469.0"
    },
    devDependencies: {
      "@types/node": "^20",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      "autoprefixer": "^10.4.20",
      "eslint": "^9",
      "eslint-config-next": "15.1.0",
      "postcss": "^8",
      "tailwindcss": "^3.4.1",
      "typescript": "^5"
    }
  }, null, 2);
}

// Next.js 설정 파일
function createNextConfig() {
  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
`;
}

// Tailwind CSS 설정
function createTailwindConfig() {
  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    },
  },
  plugins: [],
}
`;
}

// PostCSS 설정
function createPostcssConfig() {
  return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;
}

// TypeScript 설정
function createTsConfig() {
  return JSON.stringify({
    compilerOptions: {
      lib: ["dom", "dom.iterable", "es6"],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: "esnext",
      moduleResolution: "bundler",
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: "preserve",
      incremental: true,
      plugins: [
        {
          name: "next"
        }
      ],
      baseUrl: ".",
      paths: {
        "@/*": ["./*"]
      }
    },
    include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    exclude: ["node_modules"]
  }, null, 2);
}

// 메인 레이아웃 파일
function createLayout() {
  return `import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '내 랜딩페이지',
  description: 'Next.js로 만든 멋진 랜딩페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
`;
}

// 글로벌 CSS
function createGlobalsCss() {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
`;
}

// 메인 페이지
function createMainPage() {
  return `import { ArrowRight, Star, Check } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">내 랜딩페이지</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600">기능</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600">가격</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">연락처</a>
        </nav>
      </header>

      {/* 히어로 섹션 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          당신의 <span className="text-blue-600">꿈을 현실로</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          혁신적인 솔루션으로 더 나은 미래를 만들어보세요. 
          간단하고 효과적인 도구로 성공을 향한 첫 걸음을 내딛으세요.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
            지금 시작하기
            <ArrowRight size={20} />
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            더 알아보기
          </button>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">주요 기능</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="text-blue-600" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">간편한 사용</h4>
            <p className="text-gray-600">직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Check className="text-green-600" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">검증된 품질</h4>
            <p className="text-gray-600">수많은 사용자들이 검증한 안정적인 서비스입니다.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <ArrowRight className="text-purple-600" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">빠른 성장</h4>
            <p className="text-gray-600">효율적인 도구로 목표를 빠르게 달성하세요.</p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h3>
          <p className="text-xl mb-8">더 나은 미래를 위한 첫 걸음을 내딛어보세요.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 내 랜딩페이지. 모든 권리 보유.</p>
        </div>
      </footer>
    </div>
  )
}
`;
}

// README 파일
function createReadme(projectName) {
  return `# ${projectName}

EasyNext CLI로 생성된 랜딩페이지 프로젝트입니다.

## 시작하기

1. 개발 서버 실행:
\`\`\`bash
npm run dev
\`\`\`

2. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어보세요.

## 프로젝트 구조

- \`app/\` - Next.js 앱 라우터 디렉토리
- \`app/layout.tsx\` - 메인 레이아웃 파일
- \`app/page.tsx\` - 홈페이지 컴포넌트
- \`app/globals.css\` - 글로벌 CSS 파일

## 커스터마이징

- \`app/page.tsx\`에서 랜딩페이지 내용을 수정하세요
- \`tailwind.config.js\`에서 색상과 디자인을 변경하세요
- \`app/globals.css\`에서 추가적인 스타일을 적용하세요

## 배포

1. 프로덕션 빌드:
\`\`\`bash
npm run build
\`\`\`

2. Vercel, Netlify 등의 플랫폼에 배포하세요.

## 기술 스택

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (아이콘)
`;
}

// 메인 템플릿 생성 함수
async function createLandingPageTemplate(projectPath, projectName, options = {}) {
  console.log(chalk.blue('📄 랜딩페이지 파일 생성 중...'));

  // 필수 설정 파일들
  createFile(path.join(projectPath, 'package.json'), createPackageJson(projectName));
  createFile(path.join(projectPath, 'next.config.js'), createNextConfig());
  createFile(path.join(projectPath, 'tailwind.config.js'), createTailwindConfig());
  createFile(path.join(projectPath, 'postcss.config.js'), createPostcssConfig());
  createFile(path.join(projectPath, 'tsconfig.json'), createTsConfig());

  // 앱 폴더 구조
  createFile(path.join(projectPath, 'app', 'layout.tsx'), createLayout());
  createFile(path.join(projectPath, 'app', 'page.tsx'), createMainPage());
  createFile(path.join(projectPath, 'app', 'globals.css'), createGlobalsCss());

  // 기타 파일들
  createFile(path.join(projectPath, 'README.md'), createReadme(projectName));
  createFile(path.join(projectPath, '.gitignore'), `# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
`);

  console.log(chalk.green('✅ 랜딩페이지 템플릿 생성 완료'));
}

module.exports = createLandingPageTemplate; 