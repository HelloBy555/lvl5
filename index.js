// Smooth scroll to menu section when hero button is clicked
document.querySelector('.btn-menu').addEventListener('click', function() {
    document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth'
    });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
    this.classList.toggle('active');
});

// Scroll reveal animations using Intersection Observer (performance-optimized)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Stop observing once revealed for better performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with scroll-reveal class
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });
    
    // Reveal hero section immediately on load (no animation delay)
    const heroContent = document.querySelector('#hero .hero-content');
    if (heroContent) {
        heroContent.classList.add('revealed');
    }
});
