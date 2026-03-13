// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileToggleIcon = document.querySelector('.mobile-toggle i');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle icon between bars and times
    if (navLinks.classList.contains('active')) {
        mobileToggleIcon.classList.remove('fa-bars');
        mobileToggleIcon.classList.add('fa-times');
    } else {
        mobileToggleIcon.classList.remove('fa-times');
        mobileToggleIcon.classList.add('fa-bars');
    }
});

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggleIcon.classList.remove('fa-times');
        mobileToggleIcon.classList.add('fa-bars');
    });
});

// Scroll Reveal Animation (Slide Up)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: stop observing once revealed
        }
    });
}, observerOptions);

document.querySelectorAll('.slide-up').forEach(section => {
    observer.observe(section);
});

// Active Navigation Highlight on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Offset for fixed header
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.style.color = 'var(--accent-primary)';
            item.style.setProperty('--after-width', '100%');
        } else {
            item.style.color = '';
            item.style.removeProperty('--after-width');
        }
    });
});
