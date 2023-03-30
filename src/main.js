// Create variables targetting the relevant DOM elements here 👇
var fullCover = document.querySelector(".main-cover");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverDescriptor1 = document.querySelector(".tagline-1");
var coverDescriptor2 = document.querySelector(".tagline-2");
var showNewRandomCoverButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
showNewRandomCoverButton.addEventListener('click', getRandomCover);

window.onload = (event) => {
  currentCover = createCover(
    getRandomCover(),
    getRandomTitle(),
    getRandomDesc(),
    getRandomDesc()
  );

  coverImage.src = currentCover.coverImg;
  coverTitle.innerHTML = currentCover.title;
  coverDescriptor1.innerHTML = currentCover.tagline1;
  coverDescriptor2.innerHTML = currentCover.tagline2;
};

// Create your event handlers and other functions here 👇

function getRandomImage() {
  var randomIndex = getRandomIndex(covers);
  return covers[randomIndex];
}

function getRandomTitle() {
  var randomIndex = getRandomIndex(titles);
  return titles[randomIndex];
}

function getRandomDesc() {
  var randomIndex = getRandomIndex(descriptors);
  return descriptors[randomIndex];
}

function getRandomCover() {
  var randomCover = createCover(
    getRandomImage(), 
    getRandomTitle(), 
    getRandomDesc(), 
    getRandomDesc()
    );
  fullCover.innerHTML = `<img class="cover-image" src="${randomCover.coverImg}">
    <h2 class="cover-title">${randomCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${randomCover.tagline1}</span> and <span class="tagline-2">${randomCover.tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">`
  return randomCover;
}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
