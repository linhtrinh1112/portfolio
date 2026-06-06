// ===== TYPING EFFECT =====
const typingText = document.getElementById('typingText');
const phrases = [
  'Lập trình viên',
  'Yêu thích AI',
  'Giải quyết vấn đề',
  'Học hỏi liên tục'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
typeEffect();

// ===== SMOOTH SCROLL =====
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
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('show')) {
      mobileMenu.classList.remove('show');
      document.getElementById('hamburger').classList.remove('active');
    }
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('show');
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow on scroll
  if (currentScroll > 0) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// ===== COUNTER ANIMATION =====
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'), 10);
  let current = 0;
  const increment = target / 30;
  
  const updateCount = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      setTimeout(updateCount, 50);
    } else {
      element.textContent = target;
    }
  };
  
  updateCount();
}

// Intersection Observer for counter
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.classList.contains('stat-num')) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.classList.contains('skill-fill')) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));

// ===== BACK TO TOP BUTTON =====
const backTopBtn = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backTopBtn.classList.add('show');
  } else {
    backTopBtn.classList.remove('show');
  }
});

backTopBtn?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name') || 'Anonymous',
      email: formData.get('email'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };
    
    // Simple form validation
    if (!data.email || !data.message) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    formSuccess.classList.add('show');
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSuccess.classList.remove('show');
    }, 5000);
    
    // Log to console (in real app, would send to server)
    console.log('Form submitted:', data);
  });
}

// ===== SCROLL REVEAL ANIMATION =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ===== SMOOTH PAGE LOAD =====
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu?.classList.contains('show')) {
      mobileMenu.classList.remove('show');
      document.getElementById('hamburger').classList.remove('active');
    }
  }
});

// ===== LAZY LOAD IMAGES (if used) =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===== ACTIVE NAV LINK =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ===== PAGE PERFORMANCE =====
// Log performance info
window.addEventListener('load', () => {
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log('Page load time: ' + pageLoadTime + 'ms');
});

// ===== PREVENT RAPID CLICKS =====
let isClicking = false;

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('click', function(e) {
    if (isClicking) {
      e.preventDefault();
      return;
    }
    isClicking = true;
    setTimeout(() => {
      isClicking = false;
    }, 500);
  });
});

console.log('Portfolio loaded successfully! 🚀');
