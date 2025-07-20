'use strict';

/**
 * Toggle the "active" class on an element.
 * Used for sidebar toggling and page switching.
 */
const toggleActiveClass = (element) => {
  element.classList.toggle("active");
};

/* ----------------------------
   SIDEBAR FUNCTIONALITY
----------------------------- */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarToggleBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener("click", () => toggleActiveClass(sidebar));
}

/* ----------------------------
   FORM VALIDATION
----------------------------- */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formSubmitBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length && formSubmitBtn) {
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      formSubmitBtn.disabled = !form.checkValidity();
    });
  });
}

/* ----------------------------
   PAGE NAVIGATION
----------------------------- */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navLinks.length && pages.length) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      const targetPage = navLink.textContent.trim().toLowerCase();

      // Toggle 'active' class on pages
      pages.forEach((page) => {
        const pageName = page.dataset.page;
        page.classList.toggle("active", pageName === targetPage);
      });

      // Toggle 'active' class on navbar links
      navLinks.forEach((link) => link.classList.remove("active"));
      navLink.classList.add("active");

      // Scroll to top for smooth UX
      window.scrollTo(0, 0);
    });
  });
}

/* ----------------------------
   TOOLTIP ENHANCEMENT (OPTIONAL)
   Tooltip shown using 'title' attribute on social icons
----------------------------- */
// Tooltips are handled by the browser via the title attribute.
// Example: <a href="#" title="GitHub"></a>
// Styling handled in CSS (see .tooltip or [title] overrides)
