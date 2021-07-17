-var mainCover = document.quertySelector(".main-cover");
-var formView = document.quertySelector(".form-view");
-var savedView = document.quertySelector(".saved-view");
-var savedCoverSection = document.quertySelector(".saved-covers-section");
-var coverImage = document.quertySelector(".coverimage");
-var coverTitle = document.quertySelector(".cover-title
//change below to var descriptor1?
-var descriptor//1// = document.quertySelector(".tagline-1");
//.selector? what is this doing? change tagline2
-var descriptor2 = document.querySelector("tagline2");
-var randomCoverButton = document.querySelector(".random-cover-button");
-var makeNewCoverButton = document.querySelector(".make-new-button");
-var saveCoverButton = document.querySelector(".save-cover-button");
-var homeButton = document.querySelector(".home-button");
-var viewSavedButton = document.querySelector(".view-saved-button");
-var createNewButton = document.querySelector(".create-new-button");

//Not seeing these in examples:
var coverInput = document.querySelector("#cover");
var titleInput = document.querySelector("#title");
var descriptorInput1 = document.querySelector("#descriptor1");
var descriptorInput2 = document.querySelector("#descriptor2");
//From Turing
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


//git branch test
//Programming is fun...?

// Add your event listeners here 👇
window.addEventListener("load", selectBook);
-randomCoverButton.addEventListener("click", selectBook);
-viewSavedButton.addEventListener("click", viewCoversSaved);
//?myoCoverButton.addEventListener("click", userCoverForm);
-saveCoverButton.addEventListener("click", addSavedCover);
-homeButton.addEventListener("click", displayHomeView);
makeMyBookButton.addEventListener("click", createNewBook);
savedCoversLocation.addEventListener('click', removeSaved);




// Create your event handlers and other functions here 👇
//does this function need tagline?
function newCover() {
  coverImage.src = getRandomIndex(covers);
  coverTitle.innerText = getRandomIndex(titles);
  descriptorInput1.innerText = getRandomIndex(descriptors);
  descriptorInput2.innerText = getRandomIndex(descriptors);
};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//is this needed for iteration0?
// function addToSaved() {
//   var currentCover = new Cover(coverImage.src, coverTitle.innerText, descriptorInput1.innerText, descriptorInput2.innerText);
//   var hasDuplicate = false;
//   for (var i = 0; i < savedCovers.length; i++) {
//     if (savedCovers[i].cover === coverImage.src && savedCovers[i].title === coverTitle.innerText && savedCovers[i].tagline1 === descriptor1.innerText && savedCovers[i].tagline2 === descriptor2.innerText) {
//       hasDuplicate = true;
//     }
//   }
//   if (hasDuplicate === false) {
//     savedCovers.push(currentCover);
//   }
// }

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }



// Create variables targetting the relevant DOM elements here 👇
var coverImageElement = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var mainCover = document.querySelector(".main-cover");
var randomCoverImage = document.querySelector(".random-cover-button");
var makeNewButton = document.querySelector(".make-new-button");
var makeBookButton = document.querySelector(".create-new-book-button");
var tgLine1 = document.querySelector(".tagLine");
var tgLine2 = document.querySelector(".tagLine-1");
var tgLine3 = document.querySelector(".tagLine-2");
var usrDesc = document.querySelector(".user-desc1");
var usrDesc2 = document.querySelector(".user-desc2");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var formView = document.querySelector(".form-view");
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var form = document.querySelector("form");
var savedCoversSection = document.querySelector(".saved-covers-section");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];



//git branch test
//Programming is fun...?

// Add your event listeners here 👇
window.addEventListener("load", createCover);
randomCoverImage.addEventListener("click", createCover);
homeButton.addEventListener("click", flipHomeView);
makeNewButton.addEventListener("click", flipFormView);
saveCoverButton.addEventListener("click", pushSavedCover);
makeBookButton.addEventListener("click", createUsrCover);
viewSavedButton.addEventListener("click", toggleSaveView);
savedCoversSection.addEventListener("dblclick", deleteMiniCover);

// Create your event handlers and other functions here 👇








// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}






























//end
