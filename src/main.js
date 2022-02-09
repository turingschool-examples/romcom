//When the page loads, we should see a cover with a randomly
//selected image, title, and tagline which includes two random descriptors

//our pseudocode below...
// covers are located in the assets folder
// we will need some kind of random generator:
  // that displays a selected image, a title, and a tag-line with
  //two random descriptors that cannot be the same (might need to concatenate or interpolate)

//contents:
//Cover class is in the cover.js file
//the variable covers (an array of covers, descripters, titles) are in data.js
//main is where we will edit.
//DOM features in index.html and styles.css

// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  //new Cover is taking in a link, a descriptor
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
console.log(savedCovers);

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
