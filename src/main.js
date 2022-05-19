// Create variables targetting the relevant DOM elements here 👇
var coverPic = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagLine1 = document.querySelector('.tagline-1')
var coverTagLine2 = document.querySelector('.tagline-2')
var priceTag = document.querySelector('.price-tag')
var randomBtn = document.querySelector('.random-cover-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here 👇


randomBtn.addEventListener('click', randomizeCover);


// Create your event handlers and other functions here 👇
function randomizeCover() {
  var randomNumC = getRandomIndex(covers);
  var randomNumT = getRandomIndex(titles);
  var randomNumD = getRandomIndex(descriptors);
  var randomNumD2 = getRandomIndex(descriptors);
  var bookCoverPath = covers[randomNumC];
  var bookTitle = titles[randomNumT];
  var bookTagLines1 = descriptors[randomNumD];
  var bookTagLines2 = descriptors[randomNumD2];
  coverPic.src = bookCoverPath;
  coverTitle.innerText = bookTitle;
  coverTagLine1.innerText = bookTagLines1;
  coverTagLine2.innerText = bookTagLines2;
};



// We've provided one function to get you started


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
//1 function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
//2 function getRandomIndex(savedCovers) {
//   return Math.floor(Math.random() * savedCovers.length);
// }
