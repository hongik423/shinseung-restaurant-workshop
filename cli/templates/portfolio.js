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

// 포트폴리오 메인 페이지
function createPortfolioPage() {
  return `import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "웹 애플리케이션",
      description: "React와 Node.js로 만든 풀스택 웹 애플리케이션",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 2,
      title: "모바일 앱",
      description: "React Native로 개발한 크로스 플랫폼 모바일 앱",
      tech: ["React Native", "Firebase"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 3,
      title: "데이터 분석",
      description: "Python을 이용한 데이터 분석 및 시각화 프로젝트",
      tech: ["Python", "Pandas", "Matplotlib"],
      image: "/api/placeholder/400/300",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">내 포트폴리오</h1>
          <nav className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600">소개</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">프로젝트</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">연락처</a>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            안녕하세요, <span className="text-blue-600">개발자</span>입니다
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            창의적인 아이디어를 실현하는 풀스택 개발자입니다. 
            사용자 경험을 중시하며 깨끗하고 효율적인 코드를 작성합니다.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              연락하기
            </a>
            <a href="#projects" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              프로젝트 보기
            </a>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">소개</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold mb-4">저는...</h4>
              <p className="text-gray-600 mb-6">
                5년 경력의 풀스택 개발자로, 사용자 중심의 웹 애플리케이션을 만드는 것을 좋아합니다. 
                새로운 기술을 배우는 것을 즐기며, 팀워크를 중시합니다.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">기술 스택</h5>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-400">프로필 사진</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">주요 프로젝트</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">프로젝트 이미지</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    프로젝트 보기
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">연락하기</h3>
          <p className="text-xl mb-8">새로운 기회나 협업에 대해 이야기해보세요!</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Mail size={20} />
              이메일
            </a>
            <a href="https://github.com/yourusername" className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 내 포트폴리오. 모든 권리 보유.</p>
        </div>
      </footer>
    </div>
  )
}
`;
}

// 공통 설정 파일들 (랜딩페이지와 동일)
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

// 메인 템플릿 생성 함수
async function createPortfolioTemplate(projectPath, projectName, options = {}) {
  console.log(chalk.blue('📄 포트폴리오 파일 생성 중...'));

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
  createFile(path.join(projectPath, 'tailwind.config.js'), createTailwindConfig());
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
  title: '내 포트폴리오',
  description: '개발자 포트폴리오 웹사이트',
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
  createFile(path.join(projectPath, 'app', 'page.tsx'), createPortfolioPage());
  createFile(path.join(projectPath, 'app', 'globals.css'), `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Inter, system-ui, sans-serif;
}
`);

  // 기타 파일들
  createFile(path.join(projectPath, 'README.md'), `# ${projectName}

EasyNext CLI로 생성된 포트폴리오 프로젝트입니다.

## 시작하기

1. 개발 서버 실행:
\`\`\`bash
npm run dev
\`\`\`

2. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어보세요.

## 커스터마이징

- \`app/page.tsx\`에서 포트폴리오 내용을 수정하세요
- 프로젝트 정보, 기술 스택, 연락처 등을 업데이트하세요

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

  console.log(chalk.green('✅ 포트폴리오 템플릿 생성 완료'));
}

module.exports = createPortfolioTemplate; 