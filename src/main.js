// Below are all the variables we have created to target elements of the DOM.
// These query selectors will be used for our event listeners/functions below
var mainCover = document.querySelector('.main-cover')
var randomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var savedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var createNewButton = document.querySelector('.create-new-book-button')
var formView = document.querySelector('.form-view')
var savedView = document.querySelector('.saved-view')
var coverTitle = document.querySelector('.cover-title')
var coverImage = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var userCoverInput = document.querySelector('.user-cover')
var userTitleInput = document.querySelector('.user-title')
var userDescriptorOneInput = document.querySelector('.user-desc1')
var userDescriptorTwoInput = document.querySelector('.user-desc2')
var userCover = document.querySelector('.user-cover')
var userTitle = document.querySelector('.user-title')
var userDescriptorOne = document.querySelector('.user-desc1')
var userDescriptorTwo = document.querySelector('.user-desc2')

// We've provided a few variables below
// the savedCovers variable below is creating a new instance of the Cover class,
// the elements have already been provided in this new instance
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// This will create a new instance of the cover class- in this situation there
// have been no elements inserted.  Var currentCover will be used in our getRandomCoverPageLoad
// to return a randomized element in the appropriate position
var currentCover = new Cover();
// here are our event listeners, these are directly linked to the querySelectors
// that we have identified above in lines 3-23.  This will allow us to make the identified
// querySelectors actionable.
randomButton.addEventListener('click', getRandomCoverPageLoad);
savedButton.addEventListener('click', viewSaved);
makeNewButton.addEventListener('click', makeNewCover);
homeButton.addEventListener('click', goHome);
createNewButton.addEventListener('click', makeBook);
saveCoverButton.addEventListener('click', savedCover);
// Here is the function that was provided, it will randomly generate elements
// from the data.js file when used with our getRandomCoverPageLoad function on
// line 52
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// This function is tied to the function getRandonIndex, and will generate new
// romcom covers by clicking the Show New random cover button. We are utilizing
// getRandomIndex to pull from each of the arrays in data.js.
function getRandomCoverPageLoad(event) {
  var cover = covers[getRandomIndex(covers)]
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
// currentCover on line 62 will create a new instance of the Cover class with four randomly
// generated elements from the data.js file. These elements correspond with the parameters of
// the constructor Cover class. In lines 63-66, we are referencing the arguments
// of the Cover class and reassigning their values.
  currentCover = new Cover(cover, title, descriptor1, descriptor2)
  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  taglineOne.innerText = currentCover.tagline1
  taglineTwo.innerText = currentCover.tagline2
}
// This will call the function getRandomCoverPageLoad and generate the new
// coverpage with random properties of the Cover class when the Show new Random cover
// is clicked.
getRandomCoverPageLoad()
// .add and .remove will either add or remove various views and buttons by targeting the .hidden
// property/attribute of the styles.css and index.html files.
// The makeNewCover function is targeting the make your own cover form and will
// toggle the view from the home page to the make your own cover form
function makeNewCover() {
  mainCover.classList.add("hidden");
  formView.classList.remove("hidden");
  randomButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  savedView.classList.add("hidden");
}
// The goHome function is targeting the go home button and will toggle the view back to
// the home page from the make your own cover form.
function goHome() {
  mainCover.classList.remove("hidden");
  formView.classList.add("hidden");
  randomButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
  savedView.classList.add("hidden");
}
// The viewSaved function is targeting the view saved button and will toggle the view
// to the view saved covers that have been added.
function viewSaved() {
  randomButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  savedButton.classList.remove("hidden");
  mainCover.classList.add("hidden");
  savedView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
// Here we have created a dynamic interpolation that will be able to select from each of
// the arrays in data.js using the for loop on line 106. We have created a variable
// finalList that is assigned to an empty string.  This will allow us to dynamically
// add a cover to our savedCoversPage.  finalList is interacting with our for loop
// as we reassign the empty string to include values randomly selected from the arrays
// in data.js, thus the key value pairs will be updated.
  var savedCoversPage = document.querySelector('.saved-covers-section')
  var finalList = ""
  for (i = 0; i < savedCovers.length; i++) {
    finalList= finalList + `<section class="main-cover">
        <img class="cover-image" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>`
  }
  savedCoversPage.innerHTML = finalList;
}
// The function makeBook was created to randomly generate new books based on the data contained
// in the data.js file.  These elements will be randomly generated and then we will
// reassign the properties of the new instance of the Cover class (newCustomCover)
function makeBook(event) {
// This event.preventDefault will keep the saved covers from appearing on the home page
  event.preventDefault();
  covers.push(userCoverInput.value);
  titles.push(userTitleInput.value);
  descriptors.push(userDescriptorOneInput.value);
  descriptors.push(userDescriptorTwoInput.value);
// The newCustomCover variable is a new instance of the Cover class that allows us
// to reassign the properties of the Cover class to match the randomly generated
// properties that were just created above.
  var newCustomCover = new Cover(userCoverInput.value, userTitleInput.value, userDescriptorOneInput.value, userDescriptorTwoInput.value);
  coverImage.src = newCustomCover.cover;
  coverTitle.innerText = newCustomCover.title;
  taglineOne.innerText = newCustomCover.tagline1
  taglineTwo.innerText = newCustomCover.tagline2
// The invoking of the goHome function below is indicating what will be visible
// on the browswer
  goHome();
}
// This function includes a bang operator to prevent duplicates from being added
// to our array. if saved covers does not include our current cover, then push
// the new saved cover into the array.
function savedCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    console.log(savedCovers)
    console.log(currentCover)
  }
}
