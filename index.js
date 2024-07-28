// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    
    // 마우스 움직임에 따라 그라데이션 배경 이동
    function moveGradient(event) {
        const mouseX = event.clientX / window.innerWidth;
        const mouseY = event.clientY / window.innerHeight;
        background.style.backgroundPosition = `${mouseX * 100}% ${mouseY * 100}%`;
    }

    // 마우스 이벤트 리스너 추가
    document.addEventListener('mousemove', moveGradient);

    // 2초 후 페이드 아웃 효과 시작
    setTimeout(function() {
        document.body.classList.add('fade-out');
        
        // 페이드 아웃 효과가 완료된 후 페이지 이동
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 500); // 0.5초 후 이동 (CSS 트랜지션 시간과 일치)
    }, 2000);
});