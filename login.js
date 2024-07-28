document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    
    function moveGradient(event) {
        const mouseX = event.clientX / window.innerWidth;
        const mouseY = event.clientY / window.innerHeight;
        background.style.backgroundPosition = `${mouseX * 100}% ${mouseY * 100}%`;
    }

    document.addEventListener('mousemove', moveGradient);

    // XSS 방지를 위한 이스케이프 함수
    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    }

    // 페이드 아웃 효과와 페이지 이동을 위한 헬퍼 함수
    function fadeOutAndNavigate(url) {
        document.body.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = url;
        }, 500);
    }

    // 로그인 버튼 이벤트 리스너
    const loginButton = document.querySelector('.login-btn');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            fadeOutAndNavigate('loginpage.html');
        });
    }

    // 로고 클릭 이벤트 리스너
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            fadeOutAndNavigate('index.html');
        });
    }

    // 회원가입 링크 이벤트 리스너
    const createAccountLink = document.querySelector('.create-account');
    if (createAccountLink) {
        createAccountLink.addEventListener('click', function(e) {
            e.preventDefault();
            fadeOutAndNavigate('signup.html');
        });
    }
});