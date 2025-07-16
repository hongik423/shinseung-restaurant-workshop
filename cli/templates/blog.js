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

// 블로그 메인 페이지
function createBlogPage() {
  return `import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "React 19의 새로운 기능들",
      excerpt: "React 19에서 추가된 새로운 기능들과 개선사항들을 살펴보겠습니다.",
      date: "2024-01-15",
      author: "개발자",
      category: "React",
      readTime: "5분"
    },
    {
      id: 2,
      title: "TypeScript로 더 안전한 코드 작성하기",
      excerpt: "TypeScript를 활용해서 더 안전하고 유지보수하기 쉬운 코드를 작성하는 방법을 알아보겠습니다.",
      date: "2024-01-10",
      author: "개발자",
      category: "TypeScript",
      readTime: "8분"
    },
    {
      id: 3,
      title: "Next.js 15 마이그레이션 가이드",
      excerpt: "Next.js 15로 업그레이드하는 방법과 주요 변경사항들을 정리해보겠습니다.",
      date: "2024-01-05",
      author: "개발자",
      category: "Next.js",
      readTime: "6분"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">내 블로그</h1>
            <nav className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">홈</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">소개</Link>
              <Link href="/categories" className="text-gray-600 hover:text-blue-600">카테고리</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">개발 이야기</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            일상에서 만나는 개발 경험과 새로운 기술들을 공유합니다.
          </p>
        </div>
      </section>

      {/* 최신 글 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8">최신 글</h3>
        <div className="grid gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </div>
                  <span>{post.readTime} 읽기</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-blue-600">
                  <Link href={\`/posts/\${post.id}\`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={\`/posts/\${post.id}\`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  더 읽기
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">카테고리</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['React', 'TypeScript', 'Next.js', 'JavaScript'].map(category => (
              <div key={category} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <h4 className="text-lg font-semibold mb-2">{category}</h4>
                <p className="text-gray-600 text-sm">3개의 글</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 구독 섹션 */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">새 글 알림 받기</h3>
          <p className="text-gray-300 mb-8">새로운 글이 올라올 때마다 알림을 받아보세요.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="이메일 주소" 
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              구독하기
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">내 블로그</h4>
              <p className="text-gray-400">개발 경험과 지식을 공유하는 블로그입니다.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">카테고리</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/category/react" className="hover:text-white">React</Link></li>
                <li><Link href="/category/typescript" className="hover:text-white">TypeScript</Link></li>
                <li><Link href="/category/nextjs" className="hover:text-white">Next.js</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <p className="text-gray-400">your.email@example.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 내 블로그. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
`;
}

// 예시 포스트 페이지
function createPostPage() {
  return `import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'

export default function PostPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            내 블로그
          </Link>
        </div>
      </header>

      {/* 글 내용 */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft size={16} />
            블로그로 돌아가기
          </Link>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                React
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                2024-01-15
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                개발자
              </div>
              <span>5분 읽기</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-8 leading-tight">
              React 19의 새로운 기능들
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg mb-8">
                React 19에서 추가된 새로운 기능들과 개선사항들을 살펴보겠습니다.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">주요 기능</h2>
              <p className="text-gray-700 mb-6">
                React 19는 많은 새로운 기능과 개선사항을 포함하고 있습니다. 
                개발자 경험을 향상시키고 성능을 개선하는데 중점을 두었습니다.
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>새로운 컴파일러 기능</li>
                <li>개선된 서버 사이드 렌더링</li>
                <li>더 나은 타입 추론</li>
                <li>성능 최적화</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">마이그레이션 가이드</h2>
              <p className="text-gray-700 mb-6">
                기존 React 18 프로젝트에서 React 19로 업그레이드하는 방법을 안내합니다.
              </p>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <code className="text-sm">
                  npm install react@19 react-dom@19
                </code>
              </div>
              
              <p className="text-gray-700">
                이 명령어로 React 19를 설치할 수 있습니다. 
                추가적인 설정이 필요할 수 있으니 공식 문서를 확인해보세요.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
`;
}

// 메인 템플릿 생성 함수
async function createBlogTemplate(projectPath, projectName, options = {}) {
  console.log(chalk.blue('📄 블로그 파일 생성 중...'));

  // 필수 설정 파일들
  createFile(path.join(projectPath, 'package.json'), createPackageJson(projectName));
  createFile(path.join(projectPath, 'next.config.js'), `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
`);
  createFile(path.join(projectPath, 'tailwind.config.js'), `/** @type {import('tailwindcss').Config} */
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
`);
  createFile(path.join(projectPath, 'postcss.config.js'), `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`);
  createFile(path.join(projectPath, 'tsconfig.json'), JSON.stringify({
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
  }, null, 2));

  // 앱 폴더 구조
  createFile(path.join(projectPath, 'app', 'layout.tsx'), `import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '내 블로그',
  description: '개발 경험과 지식을 공유하는 블로그',
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
`);
  createFile(path.join(projectPath, 'app', 'page.tsx'), createBlogPage());
  createFile(path.join(projectPath, 'app', 'posts', '[id]', 'page.tsx'), createPostPage());
  createFile(path.join(projectPath, 'app', 'globals.css'), `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Inter, system-ui, sans-serif;
}

.prose {
  max-width: none;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4 {
  color: #1f2937;
}

.prose p {
  color: #374151;
  line-height: 1.7;
}

.prose ul {
  color: #374151;
}

.prose code {
  background-color: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}
`);

  // 기타 파일들
  createFile(path.join(projectPath, 'README.md'), `# ${projectName}

EasyNext CLI로 생성된 블로그 프로젝트입니다.

## 시작하기

1. 개발 서버 실행:
\`\`\`bash
npm run dev
\`\`\`

2. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어보세요.

## 프로젝트 구조

- \`app/\` - Next.js 앱 라우터 디렉토리
- \`app/page.tsx\` - 메인 블로그 페이지
- \`app/posts/[id]/page.tsx\` - 개별 포스트 페이지

## 커스터마이징

- \`app/page.tsx\`에서 블로그 포스트 데이터를 수정하세요
- \`app/posts/[id]/page.tsx\`에서 포스트 상세 페이지를 커스터마이즈하세요
- 실제 블로그 데이터는 헤드리스 CMS나 마크다운 파일로 관리하는 것을 추천합니다

## 기술 스택

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (아이콘)
`);
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

  console.log(chalk.green('✅ 블로그 템플릿 생성 완료'));
}

module.exports = createBlogTemplate; 