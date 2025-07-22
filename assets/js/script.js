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

// Add event listener to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const clickedPage = this.innerHTML.toLowerCase(); // Get the clicked page name (e.g., "resume")

    for (let j = 0; j < pages.length; j++) {
      const pageName = pages[j].dataset.page.toLowerCase();
      
      // *** FIX: Compare the clicked link's text to the page's data-page attribute ***
      if (clickedPage === pageName) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active"); // Use 'i' for the clicked link
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
const filterItems = document.querySelectorAll(".project-item");

let lastClickedFilterBtn = filterBtns[0];

const filterFunc = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  const selectedCategory = this.innerText.toLowerCase();

  for (let i = 0; i < filterItems.length; i++) {
    const itemCategory = filterItems[i].dataset.category.toLowerCase();

    if (selectedCategory === "all" || selectedCategory === itemCategory) {
      // Show the item if it matches the category or if "All" is selected
      filterItems[i].classList.add("active");
      filterItems[i].style.display = "block"; // Explicitly show
    } else {
      // Hide the item if it doesn't match
      filterItems[i].classList.remove("active");
      filterItems[i].style.display = "none"; // Explicitly hide
    }
  }
}

// Add click event to all filter buttons
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", filterFunc);
}
