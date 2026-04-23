const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("pointer");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("pointer");
  });
});

const sections = document.querySelectorAll(".fade-section");

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function handleScroll() {
  const vh = window.innerHeight;
  const isMobile = window.innerWidth <= 900;

  sections.forEach((section) => {
    const content = section.querySelector(".content");
    const rect = section.getBoundingClientRect();

    const fadeDistance = vh * 0.7;

    const baseFadeStart = parseFloat(section.dataset.fadeStart) || 0.05;
    const fadeMultiplier = isMobile ? 1.5 : 1;
    const fadeStart = vh * baseFadeStart * fadeMultiplier;

    let progress = (-rect.top - fadeStart) / fadeDistance;
    progress = Math.max(0, Math.min(1, progress));

    const opacity = 1 - easeOut(progress);
    content.style.opacity = opacity;
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
handleScroll();

const footerLogo = document.querySelector("#footer-logo");

function animateFooterLogo() {
  const rect = footerLogo.getBoundingClientRect();
  const vh = window.innerHeight;

  // start when logo enters viewport
  const start = vh;

  // finish when logo gets closer to lower-middle of viewport
  const end = vh * 0.4;

  let progress = (start - rect.top) / (start - end);
  progress = Math.max(0, Math.min(1, progress));

  // ease out
  const eased = 1 - Math.pow(1 - progress, 3);

  const scale = 0.5 + eased * 0.5; // 0.5 -> 1
  const opacity = eased; // 0 -> 1

  footerLogo.style.transform = `scale(${scale})`;
  footerLogo.style.opacity = opacity;
}

window.addEventListener("scroll", animateFooterLogo);
window.addEventListener("resize", animateFooterLogo);
animateFooterLogo();
