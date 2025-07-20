'use strict';

/**
 * Toggle "active" class on element
 */
const toggleActive = (element) => {
  element.classList.toggle("active");
};

/* --------------------------
   SIDEBAR TOGGLE FUNCTION
--------------------------- */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarToggleBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener("click", () => {
    toggleActive(sidebar);
  });
}

/* --------------------------
   FORM VALIDATION HANDLING
--------------------------- */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length > 0 && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      formBtn.disabled = !form.checkValidity();
    });
  });
}

/* --------------------------
   PAGE NAVIGATION HANDLER
--------------------------- */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navLinks.length > 0 && pages.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetPage = link.textContent.trim().toLowerCase();

      pages.forEach(page => {
        const isTarget = page.dataset.page === targetPage;
        page.classList.toggle("active", isTarget);
      });

      navLinks.forEach(link => link.classList.remove("active"));
      link.classList.add("active");

      window.scrollTo(0, 0);
    });
  });
}

/* --------------------------
   TOOLTIP SUPPORT (title attr)
--------------------------- */
// Handled via HTML: <a title="GitHub"> and styled in CSS via [title]:hover::after
