'use strict';

/**
 * Toggle element visibility (used in multiple components)
 */
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

/* ========== SIDEBAR ========== */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

/* ========== FORM VALIDATION ========== */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable form button only when all fields are valid
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});

/* ========== PAGE NAVIGATION ========== */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.textContent.trim().toLowerCase();

    pages.forEach(page => {
      const pageName = page.dataset.page;
      page.classList.toggle("active", pageName === targetPage);
    });

    navigationLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");

    window.scrollTo(0, 0);
  });
});

/* ========== TOOLTIP FOR SOCIAL ICONS (OPTIONAL ENHANCEMENT) ========== */
// If you want tooltips to appear on hover (modern browser support)
// This can be styled in CSS using [title] attribute
