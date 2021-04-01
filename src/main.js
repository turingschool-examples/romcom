// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

//ITERATION 1 - "SHOW NEW RANDOM COVER BUTTON"
/* THIS WORKS DON'T CHANGE IT */
var randomCoverButton = document.querySelector('.random-cover-button');
  randomCoverButton.addEventListener("click", displayRandomImage => {
    var htmlImage = document.querySelector('.cover-image');
    htmlImage.src = getRandomImage();
  });

//ITERATION 2 - "MAKE OWN COVER BUTTON SWITCHES TO FORM"
/* STILL WORKING ON THIS */
// var makeCoverButton = document.querySelector('.make-new-button');
//   makeCoverButton.addEventListener("click", function() {
//     .view-form-view-hidden.innerHTML
//   }


//working on merging variables from below
// var getRandomIndex = {
//   cover: covers,
//   title: titles,
//   tagline1: descripters,
//   tagline2: descripters,
// }

// Add your event listeners here 👇
window.addEventListener("load", displayRandomHomePage);
window.addEventListener("load", displayRandomImage);
window.addEventListener("load", displayRandomTitle);
window.addEventListener("load", displayRandomTagline1);
window.addEventListener("load", displayRandomTagline2);

// Create your event handlers and other functions here 👇


//ITERATION 0 - RANDOM MAIN PAGE IMAGE, TITLE, TAGLINE & 2 DESCRIPTORS
// We've provided one function to get you started
function getRandomIndex(cover, htmlImage, title, htmlTitle, tagline1, htmlTagline1, tagline2, htmlTagline2) {
  // var htmlImage = document.querySelector('.cover-image');
  // htmlImage.src = getRandomImage();
  // var htmlTitle = document.querySelector('.cover-title');
  // htmlTitle.innerText = getRandomTitle();
  // var htmlTagline1 = document.querySelector('.tagline-1');
  // htmlTagline1.innerText = getRandomTagline1();
  // var htmlTagline2 = document.querySelector('.tagline-2');
  // htmlTagline2.innerText = getRandomTagline2();
  return Math.floor(Math.random() * array.length);
}

function getRandomImage() {
  var cover = covers[Math.floor(Math.random() * covers.length)]
  return cover;
}
function displayRandomImage() {
  var htmlImage = document.querySelector('.cover-image');
  // console.dir(htmlImage);
  // console.log(htmlImage);
  htmlImage.src = getRandomImage();
}

function getRandomTitle() {
  var title = titles[Math.floor(Math.random() * titles.length)]
  return title;
}
function displayRandomTitle() {
  var htmlTitle = document.querySelector('.cover-title');
  htmlTitle.innerText = getRandomTitle();
}

function getRandomTagline1() {
  var tagline1 = descriptors[Math.round(Math.random() * descriptors.length)]
  return tagline1;
}
function displayRandomTagline1() {
  var htmlTagline1 = document.querySelector('.tagline-1');
  htmlTagline1.innerText = getRandomTagline1();
}

function getRandomTagline2() {
  var tagline2 = descriptors[Math.round(Math.random() * descriptors.length)]
  return tagline2;
}
function displayRandomTagline2() {
  var htmlTagline2 = document.querySelector('.tagline-2');
  htmlTagline2.innerText = getRandomTagline2();
}

function displayRandomHomePage() {
  displayRandomImage();
  displayRandomTitle();
  displayRandomTagline1();
  displayRandomTagline2();
}
