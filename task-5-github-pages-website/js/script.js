// Theme Switcher Logic
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('.theme-icon') : null;

// Check saved theme in localStorage
const savedTheme = localStorage.getItem('devops_portfolio_theme');
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  if (themeIcon) themeIcon.textContent = '☀️';
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('devops_portfolio_theme', 'dark');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('devops_portfolio_theme', 'light');
      if (themeIcon) themeIcon.textContent = '☀️';
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

console.log('Elevate Labs DevOps Portfolio initialized successfully.');
