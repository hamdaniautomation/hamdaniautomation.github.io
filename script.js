// Hamdani Automation

// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card, .hero-card, .section").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(5,8,22,.96)";
  } else {
    header.style.background = "rgba(5,8,22,.85)";
  }
});
