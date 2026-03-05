// smooth scroll button
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

// skill animation
const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  bars.forEach((bar) => {
    const position = bar.getBoundingClientRect().top;

    const screenHeight = window.innerHeight;

    if (position < screenHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill all fields");

    e.preventDefault();
  }
});

// theme toggle

const btn = document.getElementById("themeBtn");

btn.onclick = function () {
  document.body.classList.toggle("dark");
};
