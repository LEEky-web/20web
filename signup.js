document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    const content = document.querySelector('.content');

    // 페이지 로드 시 블러 인 효과
    content.classList.add('blur-in');

    function moveGradient(event) {
        const mouseX = event.clientX / window.innerWidth;
        const mouseY = event.clientY / window.innerHeight;
        background.style.backgroundPosition = `${mouseX * 100}% ${mouseY * 100}%`;
    }

    document.addEventListener('mousemove', moveGradient);
});