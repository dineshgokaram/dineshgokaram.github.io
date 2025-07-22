'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Sidebar variables and toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Contact form variables and validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation variables and functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

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

// Project filter functionality
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const projectItems = document.querySelectorAll(".project-item");

let lastClickedFilterBtn = filterBtns[0];

const filterFunc = function () {
  lastClickedFilterBtn.classList.remove("active");
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

// Add click event to all filter buttons
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", filterFunc);
}
