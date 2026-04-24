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
    "This project was primarily inspired by Case Vannon’s music itself, which I translated into several mood boards to guide the visual direction. Building on that foundation, I also drew inspiration from artists who influence his sound—The Lumineers, Matt Maeson, and Noah Kahan—to better understand the tone and emotional landscape of his work.<br>From there, I explored three distinct site directions. The first blended a modern aesthetic with organic elements, reflecting the indie and cinematic qualities of his sound. The second leaned into a more playful, scrapbook-inspired approach, capturing the raw, story-driven nature of his music and van-life experiences.<br>The final direction became a balance of both—pulling key elements from each concept to create an elevated scrapbook aesthetic that tells his story in a way that feels both refreshed and familiar.",
  processImg: null,
  processImg2: null,
  carouselTitle: null,
  carouselImgs: [
    "1caseMockup1-1",
    "2caseMockup1-1",
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
    "The final website translates Case’s cinematic, story-driven sound into a seamless digital experience. By blending modern and organic design elements with an elevated scrapbook aesthetic, the site captures both the polished and raw sides of his artistry—creating a brand that feels immersive, authentic, and true to who he is.<br>This project also expanded my technical skill set, as I learned how to develop a fully custom Shopify theme to support his needs. I used Adobe Creative Suite to design and produce custom visual assets, ensuring the final site felt cohesive, intentional, and aligned with his creative direction.",
  resultsImgMain: "caseHome",
  resultsVid: "case study previews/resultsVidPlaceholder.png",
  resultsDescriptions: ["Case Vannon's previous website."],
};

function fixImgFileName(fileName, folderName) {
  return `../images/${folderName}/${fileName}.png`;
}
