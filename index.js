document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.intro, .content, .details, .comparison, .quiz');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const quizResult = document.getElementById('quizResult');

    // 3D effect on mousemove
    container.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        sections.forEach((section) => {
            section.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
        });
    });

    // Reset transform on mouseout
    container.addEventListener('mouseleave', () => {
        sections.forEach((section) => {
            section.style.transform = 'rotateX(0) rotateY(0)';
        });
    });

    // Quiz functionality
    yesButton.addEventListener('click', () => {
        quizResult.innerHTML = '<img src="positive-response.jpg" alt="תמונה חיובית" style="max-width: 100%;">';
    });

    noButton.addEventListener('click', () => {
        quizResult.innerHTML = '<img src="negative-response.jpg" alt="תמונה שלילית" style="max-width: 100%;">';
    });

    // Smooth scroll effect
    const content = document.querySelector('.container');
    let scrollPosition = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                content.style.transform = `translateY(${scrollPosition * 0.1}px)`;
                ticking = false;
            });

            ticking = true;
        }
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add floating balloons
    const balloonsContainer = document.querySelector('.balloons');
    const balloonColors = ['#ff5252', '#ffeb3b', '#2196f3', '#4caf50', '#e91e63'];

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 10}s`;
        balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloonsContainer.appendChild(balloon);
    }
});
