// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var firstTagline = document.querySelector(".tagline-1");
var secondTagline = document.querySelector(".tagline-2");


var randomCoverButton = document.querySelector('.random-cover-button');





// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


var currentCover = new Cover();
// console.log(currentCover);

// Add your event listeners here 👇

window.addEventListener('load', createRandomCover);
randomCoverButton.addEventListener('click', createRandomCover);



// Add your event listeners here 👇

window.addEventListener('load', getRandomCover);


// Create your event handlers and other functions here 👇




//make a createRandomCover function
//this func handles the creation of the cover class

function createRandomCover() {



  changeCover();
  changeTitle();
  changeFirstDescriptor();
  changeSecondDescriptor();
}

//updateDom
//a func that handles all invocations of manipulating

//updateCoverImage
//function that updates the image property in your class
function changeCover() {
  var index = getRandomIndex(covers);
  coverImage.src = covers[index];
  currentCover.cover = covers[index];
  console.log(currentCover);
}

function changeTitle() {
  var index = getRandomIndex(titles);
  coverTitle.innerHTML = titles[index];
  currentCover.title = titles[index];
  // console.log(currentCover);
}

function changeFirstDescriptor() {
  var index = getRandomIndex(descriptors);
  firstTagline.innerHTML = descriptors[index];
  currentCover.tagline1 = descriptors[index];
}

function changeSecondDescriptor() {
  var index = getRandomIndex(descriptors);
  secondTagline.innerHTML = descriptors[index];
  currentCover.tagline2 = descriptors[index];
  // console.log(currentCover);
}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
