// Navigation Bar
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className ==="nav-menu") {
        menuBtn.className+=" responsive";
    }else {
        menuBtn.className = "nav-menu";
    }
}

// Navigation Bar Shadow
window.onscroll = function() {
    headerShadow();
}
function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.boxShadow = "70px";
        navHeader.style.lineHeight = "70px";
    }else {
        navHeader.style.boxShadow = "none";
        navHeader.style.boxShadow = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// ===============================
// ScrollReveal Animations
// ===============================
const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false // set to true if you want animations every time the element comes into view
});

// Home Section
sr.reveal('.featured-text', {
    origin: 'left'
});
sr.reveal('.featured-imag', {
    origin: 'right'
});
sr.reveal('.featured-text-btn', {
    origin: 'bottom',
    delay: 400
});
sr.reveal('.social-icons', {
    origin: 'bottom',
    delay: 500
});

// About Section
sr.reveal('.about-info', {
    origin: 'bottom'
});
sr.reveal('.skills-box', {
    origin: 'right',
    interval: 200
});
sr.reveal('.education-box', {
    origin: 'bottom',
    delay: 200
});

// Projects Section
sr.reveal('.project-card', {
    origin: 'bottom',
    interval: 200
});

// Gallery Section
sr.reveal('.gallery-item', {
    origin: 'bottom',
    interval: 150
});

// Contact Section
sr.reveal('.contact-info', {
    origin: 'left',
    delay: 200
});
sr.reveal('.form-control', {
    origin: 'right',
    delay: 200
});

