// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagline1 = document.querySelector('.tagline-1')
var coverTagline2 = document.querySelector('.tagline-2')
var showRandomCoverButton = document.querySelector('.random-cover-button')
var makeYourOwnCoverButton = document.querySelector('.make-new-button')
var form = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var saveCoverButton = document.querySelector('.save-cover-button')
var homeButton = document.querySelector(".home-button")
var viewSavedCoversButton = document.querySelector(".view-saved-button")
var savedCoversSection = document.querySelector(".saved-view")
var makeMyBookButton = document.querySelector(".make-new-button")
var formCover = document.querySelector(".user-cover")
var formTitle = document.querySelector(".user-title")
var firstDescriptor = document.querySelector(".user-desc1")
var secondDescriptor = document.querySelector(".user-desc2")
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;
// Add your event listeners here 👇
// you'll have to have an onload evenlistener to load to your random functions
window.addEventListener("load", getRandomCover);
showRandomCoverButton.addEventListener("click", getRandomCover);
makeYourOwnCoverButton.addEventListener("click", displayForm);
viewSavedCoversButton.addEventListener("click", seeSavedCovers);
homeButton.addEventListener("click", goHome);
makeMyBookButton.addEventListener("click", makeMyBook)


// Create your event handlers and other functions here 👇// we need a random index for each of the data points we're going to need
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover(){
  var newCover = covers[getRandomIndex(covers)]
  var newTitle = titles[getRandomIndex(titles)]
  var newDescriptor1 = descriptors[getRandomIndex(descriptors)]
  var newDescriptor2 = descriptors[getRandomIndex(descriptors)]
  coverImg.src = newCover;
  coverTitle.innerText = newTitle;
  coverTagline1.innerText = newDescriptor1;
  coverTagline2.innerText = newDescriptor2;
  currentCover = new Cover(newCover, newTitle, newDescriptor1, newDescriptor2)
  };

  function displayForm() {
     homeView.classList.add('hidden')
     form.classList.remove('hidden')
     showRandomCoverButton.classList.add('hidden')
     saveCoverButton.classList.add('hidden')
     homeButton.classList.remove('hidden')
 }

 function seeSavedCovers() {
   savedCoversSection.classList.remove('hidden')
   homeView.classList.add('hidden')
   showRandomCoverButton.classList.add('hidden')
   saveCoverButton.classList.add('hidden')
   homeButton.classList.remove('hidden')
   form.classList.add('hidden')
 }

 function goHome() {
   homeView.classList.remove('hidden')
   homeButton.classList.add('hidden')
   showRandomCoverButton.classList.remove('hidden')
   saveCoverButton.classList.remove('hidden')
 }

 function makeMyBook(event) {
   event.preventDefault();
   currentCover = new Cover(formCover.value, formTitle.value, firstDescriptor.value, secondDescriptor.value);
   covers.push(formCover.value);
   titles.push(formTitle.value);
   descriptors.push(firstDescriptor.value);
   descriptors.push(secondDescriptor.value);
   displayData(formCover.value, formTitle.value, firstDescriptor.value, secondDescriptor.value)
   // form.classList.add('hidden')
   console.log(currentCover)
   // homeView.classList.remove('hidden')
  }

 function displayData(cover, title, descriptor1, descriptor2) {
   coverImg.src = cover;
   coverTitle.innerText = title;
   coverTagline1.innerText = descriptor1;
   coverTagline2.innerText = descriptor2;

}
