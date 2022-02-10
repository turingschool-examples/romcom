// Create variables targetting the relevant DOM elements here 👇
var randomCover = document.querySelector(".random-cover-button");
var saveCover = document.querySelector(".save-cover-button");
var viewSaved = document.querySelector(".view-saved-button");
var makeNewCover = document.querySelector(".make-new-button");

var coverImage = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var firstDescriptor = document.querySelector(".tagline-1")
var secondDescriptor = document.querySelector(".tagline-2")


// We've provided a few variables below
var savedRomCom = [];
var currentRomCom = new Cover(coverImage.src, coverTitle.innerText, firstDescriptor.innerText, secondDescriptor.innerText)

// Add your event listeners here 👇

randomCover.addEventListener('click', randomRomCom);

window.addEventListener('load', randomRomCom);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};



function randomRomCom() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
  secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
//  if (firstDescriptor === secondDescriptor) {
//    return secondDescriptor.innerText = getRandomIndex(descriptors);
//  };
  // storeCover();
};
