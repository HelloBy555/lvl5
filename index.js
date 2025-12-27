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
