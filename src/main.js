// Create variables targetting the relevant DOM elements here
// 👇🏼 Cover Book image components 👇🏼
var coverImg = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagline1 = document.querySelector('.tagline-1')
var coverTagline2 = document.querySelector('.tagline-2')

// 👇🏼 Screen views 👇🏼
var homeView = document.querySelector(".home-view")
var viewForm = document.querySelector(".form-view")
var savedCoversSection = document.querySelector(".saved-view")
//possibly repititious var?
//var viewSavedCoversSection = document.querySelector('.saved-covers-section')

// 👇🏼 Buttons 👇🏼
var homeButton = document.querySelector(".home-button")
var showRandomCoverButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedCoversButton = document.querySelector('.view-saved-button')
var makeYourOwnCoverButton = document.querySelector('.make-new-button')
var makeMyBookButton = document.querySelector('.create-new-book-button')
//possibly repititious var?
//var createNewBookButton = document.querySelector('.create-new-book-button')

// 👇🏼 Form input fields 👇🏼
var formCover = document.querySelector(".user-cover")
var formTitle = document.querySelector(".user-title")
var firstDescriptor = document.querySelector(".user-desc1")
var secondDescriptor = document.querySelector(".user-desc2")

// 👇🏼 Variables provided for us 👇🏼
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// 👇🏼 Add Event listeners here 👇🏼
// you'll have to have an onload evenlistener to load to your random functions
window.addEventListener("load", getRandomCover);
homeButton.addEventListener("click", goHome);
showRandomCoverButton.addEventListener("click", getRandomCover);
//saveCoverButton.addEventListener('click', )
viewSavedCoversButton.addEventListener("click", viewSavedCovers);
makeYourOwnCoverButton.addEventListener("click", displayForm);
makeMyBookButton.addEventListener("click", makeMyBook);
//viewSavedCoversSection.addEventListener('load', savedCovers)


// 👇🏼 Event handlers and functions 👇🏼
// Random index is needed for data points of creating random book cover
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayData(cover, title, descriptor1, descriptor2) {
  coverImg.src = cover;
  coverTitle.innerText = title;
  coverTagline1.innerText = descriptor1;
  coverTagline2.innerText = descriptor2;
}

// 👇🏼 Displays new random cover when "Show New Random Cover" Button is clicked
function getRandomCover(){
  var newCover = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var newDescriptor2 = descriptors[getRandomIndex(descriptors)];
  displayData(newCover, newTitle, newDescriptor1, newDescriptor2);
  currentCover = new Cover(newCover, newTitle, newDescriptor1, newDescriptor2)
  };

// 👇🏼 Displays form when "Make Your Own Cover" button is clicked
  function displayForm() {
     homeView.classList.add('hidden')
     viewForm.classList.remove('hidden')
     showRandomCoverButton.classList.add('hidden')
     saveCoverButton.classList.add('hidden')
     homeButton.classList.remove('hidden')
 }

// 👇🏼 Displays saved covers section when "View Saved Covers" button is clicked
 function viewSavedCovers() {
   savedCoversSection.classList.remove('hidden')
   homeView.classList.add('hidden')
   showRandomCoverButton.classList.add('hidden')
   saveCoverButton.classList.add('hidden')
   homeButton.classList.remove('hidden')
   viewForm.classList.add('hidden')
     //should this not have a way to view the images?
 }

// 👇🏼 Takes user home when "Home" button is clicked
 function goHome() {
   homeView.classList.remove('hidden')
   homeButton.classList.add('hidden')
   showRandomCoverButton.classList.remove('hidden')
   saveCoverButton.classList.remove('hidden')
 }

// 👇🏼 Creates custom book cover when "Make My Book" button is clicked
 function makeMyBook(event) {
   event.preventDefault();
   // 👇🏼 Variables with data from user input fields
   var userCover = formCover.value
   var userTitle = formTitle.value
   var userDesc1 = firstDescriptor.value
   var userDesc2 = secondDescriptor.value
   // 👇🏼 create new object instance
   currentCover = new Cover(userCover, userTitle, userDesc1, userDesc2);
   // 👇🏼 Push user input data to arrays
   covers.push(userCover);
   titles.push(userTitle);
   descriptors.push(userDesc1);
   descriptors.push(userDesc2);
   // 👇🏼 View custom created cover
   displayData(userCover, userTitle, userDesc1, userDesc2);
   displayCustomCover();
   clearFields();
  }

// 👇🏼 Takes user back to homepage to view custom cover
// used in makeMyBook function
function displayCustomCover() {
  goHome();
  viewForm.classList.add('hidden');
}

// 👇🏼 Clears the input fields in "Make Your Own Cover" form
// used in makeMyBook function
function clearFields() {
  userCover = "";
  userTitle = "";
  userDesc1 = "";
  userDesc2 = "";
}


// code taken from getRandomCover function - created new function from this code.
// coverImg.src = newCover;
// coverTitle.innerText = newTitle;
// coverTagline1.innerText = newDescriptor1;
// coverTagline2.innerText = newDescriptor2;

//Redundant function created and used at beginning of functions
//  function displayData(cover, title, descriptor1, descriptor2) {
//    coverImg.src = cover;
//    coverTitle.innerText = title;
//    coverTagline1.innerText = descriptor1;
//    coverTagline2.innerText = descriptor2;
// }
