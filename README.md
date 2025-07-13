# 🍜 신승반점 랜딩페이지 개발 워크숍 교육 플랫폼

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

## 📚 프로젝트 소개

**완전 초보자를 위한 웹 개발 교육 플랫폼**

50년 전통의 중국요리 전문점 "신승반점"의 랜딩페이지를 만들어보며 웹 개발의 기초를 학습할 수 있는 교육용 플랫폼입니다. 개발 경험이 전혀 없는 비개발자도 충분한 시간을 갖고 차근차근 따라하며 전문적인 웹사이트를 완성할 수 있도록 설계되었습니다.

## 🎯 학습 목표

- ✅ 웹 개발 기초 환경 구축 (Node.js, Cursor AI)
- ✅ HTML, CSS, JavaScript 실무 활용
- ✅ GitHub를 통한 코드 관리 및 협업
- ✅ Vercel을 통한 실제 웹사이트 배포
- ✅ 반응형 웹 디자인 구현

## 🚀 주요 특징

### 📱 완전 초보자 친화적 설계
- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- **직관적인 UI**: 신승반점 브랜드 컬러(#A08438)를 활용한 따뜻한 디자인
- **시각적 진행률 표시**: 원형 차트와 진행률 바로 학습 진도 확인

### 🎓 단계별 상세 가이드
1. **개발환경 셋팅**: Node.js, Cursor, API 키 설정
2. **GitHub & Vercel 연동**: 코드 저장소 및 배포 플랫폼 연결
3. **랜딩페이지 제작**: HTML, CSS, JavaScript로 실제 웹사이트 구현
4. **배포 및 최적화**: 실제 인터넷에 웹사이트 배포

### 🔧 상호작용 기능
- **실시간 체크리스트**: 완료한 작업을 체크하며 진행상황 추적
- **상세 가이드 모달**: 각 단계별 스크린샷과 함께 상세 설명
- **스마트 진행률 추적**: 로컬 저장소에 진행상황 자동 저장
- **플로팅 도움말**: 언제든지 접근 가능한 실시간 지원

### 🆘 문제 해결 시스템
- **FAQ 섹션**: 자주 묻는 질문과 답변
- **트러블슈팅 가이드**: 단계별 문제 해결 방법
- **다양한 지원 채널**: 실시간 채팅, 이메일, 커뮤니티

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업으로 구조화된 웹페이지
- **CSS3**: Grid, Flexbox를 활용한 반응형 디자인
- **Vanilla JavaScript**: 동적 기능 및 상호작용 구현

### Tools & Services
- **Cursor AI**: AI 기반 코드 에디터
- **GitHub**: 버전 관리 및 코드 저장소
- **Vercel**: 자동 배포 및 호스팅
- **Google Fonts**: Noto Sans KR 폰트 적용

## 📁 프로젝트 구조

```
shinseung-restaurant/
├── workshop-platform.html     # 메인 교육 플랫폼 페이지
├── workshop-style.css        # 교육 플랫폼 스타일시트
├── workshop-script.js        # 교육 플랫폼 JavaScript
├── index.html               # 실제 신승반점 랜딩페이지
├── css/
│   └── style.css           # 랜딩페이지 스타일
├── js/
│   └── script.js           # 랜딩페이지 JavaScript
├── images/                 # 이미지 파일들
├── fonts/                  # 폰트 파일들
├── package.json           # 프로젝트 의존성
├── .gitignore            # Git 무시 파일 목록
└── README.md             # 프로젝트 설명
```

## 🚀 로컬 실행 방법

### 1. 저장소 클론
```bash
git clone https://github.com/YOUR_USERNAME/shinseung-restaurant-workshop.git
cd shinseung-restaurant-workshop
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 로컬 서버 실행
```bash
# 교육 플랫폼 실행
live-server --port=8080 --open=workshop-platform.html

# 또는 실제 랜딩페이지 실행
live-server --port=8080 --open=index.html
```

### 4. 브라우저에서 확인
- 교육 플랫폼: `http://localhost:8080/workshop-platform.html`
- 랜딩페이지: `http://localhost:8080/index.html`

## 📚 학습 가이드

### 🎯 대상자
- 개발 경험이 전혀 없는 완전 초보자
- 신승반점 프로젝트 팀원
- 웹사이트 제작에 관심 있는 분
- 디지털 마케팅 담당자
- 창업 준비생

### ⏰ 학습 방식
- **시간 제한 없음**: 개인의 속도에 맞춰 진행
- **반복 학습**: 이해할 때까지 반복해서 학습
- **완벽한 이해**: 각 단계를 충분히 이해하고 넘어가기
- **실습 중심**: 직접 코드를 작성하며 학습

### 📖 학습 순서
1. **워크숍 플랫폼 접속** → `workshop-platform.html`
2. **단계별 가이드 따라하기** → 각 단계의 "상세보기" 클릭
3. **실제 코딩 실습** → 가이드에 따라 코드 작성
4. **진행상황 체크** → 체크리스트로 학습 진도 확인
5. **문제 발생 시** → FAQ 및 트러블슈팅 가이드 참고

## 🌟 완성 결과물

### 신승반점 공식 랜딩페이지
- **반응형 모바일 지원**: 모든 디바이스에서 완벽하게 작동
- **실제 인터넷 배포**: Vercel을 통한 실제 웹사이트 배포
- **SEO 최적화**: 검색 엔진 최적화 적용
- **문의 폼 기능**: 실제 문의 접수 가능
- **브랜드 일관성**: 신승반점 브랜드 아이덴티티 반영

### 포함된 섹션
- **헤더**: 로고 및 네비게이션 메뉴
- **히어로**: 메인 소개 및 CTA 버튼
- **회사소개**: 신승반점 소개 및 특징
- **브랜드소개**: 짜장면의 원조 스토리
- **사업영역**: 직영, 해외, 프랜차이즈 등
- **메뉴소개**: 대표 메뉴 및 코스 메뉴
- **지점안내**: 매장 위치 및 연락처
- **연락처**: 문의 폼 및 연락처 정보
- **푸터**: 회사 정보 및 링크

## 🔧 개발 환경 요구사항

### 필수 요구사항
- **Node.js**: v14.0.0 이상
- **npm**: v6.0.0 이상
- **모던 브라우저**: Chrome, Firefox, Safari, Edge 최신 버전

### 권장 도구
- **Cursor AI**: AI 기반 코드 에디터
- **GitHub Desktop**: GUI 기반 Git 클라이언트
- **Vercel CLI**: 명령줄 배포 도구

## 📞 지원 및 문의

### 🆘 도움이 필요하신가요?
- **실시간 채팅**: 플랫폼 내 채팅 기능
- **이메일 문의**: workshop@shinseung.com
- **커뮤니티**: Discord 서버 참여
- **GitHub Issues**: 기술적 문제 신고

### 📚 추가 학습 자료
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

## 🤝 기여하기

이 프로젝트의 개선에 기여하고 싶으시다면:

1. 저장소를 Fork 합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참고하세요.

## 🙏 감사의 말

이 교육 플랫폼은 다음과 같은 분들의 도움으로 만들어졌습니다:
- 신승반점 프로젝트 팀
- 웹 개발 커뮤니티
- 오픈소스 기여자들

---

<div align="center">

**🍜 신승반점과 함께하는 웹 개발 여정을 시작하세요! 🚀**

Made with ❤️ by ShinSeung Workshop Team

</div> 