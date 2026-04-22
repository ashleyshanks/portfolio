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
    const fadeMultiplier = isMobile ? 1.95 : 1;
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
