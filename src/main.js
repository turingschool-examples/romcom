// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇

var randomTitle = getRandomIndex(titles)

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


// **Iteration 0 **
// When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors
// -- We know we need an event listener to generate a random [movieCover] as soon as the page loads
// -- We know we need three functions(?)
// -- We know we will need to interpolate the tagline1 and tagline2 properties
// Every time the user clicks the Show New Random Cover button, a new random cover is created
// -- We know we need an event listener to listen for when a user clicks the appropriate button - this click will call all of the random functions (image, title, tagline(s))
//    hint: you may need to update the value of the provided currentCover variable
//    hint: use that Cover class!
// Every time the user clicks the Show New Random Cover button, the random cover is displayed
// -- We need to push the randomly generated movieCover to the <main cover> class
//    hint: you may need to create a function that displays information on the DOM