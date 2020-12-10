
// variables
var mainPage = document.querySelector('.main-cover');


//event listeners
window.onload = getRandomCover();



var saveCovers = [];
var currentCover;

//functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)]
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)]
  //this is assigning the data model to 'a new cover' below
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2)

mainPage.innerHTML = `
  <section class="main-cover">
    <img class="cover-image" src="${currentCover.cover}">
    <h2 class="cover-title">${currentCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
    <img class="price-tag" src="">
    <img class="overlay" src="./assets/overlay.png">
  </section>
  `
};
