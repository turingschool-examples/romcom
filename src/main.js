// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagLine1 = document.querySelector('.tagline-1');
var coverTagLine2 = document.querySelector('.tagline-2');
var buttonRandomCover = document.querySelector('.random-cover-button');

// We've provided a few variables below

var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇
buttonRandomCover.addEventListener('click', init);

// Create your event handlers and other functions here 👇
function init() {
  currentCover = randomCover();
  updateCover();
};

function updateCover() {
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  coverTagLine1.innerText = currentCover.tagline1;
  coverTagLine2.innerText = currentCover.tagline2;
  console.log("I updated!");
};

// We've provided two functions to get you started

function getRandomIndex(array) {
  var randomIndex =  Math.floor(Math.random() * array.length);
  var randItem = array[randomIndex];
    return randItem;
};

console.log(getRandomIndex(covers));

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};

function randomCover() {
  return createCover(
    getRandomIndex(covers),
    getRandomIndex(titles),
    getRandomIndex(descriptors),
    getRandomIndex(descriptors)
    );
}


init();
// the arguments of our createCover function will be invocations of the getRandomIndex functions with the different
// arrays needed.
// We need to figure out how to get a random cover when the page is loaded. page load event listener? 
// what do we do with the currentCover variable given to us? Is it the invocation of the createCover function? 
// Do we need to update the value with the createCover invocation? 
// We need a function that will update the DOM elements with object values that are created. 