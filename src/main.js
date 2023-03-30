// Create variables targetting the relevant DOM elements here 👇
var randButton = document.querySelector('.random-cover-button'); 
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
// console.log(coverTitle);
// console.log(coverTitle.innerText);
// console.log(tagline1);
// console.log(coverImage);
// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randButton.addEventListener('click', displayRandom);
window.addEventListener('load', displayRandom);

// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRandom() {
  coverTitle.innerText = [titles[getRandomIndex(titles)]];
  tagline1.innerText = [descriptors[getRandomIndex(descriptors)]];
  tagline2.innerText = [descriptors[getRandomIndex(descriptors)]];
  coverImage.src = [covers[getRandomIndex(covers)]];
}



function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}


  

//Create two event listeners. load and click(on button) - 
//both should invoke the same function
// of displayRandom().

//Using getRandomIndex fetch random index from all three arrays. 
//twice from descriptors. 

//Using the above random indexes, find the elements from respective arrays and 
//use them as variables and manipulate the DOM.



