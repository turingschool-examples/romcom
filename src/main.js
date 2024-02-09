// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTag1 = document.querySelector('.tagline-1')
var coverTag2 = document.querySelector('.tagline-2')

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', getRandomNovel);

// Create your event handlers and other functions here 👇


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



function getRandomNovel() {
  var randomCoverIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var randomDescriptorIndex = getRandomIndex(descriptors);
  var randomDescriptorIndex2 = getRandomIndex(descriptors);

  var newNovel = createCover(
    covers[randomCoverIndex],
    titles[randomTitleIndex],
    descriptors[randomDescriptorIndex],
    descriptors[randomDescriptorIndex2]
  );

  currentCover = newNovel;

  coverTitle.innerText = newNovel.title;
  coverTag1.innerText = newNovel.tagline1;
  coverTag2.innerText = newNovel.tagline2;
  coverImage.setAttribute("src", newNovel.coverImg);

  return currentCover;
}