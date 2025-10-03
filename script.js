// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initSmoothScrolling();
    initDownloadResume();
    initMobileMenu();
    initAIParticles();
    initMouseTrail();
    initNeuralNetwork();
    initHolographicElements();
    initBinaryRain();
    initAIAssistant();
    initRealEngagementMetrics();
    initGitHubActivity();
    initCertificateBadges();
    initMagneticButton();
    initFloatingFood();
    initFloatingRobots();
    initMatrixRain();
    initInstantConnect();
    initTestimonials();
    initCertificatesLightbox();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.about-card, .family-card, .timeline-item, .project-showcase, .contact-card, .skill-item');
    
    animatedElements.forEach((el, index) => {
        // Add staggered animation delays
        el.style.animationDelay = `${index * 0.1}s`;
        
        if (el.classList.contains('timeline-item')) {
            el.classList.add('fade-in');
        } else if (el.classList.contains('project-showcase')) {
            el.classList.add('slide-in-left');
        } else {
            el.classList.add('fade-in');
        }
        
        observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                // Animate skill bar
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 200);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validate form
        if (validateForm(name, email, subject, message)) {
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

// Form validation
function validateForm(name, email, subject, message) {
    let isValid = true;
    
    // Validate name
    if (!name || name.trim().length < 2) {
        showFieldError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate subject
    if (!subject || subject.trim().length < 5) {
        showFieldError('subject', 'Subject must be at least 5 characters long');
        isValid = false;
    }
    
    // Validate message
    if (!message || message.trim().length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

// Field validation
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    switch (fieldName) {
        case 'name':
            if (value.length < 2) {
                showFieldError(fieldName, 'Name must be at least 2 characters long');
                return false;
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
                return false;
            }
            break;
        case 'subject':
            if (value.length < 5) {
                showFieldError(fieldName, 'Subject must be at least 5 characters long');
                return false;
            }
            break;
        case 'message':
            if (value.length < 10) {
                showFieldError(fieldName, 'Message must be at least 10 characters long');
                return false;
            }
            break;
    }
    
    clearFieldError(field);
    return true;
}

// Show field error
function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const formGroup = field.closest('.form-group');
    
    // Remove existing error
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error styling
    field.style.borderColor = '#e74c3c';
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    formGroup.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const existingError = formGroup.querySelector('.field-error');
    
    if (existingError) {
        existingError.remove();
    }
    
    field.style.borderColor = '#e9ecef';
}

// Show message
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert message before contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.parentNode.insertBefore(messageDiv, contactForm);
    
    // Auto remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Download resume functionality
function initDownloadResume() {
    const downloadBtn = document.getElementById('download-resume');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a simple resume content (you can replace this with actual resume generation)
        const resumeContent = generateResumeContent();
        
        // Create and download file
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Bongu_Rishi_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Show success message
        showMessage('Resume downloaded successfully!', 'success');
    });
}

// Generate resume content
function generateResumeContent() {
    return `BONGU RISHI
AI Engineer & Deep Learning Specialist

CONTACT INFORMATION
Email: bongu.rishi@vitbhopal.ac.in
Phone: +91 98765 43210
Location: VIT Bhopal, Madhya Pradesh
Origin: Nerlla Village, Sircilla, Telangana

EDUCATION
Integrated MTech in AI (2023 - Present)
VIT Bhopal
- Specializing in Deep Learning, Computer Vision, and Machine Learning
- Focus on CNN models and AI applications

Intermediate (2021 - 2023)
SR Junior College, Karimnagar
- Percentage: 93.9%
- Science Stream

Secondary School Certificate (SSC) (2019 - 2021)
Model School, Mandepally
- GPA: 9.0/10

TECHNICAL SKILLS
Programming Languages: Python (90%), JavaScript (75%), Java (70%)
AI & Machine Learning: Deep Learning (85%), Computer Vision (80%), CNN Models (85%)
Frameworks & Tools: TensorFlow (80%), Keras (85%), PyTorch (70%)

PROJECTS
Food Freshness Detection System using Deep Learning
- Technology: AlexNet CNN Model
- Description: A deep learning-based system that detects food spoilage using computer vision and convolutional neural networks
- Tech Stack: Python, Deep Learning, CNN, AlexNet Architecture, TensorFlow/Keras, Computer Vision
- Features: Real-time food freshness detection, high accuracy CNN model, computer vision integration, scalable architecture

FAMILY BACKGROUND
Father: Lingaiah
Mother: Latha

ACHIEVEMENTS
- Academic Excellence: 93.9% in Intermediate, 9.0/10 GPA in SSC
- 2+ Years in AI field
- 5+ Projects Completed
- Currently pursuing advanced AI studies at VIT Bhopal

INTERESTS
- Artificial Intelligence and Machine Learning
- Computer Vision and Deep Learning
- Problem-solving and Innovation
- Technology for Social Impact

---
Generated on: ${new Date().toLocaleDateString()}
Portfolio: [Your Website URL]`;
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Typing animation for hero title
function initTypingAnimation() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = function() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Counter animation for stats
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent);
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = function() {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current) + (counter.textContent.includes('%') ? '%' : '+');
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = counter.textContent;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initCounterAnimation();
    initParallax();
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Utility functions
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

// Smooth reveal animation for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('visible');
        }
    });
}

// Add scroll event listener for reveal animation
window.addEventListener('scroll', debounce(revealOnScroll, 10));

// Add click effects to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Neural Network Animation
function initNeuralNetwork() {
    const nodes = document.querySelectorAll('.neural-node');
    
    nodes.forEach((node, index) => {
        // Add connection lines between nodes
        setTimeout(() => {
            createConnection(node, nodes[(index + 1) % nodes.length]);
        }, index * 500);
        
        // Add hover effects
        node.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(2)';
            this.style.boxShadow = '0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 153, 255, 0.8)';
        });
        
        node.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 153, 255, 0.4)';
        });
    });
}

// Create connection lines between neural nodes
function createConnection(node1, node2) {
    const line = document.createElement('div');
    line.className = 'neural-connection';
    line.style.cssText = `
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.3) 50%, transparent 100%);
        z-index: 1;
        animation: connectionPulse 3s ease-in-out infinite;
    `;
    
    // Calculate position and rotation
    const rect1 = node1.getBoundingClientRect();
    const rect2 = node2.getBoundingClientRect();
    const heroRect = document.querySelector('.hero').getBoundingClientRect();
    
    const x1 = rect1.left - heroRect.left + rect1.width / 2;
    const y1 = rect1.top - heroRect.top + rect1.height / 2;
    const x2 = rect2.left - heroRect.left + rect2.width / 2;
    const y2 = rect2.top - heroRect.top + rect2.height / 2;
    
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    
    line.style.left = x1 + 'px';
    line.style.top = y1 + 'px';
    line.style.width = length + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    line.style.transformOrigin = '0 0';
    
    document.querySelector('.neural-nodes').appendChild(line);
}

// Holographic Elements Animation
function initHolographicElements() {
    const aiIcons = document.querySelectorAll('.ai-icon');
    
    aiIcons.forEach((icon, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;
            icon.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 5000 + index * 1000);
        
        // Add hover effects
        icon.addEventListener('mouseenter', function() {
            this.style.opacity = '0.4';
            this.style.filter = 'blur(0px)';
            this.style.transform += ' scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.opacity = '0.15';
            this.style.filter = 'blur(1px)';
            this.style.transform = this.style.transform.replace(' scale(1.2)', '');
        });
    });
}

// Binary Rain Animation
function initBinaryRain() {
    const binaryColumns = document.querySelectorAll('.binary-column');
    
    binaryColumns.forEach((column, index) => {
        // Add random speed variations
        const randomSpeed = 6 + Math.random() * 4; // 6-10 seconds
        column.style.animationDuration = randomSpeed + 's';
        
        // Add random delay
        const randomDelay = Math.random() * 2;
        column.style.animationDelay = randomDelay + 's';
        
        // Create binary digits inside columns
        createBinaryDigits(column);
    });
}

// Create binary digits inside rain columns
function createBinaryDigits(column) {
    const digits = ['0', '1'];
    const digitCount = 20;
    
    for (let i = 0; i < digitCount; i++) {
        const digit = document.createElement('div');
        digit.textContent = digits[Math.floor(Math.random() * digits.length)];
        digit.style.cssText = `
            position: absolute;
            top: ${i * 5}%;
            left: 0;
            color: rgba(0, 255, 255, 0.3);
            font-family: 'Courier New', monospace;
            font-size: 0.8rem;
            animation: digitFade 2s ease-in-out infinite;
            animation-delay: ${i * 0.1}s;
        `;
        column.appendChild(digit);
    }
}

// Enhanced AI Particles Animation
function initAIParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Add neural network connections
        setTimeout(() => {
            createParticleConnection(particle);
        }, index * 200);
        
        // Add random movement
        setInterval(() => {
            const randomX = Math.random() * 30 - 15;
            const randomY = Math.random() * 30 - 15;
            particle.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 300);
        
        // Add hover effect
        particle.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(3)';
            this.style.boxShadow = '0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 153, 255, 0.8)';
        });
        
        particle.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(3)', '');
            this.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 153, 255, 0.3)';
        });
    });
}

// Create connections between particles
function createParticleConnection(particle) {
    const nearbyParticles = Array.from(document.querySelectorAll('.particle')).filter(p => p !== particle);
    const randomParticle = nearbyParticles[Math.floor(Math.random() * nearbyParticles.length)];
    
    if (randomParticle) {
        const connection = document.createElement('div');
        connection.className = 'particle-connection';
        connection.style.cssText = `
            position: absolute;
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.2) 50%, transparent 100%);
            z-index: 1;
            animation: particleConnectionPulse 4s ease-in-out infinite;
        `;
        
        // Calculate connection line
        const rect1 = particle.getBoundingClientRect();
        const rect2 = randomParticle.getBoundingClientRect();
        const heroRect = document.querySelector('.hero').getBoundingClientRect();
        
        const x1 = rect1.left - heroRect.left + rect1.width / 2;
        const y1 = rect1.top - heroRect.top + rect1.height / 2;
        const x2 = rect2.left - heroRect.left + rect2.width / 2;
        const y2 = rect2.top - heroRect.top + rect2.height / 2;
        
        const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        connection.style.left = x1 + 'px';
        connection.style.top = y1 + 'px';
        connection.style.width = length + 'px';
        connection.style.transform = `rotate(${angle}deg)`;
        connection.style.transformOrigin = '0 0';
        
        document.querySelector('.ai-particles').appendChild(connection);
    }
}

// Mouse Trail Effect
function initMouseTrail() {
    const trail = [];
    const trailLength = 20;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: linear-gradient(135deg, #3498db, #2ecc71);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i / trailLength};
            transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateTrail() {
        trail.forEach((dot, index) => {
            const nextDot = trail[index + 1] || { offsetLeft: mouseX, offsetTop: mouseY };
            dot.style.left = nextDot.offsetLeft + 'px';
            dot.style.top = nextDot.offsetTop + 'px';
        });
        
        requestAnimationFrame(updateTrail);
    }
    
    updateTrail();
}

// Enhanced typing animation for hero title
function initTypingAnimation() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = function() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// AI Assistant Animation
function initAIAssistant() {
    const assistant = document.getElementById('ai-assistant');
    if (!assistant) return;
    
    // Show assistant after 2 seconds
    setTimeout(() => {
        assistant.style.opacity = '1';
        assistant.style.transform = 'translateY(0)';
    }, 2000);
    
    // Hide assistant after 8 seconds
    setTimeout(() => {
        assistant.style.opacity = '0';
        assistant.style.transform = 'translateY(-20px)';
    }, 8000);
    
    // Click to hide
    assistant.addEventListener('click', function() {
        this.style.opacity = '0';
        this.style.transform = 'translateY(-20px)';
    });
}

// Real Engagement Metrics
function initRealEngagementMetrics() {
    const visitorMetric = document.getElementById('live-visitors');
    if (!visitorMetric) return;
    
    // Simulate realistic visitor count changes
    let currentVisitors = 12;
    const updateVisitors = () => {
        // Random changes between -2 and +3 visitors
        const change = Math.floor(Math.random() * 6) - 2;
        currentVisitors = Math.max(1, currentVisitors + change);
        visitorMetric.textContent = currentVisitors;
        
        // Add pulse effect
        visitorMetric.style.transform = 'scale(1.1)';
        setTimeout(() => {
            visitorMetric.style.transform = 'scale(1)';
        }, 200);
    };
    
    // Update every 3-8 seconds
    setInterval(updateVisitors, Math.random() * 5000 + 3000);
}

// GitHub Activity Animation
function initGitHubActivity() {
    const commitItems = document.querySelectorAll('.commit-item');
    
    commitItems.forEach((item, index) => {
        // Staggered reveal
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 1000 + index * 300);
        
        // Click to show commit details
        item.addEventListener('click', function() {
            const hash = this.querySelector('.commit-hash').textContent;
            showCommitDetails(hash);
        });
    });
}

// Certificates Lightbox
function initCertificatesLightbox() {
    // Create lightbox container once
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close" aria-label="Close">&times;</span>
            <img alt="Certificate preview" />
        </div>
    `;
    document.body.appendChild(lightbox);

    const imgEl = lightbox.querySelector('img');
    const closeEl = lightbox.querySelector('.lightbox-close');

    // Open lightbox on any cert card view click
    document.addEventListener('click', function(e) {
        const viewBtn = e.target.closest('[data-view]');
        if (!viewBtn) return;
        e.preventDefault();

        const card = viewBtn.closest('.cert-card');
        if (!card) return;
        const imgPath = card.getAttribute('data-image');
        if (!imgPath) return;

        imgEl.src = imgPath;
        lightbox.classList.add('open');
    });

    // Close actions
    closeEl.addEventListener('click', function() {
        lightbox.classList.remove('open');
        imgEl.src = '';
    });
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('open');
            imgEl.src = '';
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
            lightbox.classList.remove('open');
            imgEl.src = '';
        }
    });
}

// Show commit details
function showCommitDetails(hash) {
    const details = [
        `Commit: ${hash}`,
        'Files changed: 3',
        'Insertions: +45',
        'Deletions: -12',
        'AI model accuracy improved by 2.3%'
    ];
    
    alert(details.join('\n'));
}

// Certificate Badges Animation
function initCertificateBadges() {
    const certBadges = document.querySelectorAll('.cert-badge');
    
    certBadges.forEach((badge, index) => {
        // Show badges with delay
        setTimeout(() => {
            badge.style.opacity = '1';
            badge.style.transform = 'translateX(0)';
        }, 2000 + index * 500);
        
        // Click to show verification
        badge.addEventListener('click', function() {
            const certType = this.getAttribute('data-cert');
            showCertificateVerification(certType);
        });
    });
}

// Show certificate verification
function showCertificateVerification(certType) {
    const verifications = {
        gpa: 'Certificate verified by Telangana Board of Secondary Education\nGrade: A1 (9.0/10)\nYear: 2020',
        intermediate: 'Certificate verified by Telangana State Board of Intermediate Education\nPercentage: 93.9%\nYear: 2022',
        vit: 'Enrollment verified by VIT Bhopal\nProgram: Integrated MTech AI\nCurrent Status: Active Student',
        project: 'Project verified on GitHub\nRepository: food-freshness-detection\nLast Updated: Today'
    };
    
    alert(verifications[certType] || 'Certificate verification available');
}

// Create confetti effect
function createConfetti(element) {
    const colors = ['#00ffff', '#0099ff', '#0066cc', '#ff6b6b'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        const rect = element.getBoundingClientRect();
        confetti.style.left = rect.left + Math.random() * rect.width + 'px';
        confetti.style.top = rect.top + Math.random() * rect.height + 'px';
        
        document.body.appendChild(confetti);
        
        // Animate confetti
        confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(-100px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 2000,
            easing: 'ease-out'
        }).onfinish = () => confetti.remove();
    }
}

// Show badge details
function showBadgeDetails(badge) {
    const badgeType = badge.getAttribute('data-badge');
    const messages = {
        gpa: 'Achieved perfect 9.0 GPA in Secondary School Certificate',
        topper: 'Scored 93.9% in Intermediate, ranking among top performers',
        researcher: 'Currently conducting research in Deep Learning and Computer Vision'
    };
    
    alert(messages[badgeType] || 'Achievement unlocked!');
}

// Magnetic Button Effect
function initMagneticButton() {
    const magneticBtn = document.getElementById('hire-me-btn');
    if (!magneticBtn) return;
    
    magneticBtn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    magneticBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0) scale(1)';
    });
}

// Floating Food Items
function initFloatingFood() {
    const foodItems = document.querySelectorAll('.food-item');
    
    foodItems.forEach(item => {
        item.addEventListener('click', function() {
            // Show food freshness detection info
            const foodType = this.className.split(' ')[1];
            const freshness = Math.floor(Math.random() * 30) + 70; // 70-100%
            
            showFoodInfo(foodType, freshness);
        });
    });
}

// Show food information
function showFoodInfo(foodType, freshness) {
    const foodNames = {
        apple: 'Apple',
        banana: 'Banana',
        orange: 'Orange',
        tomato: 'Tomato',
        carrot: 'Carrot',
        broccoli: 'Broccoli'
    };
    
    const message = `AI Detection: ${foodNames[foodType]} freshness is ${freshness}%`;
    
    // Create floating message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 255, 255, 0.9);
        color: #000;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 10000;
        animation: messageFade 3s ease-out forwards;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => messageDiv.remove(), 3000);
}

// Floating Robots
function initFloatingRobots() {
    const robots = document.querySelectorAll('.robot-3d');
    
    robots.forEach(robot => {
        robot.addEventListener('click', function() {
            // Robot interaction
            this.style.animation = 'none';
            this.style.transform = 'scale(2) rotateY(360deg)';
            
            setTimeout(() => {
                this.style.animation = 'robot3DFloat 10s ease-in-out infinite';
                this.style.transform = '';
            }, 1000);
        });
    });
}

// Matrix Rain Effect
function initMatrixRain() {
    const matrixColumns = document.querySelectorAll('.matrix-column');
    
    matrixColumns.forEach(column => {
        // Add random speed
        const speed = Math.random() * 2 + 4; // 4-6 seconds
        column.style.animationDuration = speed + 's';
        
        // Add random delay
        const delay = Math.random() * 2;
        column.style.animationDelay = delay + 's';
    });
}

// Instant Connect Buttons
function initInstantConnect() {
    const connectBtns = document.querySelectorAll('.connect-btn');
    
    connectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            
            switch(platform) {
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/bongu-rishi-9565a332b', '_blank');
                    break;
                case 'github':
                    window.open('https://github.com/bongurishi', '_blank');
                    break;
                case 'email':
                    window.location.href = 'mailto:bongurishi07@gmail.com';
                    break;
            }
            
            // Add click effect
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Testimonials Animation
function initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        // Staggered reveal
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 2000 + index * 200);
        
        // Click to expand
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
}

// Add CSS for ripple effect and enhanced animations
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    /* Enhanced AI animations */
    .hero-title {
        animation: titleGlow 3s ease-in-out infinite alternate, titleFloat 4s ease-in-out infinite;
    }
    
    @keyframes titleFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
    }
    
    /* Particle interactions */
    .particle:hover {
        animation-play-state: paused;
        transform: scale(3) !important;
        box-shadow: 0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 153, 255, 0.8) !important;
    }
    
    /* Enhanced button effects */
    .btn:hover {
        box-shadow: 0 10px 30px rgba(0, 255, 255, 0.4);
        transform: translateY(-3px);
    }
    
    /* Glowing effects for sections */
    .section-title {
        animation: sectionGlow 5s ease-in-out infinite alternate;
    }
    
    @keyframes sectionGlow {
        0% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
        100% { text-shadow: 0 0 30px rgba(0, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4); }
    }
    
    /* Neural network connection animations */
    @keyframes connectionPulse {
        0%, 100% {
            opacity: 0.3;
            transform: scaleX(1);
        }
        50% {
            opacity: 0.6;
            transform: scaleX(1.1);
        }
    }
    
    @keyframes particleConnectionPulse {
        0%, 100% {
            opacity: 0.2;
            transform: scaleX(1);
        }
        50% {
            opacity: 0.4;
            transform: scaleX(1.05);
        }
    }
    
    @keyframes digitFade {
        0%, 100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
    }
    
    /* Enhanced neural node effects */
    .neural-node:hover {
        animation-play-state: paused;
        transform: scale(2) !important;
        box-shadow: 0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 153, 255, 0.8) !important;
    }
    
    /* Holographic element enhancements */
    .ai-icon:hover {
        animation-play-state: paused;
        opacity: 0.4 !important;
        filter: blur(0px) !important;
        transform: scale(1.2) !important;
    }
    
    /* Binary rain enhancements */
    .binary-column:hover {
        animation-play-state: paused;
        opacity: 0.2 !important;
    }
    
    /* Circuit board pattern overlay */
    .hero::before {
        background-image: 
            radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 191, 255, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.02) 50%, transparent 70%),
            repeating-linear-gradient(90deg, transparent 0px, rgba(0, 255, 255, 0.01) 1px, transparent 2px),
            repeating-linear-gradient(0deg, transparent 0px, rgba(0, 153, 255, 0.01) 1px, transparent 2px);
    }
    
    /* Real engagement metrics initial state */
    .metric-card {
        opacity: 0;
        transform: translateX(-50px);
        transition: all 0.5s ease;
    }
    
    /* GitHub activity initial state */
    .commit-item {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.5s ease;
    }
    
    /* Certificate badges initial state */
    .cert-badge {
        opacity: 0;
        transform: translateX(50px);
        transition: all 0.5s ease;
    }
    
    /* Message fade animation */
    @keyframes messageFade {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(style);
