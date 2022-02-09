

// Create variables targetting the relevant DOM elements here 👇
var movieImg = document.querySelector(".cover-image");
var randomCoverBtn = document.querySelector(".random-cover-button");
var movieTitle = document.querySelector(".cover-title");
var movieDescription1 = document.querySelector(".tagline-1")
var movieDescription2 = document.querySelector(".tagline-2");
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
window.addEventListener("load", generateCoverImg)
randomCoverBtn.addEventListener("click", generateCoverImg);

// Create your event handlers and other functions here 👇

function generateCoverImg(){
  movieImg.src = covers[getRandomIndex(covers)]
  movieTitle.innerText = titles[getRandomIndex(titles)]
  movieDescription1.innerText = descriptors[getRandomIndex(descriptors)]
  movieDescription2.innerText = descriptors[getRandomIndex(descriptors)]
};

//movieImg.src = newCover;

//currentCover = new Cover(newImg);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
