// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize progress bar
    initializeProgressBar();
});

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the saved theme
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.removeAttribute('data-theme');
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            // Switch to dark theme
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light theme
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ===== NAVIGATION MANAGEMENT =====
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');
    
    // Update active navigation on scroll
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Debounced scroll listener for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNav, 10);
    });
    
    // Initial call
    updateActiveNav();
}

// ===== MOBILE MENU MANAGEMENT =====
function initializeMobileMenu() {
    // Mobile menu functionality removed - navigation is always visible
    console.log('Mobile menu disabled - navigation always visible');
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.project-card, .hobby-item, .education-item, .experience-item');
    
    // Create intersection observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Create intersection observer for cards with staggered animation
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Stagger animation
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial state and observe cards
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL TO TOP FUNCTIONALITY =====
function initializeScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== TYPING ANIMATION =====
function initializeTypingAnimation() {
    const typingElement = document.querySelector('.hero-title');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing animation after hero loads
    setTimeout(typeWriter, 1000);
}

// ===== PARALLAX SCROLLING =====
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// ===== LOADING ANIMATION =====
function initializeLoader() {
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ACCESSIBILITY IMPROVEMENTS =====
function initializeAccessibility() {
    // Add focus styles for keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, input, textarea');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--text-accent)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add ARIA labels where needed
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
    }
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
    }
}

// ===== INITIALIZE ADDITIONAL FEATURES =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize additional features
    initializeScrollToTop();
    initializeAccessibility();
    
    // Optional: Enable these for enhanced effects
    // initializeTypingAnimation();
    // initializeParallax();
    // initializeLoader();
});

// Mobile menu styles removed - navigation is always visible

// ===== PROGRESS BAR =====
function initializeProgressBar() {
    const progressBar = document.getElementById('progressBar');
    
    function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrolled + '%';
    }
    
    // Update progress bar on scroll
    window.addEventListener('scroll', throttle(updateProgressBar, 10));
    
    // Initial call
    updateProgressBar();
} 