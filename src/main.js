// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
console.log(randomCoverButton)

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', createRandomCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomCoverImage(covers) {
  var x = getRandomIndex(covers);
  coverImage.src = covers[x];
  return covers[x]
};


function randomTitle(titles) {
  var x = getRandomIndex(titles);
  return bookTitle.innerText = titles[x];
  return titles[x]
}

function randomTagline1(descriptors) {
  var x = getRandomIndex(descriptors);
  tagline1.innerText = descriptors[x];
  return descriptors[x]
}

function randomTagline2(descriptors) {
  var y = getRandomIndex(descriptors);
  tagline2.innerText = descriptors[y];
  return descriptors[y]
}


randomCoverImage(covers);
randomTitle(titles);
randomTagline1(descriptors);
randomTagline2(descriptors);

var cover1 = randomCoverImage(covers);
var title1 = randomTitle(titles)
var descriptor1 = randomTagline1(descriptors)
var descriptor2 = randomTagline2(descriptors)


function createRandomCover() {
  currentCover = new Cover (cover1, title1, descriptor1, descriptor2);
  console.log(currentCover)
}
