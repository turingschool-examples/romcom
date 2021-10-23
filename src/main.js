var currentCover = document.querySelector(".cover-image");
var currentTitle = document.querySelector(".cover-title");
var currentDescriptors = document.querySelector(".tagline");
var coverButton = document.querySelector(".random-cover-button");
var makeNewButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var viewHomeButton = document.querySelector(".home-button");

// ITERATION 0: This code randomizes book on home page load, currently turned off to troubleshoot iteration 3:
// currentCover.src = covers[Math.floor(Math.random() * covers.length)];
// currentTitle.innerText = titles[Math.floor(Math.random() * titles.length)];
// currentDescriptors.innerText = "A tale of " + descriptors[Math.floor(Math.random() * descriptors.length)] + " and " + descriptors[Math.floor(Math.random() * descriptors.length)];

// ITERATION 1:
coverButton.addEventListener("click", changeCover);
function changeCover() {
  currentCover.src = covers[Math.floor(Math.random() * covers.length)];
  currentTitle.innerText = titles[Math.floor(Math.random() * titles.length)];
  currentDescriptors.innerText = "A tale of " + descriptors[Math.floor(Math.random() * descriptors.length)] + " and " + descriptors[Math.floor(Math.random() * descriptors.length)];
};

//ITERATION 2:
makeNewButton.addEventListener("click", makeNewPage);
function makeNewPage() {
  document.getElementsByClassName('view home-view')[0].style.display = 'none';
  document.getElementsByClassName('view form-view')[0].style.display = 'block';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('.make-new-button')[0].style.display = 'none';
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

// Iteration 3
var formNewCoverImage = document.querySelector(".user-cover");
var formNewTitleText = document.querySelector(".user-title");
var formNewFirstDescriptorText = document.querySelector(".user-desc1");
var formNewSecondDescriptorText = document.querySelector(".user-desc2");
var formCreateBookButton = document.querySelector(".create-new-book-button");

///***TROUBLESHOOTING SHORT VERSION Create book button on Form Page
formCreateBookButton.addEventListener("click", createFormBook);
function createFormBook() {
  currentCover.src = formNewCoverImage.value;
  currentTitle.innerText = formNewTitleText.value;
  currentDescriptors.innerText = "A tale of " + formNewFirstDescriptorText.value + " and " + formNewSecondDescriptorText.value;
}

// ///***SAME AS ABOVE, LONGER VERSION WITH CLASS CREATION AND IF/THEN EMPTY VALUE CHECK
// formCreateBookButton.addEventListener("click", createFormBook);
// function createFormBook() {
//   //if (!formNewCoverImage || !formNewTitleText || !formNewFirstDescriptorText || !formNewSecondDescriptorText) {
//   //  window.alert("You need to fill out all the forms");
//   //} else {
//   ///***code to make the object, untested but should be close if not working)
//   //new Cover(formNewCoverImage, formNewTitleText, formNewFirstDescriptorText, new2ndDescriptorText, formCreateBookButton)
//   ///***This should work, but on homepage load it has a default book. We need to find that code and make it an either or, specifically "if book form then bookform, if not then default"
//   currentCover.src = formNewCoverImage.value;
//   currentTitle.innerText = formNewTitleText.value;
//   currentDescriptors.innerText = "A tale of " + formNewFirstDescriptorText.value + " and " + formNewSecondDescriptorText.value;
//   //}
// }


new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")

// Add your event listeners here 👇 (*********ADD FALSE IF IT DOESN'T WORK)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }


// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
