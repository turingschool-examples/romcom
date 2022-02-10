
// Create variables targetting the relevant DOM elements here 👇
document.querySelector('.cover-title').innerText = titles[getRandomIndex(titles)];
document.querySelector('.tagline-1').innerText = descriptors[getRandomIndex(descriptors)];
document.querySelector('.tagline-2').innerText = descriptors[getRandomIndex(descriptors)];
document.querySelector('.cover-image').src = covers[getRandomIndex(covers)];



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = covers[getRandomIndex(covers)]
var currentTitle = titles[getRandomIndex(titles)];
var currentTagLine1 =descriptors[getRandomIndex(descriptors)];
var currentTagLine2 = descriptors[getRandomIndex(descriptors)];





// Add your event listeners here 👇
document.querySelector('.random-cover-button').onclick = function() {randomBook()};
document.querySelector('.view-saved-button').onclick = function() {savedCovers()};
document.querySelector('.make-new-button').onclick = function() {makeNewCover()};



// Create your event handlers and other functions here 👇
function randomBook() {
  document.querySelector('.cover-title').innerText = titles[getRandomIndex(titles)];
  document.querySelector('.tagline-1').innerText = descriptors[getRandomIndex(descriptors)];
  document.querySelector('.tagline-2').innerText = descriptors[getRandomIndex(descriptors)];
  document.querySelector('.cover-image').src = covers[getRandomIndex(covers)];
}

function makeNewCover() {
  document.querySelector('.main-cover').hidden = true;
  document.querySelector('.random-cover-button').hidden = true;
  document.querySelector('.save-cover-button').hidden = true;

  elements = document.getElementsByClassName("hidden");
  console.log(elements);
  elements[0].classList.remove('hidden');
  elements[1].classList.remove('hidden');
}

  function savedCovers(){
    elements = document.getElementsByClassName("hidden");
    console.log(elements);
    elements[1].classList.remove('hidden');
  }




// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
