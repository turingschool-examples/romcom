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
mainImage.src = covers[getRandomIndex(covers)];

//
// // We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
// Make your own cover event
//change visibility of the form
document.querySelector('.make-new-button').addEventListener('click',function(){
  document.getElementsByClassName('random-cover-button')[0].style.visibility = 'collapse'; // 'hidden';
  // console.log(document.getElementsByClassName('random-cover-button')[0])
  document.getElementsByClassName('save-cover-button')[0].style.visibility = 'collapse'; // 'hidden';
  document.getElementsByClassName('home-button')[0].style.visibility = 'visible';
  // console.log(document.getElementsByClassName('home-button hidden')[0])
  // console.log(document.getElementsByClassName('view home-view')[0])
  document.getElementsByClassName('view home-view')[0].style.visibility = 'hidden'
  document.getElementsByClassName('view form-view hidden')[0].style.visibility = 'inherit'
})
