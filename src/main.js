// Create variables targetting the relevant DOM elements here 👇
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
  "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
randomButton.addEventListener("click", displayNewCover);
window.addEventListener("load", displayNewCover);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var currentCover;
function displayNewCover() {
  bookCover.src = covers[getRandomIndex(covers)];
  bookTitle.innerText = titles[getRandomIndex(titles)];
  firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
  secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(bookCover.src, bookTitle.innerText, firstDescriptor.innerText, secondDescriptor.innerText);
}

//Iteration 2:


//Form-View Functionality:

var makeNewButton = document.querySelector('.make-new-button');
makeNewButton.addEventListener('click', toggleMakeOwn);


function toggleMakeOwn() {
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.form-view').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.saved-view').classList.add('hidden');
}

//Save-Cover Functionality:

var savedCoversButton = document.querySelector('.view-saved-button');
savedCoversButton.addEventListener('click', toggleSavedCovers);

function toggleSavedCovers() {
  document.querySelector('.saved-view').classList.remove('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.form-view').classList.add('hidden');
  document.querySelector('.saved-covers-section').classList.add('mini-cover', 'main-cover')
}


//Home Button Functionality

var homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', toggleHomeButton);


function toggleHomeButton() {
  document.querySelector('.saved-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.remove('hidden');
  document.querySelector('.save-cover-button').classList.remove('hidden');
  document.querySelector('.home-button').classList.add('hidden');
  document.querySelector('.home-view').classList.remove('hidden');
}

// Iteration 3:

// var savedCoversButton = document.querySelector('.save-cover-button');
// savedCoversButton.addEventListener('click', )

//Iteration 4:
//We need to target the saved-covers-section
//We need to push the current cover to the savedCovers array when the Save Cover
//button is clicked
//We'll need a for loop that loops through each cover in our savedCovers array

// var savedCoversView = document.querySelector('.saved-covers-section');

//Make ANOTHER loop(?) (try to do this in one loop) to append [i] to the html element
//look for append(like)
//We need to find an attribute that will allow us to add ___ between the tags












// document.querySelector('.form-view').classList.remove('hidden');

// we need to be able to click buttons. the buttons need to toggle elements between hidden not hidden
// {element}.hidden === true/false use in conditional to link pages hidden and shown features.
// We are just going to make it work.
// our first step will be accessing the home

// var homeButton = document.querySelector('.random-cover-button');
// homeButton.addEventListener('click', toggleHome);

// Hidden Syntax:
// document.getElementById("okButton")
//         .addEventListener("click", function() {
  //   document.getElementById("welcome").hidden = true;
  //   document.getElementById("awesome").hidden = false;
  // }, false);

  // function toggleHome() {
  //   document.querySelector('.view-saved-button').style.visibility = 'hidden';
  // }



















// var newCover = new Cover(
//   currentCover.src = covers[getRandomIndex(covers)],
//   currentTitle.innerText = titles[getRandomIndex(titles)],
//   firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)],
//   firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)]
// );

// Save for Later
// var randomCover = covers[getRandomIndex(covers)]
// var randomTitle = titles[getRandomIndex(titles)]
// var randomDescriptor = descriptors[getRandomIndex(descriptors)]

// var cover = new Cover(
//   covers[getRandomIndex(covers)],
//   titles[getRandomIndex(titles)],
//   descriptors[getRandomIndex(descriptors)],
//   descriptors[getRandomIndex(descriptors)],
//   );
