document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // FAQ Modal
    const faqBtn = document.getElementById('faq-btn');
    const faqModal = document.getElementById('faq-modal');
    const closeFaq = document.getElementById('close-faq');

    if (faqBtn && faqModal && closeFaq) {
        faqBtn.addEventListener('click', () => {
            faqModal.classList.toggle('active');
        });

        closeFaq.addEventListener('click', () => {
            faqModal.classList.remove('active');
        });
    }

    // GSAP Global Animations
    gsap.registerPlugin(ScrollTrigger);

    // Initial page load animation
    gsap.from('.main-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });

    // Add generic staggered fade in for any element with .stagger-fade-in
    const staggerElements = document.querySelectorAll('.stagger-fade-in');
    if (staggerElements.length > 0) {
        gsap.from('.stagger-fade-in', {
            scrollTrigger: {
                trigger: staggerElements[0].parentElement,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }
});
