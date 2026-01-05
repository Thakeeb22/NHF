const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener("click", () => {
    const isActive = navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    navbarToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
  });
  document.querySelectorAll(".navbar-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navbarToggle.classList.remove("active");
      navbarMenu.classList.remove("active");
      navbarToggle.setAttribute("aria-expanded", "false");
    });
  });
}
// Testimonials slider
let currentSlide = 0;
let autoSlide;
let slideCont = document.getElementById("slider");
function showSlide(index) {
  let slides = document.querySelectorAll("#slide-card");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.lenght - 1;
  } else {
    currentSlide = index;
  }
  let offset = -currentSlide * 100;
  document.querySelector("#slides").style.transform = `translateX(${offset}%)`;
}
function moveSlide(direction) {
  showSlide(currentSlide + direction);
}
function startAutoSlide() {
  autoSlide = setInterval(() => moveSlide(1), 2000);
}
function stopAutoSlide() {
  clearInterval(autoSlide);
}
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  startAutoSlide();
  document
    .addEventListener("next")
    .addEventListener("click", () => moveSlide(1));
  document
    .getElementById("prev")
    .addEventListener("click", () => moveSlide(-1));
  const slider = document.getElementById("slider");
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
});
// Impact metrics count-up on each view
const metricNumbers = document.querySelectorAll(".metric-number");
if (metricNumbers.length > 0) {
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const animateValue = (el, to, duration = 1500) => {
    if (el.dataset.animating === "true") return; // prevent overlap
    el.dataset.animating = "true";
    const start = 0;
    const startTime = performance.now();
    const format = (v) => Math.floor(v).toLocaleString();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOut(progress);
      el.textContent = format(start + (to - start) * eased);
      if (progress < 1) requestAnimationFrame(step);
      else el.dataset.animating = "false";
    };
    el.textContent = "0";
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        if (entry.isIntersecting) {
          animateValue(el, target);
        }
      });
    },
    { threshold: 0.6 }
  );
  metricNumbers.forEach((el) => io.observe(el));
}

// Back to top (mobile)
const backToTopBtn = document.getElementById("backToTop");
const toggleBackToTop = () => {
  if (!backToTopBtn) return;
  if (window.scrollY > 300) backToTopBtn.classList.add("visible");
  else backToTopBtn.classList.remove("visible");
};
window.addEventListener("scroll", toggleBackToTop);
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
toggleBackToTop();

// Read More functionality
document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.querySelector(".read-more-btn");
  const moreText = document.querySelector(".more-text");

  if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
      } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
      }
    });
  }
});
