// Create variables targetting the relevant DOM elements here 👇
var randomButton = document.querySelectorl("random-cover-button")

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = document.querySelector(".cover-image");

// Add your event listeners here 👇
randomButton.addEventListener("click", randomizeCover);

  function randomizeCover(savedCovers) {
    return Math.floor(Math.random() * savedCovers.length)
  }
//? will this randomizer function work if I insert the variable covers from data.js
currentCover.innerHTML = randomizeCover()



// Create your event handlers and other functions here 👇


// We've provided one function to get you started
//function getRandomIndex(array) {
//return Math.floor(Math.random() * array.length);{

  //}
