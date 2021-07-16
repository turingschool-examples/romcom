var mainCover = document.quertySelector(".main-cover");
var formView = document.quertySelector(".form-view");
var savedView = document.quertySelector(".saved-view");
var savedCoverSection = document.quertySelector(".saved-covers-section");
var coverImage = document.quertySelector(".coverimage");
var coverTitle = document.quertySelector(".cover-title");
var descriptor = document.quertySelector(".tagline-1");
var descriptor2 = document.querySelector(".selector");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var createNewButton = document.querySelector(".create-new-button");
var coverInput = document.querySelector("#cover");
var titleInput = document.querySelector("#title");
var descriptorInput1 = document.querySelector("#descriptor1");
var descriptorInput2 = document.querySelector("#descriptor2");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


//git branch test
//Programming is fun...?

// Add your event listeners here 👇
window.addEventListener("load", selectBook);
randomCoverButton.addEventListener("click", selectBook);
viewSavedButton.addEventListener("click", viewCoversSaved);
myoCoverButton.addEventListener("click", userCoverForm);
saveCoverButton.addEventListener("click", addSavedCover);
homeButton.addEventListener("click", displayHomeView);
makeMyBookButton.addEventListener("click", createNewBook);
savedCoversLocation.addEventListener('click', removeSaved);




// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
