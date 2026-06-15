const sections = document.querySelectorAll(".scroll-section");
const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
  root: null,
  rootMargin: "-20% 0px -80% 0px",
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentId = entry.target.getAttribute("id");
      navLinks.forEach((link) => link.classList.remove("is-active"));

      const activeLink = document.querySelector(
        `.nav-link[href="#${currentId}"]`,
      );
      if (activeLink) {
        activeLink.classList.add("is-active");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
