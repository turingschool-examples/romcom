var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var makeNewCoverButton = document.querySelector(".make-new-button");

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");

var savedCoverSection = document.querySelector(".saved-covers-section"); // accessing this variable to change HTML in the section

var userInputCover = document.querySelector(".user-cover");
var userInputTitle = document.querySelector(".user-title");
var userInputDesc1 = document.querySelector(".user-desc1");
var userInputDesc2 = document.querySelector(".user-desc2");
var createNewBookButton = document.querySelector(".create-new-book-button");




// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


document.addEventListener("DOMContentLoaded", getRandomCover);
randomCoverButton.addEventListener("click", getRandomCover);
makeNewCoverButton.addEventListener("click", makeYourOwnCoverClicked);
viewSavedCoversButton.addEventListener("click", viewSavedCoversClicked);
homeButton.addEventListener("click", homeButtonClicked);
createNewBookButton.addEventListener("click", createNewCover);


function getRandomCover() {
  var currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  // if statement to make sure descriptors are different
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
};

function makeYourOwnCoverClicked(){
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  makeNewCoverButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  viewSavedCoversButton.classList.remove('hidden');

};

function viewSavedCoversClicked() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  makeNewCoverButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  viewSavedCoversButton.classList.remove('hidden');
  //create
  //for loop to loop through savedCovers variable
  //use inner.HTML to build a cover and display the covers
};

function homeButtonClicked() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  makeNewCoverButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  viewSavedCoversButton.classList.remove('hidden');
}

function saveCoverClicked(){
  //check to see if cover is already in array
  //if not push cover into saved array
  // else alert("Cover already exist!")
}

function setCoverValues(){
// set form values to cover

}
//Maybe both of these can be one function
function createNewCover(){
  event.preventDefault();

  if(!userInputCover.value || !userInputTitle.value || !userInputDesc1.value || !userInputDesc2.value) {
    alert("Please fill out all fields");
  } else {
      coverImage.src = userInputCover.value;
      coverTitle.innerText = userInputTitle.value;
      tagline1.innerText = userInputDesc1.value;
      tagline2.innerText = userInputDesc2.value;

      currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);

      covers.push(userInputCover.value);
      titles.push(userInputTitle.value);
      descriptors.push(userInputDesc1.value);
      descriptors.push(userInputDesc2.value);

      homeButtonClicked();

      document.querySelector("form").reset();
    };
};



function removeCover(){
  // access cover ID
  //if cover id === saved covers id
  //splice
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
