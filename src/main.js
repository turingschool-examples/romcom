// Create variables targetting the relevant DOM elements here 👇
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button');
var savedCoversSection = document.querySelector('.saved-covers-section')

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
function displayNewCover(placeHolder) {
  bookCover.src = placeHolder.cover || covers[getRandomIndex(covers)];
  bookTitle.innerText = placeHolder.title || titles[getRandomIndex(titles)];
  firstDescriptor.innerText = placeHolder.tagline1 || descriptors[getRandomIndex(descriptors)];
  secondDescriptor.innerText = placeHolder.tagline2 || descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(bookCover.src, bookTitle.innerText, firstDescriptor.innerText, secondDescriptor.innerText);
  }

// if (2 > 1) {
//   currentCover = new Cover(covers[0], titles[0], descriptors[0], descriptors[1]);
// } else {

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
savedCoversButton.addEventListener('click', clickViewSave);


function toggleSavedCovers() {
  document.querySelector('.saved-view').classList.remove('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.form-view').classList.add('hidden');
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
  document.querySelector('.form-view').classList.add('hidden');
}


// Iteration 3:
var makeNewBookButton = document.querySelector('.create-new-book-button');

makeNewBookButton.addEventListener('click', function() {
  event.preventDefault();
  makeNewBook();
  toggleHomeButton();
  displayNewCover(currentCover);
});

function makeNewBook() {
  var coverInput = document.querySelector('.user-cover').value;
  var titleInput = document.querySelector('.user-title').value;
  var userDescriptor1 = document.querySelector('.user-desc1').value;
  var userDescriptor2 = document.querySelector('.user-desc2').value;
  addToArrays(coverInput, titleInput, userDescriptor1, userDescriptor2);
}

function addToArrays(coverInput, titleInput, userDescriptor1, userDescriptor2) {
  covers.unshift(coverInput);
  titles.unshift(titleInput);
  descriptors.unshift(userDescriptor1);
  descriptors.unshift(userDescriptor2);
  currentCover = new Cover(covers[0], titles[0], descriptors[1], descriptors[0]);
}
//Could we add in functionality here at the toggle home

//We'll be targeting the inputs in the form-view section
//We'll likely be pushing inputs into data.js arrays
//maybe consider adding to beginning of array
//These inputs will (maybe) be passed into the Cover class as arguments
// to make a new instance
//When we switch back to home view, the newest instance should be the cover

//Save inputs as separate variables
//Push each variable to beginning of respective array
//Create new Cover instance with arguments (cover[0], title[0],...)



//Iteration 4:
//We need to push the current cover to the savedCovers array when the Save Cover
//button is clicked
var savedCoversButton = document.querySelector('.save-cover-button');
savedCoversButton.addEventListener('click', saveCurrentCover);

function clickViewSave() {
  toggleSavedCovers();
  displaySavedCovers();
}

function saveCurrentCover() {
  if(!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

// function saveCurrentCover() {
//   for(var i = 0; i <= savedCovers.length; i++) {
//     if(savedCovers[i] !== currentCover) {
//       return savedCovers.unshift(currentCover)
//     } else {
//       return savedCovers
//     }
//   }
// }

// We need a functionality that keeps this function from running if toggle saved covers button is run
// function displaySavedCovers(savedCovers) {
//   for(var i = 0; i < savedCovers.length; i++) {
//     if(savedCovers[i] )
//     savedCoversSection.innerHTML += `<img class='mini-cover' src=${savedCovers[i].cover}>`
//     savedCoversSection.innerHTML += `<h2 class='mini-cover cover-title' >${savedCovers[i].title}</h2>`
//     savedCoversSection.innerHTML += `<h3 class='mini-cover tagline'>A tale of <span>${savedCovers[i].tagline1}</span> and <span>${savedCovers[i].tagline2}</span></h3>`;
//    };
// }


// saved classes
function displaySavedCovers() {
  var display = "";
  for(var i = 0; i < savedCovers.length; i++) {
    display +=
    `<section id='${savedCovers[i].id}' class='mini-cover' ondblclick='placeHolderFunc(this.id)'> <img class='cover-image' src=${savedCovers[i].cover}>
    <h2 class='cover-title'>${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png"></section>`;
   }; savedCoversSection.innerHTML = display;
}

function placeHolderFunc(id) {
  for(i=0; i <= savedCovers.length; i++) {
    if (savedCovers[i].id == id) {
      savedCovers.splice(i, 1);
      displaySavedCovers();
    }
  }
};


// For Loop for adding an array of objects to an html element:
// <li> will create bullet points so we probably dont need this
// <ul> <ul> creates an unordered list
// <ol> <ol> creates an ordered list
// var savedCoversView = document.querySelector('.saved-covers-section');
//Make ANOTHER loop(?) (try to do this in one loop) to append [i] to the html element
//look for append(like)


//Iteration 5
//event for a double click - dblclick
//For loop that will iterate through the saved covers array and when the dblclick
//element is reached, .splice it from the array

//Alternatively, could this look like removing an html element as in the dispaly saved covers section?
// var dblClickedBook = document.removeElementById(variable)
// dblClickedBook.addEventListener('dblclick', deleteSavedCovers);
//
// for (i=0; i <= savedCovers.length; i++)
//   if(variable === savedCovers[i].id)

//Could we declare give an individual id for each object we push to saved covers array?
// function deleteSavedCovers() {
  //Possible declare another variable at start of function?
  //Iterate through the savedCovers array
  //if savedCovers[i].cover = (#newID).src

//how do we get the
//img.src = savedCovers[i].cover SPLICE

// var cover = document.querySelector('.overlay');
// document.ondblclick = doubleClick;
// cover.addEventListener('dblClick', doubleClick);
// function doubleClick(e) {
//   cover.textContent = `Position: (${e.clientX}, (${e.clientY}))`;
// }
//
// var doubleClick = document.querySelector('')

//remove() or removeChild()

//we find a way to run a function when we double click anywhere on the entire document/window
//the dblclick will run a function(s) when anything is dblclicked
//Function will loop, comparing the clicked element to our array:
//If element's id == savedCovers[i].id
//then, .remove() element

//Argument of element - is this a placeholder or universal?
//ParseInt
//event target






















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
