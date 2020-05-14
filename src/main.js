// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function changeCover() {
  currentCover += document.querySelector(".cover-image");
   = getRandomIndex(covers);
   // we want to grab info from line 19 and
   // change it to get random cover
};

changeCover();


/*
create a function
this function will invoke the getRandomIndex function
the getRandomIndex function will take in the covers, titles, descriptors
as parameters (3 seperate functions?)
those functions will return new cover , etc.

start with covers
we want this function to invoke the getRandomIndex and pull
and random image that is aligned with the getRandomIndex number
and return it (on to the web page)


*/
