const nameInfo = {
  title: null,
  introText1: null,
  introText2: null,
  introImg: null,
  colors: [],
  processText: null,
  processImg: null,
  processImg2: null,
  iterationImgs: [],
  resultsText: null,
  resultsImgMain: null,
  resultsImgShort: null,
  resultsImgs: [],
  resultsDescriptions: [],
};

const caseInfo = {
  folderName: "case",
  title: "case vannon.",
  introText1:
    "Case is a local musician and storyteller, blending authenticity with cinematic, immersive sound. Creating experiences that feel both genuine and engaging is a core part of my work, so I was excited to collaborate with Case to redesign his existing site and bring his vision to life.",
  introText2:
    "Guided by his creative direction—how he wanted to be seen—and the tone of his music, I designed a website that allows fans to move seamlessly between his music and his digital presence. Just as his songs offer a glimpse into who he is, the website extends that experience, deepening it to reveal the person behind the music.",
  introImg: "mainCase",
  colors: ["#a63f28", "#e3a542", "#c9837f", "#434f37", "#f9f1d8", "#1f140d"],
  colorsWhiteText: [true, true, true, true, false, true],
  processText:
    "This project was primarily inspired by Case Vannon’s music itself, which I translated into several mood boards to guide the visual direction. Building on that foundation, I also drew inspiration from artists who influence his sound—The Lumineers, Matt Maeson, and Noah Kahan—to better understand the tone and emotional landscape of his work.<br><br>From there, I explored three distinct site directions. The first blended a modern aesthetic with organic elements, reflecting the indie and cinematic qualities of his sound. The second leaned into a more playful, scrapbook-inspired approach, capturing the raw, story-driven nature of his music and van-life experiences.<br><br>The final direction became a balance of both—pulling key elements from each concept to create an elevated scrapbook aesthetic that tells his story in a way that feels both refreshed and familiar.",
  processImg: "1caseMockup1-1",
  processImg2: "3caseMockup2-1",
  carouselTitle: null,
  carouselImgs: [
    "1caseMockup1-1",
    "caseHome",
    "3caseMockup2-1",
    "4caseMockup3-1",
    "5caseMockup3-2",
    "6caseMockup1-2",
    "7caseMockup2-3",
    "8caseMockup2-2",
    "9caseHomePrevColor",
    "10caseMerchPrev",
    "11caseMerchNew",
    "12caseAboutPrev",
    "13caseAboutNew",
    "14caseVideosPrev",
    "15caseVideosNew",
  ],
  resultsText:
    "The final website translates Case’s cinematic, story-driven sound into a seamless digital experience. By blending modern and organic design elements with an elevated scrapbook aesthetic, the site captures both the polished and raw sides of his artistry—creating a brand that feels immersive, authentic, and true to who he is.<br><br>This project also expanded my technical skill set, as I learned how to develop a fully custom Shopify theme to support his needs. I used Adobe Creative Suite to design and produce custom visual assets, ensuring the final site felt cohesive, intentional, and aligned with his creative direction.",
  resultsImgMain: "caseHome",
  resultsImgShort: "caseHomeShort",
  resultsVid: "case study previews/resultsVidPlaceholder.png",
  resultsDescriptions: ["Case Vannon's previous website."],
};

const projects = [caseInfo];

function fixImgFileName(fileName, folderName, format) {
  return `../images/case study previews/${folderName}/${fileName}.${format}`;
}

function fillProjectPage(project) {
  const folder = project.folderName;

  // Intro
  document.querySelector("#intro h1").textContent = project.title;
  document.querySelector("#intro .l-col p").innerHTML = project.introText1;
  document.querySelector("#intro .r-col p").innerHTML = project.introText2;

  const introImg = document.querySelector("#intro .r-col img");
  introImg.src = fixImgFileName(project.introImg, folder, "png");
  introImg.alt = `${project.title} project image`;

  // Colors
  const colorsContainer = document.querySelector("#colors");
  colorsContainer.innerHTML = "";

  project.colors.forEach((color, index) => {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = color;

    if (project.colorsWhiteText?.[index]) {
      colorDiv.style.color = "white";
    }

    colorDiv.textContent = color;
    colorsContainer.appendChild(colorDiv);
  });

  // Process
  document.querySelector("#process .text p").innerHTML = project.processText;

  const processImgs = document.querySelector("#process .imgs");
  processImgs.innerHTML = "";

  if (project.processImg) {
    processImgs.insertAdjacentHTML(
      "beforeend",
      `<div class="crop-area"><img src="${fixImgFileName(
        project.processImg,
        folder,
        "jpg"
      )}" alt=""></div>`
    );
  }

  if (project.processImg2) {
    processImgs.insertAdjacentHTML(
      "beforeend",
      `<div class="crop-area"><img src="${fixImgFileName(
        project.processImg2,
        folder,
        "jpg"
      )}" alt=""></div>`
    );
  }

  // Carousel / Iterations
  const carouselImgs = document.querySelector("#carousel-imgs");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  carouselImgs.innerHTML = "";

  const isMobile = window.innerWidth <= 800;
  const itemsPerSet = isMobile ? 1 : 3;

  window.addEventListener("resize", () => {
    const newIsMobile = window.innerWidth <= 800;

    if (newIsMobile !== isMobile) {
      location.reload(); // only reload on breakpoint change
    }
  });

  // 1. BUILD SETS
  for (let i = 0; i < project.carouselImgs.length; i += itemsPerSet) {
    const imgSet = document.createElement("div");
    imgSet.classList.add("img-set");

    for (
      let j = i;
      j < i + itemsPerSet && j < project.carouselImgs.length;
      j++
    ) {
      const cropArea = document.createElement("div");
      cropArea.classList.add("crop-area");

      const img = document.createElement("img");
      const imgName = project.carouselImgs[j];

      img.src = fixImgFileName(imgName, folder, "jpg");
      img.onload = () => {
        img.classList.add("loaded");
      };
      img.alt = `${project.title} iteration ${j + 1}`;

      cropArea.appendChild(img);
      imgSet.appendChild(cropArea);
    }

    carouselImgs.appendChild(imgSet);
  }

  // 2. NOW query AFTER build
  const imgSets = document.querySelectorAll(".img-set");

  let currentPage = 0;
  const totalPages = imgSets.length;

  // 3. UPDATE FUNCTION
  function updateCarousel() {
    carouselImgs.style.transform = `translateX(-${currentPage * 100}%)`;

    // arrows state
    leftBtn.classList.toggle("disabled", currentPage === 0);
    rightBtn.classList.toggle("disabled", currentPage === totalPages - 1);
  }

  // 4. EVENTS
  rightBtn.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateCarousel();
    }
  });

  leftBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updateCarousel();
    }
  });

  // 5. INIT STATE (IMPORTANT)
  updateCarousel();

  // Results
  renderResultsImage(project, folder);
  function renderResultsImage(project, folder) {
    const textEl = document.querySelector("#results .text p");
    const resultsImgs = document.querySelector("#results .crop-area");

    if (!textEl || !resultsImgs) return;

    textEl.innerHTML = project.resultsText;

    const shortSrc = fixImgFileName(project.resultsImgShort, folder, "jpg");
    const mainSrc = fixImgFileName(project.resultsImgMain, folder, "jpg");

    const vw = window.innerWidth;

    const src = vw < 800 || vw > 1220 ? shortSrc : mainSrc;

    resultsImgs.innerHTML = `
      <img 
        class="main-img"
        src="${src}" 
        alt="${project.title} final result"
      >
    `;
  }

  window.addEventListener("resize", () => {
    renderResultsImage(project, folder);
  });

  // Results video / placeholder
  const resultsVideoImg = document.querySelector("#results-video img");

  if (project.resultsVid && resultsVideoImg) {
    resultsVideoImg.src = `../images/${project.resultsVid}`;
  }
}

fillProjectPage(projects[0]);

const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

// open on image click (event delegation)
document.addEventListener("click", (e) => {
  const img = e.target.closest(".crop-area img");
  if (!img) return;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;

  lightbox.classList.remove("hidden");
});

// close when clicking overlay
lightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  lightboxImg.src = "";
});
