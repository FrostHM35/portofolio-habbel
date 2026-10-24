// 1. ANIMASI TITLE BROWSER BERGERAK KE KIRI (MARQUEE)
const titleText = "Habbel Wildan Haqiqy — Frontend Developer & IT Support Portfolio • ";
let currentTitle = titleText;

setInterval(() => {
    // Geser karakter pertama ke bagian belakang string
    currentTitle = currentTitle.substring(1) + currentTitle.substring(0, 1);
    document.title = currentTitle;
}, 250); // Kecepatan pergerakan teks (milidetik)

// 2. INTERAKTIVITAS MENU MOBILE (GARIS 3 / HAMBURGER)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Ubah ikon dari garis 3 (bars) menjadi tanda silang (xmark) dan sebaliknya
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    });

    // Otomatis menutup menu mobile ketika salah satu menu diklik
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });
}

// 3. ANIMASI SCROLL SMOOTH REVEAL (MUNCUL HALUS SAAT DI-SCROLL)
window.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealSections = document.querySelectorAll('.scroll-reveal');
    revealSections.forEach(section => {
        observer.observe(section);
    });
});