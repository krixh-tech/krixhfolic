// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-back'
    });

    // Initialize Material Design Components
    initializeMDC();
    
    // Setup navigation functionality
    setupNavigation();
    
    // Setup typing animation
    setupTypingAnimation();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup button interactions
    setupButtonInteractions();
    
    // Setup form handling
    setupFormHandling();
    
    // Setup skill progress animations
    setupSkillAnimations();
    
    // Setup particle effects
    setupParticleEffects();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup navbar scroll effect
    setupNavbarScrollEffect();
    
    // Setup hero animations
    setupHeroAnimations();
    
    // Setup contact form validation
    setupContactFormValidation();
    
    console.log('🕷️ KRISH Portfolio - Spider-Verse Mode Activated! 🕸️');
}

// Initialize Material Design Components
function initializeMDC() {
    // Initialize all text fields
    const textFields = document.querySelectorAll('.mdc-text-field');
    textFields.forEach(textField => {
        mdc.textField.MDCTextField.attachTo(textField);
    });

    // Initialize all buttons
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => {
        mdc.ripple.MDCRipple.attachTo(button);
    });

    // Initialize top app bar
    const topAppBar = document.querySelector('.mdc-top-app-bar');
    if (topAppBar) {
        mdc.topAppBar.MDCTopAppBar.attachTo(topAppBar);
    }
}

// Setup Navigation Functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Add click handlers to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.remove('active');
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', debounce(updateActiveNavOnScroll, 100));
}

// Setup Typing Animation
function setupTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const texts = [
        'Tech Enthusiast 💻',
        'Future Engineer 🚀',
        'Content Creator 🎥',
        'Problem Solver 🧩',
        'Web Surfer 🌐',
        'Learning Machine 📚'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeText, 500);
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeText, pauseTime);
                return;
            }
        }
        
        setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    }
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
}

// Setup Scroll Animations
function setupScrollAnimations() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Parallax effect for background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-particles, .geometric-shapes');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Setup Button Interactions
function setupButtonInteractions() {
    const exploreBtn = document.getElementById('explore-btn');
    const contactBtn = document.getElementById('contact-btn');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Project buttons
    const projectBtns = document.querySelectorAll('.project-btn');
    projectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Add ripple effect
            createRippleEffect(btn);
            
            // Show modal or redirect (placeholder)
            showNotification('Project details coming soon! 🚀');
        });
    });
}

// Setup Form Handling
function setupFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields! 📝', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address! 📧', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.querySelector('.mdc-button__label').innerHTML;
        
        submitBtn.querySelector('.mdc-button__label').innerHTML = 
            '<span class="material-icons">hourglass_empty</span>Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.querySelector('.mdc-button__label').innerHTML = originalText;
            submitBtn.disabled = false;
            showNotification('Message sent successfully! 🎉 I\'ll get back to you soon.');
            this.reset();
        }, 2000);
    });
}

// Setup Skill Animations
function setupSkillAnimations() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const percentage = progressBar.style.width;
                
                // Animate skill bar
                setTimeout(() => {
                    progressBar.style.width = percentage;
                    progressBar.style.transition = 'width 2s ease-out';
                }, 300);
                
                // Counter animation for percentage
                const percentageElement = entry.target.querySelector('.skill-percentage');
                const targetValue = parseInt(percentage);
                animateCounter(percentageElement, targetValue, '%');
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => {
        skillObserver.observe(card);
    });
}

// Setup Particle Effects
function setupParticleEffects() {
    createFloatingParticles();
    createSpiderWebEffect();
}

// Create floating particles
function createFloatingParticles() {
    const particleContainer = document.querySelector('.floating-particles');
    if (!particleContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 23, 68, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 5}s infinite linear;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    // Add particle animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Create spider web effect
function createSpiderWebEffect() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0.1;
        z-index: 1;
    `;
    
    const spiderWeb = document.querySelector('.spider-web');
    if (spiderWeb) {
        spiderWeb.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        function drawWeb() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#ff1744';
            ctx.lineWidth = 1;
            
            // Draw web pattern
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const maxRadius = Math.min(centerX, centerY);
            
            // Radial lines
            for (let i = 0; i < 8; i++) {
                const angle = (i * Math.PI * 2) / 8;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(
                    centerX + Math.cos(angle) * maxRadius,
                    centerY + Math.sin(angle) * maxRadius
                );
                ctx.stroke();
            }
            
            // Concentric circles
            for (let r = 50; r < maxRadius; r += 50) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
                ctx.stroke();
            }
        }
        
        resizeCanvas();
        drawWeb();
        
        window.addEventListener('resize', () => {
            resizeCanvas();
            drawWeb();
        });
    }
}

// Setup Smooth Scrolling
function setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup Mobile Menu
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Animate menu icon
            const icon = menuToggle.querySelector('.material-icons');
            if (mobileMenu.classList.contains('active')) {
                icon.textContent = 'close';
                menuToggle.style.transform = 'rotate(180deg)';
            } else {
                icon.textContent = 'menu';
                menuToggle.style.transform = 'rotate(0deg)';
            }
        });
        
        // Close menu when clicking outside
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                menuToggle.querySelector('.material-icons').textContent = 'menu';
                menuToggle.style.transform = 'rotate(0deg)';
            }
        });
    }
}

// Setup Navbar Scroll Effect
function setupNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Setup Hero Animations
function setupHeroAnimations() {
    // Animate hero elements on load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-greeting, .hero-description, .hero-buttons');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
    
    // Mouse movement parallax effect
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;
            
            const floatingIcons = document.querySelectorAll('.floating-icon');
            floatingIcons.forEach((icon, index) => {
                const intensity = (index + 1) * 10;
                icon.style.transform = `translate(${xPercent * intensity}px, ${yPercent * intensity}px)`;
            });
        });
    }
}

// Setup Contact Form Validation
function setupContactFormValidation() {
    const inputs = document.querySelectorAll('.mdc-text-field__input');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Utility Functions
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
        }
    });
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            updateActiveNavLink(sectionId);
        }
    });
}

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 50);
}

function createRippleEffect(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleAnimation 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${rect.width / 2 - size / 2}px;
        top: ${rect.height / 2 - size / 2}px;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Add ripple animation
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes rippleAnimation {
                to { transform: scale(2); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#f44336' : '#4caf50'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        max-width: 300px;
        font-family: var(--font-primary);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldContainer = field.closest('.mdc-text-field');
    
    // Remove existing error
    clearFieldError(e);
    
    if (!value) {
        addFieldError(fieldContainer, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && !isValidEmail(value)) {
        addFieldError(fieldContainer, 'Please enter a valid email address');
        return false;
    }
    
    return true;
}

function addFieldError(fieldContainer, message) {
    fieldContainer.classList.add('mdc-text-field--invalid');
    
    let errorElement = fieldContainer.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.cssText = `
            color: #f44336;
            font-size: 0.8rem;
            margin-top: 4px;
            animation: fadeIn 0.3s ease-out;
        `;
        fieldContainer.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function clearFieldError(e) {
    const fieldContainer = e.target.closest('.mdc-text-field');
    fieldContainer.classList.remove('mdc-text-field--invalid');
    
    const errorElement = fieldContainer.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

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

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const criticalCSS = document.querySelector('link[href="styles.css"]');
    if (criticalCSS) {
        criticalCSS.rel = 'preload';
        criticalCSS.as = 'style';
    }
}

// Initialize performance optimizations
optimizePerformance();

// Add easter egg
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateSpiderVerseMode();
        konamiCode = [];
    }
});

function activateSpiderVerseMode() {
    showNotification('🕷️ SPIDER-VERSE MODE ACTIVATED! 🕸️');
    
    // Add special effects
    document.body.style.filter = 'contrast(1.2) saturate(1.5)';
    
    // Add glitch effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
        .hero-name { animation: glitch 0.3s infinite; }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.filter = '';
        style.remove();
    }, 5000);
}

// Add custom cursor effect
document.addEventListener('mousemove', (e) => {
    // Create trailing effect
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, #ff1744, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX - 3}px;
        top: ${e.clientY - 3}px;
        animation: fadeTrail 1s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 1000);
});

// Add fade trail animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes fadeTrail {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(trailStyle);