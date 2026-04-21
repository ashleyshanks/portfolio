const sections = document.querySelectorAll(".fade-section");

function handleScroll() {
  const vh = window.innerHeight;

  sections.forEach((section) => {
    const content = section.querySelector(".content");
    const rect = section.getBoundingClientRect();

    const fadeDistance = vh * 0.7;
    const fadeStartMultiplier = parseFloat(section.dataset.fadeStart) || 0.05;
    const fadeStart = vh * fadeStartMultiplier;

    let progress = (-rect.top - fadeStart) / fadeDistance;

    // clamp 0 → 1
    progress = Math.max(0, Math.min(1, progress));

    // apply easing
    const eased = 1 - Math.pow(1 - progress, 3);

    const opacity = 1 - eased;

    content.style.opacity = opacity;
  });
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3); // cubic ease-out
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
handleScroll();
