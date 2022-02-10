// Create variables targetting the relevant DOM elements here 👇

class RomCom {
  constructor() {

  }
}


var currentTitle = document.querySelector(".cover-title");
currentTitle.innerText = getRandomIndex(titles);
//SHANE-copyingthe  logic from above and applying it to the other properties
var currentImage = document.querySelector(".cover-image");
var currentImageSrc = document.querySelector(".cover-image").src = getRandomCover(covers);
currentImage.innerText = getRandomCover(covers);
console.log(currentImageSrc);
//Shane- this one is not working because we have fully reached
//the picture "location"....correct my vocab on any/all notes here
//currentImage.innerText = getRandomIndex(covers);


//Shane - this one is not working as smoothly
//because there are 2 positions for 2 different descriptors
// and it needs to infused with the rest of the sentence
//var currentTagLine = document.querySelector(".tagline");
var currentTagLine1 = document.querySelector(".tagline-1");
var currentTagLine2 = document.querySelector(".tagline-2");
currentTagLine1.innerText = getRandomDescriptor(descriptors);
currentTagLine2.innerText = getRandomDescriptor(descriptors);
//Shane- this one is not working because we have fully reached
//the picture "location"....correct my vocab on any/all notes here
function getRandomTitle(titles) {
     return titles[Math.floor(Math.random() * titles.length)];
}

function getRandomCover(covers) {
     return covers[Math.floor(Math.random() * covers.length)];
}

function getRandomDescriptor(descriptors) {
     return descriptors[Math.floor(Math.random() * descriptors.length)];
}
//SHANE- I commented out the 2nd line below because it is already displaying
//in the proper place. reassigning location not necessary
//idk about the first but i dont think we need it anymore

//document.currentTitle.innerText = getRandomIndex(titles);
//document.body.innerHtml = randomItem;



// function getRandomIndex(titles) {
//      return titles[Math.floor(Math.random() * titles.length)];
// }


//SHANE- i dont remember why we have the code block below but i think
//we can delete it now
// var newData = {
//   randomCover: "our button",
// }
// randomCover = newData.randomCover
//
// var currentCover = document.querySelector("title");



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

function getRandomIndex(titles) {
     return titles[Math.floor(Math.random() * titles.length)];
}
document.body
//SHANE GENERAL NOTES

//I NOTICED IN THE ELEMENTS TAB OF THE CONSOLE WAY AT THE BOTTOM
//WITHIN THE <SCRIPT> IT REFERENCES THE JS FILES. ONCE
//THEY ARE SAVED ETC IN ATOM WE CAN THEN USE THEM IN CONSOLE...?

//TWO SEPERATE TAG LINE LOCATIONS PHYSICALLY && PROGRAMATICALLY



//SHANE- i think we used this as reference and can delete?

//var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
//
// var schoolName = document.querySelector('h3');
// var newData = {
//   schoolName: "Townview",
// }
// schoolName = newData.schoolName;
