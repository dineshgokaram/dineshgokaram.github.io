'use strict';

// --- General Element Toggle Function ---
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// --- Sidebar Functionality ---
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// --- Contact Form Validation ---
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length > 0 && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// --- Page Navigation ---
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navigationLinks.length > 0 && pages.length > 0) {
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      for (let j = 0; j < pages.length; j++) {
        if (this.dataset.page === pages[j].dataset.page) {
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
    });
  }
}

// --- Project Filter Functionality ---
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const projectItems = document.querySelectorAll(".project-item");

// THIS IS THE CRITICAL FIX: Only run this code if filter buttons exist on the page.
if (filterBtns.length > 0 && projectItems.length > 0) {
  let lastClickedFilterBtn = filterBtns[0];

  const filterFunc = function () {
    // Check if the last clicked button exists before trying to remove its class
    if (lastClickedFilterBtn) {
      lastClickedFilterBtn.classList.remove("active");
    }
    
    this.classList.add("active");
    lastClickedFilterBtn = this;

    for (let i = 0; i < projectItems.length; i++) {
      const selectedCategory = this.innerText.toLowerCase();
      const itemCategory = projectItems[i].dataset.category.toLowerCase();

      if (selectedCategory === "all" || selectedCategory === itemCategory) {
        projectItems[i].classList.add("active");
      } else {
        projectItems[i].classList.remove("active");
      }
    }
  }

  for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", filterFunc);
  }
}
