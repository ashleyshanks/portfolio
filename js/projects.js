const sideBkwdSection = document.querySelector(".side-scroll.bkwd");
const bkwdText = sideBkwdSection.querySelector("p");

function handleSideScrollBkwd() {
  const rect = sideBkwdSection.getBoundingClientRect();
  const vh = window.innerHeight;

  // progress: when section enters → when it leaves
  let progress = (vh - rect.top) / (vh + rect.height);
  progress = Math.max(0, Math.min(1, progress));

  // move from right → left across screen
  const x = -60 + progress * 80; // percentage

  bkwdText.style.transform = `translateX(${x}%)`;
}

window.addEventListener("scroll", handleSideScrollBkwd);
window.addEventListener("resize", handleSideScrollBkwd);
handleSideScrollBkwd();
