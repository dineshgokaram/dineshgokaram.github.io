'use strict';

/**
 * Utility function to switch active class between tabs
 */
const switchTab = (targetPage) => {
  // Get all pages and nav buttons
  const pages = document.querySelectorAll('.tab-page');
  const navBtns = document.querySelectorAll('.nav-btn');

  pages.forEach(page => {
    page.classList.remove('active');
    if (page.dataset.page === targetPage) {
      page.classList.add('active');
    }
  });

  navBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.page === targetPage) {
      btn.classList.add('active');
    }
  });

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Handle navigation tab clicks
 */
document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetPage = button.dataset.page;
    switchTab(targetPage);
  });
});

/**
 * Toggle sidebar contact section (on small devices)
 */
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarContacts = document.querySelector('.sidebar-contacts');

if (sidebarToggle && sidebarContacts) {
  sidebarToggle.addEventListener('click', () => {
    sidebarContacts.classList.toggle('show');
  });
}
