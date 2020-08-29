// Create variables targetting the relevant DOM elements here 👇
var cover =  document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener("load", function(){
  getRandomBook();
});

randomCoverButton.addEventListener("click", function(){ 
  getRandomBook();
 }); 


// Create your event handlers and other functions here 👇
function getRandomBook() {
  var randomCover = getRandomIndex(covers);
  var randomTitle = getRandomIndex(titles);
  var randomDescriptor = getRandomIndex(descriptors);
  var randomDescriptor2 = getRandomIndex(descriptors);

  var currentCover = new Cover(randomCover, randomTitle, randomDescriptor, randomDescriptor2);

  cover.src = currentCover.cover
  title.innerText = currentCover.title
  descriptor1.innerText = currentCover.tagline1
  descriptor2.innerText = currentCover.tagline2

  console.log(currentCover);
}

// We've provided one function to get you started
function getRandomIndex(arr) {
  // return Math.floor(Math.random() * arr.length);
   return arr[Math.floor(Math.random() * arr.length)]
}
//
// getRandomIndex(covers)
// getRandomIndex(descriptors)
// getRandomIndex(titles)
