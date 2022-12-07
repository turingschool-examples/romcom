// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTag1 = document.querySelector('.tagline-1');
var coverTag2 = document.querySelector('.tagline-2');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var randomImageIndex = getRandomIndex(covers); // number between 0-27
var randomTitleIndex = getRandomIndex(titles);
var randomTag1Index = getRandomIndex(descriptors);
var randomTag2Index = getRandomIndex(descriptors);

var currentCover  = new Cover(covers[randomImageIndex], titles[randomTitleIndex], descriptors[randomTag1Index], descriptors[randomTag2Index]);


// Add your event listeners here 👇

document.addEventListener('load', currentCover);

// Create your event handlers and other functions here 👇




// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomPoster() {

}







// **Iteration 0 **
// When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors
// -- We know we need an event listener to generate a random [moviePoster] as soon as the page loads
// -- We know we need three functions(?)
// -- We know we will need to interpolate the tagline1 and tagline2 properties
// Every time the user clicks the Show New Random Cover button, a new random cover is created
// -- We know we need an event listener to listen for when a user clicks the appropriate button - this click will call all of the random functions (image, title, tagline(s))
//    hint: you may need to update the value of the provided currentCover variable
//    hint: use that Cover class!
// Every time the user clicks the Show New Random Cover button, the random cover is displayed
// -- We need to push the randomly generated movieCover to the <main cover> class
//    hint: you may need to create a function that displays information on the DOM