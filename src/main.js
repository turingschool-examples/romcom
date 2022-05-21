// Create variables targetting the relevant DOM elements here 👇
// ***var coverPic = document.getElementById('.cover-image')
//
// ***GuthuBV2 var coverPic = document.querySelector('.cover-image')
// var coverTitle = document.querySelector('.cover-title')
// var coverTagLine1 = document.querySelector('.tagline-1')
// var coverTagLine2 = document.querySelector('.tagline-2')
// var priceTag = document.querySelector('.price-tag')
// var randomBtn = document.querySelector('.random-cover-button')
//



var coverTitle = document.querySelector('.cover-title')
var descriptor1= document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')
var randomBtn = document.querySelector('.random-cover-button')
var coverImgSrc = document.querySelector('.view home-view')

// var priceTag = document.querySelector('.price-tag')
// var noSticker = document.getElementById('./assets/price.png');
// ***  noSticker.parentNode.removeChild(noSticker);
  // ("#image_X").css('display', 'none');
// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
randomBtn.addEventListener('click', randomizeCover);
// refreshImg.addEventListener('load', randomizeRefresh);

// Create your event handlers and other functions here 👇
// function randomizeCover() {
//   ***var randomNumC = getRandomIndex(covers);
//   var randomNumT = getRandomIndex(titles);
//   var randomNumD = getRandomIndex(descriptors);
//   var randomNumD2 = getRandomIndex(descriptors);
//   var bookCoverPath = covers[randomNumC];
//   var bookTitle = titles[randomNumT];
//   var bookTagLines1 = descriptors[randomNumD];
//   var bookTagLines2 = descriptors[randomNumD2];
//   coverPic.src = bookCoverPath;
//   coverTitle.innerText = bookTitle;
//   coverTagLine1.innerText = bookTagLines1;
//   coverTagLine2.innerText = bookTagLines2;
// }


// **Uncomment1st-function randomizeCover(){
//   var newCover = randomElement(covers)
//   var bookTitle = randomElement(titles)
//   var newTag1 = randomElement(descriptor1)
//   var newTag2 = randomElement(descriptor2)
//   coverPic.src = newCover
//   coverTitle.innerText = bookTitle;
//   coverTagLine1.innerText = newTag1;
//   coverTagLine2.innerText = newTag2;
// };

function randomizeCover(){
  var newCover = randomElement(newCover)
  var bookTitle = randomElement(bookTitle)
  var newTag1 = randomElement(descriptor1)
  var newTag2 = randomElement(descriptor2)
  coverPic.src = newCover
  coverTitle.innerText = bookTitle;
  coverTagLine1.innerText = newTag1;
  coverTagLine2.innerText = newTag2;
};

// invoking the function with the variable containing my array value
// randomElement(covers)
// randomElement(titles)
// randomElements(descriptors
// access an element: covers[randomIndex]
// randomIndex.


function randomElement(array){
 var randomIndex = getRandomIndex(array)
 var randomDetails = array[randomIndex]
};

// We've provided one function to get you started


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
//1 function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
//2 function getRandomIndex(savedCovers) {
//   return Math.floor(Math.random() * savedCovers.length);
// }



//var img = new Image();   // Create new img element
//**img.onload = function(){
  // execute drawImage statements here
//**};
//**img.src = 'myImage.png'; // Set source path
