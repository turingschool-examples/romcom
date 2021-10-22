

//RANDOMIZE COVER WHEN PAGE LOADS
function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}

var ranCover = covers[getRandomIndex(covers)];
 var ranTitles = titles[getRandomIndex(titles)];
 var ranDes1 = descriptors[getRandomIndex(descriptors)];
 var ranDes2 = descriptors[getRandomIndex(descriptors)]

var ranNum2 = getRandomIndex(descriptors);
var ranNum1 = getRandomIndex(covers);
var ranNum = getRandomIndex(titles);

var button = document.querySelector('.random-cover-button');

var button = document.querySelector('.random-cover-button')
var image = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

//RANDOMIZE COVER WITH BUTTON
window.addEventListener('load', pageLoad);
-//document.addEventListener('DOMContentLoaded', pageLoad);
 -//document.onload = pageLoad();
 -//window.onload = pageLoad();
button.addEventListener('click', randomCover);
function randomCover() {
  var image = document.querySelector('img');
  image.src = covers[ranNum1];
  var bookTitle = document.querySelector('h2');
  bookTitle.innerText = titles[ranNum];
  var descriptor1 = document.querySelector('.tagline-1');
  descriptor1.innerText = descriptors[ranNum2];
  var descriptor2 = document.querySelector('.tagline-2');
  descriptor2.innerText = descriptors[ranNum1];
}
function pageLoad() {
 -  image.src = covers[getRandomIndex(covers)];
 -  bookTitle.innerText = titles[getRandomIndex(titles)];
 -  descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
 -  descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
 -};


function newCov () {
return "You're the best"
}



console.log(button);



//<button class="random-cover-button">Show New Random Cover</button>



//
// //randomizeIt();
// //We want to randomize the image.
// //We have the html element in a variable that we can manipulate,
// //We need the html for JS, how do we put the element into JS?
// //How do we randomize the photos?
// //How do we target A photo? What is syntax for targetting photo? How do we
// //specifically the src part for the image link thing?
// //How do we hardcode change the photo?
// //How do we make it dynamic?
//
//
// //We've provided a few variables below
var savedCovers = [
new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
var currentCover;
//
// // Add your event listeners here 👇




function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
