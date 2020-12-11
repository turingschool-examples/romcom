// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.querySelector('.random-cover-button').addEventListener('click', function(){
  mainImage.src = covers[getRandomIndex(covers)];
});

// Create your event handlers and other functions here 👇
var mainImage = document.querySelector(`.cover-image`);
function getRandomIndex(covers) {
  return Math.floor(Math.random() * covers.length);
}
// mainImage.src = covers[getRandomIndex(covers)];


//Make your own cover button, iteration 2
document.querySelector('.make-new-button').addEventListener('click',function(){
  document.getElementsByClassName('random-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('home-button')[0].style.display = 'block';
  document.getElementsByClassName('view home-view')[0].style.display = 'none';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'block';
})

//Saved covers button, iteration 2 
document.querySelector('.view-saved-button').addEventListener('click',function(){
  document.getElementsByClassName('random-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'none';
  document.getElementsByClassName('home-button')[0].style.display = 'block';
  document.getElementsByClassName('view home-view')[0].style.display = 'none';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';
  document.getElementsByClassName('saved-covers-section')[0].style.display = 'block';
})
//Home button, iteration 2 
document.querySelector('.home-button').addEventListener('click',function(){
  document.getElementsByClassName('random-cover-button')[0].style.display = 'block';
  document.getElementsByClassName('save-cover-button')[0].style.display = 'block';
  document.getElementsByClassName('home-button')[0].style.display = 'none';
  document.getElementsByClassName('view home-view')[0].style.display = 'block';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';
  document.getElementsByClassName('saved-covers-section')[0].style.display = 'none';
})

//Create a new cover  

// 1. Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data (Y)
// 2. Use the values from the inputs to create a new instance of the Cover class (Y)
// 3. Change back to the main home view (hiding the form view again) (Y)
// 4. Display the newly created cover image, title, and descriptors in the main cover


var cover = document.querySelector('.user-cover');
var title = document.querySelector('.user-title');
var descOne = document.querySelector('.user-desc1');
var descTwo = document.querySelector('.user-desc2');
var makeBookButton = document.querySelector('.create-new-book-button');
var mainTitle = document.querySelector('.cover-title');
var mainDescOne = document.querySelector('.tagline-1');
var mainDescTwo = document.querySelector('.tagline-2');

makeBookButton.addEventListener('click', function(event) {
  var newCover = new Cover(cover.value,title.value,descOne.value,descTwo.value);
  covers.push(newCover.cover);
  titles.push(newCover.title);
  descriptors.push(newCover.tagline1, newCover.tagline2);
  // console.log(descriptors)
  document.getElementsByClassName('view home-view')[0].style.display = 'block';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';
  
  mainImage.src = cover.value
  mainTitle.innerHTML = title.value
  mainDescOne.innerHTML = descOne.value
  mainDescTwo.innerHTML = descTwo.value
 

  event.preventDefault();
});







