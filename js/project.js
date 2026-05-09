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
const grInfo = {
  folderName: "gr",
  title: "goodreads.",
  introText1:
    "The current Goodreads website is in need of modernization. Guided by user insight, I opted to refresh the old design with a cozy and minimalist look. The ultimate goal was to build on the value the platform already offers its users by improving UX, reducing clutter, strengthening organization and navigation, and enhancing social and book discovery features.",
  introText2:
    "My original vision for the redesign was to give users the warmth and comfort of walking into a local bookstore. However, after surveying 39 users, I shifted my direction to focus more on UX improvements and a design that felt authentic to Goodreads’ parent company, Amazon. The goal was to present existing features in a more user-friendly way while still capturing the cozy feeling of curling up with a good book.",
  introImg: "gr-home2",
  colors: ["#bfc8a3", "#37421c", "#e0d5c9", "#f7f3ee", "#38291e"],
  colorsWhiteText: [true, true, false, false, true],
  processText:
    "I began the project with a brief user experience survey to better understand pain points with the existing Goodreads platform. The survey was distributed across social media groups and my university network. While my respondents were not fully representative of Goodreads’ overall user base, the responses still provided valuable insight into user frustrations, preferences, and the features they valued most.<br><br>After reviewing the responses, I created six user personas to represent the platform’s wide range of users. Two key personas became the primary focus of the redesign: “Gen-Z Zara,” representing younger users, and “Perfectionist Page,” representing the most dissatisfied users overall. I also summarized common trends and focused closely on the feedback users agreed on most.<br><br>Users identified logging books, tracking reading progress, and social interaction as the platform’s most important features. However, many users were unaware of Goodreads’ existing social tools, which inspired navigation updates such as a dedicated Connect tab, a more expressive profile page, and a “See What Others Are Reading” section on the homepage. Survey responses also described the site as outdated and cluttered, with users preferring a more minimalist and motivating experience. To address this, I added reader statistics inspired by Spotify Wrapped along with visual progress bars and achievement elements to make tracking reading feel more engaging and rewarding.",
  processImg: "genzzara",
  processImg2: "perfectionistpaige",
  carouselTitle: null,
  carouselImgs: [
    "1gr-wiref-home",
    "2gr-wiref-home",
    "3gr-wiref-shelves",
    "4gr-wiref-profile",
    "5gr-home",
    "6gr-home",
    "7gr-home",
    "8gr-profile",
  ],

  resultsText:
    "This project really helped me appreciate the value of user insight and research. At first, I planned to rely mostly on my own preferences since I use the site frequently myself, along with some quick research from online forums, but creating a survey and being able to ask users more in-depth questions pushed the design much further than it would’ve gone otherwise. It was also a great opportunity to strengthen my data handling skills, as I used JSON files for users and books alongside JavaScript to generate “currently reading” and “previously read” bookshelves, as well as personalized book suggestions Overall, I’m really happy with how the project turned out, and I plan to revisit it later to finish developing the bookshelf page, another key feature of the site that could benefit from UX improvements.",
  resultsImgMain: "gr-home",
  resultsImgShort: "gr-home-short",
  resultsVid: "case study previews/resultsVidPlaceholder.png",
  resultsDescriptions: [null],
};
const techFwdInfo = {
  folderName: "techFwd",
  title: "techForward",
  introText1:
    "TechForward is a conceptual brand I created as a foundation for exploring identity, messaging, and visual direction within the education technology space. It is not a real company, but rather a speculative brand designed to imagine what a future-forward learning platform could look and feel like. From this concept, I developed a logo and then expanded it into a single-page website to bring the brand to life in a tangible, interactive way.",
  introText2:
    "The direction of TechForward is rooted in the idea of making education more engaging, personalized, and emotionally resonant for students, parents, and educators. The concept explores how learning can move beyond traditional limitations by connecting subjects through student interests, encouraging self-guided progress, and supporting real-world application. The brand was also shaped by the emotional outcome it aims to evoke—confidence, excitement, and a sense of empowerment around the future of education.",
  introImg: "techFwdLogo",
  colors: ["#021e3b", "#e74b3c", "#1abc9d", "#f8d236", "#f0f2f4", "#0c0c0c"],
  colorsWhiteText: [true, true, true, true, false, true],
  processText:
    "The design process began with a creative brief to explore and define the brand’s identity, helping establish a clear direction for tone, purpose, and visual language. From there, I developed user personas to better understand the needs and motivations of the intended audiences, which informed key design decisions throughout the project. I focused on creating a structure that felt data-driven yet approachable, balancing trust and innovation with warmth and accessibility. From this foundation, I built out a single-page website that organizes the concept into a cohesive narrative, using layout, typography, and interaction to reflect the core ideas of adaptability, personalization, and modern learning.",
  processImg: "petra",
  processImg2: "Frank",
  carouselTitle: null,
  carouselImgs: null,

  resultsText:
    "This project really helped me appreciate the value of user insight and research. At first, I planned to rely mostly on my own preferences since I use the site frequently myself, along with some quick research from online forums, but creating a survey and being able to ask users more in-depth questions pushed the design much further than it would’ve gone otherwise. It was also a great opportunity to strengthen my data handling skills, as I used JSON files for users and books alongside JavaScript to generate “currently reading” and “previously read” bookshelves, as well as personalized book suggestions Overall, I’m really happy with how the project turned out, and I plan to revisit it later to finish developing the bookshelf page, another key feature of the site that could benefit from UX improvements.",
  resultsImgMain: "techfwd",
  resultsImgShort: "techfwd",
  resultsVid: "case study previews/resultsVidPlaceholder.png",
  resultsDescriptions: [null],
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const projects = {
  gr: grInfo,
  case: caseInfo,
};

const project = projects[projectId];

// if (!project) {
//   console.error("Project not found:", projectId);
// } else {
//   fillProjectPage(project);
// }

fillProjectPage(techFwdInfo);

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

  if (project.colors.length === 6) {
    colorsContainer.classList.add("six-colors");
  } else {
    colorsContainer.classList.remove("six-colors");
  }

  if (project.colors.length === 5) {
    colorsContainer.classList.add("five-colors");
  } else {
    colorsContainer.classList.remove("five-colors");
  }

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
      `<div class="crop-area clickable"><img src="${fixImgFileName(
        project.processImg,
        folder,
        "jpg"
      )}" alt=""></div>`
    );
  }

  if (project.processImg2) {
    processImgs.insertAdjacentHTML(
      "beforeend",
      `<div class="crop-area clickable"><img src="${fixImgFileName(
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

  const iterationsE = document.getElementById("iterations");
  if (!project.carouselImgs || project.carouselImgs.length === 0) {
    iterationsE.classList.add("hide");
  } else {
    iterationsE.classList.remove("hide");
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
  }

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
        class="main-img clickable"
        src="${src}" 
        alt="${project.title} final result"
      >
    `;
  }

  window.addEventListener("resize", () => {
    renderResultsImage(project, folder);
  });

  // Results video / placeholder
  const resultsVideo = document.getElementById("results-video");

  const placeholder = "case study previews/resultsVidPlaceholder.png";

  if (!resultsVideo) return;

  if (project.resultsVid === placeholder) {
    resultsVideo.innerHTML = `
    <img
      src="../images/${placeholder}"
      alt="image says work in progress"
    />
  `;
  } else {
    resultsVideo.innerHTML = `
      <video muted loop playsinline>
        <source src="${project.resultsVid}" type="video/mp4">
      </video>
    `;
  }
}

// fillProjectPage(projects[0]);

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
