// Create variables targetting the relevant DOM elements here 👇
var randomCoverBtn = document.querySelector('.random-cover-button');
var coverImg = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverBtn.addEventListener("click", displayCover);
window.addEventListener("load", displayCover);

// Create your event handlers and other functions here 👇

function getAllIndexs() {
  var idx = {
    cover: getRandomIndex(covers),
    title: getRandomIndex(titles),
    descrip1: getRandomIndex(descriptors),
    descrip2: getRandomIndex(descriptors),
  };
  return idx;
}

function displayCover() {
  var idx = getAllIndexs();
  currentCover = createCover(covers[idx.cover], titles[idx.title], descriptors[idx.descrip1], descriptors[idx.descrip2]);
  coverImg.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
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
