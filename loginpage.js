document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('password-icon');
    const okButton = document.querySelector('.ok-btn');

    // 비밀번호 표시/숨김 토글 기능
    passwordIcon.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.classList.add('show');
        } else {
            passwordInput.type = 'password';
            passwordIcon.classList.remove('show');
        }
    });

    // Ok 버튼 클릭 시 폼 제출
    okButton.addEventListener('click', (e) => {
        e.preventDefault();

        // 간단한 이메일 형식 검사
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('유효한 이메일 주소를 입력해주세요.');
            return;
        }

        // 비밀번호 길이 검사 (예: 최소 8자)
        if (passwordInput.value.length < 8) {
            alert('비밀번호는 최소 8자 이상이어야 합니다.');
            return;
        }

        // 유효성 검사 통과 시 폼 제출
        form.submit();
    });

    // XSS 방지를 위한 이스케이프 함수
    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    }

    // 로고 클릭 시 이벤트
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            fadeOutAndNavigate('index.html');
        });
    }

    // 페이드 아웃 효과와 페이지 이동을 위한 헬퍼 함수
    function fadeOutAndNavigate(url) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    }
});