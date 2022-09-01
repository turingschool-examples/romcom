// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button')
var image = document.querySelector('.cover-image')
var title = document.querySelector('.cover-title')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')


var customImage = getRandomItem(covers);
var customTitle = getRandomItem(titles);
var customDiscr1 = getRandomItem(descriptors);
var customDiscr2 = getRandomItem(descriptors);

image.src = customImage
title.innerText = customTitle
tagLine1.innerText = customDiscr1
tagLine2.innerText = customDiscr2



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(customImage, customTitle, customDiscr1, customDiscr2 )


// Add your event listeners here 👇
// randomCoverButton.addEventListener("click", showRandomCover)
var customizeBtn = randomCoverButton;
customizeBtn.addEventListener("click", randomizeBtn);



// Create your event handlers and other functions here 👇
function getRandomItem(array) {
  var randomIndex = getRandomIndex(array);
  return array[randomIndex];
}

function randomizeBtn() {
  image.src = getRandomItem(covers);
  title.innerText = getRandomItem(titles);
  tagLine1.innerText = getRandomItem(descriptors);
  tagLine2.innerText = getRandomItem(descriptors);
}

// console.log(getRandomItem(covers));

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
