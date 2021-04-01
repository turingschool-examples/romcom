// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover
var covers = [
  './assets/bluebrocade.jpg',
  './assets/dance.jpg',
  './assets/embrace.png',
  './assets/fire.png',
  './assets/frock.png',
  './assets/glorious.jpg',
  './assets/golden.jpg',
  './assets/maskedmeeting.jpg',
  './assets/masquerade.jpg',
  './assets/moonlitmeadow.jpg',
  './assets/office.png',
  './assets/picnic.jpg',
  './assets/pirate.jpg',
  './assets/prairie.jpg',
  './assets/redrenaissance.jpg',
  './assets/regency.jpg',
  './assets/ribbons.jpg',
  './assets/roses.jpg',
  './assets/ruffles.jpg',
  './assets/scroll.jpg',
  './assets/shine.png',
  './assets/smolder.png',
  './assets/snow.jpg',
  './assets/sparkles.jpg',
  './assets/stripes.png',
  './assets/wildwest.jpg',
  './assets/windswept.jpg',
];
var titles = [
  "Passionate Moonlight",
  "Love's Misery",
  "Roses and Flame",
  "Innocent Roses",
  "Silk and Sense",
  "Hearts Aflame",
  "Fiery Passion",
  "Stolen Hearts",
  "Secrets and Silk",
  "Dreams of Fire",
  "Lovers and Enemies",
  "Passion's Embrace",
  "Harbinger by Moonlight",
  "Rouge Red",
  "Moonlit Mysteries",
  "Crimson Roses",
  "Destiny's Fires",
  "Proposals and Passion",
  "Silk Wedding",
  "Masked Seduction",
  "Crimson Masquerade",
  "Stolen Rubies",
  "Emerald Eyes",
  "Sapphire Skies",
  "Opal Passions"
];
var descriptors = [
  "passion",
  "glory",
  "romance",
  "woe",
  "sorrow",
  "pain",
  "ardor",
  "devotion",
  "excitement",
  "fervor",
  "rage",
  "spirit",
  "zeal",
  "ecstasy",
  "fire",
  "storms",
  "tempests",
  "rapture",
  "ire",
  "jealousy",
  "exhilaration",
  "bliss",
  "enchantment",
  "paradise",
  "calamity",
  "disaster",
  "heartache",
  "misfortune",
  "agony",
  "curses",
  "blessings",
  "melancholy"
];
var htmlImage = document.querySelector('.cover-image');
var htmlTitle = document.querySelector('.cover-title');
var htmlTagline1 = document.querySelector('.tagline-1');
var htmlTagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

// Add your event listeners here 👇

window.addEventListener("load", displayRandomHomePage);
// window.addEventListener("load", displayRandomImage);
// window.addEventListener("load", displayRandomTitle);
// window.addEventListener("load", displayRandomTagline1);
// window.addEventListener("load", displayRandomTagline2);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started

function getRandomImage() {
  var cover = covers[Math.floor(Math.random() * covers.length)]
  return cover;
}
function displayRandomImage() {
  htmlImage.src = getRandomImage();
  // console.dir(htmlImage);
  // console.log(htmlImage);
}

function getRandomTitle() {
  var title = titles[Math.floor(Math.random() * titles.length)]
  return title;
}
function displayRandomTitle() {
  htmlTitle.innerText = getRandomTitle();
}

function getRandomTagline1() {
  var tagline1 = descriptors[Math.round(Math.random() * descriptors.length)]
  return tagline1;
}
function displayRandomTagline1() {
  htmlTagline1.innerText = getRandomTagline1();
}

function getRandomTagline2() {
  var tagline2 = descriptors[Math.round(Math.random() * descriptors.length)]
  return tagline2;
}
function displayRandomTagline2() {
  htmlTagline2.innerText = getRandomTagline2();
}

function displayRandomHomePage() {
  displayRandomImage();
  displayRandomTitle();
  displayRandomTagline1();
  displayRandomTagline2();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};






















//
// function createRandomHomePage() {
//   var cover = covers[getRandomIndex(covers)];
//   var title = titles[getRandomIndex(titles)];
//   var tagline1 = descriptors[getRandomIndex(descriptors)];
//   var tagline2 = descriptors[getRandomIndex(descriptors)];
//   currentCover = new Cover(cover, title, tagline1, tagline2);
//   displayRandomHomePage();
// }
//
// function displayRandomHomePage() {
//   htmlImage.src = currentCover.coverImgSrc;
//   htmlTitle.innerText = currentCover.title;
//   htmlTagline1.innerText = currentCover.descriptor1;
//   htmlTagline2.innerText = currentCover.descriptor2;
// }

//
