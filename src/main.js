// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var coverImage = document.querySelector('.cover-image');
var randomCoverButton = document.querySelector('.random-cover-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
//this will be an array of new Cover instances
];



// Add your event listeners here 👇
randomCoverButton.addEventListener('click',randomize);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  var i = Math.floor(Math.random() * array.length);
  return array[i]
}

function randomize() {
  title.innerText = getRandomIndex(titles);
  tagline1.innerText = getRandomIndex(descriptors);
  tagline2.innerText = getRandomIndex(descriptors);
    if (tagline1 === tagline2) {
      tagline2.innerText = getRandomIndex(descriptors);
    };
  coverImage.src = getRandomIndex(covers);
}
//   var randomTagline1 = getRandomIndex(descriptors);
//   tagline1.innerText = randomTagline1;
//
//   var randomTagline2 = getRandomIndex(descriptors);
//   tagline2.innerText = randomTagline2;
//     if (tagline1 === tagline2) {
//       randomTagline2 = getRandomIndex(descriptors);
//       tagline2.innerText = randomTagline2;
//     };
//     //come back to this if statement
//   var randomImage = getRandomIndex(covers);
//   coverImage.src = randomImage;
// }

randomize();

var currentCover = new Cover(coverImage.src, title.innerText , tagline1.innerText, tagline2.innerText);
