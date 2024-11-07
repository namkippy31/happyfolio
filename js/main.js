// main.js
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initPopups();
});

// 헤더 스크롤 이벤트
const initHeader = () => {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // 스크롤 다운
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // 스크롤 업
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
};

// 프로젝트 팝업
const initPopups = () => {
    // 팝업 열기
    window.openPopup = (projectId) => {
        const popup = document.getElementById(`popup-${projectId}`);
        if (popup) {
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // 팝업 닫기 이벤트
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    closePopup(projectId);
                }
            });

            // ESC 키로 팝업 닫기
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closePopup(projectId);
                }
            });
        }
    };

    // 팝업 닫기
    window.closePopup = (projectId) => {
        const popup = document.getElementById(`popup-${projectId}`);
        if (popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
};

// 스무스 스크롤
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