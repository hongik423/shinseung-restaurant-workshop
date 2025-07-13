// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글 기능
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 메뉴 항목 클릭 시 메뉴 닫기
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // 스크롤 애니메이션 초기화
    initScrollAnimation();
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    }
});

// 부드러운 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 문의 폼 제출 처리
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 폼 데이터 가져오기
        const name = this.querySelector('input[type="text"]').value.trim();
        const phone = this.querySelector('input[type="tel"]').value.trim();
        const message = this.querySelector('textarea').value.trim();
        
        // 간단한 유효성 검사
        if (!name || !phone || !message) {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        
        // 전화번호 유효성 검사 (간단한 패턴)
        const phonePattern = /^[\d\-\s\(\)]+$/;
        if (!phonePattern.test(phone)) {
            alert('올바른 전화번호를 입력해주세요.');
            return;
        }
        
        // 성공 메시지 표시
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        
        // 폼 초기화
        this.reset();
    });
}

// 스크롤 애니메이션 초기화
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.menu-item, .about-text, .contact-item');
    
    // 초기 스타일 설정
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('load', handleScrollAnimation);
    
    // 초기 실행
    handleScrollAnimation();
}

// 스크롤 애니메이션 처리
function handleScrollAnimation() {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// 페이지 로드 시 스크롤 위치 복원 방지
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// 이미지 로드 에러 처리
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.log('이미지 로드 실패:', this.src);
        });
    });
});

// 반응형 메뉴 외부 클릭 시 닫기
document.addEventListener('click', function(e) {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// 키보드 접근성 향상
document.addEventListener('keydown', function(e) {
    // ESC 키로 모바일 메뉴 닫기
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// 성능 최적화를 위한 스크롤 이벤트 쓰로틀링
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 쓰로틀링 적용된 스크롤 이벤트
const throttledScrollHandler = throttle(function() {
    handleScrollAnimation();
}, 100);

// 기존 스크롤 이벤트 리스너를 쓰로틀링된 버전으로 교체
window.removeEventListener('scroll', handleScrollAnimation);
window.addEventListener('scroll', throttledScrollHandler); 