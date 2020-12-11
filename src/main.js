// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// var currentCover;
var mainImage = document.querySelector(`.cover-image`);
var title = document.querySelector(`.cover-title`);
var descriptor1 = document.querySelector(`.tagline-1`);
var descriptor2 = document.querySelector(`.tagline-2`);
// Add your event listeners here 👇
document.querySelector('.random-cover-button').addEventListener('click', function(){
var randomCover = createRandomCover();
mainImage.src = randomCovor.cover;
title.innerText = randomCovor.title;
descriptor1.innerText = randomCover.descriptor1;
descriptor2.innerText = randomCover.descriptor2;
});


// Create your event handlers and other functions here 👇

function getRandomIndex(covers) {
  return Math.floor(Math.random() * covers.length);
}

function createRandomCover(){
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor = descriptors[getRandomIndex(descriptors)];
  var randomCover = new Cover(randomImage, randomTitle, randomDescriptor, randomDescriptor)
  return randomCover
}
// // We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
// Make your own cover event
//change visibility of the form
document.querySelector('.make-new-button').addEventListener('click',function(){
  document.getElementsByClassName('random-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('home-button')[0].style.display = 'block';
  document.getElementsByClassName('view home-view')[0].style.display = 'none';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'block';
})
