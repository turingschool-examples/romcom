// Create variables targetting the relevant DOM elements here 👇
// When the page loads a random cover will appear. We want to randome book cover button to select a different random book cover
//when we click it. We are working with arrays
// i think that we need a for loop

//Goal= Our goal is to be able to click the button "make your own cover" and take the user to the make your own cover form.
// when the form comes up, the show randome cover button and save cover button should be gone as well as the home page.
//
var coverTitle = document.querySelector('.cover-title')
var coverImage = document.querySelector('.cover-image');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2')

//Goal = new random cover button a new random cover is created. First need to target DOM element for button. 
//Next create user listener for a click.  

var randomCoverButton = document.querySelector('.random-cover-button')
var makeYourOwnForm = document.querySelector(".form-view")
var makeYourOwnCoverButton = document.querySelector(".make-new-button")
var homeView = document.querySelector(".home-view")
var homeButton = document.querySelector('.home-button')
var saveCoverButton = document.querySelector('.save-cover-button')


// We've provided a few variables below
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover;

// class Cover {
//   constructor(coverImgSrc, title, descriptor1, descriptor2) {
//     this.id = Date.now();
//     this.cover = coverImgSrc;
//     this.title = title;
//     this.tagline1 = descriptor1;
//     this.tagline2 = descriptor2;
//   }
// }

// Add your event listeners here 👇

window.addEventListener("load", makeRandomCover);
randomCoverButton.addEventListener("click", makeRandomCoversButton);
makeYourOwnCoverButton.addEventListener("click", makeNewCoverForm);


// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  var newCovers = covers[getRandomIndex(covers)]  
  var newTitles = titles[getRandomIndex(titles)]
  var newDescriptors1 = descriptors[getRandomIndex(descriptors)]
  var newDescriptors2 = descriptors[getRandomIndex(descriptors)]
 coverTitle.innerText = newTitles
 coverImage.src = newCovers
 tagLine1.innerText = newDescriptors1
 tagLine2.innerText = newDescriptors2

}

function makeRandomCoversButton() {
  var newCovers = covers[getRandomIndex(covers)]; 
  coverImage.src = newCovers;
}

function makeNewCoverForm() {
  makeYourOwnForm.classList.remove("hidden");
  homeView.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

//When the Form view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden