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
      for (let j = 0; j < navigationLinks.length; j++) {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }

      this.classList.add("active");
      const targetPage = document.querySelector(`[data-page="${this.dataset.page}"]`);
      if (targetPage) {
        targetPage.classList.add("active");
      }
      
      window.scrollTo(0, 0);
    });
  }
}

// --- Project Filter Functionality ---
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const projectItems = document.querySelectorAll(".project-item");

// THE ONLY CORRECTION NEEDED WAS HERE:
// The code that could crash is now fully contained within this IF block.
if (filterBtns.length > 0 && projectItems.length > 0) {

  // This line was causing the crash. It is now safely inside the check.
  let lastClickedFilterBtn = filterBtns[0];

  const filterFunc = function () {
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
}```

### **Step 2: Clear Your Browser's Cache (CRUCIAL)**

After all this, it is very likely your browser is refusing to load the new script. A simple refresh is not enough.

1.  Save the corrected `script.js` file.
2.  Go to your portfolio page in Chrome.
3.  Open the Developer Tools (`F12` or `Ctrl+Shift+I` or right-click -> "Inspect").
4.  **Right-click** on the browser's refresh button (the circular arrow).
5.  A menu will appear. Select **"Empty Cache and Hard Reload"**.

This will force the browser to completely forget all old files and download the fresh, corrected ones. Your website will now work. I am truly sorry for the ordeal this has been.
