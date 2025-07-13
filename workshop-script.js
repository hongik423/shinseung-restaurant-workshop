// 전역 변수
let currentStep = 0;
let completedSteps = [];
let workshopProgress = {
    totalSteps: 4,
    completedSteps: 0,
    currentStepProgress: 0
};

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    initializeWorkshop();
    setupEventListeners();
    loadProgress();
    updateProgressDisplay();
});

// 워크숍 초기화
function initializeWorkshop() {
    // 로컬 스토리지에서 진행상황 불러오기
    const savedProgress = localStorage.getItem('workshopProgress');
    if (savedProgress) {
        workshopProgress = JSON.parse(savedProgress);
        completedSteps = JSON.parse(localStorage.getItem('completedSteps') || '[]');
    }
    
    // 체크박스 상태 복원
    restoreCheckboxStates();
    
    // 단계별 진행상황 표시
    updateStepProgress();
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 네비게이션 토글
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // 부드러운 스크롤
    const navLinks = document.querySelectorAll('.nav-menu a, .btn[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // 모바일 메뉴 닫기
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // 체크박스 이벤트
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateProgress();
            saveProgress();
        });
    });
    
    // FAQ 토글
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });
    
    // 플로팅 도움말
    const helpBtn = document.querySelector('.help-btn');
    const helpMenu = document.querySelector('.help-menu');
    
    helpBtn.addEventListener('click', function() {
        toggleHelp();
    });
    
    // 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', function(e) {
        if (!helpBtn.contains(e.target) && !helpMenu.contains(e.target)) {
            helpMenu.classList.remove('active');
        }
    });
}

// 단계별 상세 정보 표시
function showStepDetails(stepType) {
    const stepDetails = {
        'nodejs': {
            title: 'Node.js 설치 가이드',
            content: `
                <div class="step-detail">
                    <h4>📥 Node.js 다운로드</h4>
                    <ol>
                        <li>웹 브라우저에서 <a href="https://nodejs.org" target="_blank">https://nodejs.org</a> 접속</li>
                        <li><strong>LTS 버전</strong> (Long Term Support) 다운로드 클릭</li>
                        <li>운영체제에 맞는 설치 파일 다운로드
                            <ul>
                                <li>Windows: .msi 파일</li>
                                <li>Mac: .pkg 파일</li>
                                <li>Linux: tar.xz 파일</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h4>🔧 설치 과정</h4>
                    <ol>
                        <li>다운로드된 설치 파일 실행</li>
                        <li>설치 마법사 따라하기:
                            <ul>
                                <li>"Next" 버튼 클릭</li>
                                <li>라이선스 동의 체크 후 "Next"</li>
                                <li>설치 경로 확인 후 "Next" (기본값 권장)</li>
                                <li>"Install" 클릭하여 설치 시작</li>
                            </ul>
                        </li>
                        <li>설치 완료 후 "Finish" 클릭</li>
                    </ol>
                    
                    <h4>✅ 설치 확인</h4>
                    <ol>
                        <li><strong>Windows</strong>: Win + R → cmd 입력 → 엔터</li>
                        <li><strong>Mac</strong>: Cmd + Space → 터미널 검색 → 엔터</li>
                        <li>다음 명령어 입력하여 버전 확인:
                            <pre><code>node --version
npm --version</code></pre>
                        </li>
                        <li>버전 번호가 출력되면 설치 완료!</li>
                    </ol>
                    
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle"></i>
                        <strong>팁:</strong> LTS 버전은 안정적이고 장기간 지원되는 버전입니다.
                    </div>
                </div>
            `
        },
        'cursor': {
            title: 'Cursor 에디터 설치 가이드',
            content: `
                <div class="step-detail">
                    <h4>📥 Cursor 다운로드</h4>
                    <ol>
                        <li>웹 브라우저에서 <a href="https://cursor.sh" target="_blank">https://cursor.sh</a> 접속</li>
                        <li>"Download" 버튼 클릭</li>
                        <li>운영체제에 맞는 설치 파일 자동 다운로드</li>
                    </ol>
                    
                    <h4>🔧 설치 과정</h4>
                    <ol>
                        <li>다운로드된 설치 파일 실행</li>
                        <li>설치 마법사 따라하기 (Node.js와 동일한 과정)</li>
                        <li>설치 완료 후 Cursor 실행</li>
                    </ol>
                    
                    <h4>⚙️ 초기 설정</h4>
                    <ol>
                        <li>Cursor 첫 실행 시 환경 설정</li>
                        <li>테마 선택 (Dark/Light)</li>
                        <li>키보드 단축키 설정</li>
                        <li>확장 프로그램 추천 설치</li>
                    </ol>
                    
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i>
                        <strong>Cursor의 장점:</strong> AI 기반 코드 자동완성, 실시간 오류 검사, 스마트 리팩토링
                    </div>
                </div>
            `
        },
        'api': {
            title: 'API 키 설정 가이드',
            content: `
                <div class="step-detail">
                    <h4>🔑 OpenAI API 설정</h4>
                    <ol>
                        <li><a href="https://platform.openai.com" target="_blank">https://platform.openai.com</a> 접속</li>
                        <li>계정 가입 또는 로그인</li>
                        <li>우측 상단 프로필 클릭 → "API keys" 선택</li>
                        <li>"Create new secret key" 클릭</li>
                        <li>키 이름 입력 후 "Create secret key" 클릭</li>
                        <li><strong>중요:</strong> API 키를 안전한 곳에 복사하여 저장</li>
                    </ol>
                    
                    <h4>🧠 Google Gemini API 설정</h4>
                    <ol>
                        <li><a href="https://ai.google.dev" target="_blank">https://ai.google.dev</a> 접속</li>
                        <li>Google 계정으로 로그인</li>
                        <li>"Get API key" 클릭</li>
                        <li>프로젝트 선택 또는 새 프로젝트 생성</li>
                        <li>"Create API key" 클릭</li>
                        <li>API 키 복사하여 저장</li>
                    </ol>
                    
                    <h4>🤖 Claude API 설정</h4>
                    <ol>
                        <li><a href="https://console.anthropic.com" target="_blank">https://console.anthropic.com</a> 접속</li>
                        <li>계정 가입 또는 로그인</li>
                        <li>"API Keys" 메뉴 선택</li>
                        <li>"Create Key" 클릭</li>
                        <li>키 이름 입력 후 생성</li>
                        <li>API 키 복사하여 저장</li>
                    </ol>
                    
                    <h4>⚙️ Cursor에 API 키 등록</h4>
                    <ol>
                        <li>Cursor 실행</li>
                        <li>Ctrl + Shift + P (Windows) 또는 Cmd + Shift + P (Mac) 입력</li>
                        <li>"Cursor Settings" 검색하여 선택</li>
                        <li>"Models" 탭 선택</li>
                        <li>각 API 키 입력 후 "Verify" 버튼으로 확인</li>
                    </ol>
                    
                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i>
                        <strong>주의:</strong> API 키는 절대 공유하지 마세요. 개인 정보와 같습니다.
                    </div>
                </div>
            `
        },
        'github': {
            title: 'GitHub 계정 생성 가이드',
            content: `
                <div class="step-detail">
                    <h4>👤 GitHub 계정 생성</h4>
                    <ol>
                        <li><a href="https://github.com" target="_blank">https://github.com</a> 접속</li>
                        <li>"Sign up" 클릭</li>
                        <li>필요 정보 입력:
                            <ul>
                                <li>Username (사용자명) - 영문, 숫자, 하이픈만 가능</li>
                                <li>Email address (이메일 주소)</li>
                                <li>Password (비밀번호) - 최소 8자, 숫자와 소문자 포함</li>
                            </ul>
                        </li>
                        <li>이메일 인증 완료</li>
                        <li>계정 생성 완료</li>
                    </ol>
                    
                    <h4>📁 저장소 생성</h4>
                    <ol>
                        <li>GitHub 로그인</li>
                        <li>우측 상단 "+" 클릭 → "New repository" 선택</li>
                        <li>저장소 정보 입력:
                            <ul>
                                <li>Repository name: <code>shinseung-restaurant</code></li>
                                <li>Description: <code>신승반점 랜딩페이지</code></li>
                                <li>Public 선택</li>
                                <li>"Add a README file" 체크</li>
                            </ul>
                        </li>
                        <li>"Create repository" 클릭</li>
                    </ol>
                    
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle"></i>
                        <strong>GitHub이란?</strong> 코드를 저장하고 관리하는 클라우드 서비스입니다.
                    </div>
                </div>
            `
        },
        'vercel': {
            title: 'Vercel 배포 설정 가이드',
            content: `
                <div class="step-detail">
                    <h4>🚀 Vercel 계정 생성</h4>
                    <ol>
                        <li><a href="https://vercel.com" target="_blank">https://vercel.com</a> 접속</li>
                        <li>"Sign Up" 클릭</li>
                        <li>"Continue with GitHub" 선택</li>
                        <li>GitHub 계정으로 로그인</li>
                        <li>Vercel 권한 승인</li>
                    </ol>
                    
                    <h4>⚙️ 배포 설정</h4>
                    <ol>
                        <li>Vercel 대시보드에서 "New Project" 클릭</li>
                        <li>GitHub 저장소 선택</li>
                        <li>프로젝트 설정:
                            <ul>
                                <li>Framework Preset: Other</li>
                                <li>Root Directory: ./</li>
                                <li>Build Command: (비워둠)</li>
                                <li>Output Directory: ./</li>
                            </ul>
                        </li>
                        <li>"Deploy" 클릭</li>
                    </ol>
                    
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i>
                        <strong>Vercel의 장점:</strong> 무료 호스팅, 자동 배포, 글로벌 CDN, SSL 인증서 자동 적용
                    </div>
                </div>
            `
        },
        'cli': {
            title: 'CLI 도구 설치 가이드',
            content: `
                <div class="step-detail">
                    <h4>💻 Vercel CLI 설치</h4>
                    <ol>
                        <li>터미널 또는 명령 프롬프트 열기</li>
                        <li>다음 명령어 실행:
                            <pre><code>npm install -g vercel</code></pre>
                        </li>
                        <li>설치 완료 후 버전 확인:
                            <pre><code>vercel --version</code></pre>
                        </li>
                    </ol>
                    
                    <h4>🔐 Vercel 로그인</h4>
                    <ol>
                        <li>터미널에서 다음 명령어 실행:
                            <pre><code>vercel login</code></pre>
                        </li>
                        <li>이메일 주소 입력 (GitHub와 동일한 이메일)</li>
                        <li>이메일로 전송된 인증 링크 클릭</li>
                        <li>로그인 완료</li>
                    </ol>
                    
                    <h4>📱 Live Server 설치 (선택사항)</h4>
                    <ol>
                        <li>로컬 개발 서버용:
                            <pre><code>npm install -g live-server</code></pre>
                        </li>
                        <li>사용법:
                            <pre><code>live-server</code></pre>
                        </li>
                    </ol>
                    
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle"></i>
                        <strong>CLI란?</strong> Command Line Interface의 줄임말로, 명령어로 컴퓨터를 조작하는 방식입니다.
                    </div>
                </div>
            `
        },
        'html': {
            title: 'HTML 구조 작성 가이드',
            content: `
                <div class="step-detail">
                    <h4>📄 HTML 기본 구조</h4>
                    <p>HTML은 웹페이지의 뼈대를 만드는 마크업 언어입니다.</p>
                    
                    <h4>🏗️ 신승반점 페이지 구조</h4>
                    <ol>
                        <li><strong>헤더 (Header)</strong>
                            <ul>
                                <li>로고 및 브랜드명</li>
                                <li>네비게이션 메뉴</li>
                                <li>모바일 햄버거 메뉴</li>
                            </ul>
                        </li>
                        <li><strong>메인 콘텐츠 (Main)</strong>
                            <ul>
                                <li>히어로 섹션 (메인 소개)</li>
                                <li>회사소개 섹션</li>
                                <li>브랜드소개 섹션</li>
                                <li>사업영역 섹션</li>
                                <li>메뉴소개 섹션</li>
                                <li>지점안내 섹션</li>
                                <li>연락처 섹션</li>
                            </ul>
                        </li>
                        <li><strong>푸터 (Footer)</strong>
                            <ul>
                                <li>회사 정보</li>
                                <li>링크 모음</li>
                                <li>저작권 정보</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h4>🎯 시맨틱 태그 사용</h4>
                    <ul>
                        <li><code>&lt;header&gt;</code> - 페이지 상단</li>
                        <li><code>&lt;nav&gt;</code> - 네비게이션</li>
                        <li><code>&lt;main&gt;</code> - 주요 콘텐츠</li>
                        <li><code>&lt;section&gt;</code> - 섹션 구분</li>
                        <li><code>&lt;article&gt;</code> - 독립적인 콘텐츠</li>
                        <li><code>&lt;aside&gt;</code> - 사이드바</li>
                        <li><code>&lt;footer&gt;</code> - 페이지 하단</li>
                    </ul>
                    
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i>
                        <strong>시맨틱 태그의 장점:</strong> SEO 최적화, 접근성 향상, 코드 가독성 증대
                    </div>
                </div>
            `
        },
        'css': {
            title: 'CSS 스타일 적용 가이드',
            content: `
                <div class="step-detail">
                    <h4>🎨 CSS 기본 개념</h4>
                    <p>CSS는 HTML 요소의 스타일과 레이아웃을 정의하는 언어입니다.</p>
                    
                    <h4>🎯 신승반점 디자인 컨셉</h4>
                    <ul>
                        <li><strong>컬러 팔레트</strong>
                            <ul>
                                <li>주색상: #d32f2f (빨간색)</li>
                                <li>보조색상: #f44336 (밝은 빨간색)</li>
                                <li>강조색상: #ff5722 (주황색)</li>
                                <li>텍스트: #333 (진한 회색)</li>
                            </ul>
                        </li>
                        <li><strong>타이포그래피</strong>
                            <ul>
                                <li>메인 폰트: Noto Sans KR</li>
                                <li>제목: 700 (Bold)</li>
                                <li>본문: 400 (Regular)</li>
                            </ul>
                        </li>
                        <li><strong>레이아웃</strong>
                            <ul>
                                <li>CSS Grid와 Flexbox 활용</li>
                                <li>반응형 디자인 (Mobile First)</li>
                                <li>최대 너비: 1200px</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <h4>📱 반응형 디자인</h4>
                    <ol>
                        <li><strong>미디어 쿼리 사용</strong>
                            <pre><code>@media (max-width: 768px) {
    /* 모바일 스타일 */
}</code></pre>
                        </li>
                        <li><strong>브레이크포인트</strong>
                            <ul>
                                <li>데스크톱: 769px 이상</li>
                                <li>태블릿: 768px 이하</li>
                                <li>모바일: 480px 이하</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h4>✨ 애니메이션 효과</h4>
                    <ul>
                        <li>CSS Transitions</li>
                        <li>CSS Animations</li>
                        <li>Transform 속성</li>
                        <li>Hover 효과</li>
                    </ul>
                    
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle"></i>
                        <strong>팁:</strong> 브라우저 개발자 도구(F12)를 활용하여 실시간으로 스타일을 테스트해보세요.
                    </div>
                </div>
            `
        },
        'js': {
            title: 'JavaScript 기능 구현 가이드',
            content: `
                <div class="step-detail">
                    <h4>⚡ JavaScript 기본 개념</h4>
                    <p>JavaScript는 웹페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다.</p>
                    
                    <h4>🎯 신승반점 페이지 기능</h4>
                    <ol>
                        <li><strong>모바일 메뉴 토글</strong>
                            <ul>
                                <li>햄버거 메뉴 클릭 시 메뉴 표시/숨김</li>
                                <li>메뉴 외부 클릭 시 자동 닫힘</li>
                            </ul>
                        </li>
                        <li><strong>부드러운 스크롤</strong>
                            <ul>
                                <li>네비게이션 링크 클릭 시 해당 섹션으로 이동</li>
                                <li>스크롤 애니메이션 적용</li>
                            </ul>
                        </li>
                        <li><strong>스크롤 애니메이션</strong>
                            <ul>
                                <li>요소가 화면에 나타날 때 애니메이션 실행</li>
                                <li>Intersection Observer API 사용</li>
                            </ul>
                        </li>
                        <li><strong>문의 폼 처리</strong>
                            <ul>
                                <li>폼 유효성 검사</li>
                                <li>이메일 형식 확인</li>
                                <li>필수 필드 검증</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h4>🔧 주요 JavaScript 기능</h4>
                    <ul>
                        <li><strong>DOM 조작</strong>
                            <pre><code>document.querySelector('.menu-btn')
element.classList.add('active')</code></pre>
                        </li>
                        <li><strong>이벤트 처리</strong>
                            <pre><code>button.addEventListener('click', function() {
    // 클릭 이벤트 처리
})</code></pre>
                        </li>
                        <li><strong>조건문과 반복문</strong>
                            <pre><code>if (condition) {
    // 조건이 참일 때 실행
}

for (let i = 0; i < array.length; i++) {
    // 반복 실행
}</code></pre>
                        </li>
                    </ul>
                    
                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i>
                        <strong>주의:</strong> JavaScript는 대소문자를 구분합니다. 오타에 주의하세요.
                    </div>
                </div>
            `
        },
        'upload': {
            title: 'GitHub 업로드 가이드',
            content: `
                <div class="step-detail">
                    <h4>📤 Git 초기 설정</h4>
                    <ol>
                        <li>Git 사용자 정보 설정:
                            <pre><code>git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"</code></pre>
                        </li>
                        <li>프로젝트 폴더에서 Git 초기화:
                            <pre><code>git init</code></pre>
                        </li>
                        <li>원격 저장소 연결:
                            <pre><code>git remote add origin https://github.com/USERNAME/shinseung-restaurant.git</code></pre>
                        </li>
                    </ol>
                    
                    <h4>📁 파일 업로드</h4>
                    <ol>
                        <li>변경사항 확인:
                            <pre><code>git status</code></pre>
                        </li>
                        <li>파일 스테이징:
                            <pre><code>git add .</code></pre>
                        </li>
                        <li>커밋 생성:
                            <pre><code>git commit -m "신승반점 랜딩페이지 초기 버전"</code></pre>
                        </li>
                        <li>GitHub에 푸시:
                            <pre><code>git push -u origin main</code></pre>
                        </li>
                    </ol>
                    
                    <h4>✅ 업로드 확인</h4>
                    <ol>
                        <li>GitHub 저장소 페이지 접속</li>
                        <li>파일들이 정상적으로 업로드되었는지 확인</li>
                        <li>커밋 메시지와 시간 확인</li>
                    </ol>
                    
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle"></i>
                        <strong>Git 명령어 설명:</strong>
                        <ul>
                            <li><code>git add</code> - 변경사항을 스테이징 영역에 추가</li>
                            <li><code>git commit</code> - 변경사항을 로컬 저장소에 저장</li>
                            <li><code>git push</code> - 로컬 저장소의 변경사항을 원격 저장소에 업로드</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'deploy': {
            title: 'Vercel 배포 가이드',
            content: `
                <div class="step-detail">
                    <h4>🚀 자동 배포 설정</h4>
                    <p>GitHub와 Vercel을 연결하면 코드 변경 시 자동으로 배포됩니다.</p>
                    
                    <ol>
                        <li><strong>Vercel 대시보드 접속</strong>
                            <ul>
                                <li><a href="https://vercel.com/dashboard" target="_blank">vercel.com/dashboard</a></li>
                                <li>GitHub 계정으로 로그인</li>
                            </ul>
                        </li>
                        <li><strong>새 프로젝트 생성</strong>
                            <ul>
                                <li>"New Project" 클릭</li>
                                <li>GitHub 저장소 목록에서 "shinseung-restaurant" 선택</li>
                                <li>"Import" 클릭</li>
                            </ul>
                        </li>
                        <li><strong>배포 설정</strong>
                            <ul>
                                <li>Project Name: shinseung-restaurant</li>
                                <li>Framework Preset: Other</li>
                                <li>Root Directory: ./</li>
                                <li>Build Command: (비워둠)</li>
                                <li>Output Directory: ./</li>
                            </ul>
                        </li>
                        <li><strong>배포 실행</strong>
                            <ul>
                                <li>"Deploy" 버튼 클릭</li>
                                <li>배포 진행상황 확인</li>
                                <li>배포 완료 후 URL 확인</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h4>🔧 CLI로 배포 (선택사항)</h4>
                    <ol>
                        <li>프로젝트 폴더에서 명령어 실행:
                            <pre><code>vercel</code></pre>
                        </li>
                        <li>설정 질문에 답변:
                            <ul>
                                <li>Set up and deploy? → Y</li>
                                <li>Which scope? → 본인 계정 선택</li>
                                <li>Link to existing project? → N</li>
                                <li>What's your project's name? → shinseung-restaurant</li>
                                <li>In which directory is your code located? → ./</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h4>🌐 도메인 설정</h4>
                    <ol>
                        <li>Vercel 대시보드에서 프로젝트 선택</li>
                        <li>"Settings" → "Domains" 메뉴</li>
                        <li>커스텀 도메인 추가 (선택사항)</li>
                        <li>DNS 설정 변경</li>
                    </ol>
                    
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i>
                        <strong>배포 완료!</strong> 이제 전 세계 어디서든 웹사이트에 접속할 수 있습니다.
                    </div>
                </div>
            `
        },
        'test': {
            title: '최종 테스트 가이드',
            content: `
                <div class="step-detail">
                    <h4>🧪 기능 테스트</h4>
                    <ol>
                        <li><strong>네비게이션 테스트</strong>
                            <ul>
                                <li>각 메뉴 클릭 시 해당 섹션으로 이동하는지 확인</li>
                                <li>부드러운 스크롤 애니메이션 작동 확인</li>
                                <li>현재 위치 표시 확인</li>
                            </ul>
                        </li>
                        <li><strong>모바일 메뉴 테스트</strong>
                            <ul>
                                <li>햄버거 메뉴 클릭 시 메뉴 표시/숨김</li>
                                <li>메뉴 외부 클릭 시 자동 닫힘</li>
                                <li>메뉴 애니메이션 확인</li>
                            </ul>
                        </li>
                        <li><strong>문의 폼 테스트</strong>
                            <ul>
                                <li>필수 필드 미입력 시 경고 메시지</li>
                                <li>이메일 형식 검증</li>
                                <li>폼 제출 시 성공 메시지</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h4>📱 반응형 테스트</h4>
                    <ol>
                        <li><strong>브라우저 개발자 도구 사용</strong>
                            <ul>
                                <li>F12 키로 개발자 도구 열기</li>
                                <li>디바이스 시뮬레이터 클릭</li>
                                <li>다양한 화면 크기로 테스트</li>
                            </ul>
                        </li>
                        <li><strong>테스트 해상도</strong>
                            <ul>
                                <li>Desktop: 1920x1080, 1366x768</li>
                                <li>Tablet: 768x1024, 1024x768</li>
                                <li>Mobile: 375x667, 414x896</li>
                            </ul>
                        </li>
                        <li><strong>확인 사항</strong>
                            <ul>
                                <li>레이아웃 깨짐 없음</li>
                                <li>텍스트 가독성</li>
                                <li>버튼 클릭 가능성</li>
                                <li>이미지 비율 유지</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h4>🌐 브라우저 호환성 테스트</h4>
                    <ul>
                        <li><strong>Chrome</strong> (권장)</li>
                        <li><strong>Firefox</strong></li>
                        <li><strong>Safari</strong></li>
                        <li><strong>Edge</strong></li>
                    </ul>
                    
                    <h4>⚡ 성능 테스트</h4>
                    <ol>
                        <li><strong>로딩 속도 확인</strong>
                            <ul>
                                <li>페이지 로드 시간 측정</li>
                                <li>이미지 최적화 확인</li>
                                <li>CSS/JS 파일 크기 확인</li>
                            </ul>
                        </li>
                        <li><strong>Google PageSpeed Insights</strong>
                            <ul>
                                <li><a href="https://pagespeed.web.dev/" target="_blank">pagespeed.web.dev</a></li>
                                <li>웹사이트 URL 입력</li>
                                <li>성능 점수 확인</li>
                                <li>개선 사항 확인</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i>
                        <strong>축하합니다!</strong> 신승반점 랜딩페이지가 성공적으로 완성되었습니다.
                    </div>
                </div>
            `
        }
    };
    
    const modal = document.getElementById('step-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = stepDetails[stepType].title;
    modalBody.innerHTML = stepDetails[stepType].content;
    
    modal.style.display = 'block';
    
    // 현재 단계 저장
    currentStep = stepType;
}

// 단계 시작
function startStep(stepType) {
    // 모달 닫기
    closeModal();
    
    // 해당 단계로 스크롤
    const stepMapping = {
        'nodejs': 'curriculum',
        'cursor': 'curriculum',
        'api': 'curriculum',
        'github': 'curriculum',
        'vercel': 'curriculum',
        'cli': 'curriculum',
        'html': 'curriculum',
        'css': 'curriculum',
        'js': 'curriculum',
        'upload': 'curriculum',
        'deploy': 'curriculum',
        'test': 'curriculum'
    };
    
    const targetSection = document.getElementById(stepMapping[stepType]);
    if (targetSection) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    
    // 단계 강조 효과
    highlightStep(stepType);
}

// 단계 강조 효과
function highlightStep(stepType) {
    // 모든 단계에서 강조 효과 제거
    const allSteps = document.querySelectorAll('.sub-step');
    allSteps.forEach(step => {
        step.classList.remove('highlight');
    });
    
    // 해당 단계에 강조 효과 추가
    setTimeout(() => {
        const targetStep = document.querySelector(`[data-step-type="${stepType}"]`);
        if (targetStep) {
            targetStep.classList.add('highlight');
            
            // 3초 후 강조 효과 제거
            setTimeout(() => {
                targetStep.classList.remove('highlight');
            }, 3000);
        }
    }, 1000);
}

// 현재 단계 시작
function startCurrentStep() {
    if (currentStep) {
        startStep(currentStep);
    }
}

// 모달 닫기
function closeModal() {
    const modal = document.getElementById('step-modal');
    modal.style.display = 'none';
}

// 단계 완료 표시
function markStepComplete(stepNumber) {
    if (!completedSteps.includes(stepNumber)) {
        completedSteps.push(stepNumber);
        updateStepProgress();
        updateProgress();
        saveProgress();
        
        // 완료 애니메이션
        const stepElement = document.querySelector(`[data-step="${stepNumber}"]`);
        if (stepElement) {
            stepElement.classList.add('completed');
            
            // 축하 메시지
            showCompletionMessage(stepNumber);
        }
    }
}

// 완료 메시지 표시
function showCompletionMessage(stepNumber) {
    const stepNames = {
        1: '개발환경 셋팅',
        2: 'GitHub & Vercel 연동',
        3: '신승반점 랜딩페이지 제작',
        4: '배포 및 최적화'
    };
    
    // 토스트 메시지 생성
    const toast = document.createElement('div');
    toast.className = 'toast success';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div>
            <strong>${stepNames[stepNumber]} 완료!</strong>
            <p>다음 단계로 진행하세요.</p>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // 애니메이션
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // 3초 후 제거
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// 단계별 진행상황 업데이트
function updateStepProgress() {
    const totalSteps = 4;
    const completedCount = completedSteps.length;
    const progressPercentage = (completedCount / totalSteps) * 100;
    
    // 각 단계의 진행률 업데이트
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.querySelector(`[data-step="${i}"]`);
        const progressBar = stepElement.querySelector('.progress-fill');
        const statusText = stepElement.querySelector('.status-text');
        
        if (completedSteps.includes(i)) {
            progressBar.style.width = '100%';
            statusText.textContent = '완료';
            statusText.style.color = '#4caf50';
            stepElement.classList.add('completed');
        } else {
            progressBar.style.width = '0%';
            statusText.textContent = '시작 전';
            statusText.style.color = '#666';
            stepElement.classList.remove('completed');
        }
    }
    
    // 전체 진행률 업데이트
    const circularProgress = document.querySelector('.circle');
    const percentageText = document.querySelector('.percentage');
    const completedStepsSpan = document.getElementById('completed-steps');
    const remainingTimeSpan = document.getElementById('remaining-time');
    
    if (circularProgress && percentageText) {
        const circumference = 2 * Math.PI * 15.9155;
        const strokeDasharray = `${(progressPercentage / 100) * circumference}, ${circumference}`;
        
        circularProgress.style.strokeDasharray = strokeDasharray;
        percentageText.textContent = `${Math.round(progressPercentage)}%`;
    }
    
    if (completedStepsSpan) {
        completedStepsSpan.textContent = completedCount;
    }
    
    if (remainingTimeSpan) {
        const remainingSteps = totalSteps - completedCount;
        
        if (remainingSteps === 0) {
            remainingTimeSpan.textContent = '완료!';
        } else if (remainingSteps === 1) {
            remainingTimeSpan.textContent = '마지막 단계';
        } else {
            remainingTimeSpan.textContent = '차근차근 진행';
        }
    }
}

// 체크박스 진행상황 업데이트
function updateProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    workshopProgress.currentStepProgress = (checkedBoxes.length / checkboxes.length) * 100;
    
    // 체크박스 그룹별 진행상황 업데이트
    updateCheckboxGroupProgress();
}

// 체크박스 그룹별 진행상황 업데이트
function updateCheckboxGroupProgress() {
    const groups = document.querySelectorAll('.checklist-group');
    
    groups.forEach(group => {
        const checkboxes = group.querySelectorAll('input[type="checkbox"]');
        const checkedBoxes = group.querySelectorAll('input[type="checkbox"]:checked');
        const progress = (checkedBoxes.length / checkboxes.length) * 100;
        
        // 그룹 제목에 진행률 표시
        const title = group.querySelector('h4');
        const progressText = title.querySelector('.progress-text');
        
        if (progressText) {
            progressText.textContent = `(${checkedBoxes.length}/${checkboxes.length})`;
        } else {
            const span = document.createElement('span');
            span.className = 'progress-text';
            span.textContent = `(${checkedBoxes.length}/${checkboxes.length})`;
            title.appendChild(span);
        }
        
        // 100% 완료 시 그룹 스타일 변경
        if (progress === 100) {
            group.classList.add('completed');
        } else {
            group.classList.remove('completed');
        }
    });
}

// 진행상황 저장
function saveProgress() {
    localStorage.setItem('workshopProgress', JSON.stringify(workshopProgress));
    localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
    
    // 체크박스 상태 저장
    const checkboxStates = {};
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkboxStates[checkbox.id] = checkbox.checked;
    });
    
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
}

// 진행상황 불러오기
function loadProgress() {
    const savedProgress = localStorage.getItem('workshopProgress');
    const savedSteps = localStorage.getItem('completedSteps');
    
    if (savedProgress) {
        workshopProgress = JSON.parse(savedProgress);
    }
    
    if (savedSteps) {
        completedSteps = JSON.parse(savedSteps);
    }
}

// 체크박스 상태 복원
function restoreCheckboxStates() {
    const savedStates = localStorage.getItem('checkboxStates');
    
    if (savedStates) {
        const checkboxStates = JSON.parse(savedStates);
        
        Object.keys(checkboxStates).forEach(checkboxId => {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = checkboxStates[checkboxId];
            }
        });
    }
}

// 진행상황 표시 업데이트
function updateProgressDisplay() {
    updateStepProgress();
    updateProgress();
}

// FAQ 토글
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    
    element.classList.toggle('active');
    faqAnswer.classList.toggle('active');
}

// 문제 해결 솔루션 표시
function showTroubleSolution(problemType) {
    const solutions = {
        'node-install': {
            title: 'Node.js 설치 실패 해결',
            content: `
                <h4>🔧 일반적인 해결 방법</h4>
                <ol>
                    <li><strong>관리자 권한으로 실행</strong>
                        <ul>
                            <li>설치 파일을 우클릭 → "관리자 권한으로 실행"</li>
                            <li>Mac: sudo 명령어 사용</li>
                        </ul>
                    </li>
                    <li><strong>이전 버전 제거</strong>
                        <ul>
                            <li>제어판 → 프로그램 제거에서 기존 Node.js 제거</li>
                            <li>설치 폴더 완전 삭제</li>
                        </ul>
                    </li>
                    <li><strong>다른 설치 방법</strong>
                        <ul>
                            <li>NVM (Node Version Manager) 사용</li>
                            <li>패키지 매니저 사용 (Chocolatey, Homebrew)</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        'cursor-install': {
            title: 'Cursor 에디터 설치 오류 해결',
            content: `
                <h4>🔧 설치 오류 해결</h4>
                <ol>
                    <li><strong>시스템 요구사항 확인</strong>
                        <ul>
                            <li>Windows 10 이상</li>
                            <li>macOS 10.14 이상</li>
                            <li>최소 4GB RAM</li>
                        </ul>
                    </li>
                    <li><strong>바이러스 백신 확인</strong>
                        <ul>
                            <li>바이러스 백신 일시 비활성화</li>
                            <li>설치 후 예외 목록에 추가</li>
                        </ul>
                    </li>
                    <li><strong>다운로드 재시도</strong>
                        <ul>
                            <li>다른 브라우저에서 다운로드</li>
                            <li>VPN 사용 시 비활성화</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        'permission': {
            title: '권한 오류 해결',
            content: `
                <h4>🔧 권한 문제 해결</h4>
                <ol>
                    <li><strong>Windows</strong>
                        <ul>
                            <li>명령 프롬프트를 관리자 권한으로 실행</li>
                            <li>PowerShell 실행 정책 변경</li>
                        </ul>
                    </li>
                    <li><strong>Mac/Linux</strong>
                        <ul>
                            <li>sudo 명령어 사용</li>
                            <li>파일 권한 변경: chmod 755</li>
                        </ul>
                    </li>
                    <li><strong>일반적인 해결책</strong>
                        <ul>
                            <li>사용자 계정 컨트롤(UAC) 설정 확인</li>
                            <li>폴더 권한 설정 변경</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        'syntax': {
            title: '문법 오류 해결',
            content: `
                <h4>🔧 코드 문법 오류 해결</h4>
                <ol>
                    <li><strong>HTML 문법 오류</strong>
                        <ul>
                            <li>태그 닫기 확인: &lt;div&gt;&lt;/div&gt;</li>
                            <li>속성 따옴표 확인: class="example"</li>
                            <li>중첩 구조 확인</li>
                        </ul>
                    </li>
                    <li><strong>CSS 문법 오류</strong>
                        <ul>
                            <li>중괄호 닫기 확인: { }</li>
                            <li>세미콜론 확인: color: red;</li>
                            <li>선택자 문법 확인</li>
                        </ul>
                    </li>
                    <li><strong>JavaScript 문법 오류</strong>
                        <ul>
                            <li>괄호 닫기 확인: ( )</li>
                            <li>세미콜론 확인</li>
                            <li>변수명 오타 확인</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        'css-not-working': {
            title: 'CSS 스타일 적용 안됨 해결',
            content: `
                <h4>🔧 CSS 스타일 문제 해결</h4>
                <ol>
                    <li><strong>파일 경로 확인</strong>
                        <ul>
                            <li>CSS 파일 경로가 올바른지 확인</li>
                            <li>대소문자 구분 확인</li>
                            <li>상대 경로 vs 절대 경로</li>
                        </ul>
                    </li>
                    <li><strong>선택자 확인</strong>
                        <ul>
                            <li>클래스명 앞에 점(.) 확인</li>
                            <li>ID 앞에 해시(#) 확인</li>
                            <li>HTML과 CSS 클래스명 일치 확인</li>
                        </ul>
                    </li>
                    <li><strong>캐시 문제</strong>
                        <ul>
                            <li>브라우저 캐시 삭제 (Ctrl+F5)</li>
                            <li>하드 새로고침</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        'js-error': {
            title: 'JavaScript 오류 디버깅',
            content: `
                <h4>🔧 JavaScript 오류 해결</h4>
                <ol>
                    <li><strong>브라우저 콘솔 확인</strong>
                        <ul>
                            <li>F12 → Console 탭</li>
                            <li>오류 메시지 확인</li>
                            <li>줄 번호 확인</li>
                        </ul>
                    </li>
                    <li><strong>일반적인 오류</strong>
                        <ul>
                            <li>Uncaught TypeError: 변수 타입 확인</li>
                            <li>Uncaught ReferenceError: 변수명 확인</li>
                            <li>Uncaught SyntaxError: 문법 확인</li>
                        </ul>
                    </li>
                    <li><strong>디버깅 방법</strong>
                        <ul>
                            <li>console.log() 사용</li>
                            <li>브레이크포인트 설정</li>
                            <li>단계별 실행</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        'github-push': {
            title: 'GitHub 업로드 실패 해결',
            content: `
                <h4>🔧 GitHub 업로드 문제 해결</h4>
                <ol>
                    <li><strong>인증 문제</strong>
                        <ul>
                            <li>GitHub 사용자명/비밀번호 확인</li>
                            <li>Personal Access Token 사용</li>
                            <li>SSH 키 설정</li>
                        </ul>
                    </li>
                    <li><strong>원격 저장소 문제</strong>
                        <ul>
                            <li>remote URL 확인: git remote -v</li>
                            <li>저장소 권한 확인</li>
                            <li>브랜치명 확인 (main vs master)</li>
                        </ul>
                    </li>
                    <li><strong>네트워크 문제</strong>
                        <ul>
                            <li>인터넷 연결 확인</li>
                            <li>방화벽 설정 확인</li>
                            <li>프록시 설정 확인</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        'vercel-deploy': {
            title: 'Vercel 배포 오류 해결',
            content: `
                <h4>🔧 Vercel 배포 문제 해결</h4>
                <ol>
                    <li><strong>빌드 오류</strong>
                        <ul>
                            <li>로그 확인</li>
                            <li>파일 경로 확인</li>
                            <li>대소문자 구분 확인</li>
                        </ul>
                    </li>
                    <li><strong>설정 문제</strong>
                        <ul>
                            <li>Framework Preset 확인</li>
                            <li>Build Command 확인</li>
                            <li>Output Directory 확인</li>
                        </ul>
                    </li>
                    <li><strong>GitHub 연동 문제</strong>
                        <ul>
                            <li>저장소 권한 확인</li>
                            <li>브랜치 설정 확인</li>
                            <li>Webhook 설정 확인</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        'domain': {
            title: '도메인 연결 문제 해결',
            content: `
                <h4>🔧 도메인 연결 문제 해결</h4>
                <ol>
                    <li><strong>DNS 설정</strong>
                        <ul>
                            <li>A 레코드 설정: 76.76.19.19</li>
                            <li>CNAME 레코드 설정</li>
                            <li>DNS 전파 시간 대기 (최대 48시간)</li>
                        </ul>
                    </li>
                    <li><strong>도메인 등록업체 설정</strong>
                        <ul>
                            <li>네임서버 변경</li>
                            <li>DNS 관리 패널 접속</li>
                            <li>레코드 추가/수정</li>
                        </ul>
                    </li>
                    <li><strong>확인 방법</strong>
                        <ul>
                            <li>nslookup 명령어 사용</li>
                            <li>온라인 DNS 체크 도구</li>
                            <li>다른 네트워크에서 접속 테스트</li>
                        </ul>
                    </li>
                </ol>
            `
        }
    };
    
    if (solutions[problemType]) {
        showStepDetails('troubleshoot');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        
        modalTitle.textContent = solutions[problemType].title;
        modalBody.innerHTML = solutions[problemType].content;
    }
}

// 플로팅 도움말 토글
function toggleHelp() {
    const helpMenu = document.querySelector('.help-menu');
    helpMenu.classList.toggle('active');
}

// 진행상황 초기화 (개발용)
function resetProgress() {
    localStorage.removeItem('workshopProgress');
    localStorage.removeItem('completedSteps');
    localStorage.removeItem('checkboxStates');
    
    // 페이지 새로고침
    location.reload();
}

// 토스트 메시지 스타일 추가
const toastStyles = `
    .toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 1rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 2000;
        max-width: 400px;
    }
    
    .toast.show {
        transform: translateX(0);
    }
    
    .toast.success {
        border-left: 4px solid #4caf50;
    }
    
    .toast.error {
        border-left: 4px solid #f44336;
    }
    
    .toast.warning {
        border-left: 4px solid #ff9800;
    }
    
    .toast i {
        font-size: 1.5rem;
        color: #4caf50;
    }
    
    .toast.error i {
        color: #f44336;
    }
    
    .toast.warning i {
        color: #ff9800;
    }
    
    .toast strong {
        display: block;
        margin-bottom: 0.25rem;
    }
    
    .toast p {
        margin: 0;
        font-size: 0.9rem;
        color: #666;
    }
    
    .step-detail {
        line-height: 1.6;
    }
    
    .step-detail h4 {
        color: #d32f2f;
        margin: 1.5rem 0 1rem 0;
        font-size: 1.1rem;
    }
    
    .step-detail h4:first-child {
        margin-top: 0;
    }
    
    .step-detail ol, .step-detail ul {
        margin-bottom: 1rem;
    }
    
    .step-detail li {
        margin-bottom: 0.5rem;
    }
    
    .step-detail pre {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
        margin: 1rem 0;
    }
    
    .step-detail code {
        background: #f5f5f5;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
    }
    
    .step-detail pre code {
        background: none;
        padding: 0;
    }
    
    .alert {
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .alert-info {
        background: #e3f2fd;
        border: 1px solid #2196f3;
        color: #1976d2;
    }
    
    .alert-success {
        background: #e8f5e8;
        border: 1px solid #4caf50;
        color: #2e7d32;
    }
    
    .alert-warning {
        background: #fff3e0;
        border: 1px solid #ff9800;
        color: #f57c00;
    }
    
    .alert i {
        margin-top: 0.1rem;
    }
    
    .highlight {
        background: #fff3cd !important;
        border: 2px solid #ffc107 !important;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    .completed {
        opacity: 0.7;
        background: #e8f5e8 !important;
    }
    
    .completed .timeline-marker {
        background: #4caf50 !important;
    }
    
    .progress-text {
        font-size: 0.9rem;
        color: #666;
        margin-left: 0.5rem;
    }
    
    .checklist-group.completed {
        background: #e8f5e8;
        border-radius: 8px;
        padding: 1rem;
    }
    
    .checklist-group.completed h4 {
        color: #4caf50;
    }
`;

// 스타일 추가
const styleSheet = document.createElement('style');
styleSheet.textContent = toastStyles;
document.head.appendChild(styleSheet);

// 키보드 단축키
document.addEventListener('keydown', function(e) {
    // ESC 키로 모달 닫기
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl+H로 도움말 토글
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        toggleHelp();
    }
});

// 스크롤 진행률 표시
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // 진행률 바 업데이트 (있다면)
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
    }
});

// 개발자 도구 감지 (선택사항)
let devtools = {
    open: false,
    orientation: null
};

const threshold = 160;

setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
            devtools.open = true;
            console.log('🎓 개발자 도구가 열렸습니다! 코드를 살펴보며 학습해보세요.');
        }
    } else {
        devtools.open = false;
    }
}, 500);

// 온라인/오프라인 상태 감지
window.addEventListener('online', function() {
    console.log('✅ 인터넷 연결이 복구되었습니다.');
});

window.addEventListener('offline', function() {
    console.log('❌ 인터넷 연결이 끊어졌습니다.');
});

// 페이지 로드 완료 시 환영 메시지
window.addEventListener('load', function() {
    console.log(`
🍜 신승반점 랜딩페이지 개발 워크숍에 오신 것을 환영합니다!

📚 이 워크숍에서 배울 내용:
• 웹 개발 환경 설정
• HTML, CSS, JavaScript 기초
• GitHub를 통한 코드 관리
• Vercel을 통한 웹사이트 배포

💡 도움이 필요하시면 언제든지 우측 하단의 도움말 버튼을 클릭하세요!

🚀 즐거운 학습되세요!
    `);
}); 