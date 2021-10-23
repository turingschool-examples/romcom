var currentCoverImage = document.querySelector(".cover-image");
var currentTitle = document.querySelector(".cover-title");
var currentDescriptors = document.querySelector(".tagline");
var showNewRandomCoverButton = document.querySelector(".random-cover-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var viewHomeButton = document.querySelector(".home-button");
var homeView = document.querySelector(".home-view")
var formView = document.querySelector(".form-view")
var savedView = document.querySelector(".saved-view")

// ITERATION 0: This code randomizes book on home page load, currently turned off to troubleshoot iteration 3:
currentCoverImage.src = covers[Math.floor(Math.random() * covers.length)];
currentTitle.innerText = titles[Math.floor(Math.random() * titles.length)];
currentDescriptors.innerText = "A tale of " + descriptors[Math.floor(Math.random() * descriptors.length)] + " and " + descriptors[Math.floor(Math.random() * descriptors.length)];

// ITERATION 1:
showNewRandomCoverButton.addEventListener("click", changeCover);
function changeCover() {
  currentCoverImage.src = covers[Math.floor(Math.random() * covers.length)];
  currentTitle.innerText = titles[Math.floor(Math.random() * titles.length)];
  currentDescriptors.innerText = "A tale of " + descriptors[Math.floor(Math.random() * descriptors.length)] + " and " + descriptors[Math.floor(Math.random() * descriptors.length)];
};

//ITERATION 2:
makeYourOwnCoverButton.addEventListener("click", makeNewPage);
function makeNewPage() {
  homeView.classList.add("hidden")
  formView.classList.remove("hidden")
  viewSavedButton.classList.add("hidden")
  makeYourOwnCoverButton.classList.remove("hidden")
  viewHomeButton.classList.remove("hidden")
  saveCoverButton.classList.add("hidden")
  showNewRandomCoverButton.classList.add("hidden")
};

viewSavedButton.addEventListener("click", viewSavedPage);
function viewSavedPage() {
  homeView.classList.add("hidden")
  formView.classList.add("hidden")
  savedView.classList.remove("hidden")
  saveCoverButton.classList.add("hidden")
  showNewRandomCoverButton.classList.add("hidden")
  viewHomeButton.classList.remove("hidden")
};

viewHomeButton.addEventListener("click", viewHomePage);
function viewHomePage() {
  homeView.classList.remove("hidden")
  formView.classList.add("hidden")
  savedView.classList.add("hidden")
  saveCoverButton.classList.remove("hidden")
  showNewRandomCoverButton.classList.remove("hidden")
  viewHomeButton.classList.add("hidden")
}

// Iteration 3
var formNewCoverImage = document.querySelector(".user-cover");
var formNewTitleText = document.querySelector(".user-title");
var formNewFirstDescriptorText = document.querySelector(".user-desc1");
var formNewSecondDescriptorText = document.querySelector(".user-desc2");
var formMakeBookButton = document.querySelector(".create-new-book-button");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

///***TROUBLESHOOTING SHORT VERSION Create book button on Form Page
formMakeBookButton.addEventListener("click", createFormMakeBook);
function createFormMakeBook() {
  event.preventDefault()

  covers.push(formNewCoverImage.value)
  titles.push(formNewTitleText.value)
  descriptors.push(formNewFirstDescriptorText.value)
  descriptors.push(formNewSecondDescriptorText.value)

  var tempBook = new Cover(formNewCoverImage.value, formNewTitleText.value, formNewFirstDescriptorText.value, formNewSecondDescriptorText.value)
  savedCovers.push(tempBook)

  currentCoverImage.src = covers[covers.length - 1];
  currentTitle.innerText = titles[titles.length - 1];
  currentDescriptors.innerText = "A tale of " + descriptors[descriptors.length - 2] + " and " + descriptors[descriptors.length - 1];

  viewHomePage()

}

// ITERATION 4

  // var tempBook = new Cover(formNewCoverImage.value, formNewTitleText.value, formNewFirstDescriptorText.value, formNewSecondDescriptorText.value)
  // savedCovers.push(tempBook)



// ///***SAME AS ABOVE, LONGER VERSION WITH CLASS CREATION AND IF/THEN EMPTY VALUE CHECK
// formCreateBookButton.addEventListener("click", createFormBook);
// function createFormBook() {
//   //if (!formNewCoverImage || !formNewTitleText || !formNewFirstDescriptorText || !formNewSecondDescriptorText) {
//   //  window.alert("You need to fill out all the forms");
//   //} else {
//   ///***code to make the object, untested but should be close if not working)
//   //new Cover(formNewCoverImage, formNewTitleText, formNewFirstDescriptorText, new2ndDescriptorText)
//   ///***This should work, but on homepage load it has a default book. We need to find that code and make it an either or, specifically "if book form then bookform, if not then default"
//   currentCoverImage.src = formNewCoverImage.value;
//   currentTitle.innerText = formNewTitleText.value;
//   currentDescriptors.innerText = "A tale of " + formNewFirstDescriptorText.value + " and " + formNewSecondDescriptorText.value;
//   //}
// }



var currentCover;

// Add your event listeners here 👇 (*********ADD FALSE IF IT DOESN'T WORK)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }


// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
