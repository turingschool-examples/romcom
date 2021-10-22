var currentCover = document.querySelector(".cover-image");
var currentTitle = document.querySelector(".cover-title");
var currentDescriptors = document.querySelector(".tagline");
var coverButton = document.querySelector(".random-cover-button");
var makeNewButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var viewHomeButton = document.querySelector(".home-button");



// Iteration 3
var newFormCoverImage = document.querySelector(".user-cover");
var newFormTitleText = document.querySelector(".user-title");
var newDescriptorText = document.querySelector(".user-desc1");
var new2ndDescriptorText = document.querySelector(".user-desc2");
var createBookButton = document.querySelector(".create-new-book-button");

createBookButton.addEventListener("click", addCoverText);

function addCoverText() {
  // coverButton.addEventListener("click", changeCover);

// Stretch Goal for empty text box fields

  // if (!newFormCoverValue || !newFormTitleText || !newDescriptorText || !new2ndDesscriptorText.value) {
  //   return “You need to fill out all the forms!“;
  //   } else {
  //   whatever it’s supposed to do when all forms are filled out

  currentCover.src = newFormCoverImage.value;
  currentTitle.innerText = newFormTitleText.value;
  currentDescriptors.innerText = "A tale of " + newDescriptorText.value + " and " + new2ndDescriptorText.value;
}


//***This should work! Syntax error for '{' - storing object
// new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows") {
//   constructor(newFormCoverImage.value, newFormTitleText.value, newDescriptorText.value, new2ndDescriptorText.value) {
//     this.coverText = newFormCoverImage.value;
//     this.formTitleText = newFormTitleText.value;
//     this.firstDescriptorText = newDescriptorText.value;
//     this.secondDescriptorText = new2ndDescriptorText.value;
//   }
// }




// currentCover.src = covers[Math.floor(Math.random() * covers.length)];
// currentTitle.innerText = titles[Math.floor(Math.random() * titles.length)];
// currentDescriptors.innerText = "A tale of " + descriptors[Math.floor(Math.random() * descriptors.length)] + " and " + descriptors[Math.floor(Math.random() * descriptors.length)];

coverButton.addEventListener("click", changeCover);
  function changeCover() {
    currentCover.src = covers[Math.floor(Math.random() * covers.length)];
};

makeNewButton.addEventListener("click", makeNewPage);
  function makeNewPage() {
    document.getElementsByClassName('view home-view')[0].style.display = 'none';
    document.getElementsByClassName('view form-view')[0].style.display = 'block';
    document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
    document.getElementsByClassName('view-saved-button')[0].style.display = 'none';
    document.getElementsByClassName('home-button')[0].style.display = 'block';
};

viewSavedButton.addEventListener("click", viewSavedPage);
  function viewSavedPage() {
    document.getElementsByClassName('view home-view')[0].style.display = 'none';
    document.getElementsByClassName('view form-view')[0].style.display = 'none';
    document.getElementsByClassName('view saved-view hidden')[0].style.display = 'block';
    document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
    document.getElementsByClassName('random-cover-button')[0].style.display = 'none';
    document.getElementsByClassName('home-button')[0].style.display = 'block';
};

viewHomeButton.addEventListener("click", viewHomePage);
 function viewHomePage() {
    document.getElementsByClassName('view home-view')[0].style.display = 'block';
    document.getElementsByClassName('view form-view')[0].style.display = 'none';
    document.getElementsByClassName('view saved-view hidden')[0].style.display = 'none';
    document.getElementsByClassName('save-cover-button')[0].style.display = 'block';
    document.getElementsByClassName('random-cover-button')[0].style.display = 'block';
    document.getElementsByClassName('home-button')[0].style.display = 'none';
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
