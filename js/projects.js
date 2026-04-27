const sideBkwdSection = document.querySelector(".marquee.bkwd");
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

// const images = document.querySelector(".images");
// const cards = images.querySelectorAll("a");

// function animateProjectsHero() {
//   const vh = window.innerHeight;

//   // smoothstep ease
//   const ease = (t) => t * t * (3 - 2 * t);

//   // .images container animation
//   const imagesRect = images.getBoundingClientRect();
//   const imagesCenter = imagesRect.top + imagesRect.height / 2;

//   // starts sooner, ends later
//   const containerStart = vh * 1.15;
//   const containerEnd = vh * 0.25;

//   let containerProgress =
//     (containerStart - imagesCenter) / (containerStart - containerEnd);
//   containerProgress = Math.max(0, Math.min(1, containerProgress));

//   const containerEased = ease(containerProgress);
//   const imagesY = 200 * (1 - containerEased);

//   images.style.transform = `translateY(${imagesY}px)`;

//   // cards animate from their own viewport positions
//   cards.forEach((card) => {
//     const rect = card.getBoundingClientRect();
//     const cardCenter = rect.top + rect.height / 2;

//     const start = vh * 0.85;
//     const end = vh * 0.45;

//     let progress = (start - cardCenter) / (start - end);
//     progress = Math.max(0, Math.min(1, progress));

//     const eased = ease(progress);
//     const y = 60 * (1 - eased);

//     card.style.transform = `translateY(${y}px)`;
//   });
// }

// window.addEventListener("scroll", animateProjectsHero);
// window.addEventListener("resize", animateProjectsHero);
// animateProjectsHero();

document.addEventListener("DOMContentLoaded", () => {
  const techFwdInfo = {
    imgSrc: "images/case-fg.png",
    imgAlt: "collage of case vannon",
    title: "Tech FWD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "#",
    tags: ["lorem", "ipsum"],
  };

  const caseInfo = {
    imgSrc: "images/case-fg.png",
    imgAlt: "collage of case vannon",
    title: "Project Case",
    description:
      "My client, Case Vannon, came to me looking for more than just a website update- he needed a digital space that truly reflected his identity as an artist. What began as a web development project quickly evolved into a deeper collaboration centered on refining his brand aesthetic and translating the feeling of his music into a visual experience.",
    link: "projects.html",
    tags: ["Brand Development", "Web Design", "Custom Shopify Theme"],
  };

  function renderProject(data) {
    const img = document.querySelector("#proj-img");
    const title = document.querySelector(".module h3");
    const desc = document.querySelector(".module p");
    const link = document.querySelector(".sm-link a");
    const tagsContainer = document.querySelector(".tags");

    // image
    img.src = data.imgSrc;
    img.alt = data.imgAlt;

    // text
    title.textContent = data.title;
    desc.textContent = data.description;

    // link
    link.href = data.link;

    // tags
    tagsContainer.innerHTML = "";
    data.tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      tagsContainer.appendChild(li);
    });
  }

  const rightBtn = document.querySelector(".right-btn");

  const projects = [caseInfo, techFwdInfo];
  let currentIndex = 0;

  renderProject(projects[currentIndex]);

  function showNext() {
    currentIndex = (currentIndex + 1) % projects.length;
    renderProject(projects[currentIndex]);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderProject(projects[currentIndex]);
  }

  function renderCount() {
    const count = document.querySelector(".count");
    count.innerHTML = "";

    projects.forEach((_, i) => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");

      use.setAttribute("href", "#circle");

      svg.appendChild(use);

      if (i === currentIndex) {
        svg.classList.add("active");
      }

      count.appendChild(svg);
    });
  }

  function updateDisplay() {
    renderProject(projects[currentIndex]);
    renderCount();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateDisplay();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateDisplay();
  }

  document.querySelector(".right-btn").addEventListener("click", showNext);
  document.querySelector(".left-btn").addEventListener("click", showPrev);

  updateDisplay();
});
