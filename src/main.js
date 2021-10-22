var currentCover = document.querySelector(".cover-image");
var currentTitle = document.querySelector(".cover-title");
var currentDescriptors = document.querySelector(".tagline");
var coverButton = document.querySelector(".random-cover-button");
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

currentCover.src = covers[Math.floor(Math.random() * covers.length)];
currentTitle.innerText = titles[Math.floor(Math.random() * titles.length)];
currentDescriptors.innerText = "A tale of " + descriptors[Math.floor(Math.random() * descriptors.length)] + " and " + descriptors[Math.floor(Math.random() * descriptors.length)];

// just need to target the button in place of current.Cover below
coverButton.addEventListener("click", changeCover);
function changeCover() {
    currentCover.src = covers[Math.floor(Math.random() * covers.length)];
}


// Add your event listeners here 👇 (*********ADD FALSE IF IT DOESN'T WORK)


// Create your event handlers and other functions here 👇
// function getRandomCover(covers) {
//   return currentCover.src = covers[Math.floor(Math.random() * covers.length)];
// }
//   currentCover.src = covers[3];
 //var item = items[Math.floor(Math.random()*items.length)];

//
// function getRandomTitle(titles) {
//   return Math.floor(Math.random() * titles.length);
// }
//
// function getRandomDescriptions(descriptors) {
//   return Math.floor(Math.random() * descriptors.length);
// }

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

//randomizedCover() {
//   //on mouse click
//   //button name in HTML: random-cover-button
//   //pick random cover from array that's not currently selected
//   //return new cover image
// }
// //is this important? var box = document.querySelector('.box');
// var randomCoverButton = document.querySelector('.change-cover');
// changeCoverButton.addEventListener('click', changeCover);
// function changeCover() {
//   var currentCover = //randomized array function of covers;
//   //pick one at random
//   box.style.backgroundCover = currentCover;
//}

// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
