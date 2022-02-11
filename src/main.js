// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = Cover

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

// class RomCom {
//   constructor() {
//
//   }
// }



var randomCoverButton = document.querySelector(".random-cover-button");
var currentTitle = document.querySelector('.cover-title');
var currentImageSrc = document.querySelector('.cover-image').src = getRandomBookInfo(covers);
var currentTagLine1 = document.querySelector('.tagline-1');
var currentTagLine2 = document.querySelector('.tagline-2');


randomCoverButton.addEventListener("click", changeButton);
function changeButton() {
currentTitle.innerText = getRandomBookInfo(titles);
//currentImageSrc.innerText = getRandomBookInfo(covers);
currentImageSrc = document.querySelector('.cover-image').src = getRandomBookInfo(covers);

currentTagLine1.innerText = getRandomBookInfo(descriptors);
currentTagLine2.innerText = getRandomBookInfo(descriptors);
}

currentTitle.innerText = getRandomBookInfo(titles);
currentImageSrc = document.querySelector('.cover-image').src = getRandomBookInfo(covers);
//why doesnt line 39/49 work like 50
//currentImageSrc.innerText = getRandomBookInfo(covers);
currentTagLine1.innerText = getRandomBookInfo(descriptors);
currentTagLine2.innerText = getRandomBookInfo(descriptors);

function getRandomBookInfo(bookInfo) {
  return bookInfo[Math.floor(Math.random() * bookInfo.length)];
}
