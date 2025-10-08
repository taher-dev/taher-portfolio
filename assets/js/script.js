"use strict";

// Select elements
const profileAvatar = document.querySelector("[data-profile-avatar]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");

// Function to toggle modal
const toggleModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Open modal on avatar click
profileAvatar.addEventListener("click", () => {
  modalImg.src = profileAvatar.src;
  modalImg.alt = profileAvatar.alt;
  toggleModal();
});

// Close modal when clicking outside or on close button
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

// Light mode toggle
let lightMode = localStorage.getItem("lightMode");
const themeToggle = document.querySelector("#theme-toggle");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightMode", "active");
};

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightMode", null);
};

if (lightMode === "active") {
  enableLightMode();
}

themeToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  lightMode !== "active" ? enableLightMode() : disableLightMode();
  themeToggle.classList.toggle("rotate-icon");
});

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

/** ==============================
 * PAGINATION FOR PROJECTS WITH FILTER
 * ============================== */

const allProjects = document.querySelectorAll(".project-item");
const itemsPerPage = 9;
let currentPage = 1;
let currentFilter = "all";

// Update the existing filter function to work with pagination
const filterFunc = function (selectedValue) {
  currentFilter = selectedValue;
  currentPage = 1; // Reset to page 1 when filter changes

  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }

  displayProjects(currentPage);
};

// Get filtered projects based on current filter
function getFilteredProjects() {
  if (currentFilter === "all") {
    return Array.from(allProjects);
  }

  return Array.from(allProjects).filter((project) => {
    const category = project.getAttribute("data-category");
    return category === currentFilter;
  });
}

// Display projects for current page and filter
function displayProjects(page) {
  const filteredProjects = getFilteredProjects();
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Hide all projects first
  allProjects.forEach((project) => {
    project.style.display = "none";
    project.classList.remove("active");
  });

  // Show only filtered and paginated projects
  filteredProjects.forEach((project, index) => {
    if (index >= start && index < end) {
      project.style.display = "block";
      project.classList.add("active");
    }
  });

  updatePagination(filteredProjects.length);
}

// Update pagination controls
function updatePagination(totalFilteredProjects) {
  const paginationContainer = document.getElementById("pagination");
  const totalPages = Math.ceil(totalFilteredProjects / itemsPerPage);
  paginationContainer.innerHTML = "";

  // Don't show pagination if only one page or no projects
  if (totalPages <= 1) {
    return;
  }

  // Previous button
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.className = "page-btn";
  prevBtn.disabled = currentPage === 1;
  if (prevBtn.disabled) prevBtn.classList.add("disabled");
  prevBtn.addEventListener("click", () => changePage(currentPage - 1));
  paginationContainer.appendChild(prevBtn);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    pageBtn.className = "page-btn";
    if (i === currentPage) pageBtn.classList.add("active");
    pageBtn.addEventListener("click", () => changePage(i));
    paginationContainer.appendChild(pageBtn);
  }

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.className = "page-btn";
  nextBtn.disabled = currentPage === totalPages;
  if (nextBtn.disabled) nextBtn.classList.add("disabled");
  nextBtn.addEventListener("click", () => changePage(currentPage + 1));
  paginationContainer.appendChild(nextBtn);
}

// Change page with animation
const projectList = document.getElementById("project-list");
function changePage(page) {
  projectList.classList.add("fade-out");
  setTimeout(() => {
    currentPage = page;
    displayProjects(currentPage);
    projectList.classList.remove("fade-out");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 300);
}

// Initialize on page load
displayProjects(currentPage);
