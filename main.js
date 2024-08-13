// navbar hide on scroll start
let lastScrollY = 0;
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollY = currentScrollY;
});
// navbar hide on scroll end

// read more toggle start
document.addEventListener("DOMContentLoaded", function () {
  const clampText1 = document.querySelector("#clamp-1");
  const toggleButton1 = document.querySelector("#more-1");
  const clampText2 = document.querySelector("#clamp-2");
  const toggleButton2 = document.querySelector("#more-2");
  const clampText3 = document.querySelector("#clamp-3");
  const toggleButton3 = document.querySelector("#more-3");
  const clampText4 = document.querySelector("#clamp-4");
  const toggleButton4 = document.querySelector("#more-4");

  function updateButtonVisibility() {
    if (clampText1.scrollHeight > clampText1.clientHeight) {
      toggleButton1.style.display = "flex";
    } else {
      toggleButton1.style.display = "none";
    }
    if (clampText2.scrollHeight > clampText2.clientHeight) {
      toggleButton2.style.display = "flex";
    } else {
      toggleButton2.style.display = "none";
    }
    if (clampText3.scrollHeight > clampText3.clientHeight) {
      toggleButton3.style.display = "flex";
    } else {
      toggleButton3.style.display = "none";
    }
    if (clampText4.scrollHeight > clampText4.clientHeight) {
      toggleButton4.style.display = "flex";
    } else {
      toggleButton4.style.display = "none";
    }
  }

  toggleButton1.addEventListener("click", function () {
    if (clampText1.classList.contains("unclamp")) {
      clampText1.classList.remove("unclamp");
      toggleButton1.textContent = "...more";
    } else {
      clampText1.classList.add("unclamp");
      toggleButton1.textContent = "...show less";
    }
  });
  toggleButton2.addEventListener("click", function () {
    if (clampText2.classList.contains("unclamp")) {
      clampText2.classList.remove("unclamp");
      toggleButton2.textContent = "...more";
    } else {
      clampText2.classList.add("unclamp");
      toggleButton2.textContent = "...show less";
    }
  });
  toggleButton3.addEventListener("click", function () {
    if (clampText3.classList.contains("unclamp")) {
      clampText3.classList.remove("unclamp");
      toggleButton3.textContent = "...more";
    } else {
      clampText3.classList.add("unclamp");
      toggleButton3.textContent = "...show less";
    }
  });
  toggleButton4.addEventListener("click", function () {
    if (clampText4.classList.contains("unclamp")) {
      clampText4.classList.remove("unclamp");
      toggleButton4.textContent = "...more";
    } else {
      clampText4.classList.add("unclamp");
      toggleButton4.textContent = "...show less";
    }
  });

  updateButtonVisibility();
});

// read more toggle end

// back to top start
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});
// back to top end
