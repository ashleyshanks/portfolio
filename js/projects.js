// const sideBkwdSection = document.querySelector(".marquee.bkwd");
// const bkwdText = sideBkwdSection.querySelector("p");

// function handleSideScrollBkwd() {
//   const rect = sideBkwdSection.getBoundingClientRect();
//   const vh = window.innerHeight;

//   // progress: when section enters → when it leaves
//   let progress = (vh - rect.top) / (vh + rect.height);
//   progress = Math.max(0, Math.min(1, progress));

//   // move from right → left across screen
//   const x = -60 + progress * 80; // percentage

//   bkwdText.style.transform = `translateX(${x}%)`;
// }

// window.addEventListener("scroll", handleSideScrollBkwd);
// window.addEventListener("resize", handleSideScrollBkwd);
// handleSideScrollBkwd();

document.addEventListener("DOMContentLoaded", () => {
  const techFwdInfo = {
    imgSrc: "images/techFwdLogo2.png",
    imgAlt: "tech foward brand concept logo",
    bgImgSrc: "images/techFwd-bg.png",
    title: "TechForward",
    description:
      "TechForward is a conceptual brand I created as a foundation for exploring identity, messaging, and visual direction within the education technology space. From this concept, I developed a logo and expanded it into a single-page website to bring the brand to life in a tangible, interactive way. The direction of TechForward is rooted in the idea of making education more engaging, personalized, and emotionally resonant for students, parents, and educators, exploring how learning can move beyond traditional limitations by connecting subjects through student interests, encouraging self-guided progress, and supporting real-world application. The brand is ultimately shaped by the emotional outcome it aims to evoke- confidence, excitement, and a sense of empowerment around the future of education.",
    link: "casestudy.html?id=techFwd",
    tags: ["Visual Identity", "Custom Coded", "Logo Design", "Web Design"],
  };

  const grInfo = {
    imgSrc: "images/gr-fg.png",
    imgAlt: "goodreads logo",
    bgImgSrc: "images/gr-bg.png",
    title: "Goodreads Redesign",
    description:
      "The current Goodreads website is in need of modernization. Guided by user insight, I opted to refresh the old design with a cozy and minimalist look — built around the warmth and comfort of walking into a local bookstore. After surveying 39 users, I shifted my direction to balance that cozy feeling with a design more authentic to Goodreads' parent company, Amazon. The ultimate goal was to build on the value the platform already offers by improving UX, reducing clutter, strengthening organization and navigation, and enhancing social and book discovery features — presenting what already exists in a more user-friendly way.",
    link: "casestudy.html?id=gr",
    tags: ["User Research", "UX Design", "Custom Coded"],
  };

  const caseInfo = {
    imgSrc: "images/case-fg.png",
    imgAlt: "collage of case vannon",
    bgImgSrc: "images/case-bg.png",
    title: "Project Case",
    description:
      "My client, Case Vannon, came to me looking for more than just a website update- he needed a digital space that truly reflected his identity as an artist. What began as a web development project quickly evolved into a deeper collaboration centered on refining his brand aesthetic and translating the feeling of his music into a visual experience.",
    link: "casestudy.html?id=case",
    tags: ["Brand Development", "Web Design", "Custom Shopify Theme"],
  };

  function renderProject(data) {
    const img = document.querySelector("#proj-img");
    const title = document.querySelector(".module h3");
    const desc = document.querySelector(".module p");
    const link = document.querySelector(".sm-link a");
    const tagsContainer = document.querySelector(".tags");
    const highlightSection = document.querySelector("section.highlight");

    // image
    img.src = data.imgSrc;
    img.alt = data.imgAlt;

    //bg image
    if (highlightSection && data.bgImgSrc) {
      highlightSection.style.backgroundImage = `url("${data.bgImgSrc}")`;
    }

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

  const projects = [caseInfo, grInfo];
  buildTagSelector(projects);

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

  const selector = document.querySelector("#selector");
  const selectInput = document.querySelector("#select-input");
  const dropdown = document.querySelector("#dropdown-options");
  const options = document.querySelectorAll(".option");
  const span = document.querySelector("#select-input span");

  // open/close dropdown when clicking select input
  selectInput.addEventListener("click", () => {
    selector.classList.toggle("open");
    dropdown.classList.toggle("open");
  });

  // handle option click
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.textContent;

      // update displayed text
      span.textContent = value;

      // add "open" class to clicked option (optional styling)
      option.classList.add("open");

      // close dropdown
      selector.classList.remove("open");
      dropdown.classList.remove("open");

      // remove "open" class from other options (so only one is active)
      options.forEach((opt) => opt.classList.remove("open"));
    });
  });

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
});
function buildTagSelector(projects) {
  const select = document.querySelector("#tag-select");

  if (!select) return;

  const allTags = new Set();

  projects.forEach((project) => {
    project.tags?.forEach((tag) => allTags.add(tag));
  });

  // reset select
  select.innerHTML = "";

  // default placeholder option
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a tag";
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);

  // add tags
  [...allTags].forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    select.appendChild(option);
  });
}
