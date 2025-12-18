document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeNav = document.querySelector('.close-nav');
    const header = document.querySelector('#header');

    // Toggle Mobile Navigation
    function toggleNav() {
        mobileNav.classList.toggle('active');
        // Prevent background scrolling when menu is open
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleNav);
    }

    if (closeNav) {
        closeNav.addEventListener('click', toggleNav);
    }

    // Close mobile nav when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav ul li a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Header Scroll Effect (Shadow/Background) - Modified to keep black background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px -10px var(--navy-shadow)';
            // header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)'; // Disabled to fix blue tint bug
        } else {
            header.style.boxShadow = 'none';
            // header.style.backgroundColor = 'rgba(10, 25, 47, 0.85)'; // Disabled
        }
    });

    // Smooth Scrolling for all internal links (polyfill/enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Portfolio loaded successfully!");
});
