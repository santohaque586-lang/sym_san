/* ===== BACK TO TOP BUTTON ===== */

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (topBtn) {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }
};

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* ===== PROJECT FILTER ===== */

function filterProjects(type) {
  let projects = document.querySelectorAll(".project");

  projects.forEach(function (project) {
    if (type === "all") {
      project.style.display = "block";
    } else if (project.classList.contains(type)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

/* ===== PROJECT IMAGE SLIDER ===== */

function changeSlide(button, step) {
  let slider = button.parentElement;

  let slidesContainer = slider.querySelector(".slides");

  let slides = slider.querySelectorAll(".slide");

  if (!slider.dataset.index) {
    slider.dataset.index = 0;
  }

  let index = parseInt(slider.dataset.index);

  index = index + step;

  if (index >= slides.length) index = 0;

  if (index < 0) index = slides.length - 1;

  slider.dataset.index = index;

  slidesContainer.style.transform = "translateX(-" + index * 100 + "%)";
}

/* ===== AUTO SLIDE ON HOVER ===== */

document.querySelectorAll(".project-slider").forEach((slider) => {
  let interval;

  slider.addEventListener("mouseenter", () => {
    interval = setInterval(() => {
      let nextBtn = slider.querySelector(".next");

      if (nextBtn) nextBtn.click();
    }, 2000);
  });

  slider.addEventListener("mouseleave", () => {
    clearInterval(interval);
  });
});

/* ===== EDUCATION SCROLL ANIMATION ===== */

const eduRows = document.querySelectorAll(".edu-row");

window.addEventListener("scroll", () => {
  eduRows.forEach((row) => {
    const rowTop = row.getBoundingClientRect().top;

    const trigger = window.innerHeight * 0.85;

    if (rowTop < trigger) {
      row.classList.add("show");
    }
  });
});

/* ===== SKILLS SCROLL ANIMATION ===== */

const skillRows = document.querySelectorAll(".skill-row");

window.addEventListener("scroll", () => {
  skillRows.forEach((row) => {
    const rowTop = row.getBoundingClientRect().top;

    const trigger = window.innerHeight * 0.85;

    if (rowTop < trigger) {
      row.classList.add("show");
    }
  });
});

/* ===== HEADER SHRINK ON SCROLL ===== */

const header = document.querySelector(".main-header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
}

/* ===== HAMBURGER MENU ===== */

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".menu-close");

if (toggle && menu && closeBtn) {
  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    closeBtn.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    closeBtn.classList.remove("active");
  });
}

/* ===== CONTACT POPUP ===== */

function openForm() {
  const popup = document.getElementById("contactPopup");

  if (popup) {
    popup.style.display = "flex";
  }
}

function closeForm() {
  const popup = document.getElementById("contactPopup");

  if (popup) {
    popup.style.display = "none";
  }
}
/* HERO TYPING ANIMATION */

const leftText = "Engineer";
const rightText = "<Developer>";

let i = 0;

function typeLeft() {
  if (i < leftText.length) {
    document.getElementById("typing-left").innerHTML += leftText.charAt(i);

    i++;

    setTimeout(typeLeft, 120);
  }
}

typeLeft();

let j = 0;

function typeRight() {
  if (j < rightText.length) {
    document.getElementById("typing-right").innerHTML += rightText.charAt(j);

    j++;

    setTimeout(typeRight, 120);
  }
}

typeRight();
