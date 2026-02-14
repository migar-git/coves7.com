// Coves7.com - Main JavaScript
// Mobile menu, newsletter, smooth scroll, analytics placeholders

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav ul');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });
  }

  // Newsletter form handling
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      if (email) {
        // Placeholder for newsletter API integration
        console.log('Newsletter signup:', email);
        
        // Show success message
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = '✓ Subscribed!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = '';
          this.reset();
        }, 3000);
      }
    });
  });

  // Affiliate link tracking
  const affiliateLinks = document.querySelectorAll('a[data-affiliate-id]');
  
  affiliateLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const affiliateId = this.getAttribute('data-affiliate-id');
      const product = this.getAttribute('data-product');
      
      // Placeholder for analytics tracking
      console.log('Affiliate click:', {
        affiliateId: affiliateId,
        product: product,
        url: this.href
      });
      
      // Track with Google Analytics (if implemented)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'affiliate_click', {
          'affiliate_id': affiliateId,
          'product': product
        });
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Lazy loading for images (if needed)
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        (currentPage === '' && link.getAttribute('href') === 'index.html')) {
      link.style.color = 'var(--primary)';
    }
  });

  // Table of contents highlighting (for article pages)
  const tocLinks = document.querySelectorAll('.article-toc a');
  if (tocLinks.length > 0) {
    const observerOptions = {
      rootMargin: '-100px 0px -66%',
      threshold: 0
    };

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const tocLink = document.querySelector(`.article-toc a[href="#${id}"]`);
        
        if (tocLink) {
          if (entry.isIntersecting) {
            tocLinks.forEach(link => link.style.color = 'var(--text-secondary)');
            tocLink.style.color = 'var(--primary)';
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.article-content h2[id], .article-content h3[id]').forEach(heading => {
      headingObserver.observe(heading);
    });
  }

  // Reading progress bar (for article pages)
  if (document.querySelector('.article-content')) {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      width: 0%;
      z-index: 1000;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      progressBar.style.width = scrollPercent + '%';
    });
  }

  // Copy to clipboard functionality
  document.querySelectorAll('[data-copy]').forEach(element => {
    element.addEventListener('click', async function() {
      const text = this.getAttribute('data-copy');
      
      try {
        await navigator.clipboard.writeText(text);
        const originalText = this.textContent;
        this.textContent = '✓ Copied!';
        
        setTimeout(() => {
          this.textContent = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });

  // Print page functionality
  const printButtons = document.querySelectorAll('[data-print]');
  printButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.print();
    });
  });

  // Star rating interaction
  const starRatings = document.querySelectorAll('.star-rating');
  starRatings.forEach(rating => {
    const stars = rating.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.addEventListener('mouseenter', () => {
        stars.forEach((s, i) => {
          s.style.color = i <= index ? 'var(--accent)' : 'var(--text-muted)';
        });
      });
    });
    
    rating.addEventListener('mouseleave', () => {
      const currentRating = rating.getAttribute('data-rating') || 0;
      stars.forEach((s, i) => {
        s.style.color = i < currentRating ? 'var(--accent)' : 'var(--text-muted)';
      });
    });
  });

});

// Initialize analytics placeholder
function initAnalytics() {
  // Google Analytics placeholder
  // Replace with actual GA4 tracking code
  console.log('Analytics initialized');
}

// Track page view
function trackPageView(page) {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: page
    });
  }
}

// Track custom event
function trackEvent(eventName, eventParams) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
}

// Initialize on load
initAnalytics();
trackPageView(window.location.pathname);
