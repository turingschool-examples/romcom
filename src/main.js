// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button')
var randomCoverImage = document.querySelector('.cover-image')
var randomCoverTitle = document.querySelector('.cover-title')
var randomDescriptor1 = document.querySelector('.tagline-1')
var randomDescriptor2 = document.querySelector('.tagline-2')
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', createNewCover);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createNewCover() {
    randomCoverImage.src = covers[getRandomIndex(covers)]
    randomCoverTitle.innerText = titles[getRandomIndex(titles)]
    randomDescriptor1.innerText = descriptors[getRandomIndex(descriptors)]
    randomDescriptor2.innerText = descriptors[getRandomIndex(descriptors)]
}
createNewCover()
