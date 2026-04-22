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

const aboutOutro = document.querySelector("#about-outro");
const outroText = aboutOutro.querySelector("p");
const outroImg = aboutOutro.querySelector("img");

function animateOutro() {
  const rect = aboutOutro.getBoundingClientRect();
  const vh = window.innerHeight;

  // start animating when section enters viewport,
  // finish when section gets near center
  const start = vh;
  const end = vh * 0.45;

  let progress = (start - rect.top) / (start - end);
  progress = Math.max(0, Math.min(1, progress));

  // optional easing
  const eased = 1 - Math.pow(1 - progress, 3);

  const textX = -120 + eased * 120; // from -120px to 0
  const imgX = 120 - eased * 120; // from 120px to 0

  const opacity = 0.3 + eased * 0.7;

  outroText.style.transform = `translateX(${textX}px)`;
  outroImg.style.transform = `translateX(${imgX}px)`;

  outroText.style.opacity = opacity;
  outroImg.style.opacity = opacity;
}

window.addEventListener("scroll", animateOutro);
window.addEventListener("resize", animateOutro);
animateOutro();
