/* =========================================================
   Arm Pillow — Interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    // Close menu after clicking a link (mobile)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.querySelector(".navbar");
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      // Close others for a cleaner look
      document.querySelectorAll(".faq-item.open").forEach(i => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });

  /* ---------- Scroll reveal animations ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("visible"));
  }

  /* ---------- Contact form (front-end only) ---------- */
  const form = document.querySelector(".contact-form form");
  const status = document.querySelector(".form-status");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // NOTE: Hook this up to your backend or email service (Formspree, etc.)
      if (status) {
        status.textContent = "Thanks! Your message is on its way to the clouds ☁️";
        status.style.color = "#5b4be0";
      }
      form.reset();
    });
  }
});
