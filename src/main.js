// Create variables targetting the relevant DOM elements here 👇
var mainCoverImg = document.querySelector(".cover-image");
var mainCoverTitle = document.querySelector(".cover-title");
var mainCoverTagline = document.querySelector(".tagline");
var mainCoverTagline1 = document.querySelector(".tagline-1");
var mainCoverTagline2 = document.querySelector(".tagline-2");

var showNewBtn = document.querySelector(".random-cover-button");

// We've provided a few variables below
var savedCovers = [
  createCover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover;

// Add your event listeners here 👇
showNewBtn.addEventListener("click", function () {
  function getRandomIndexCover(coversArray) {
    var randomNumber = Math.floor(Math.random() * coversArray.length);
    for (var i = 0; i < coversArray.length; i++) {
      var randomCoverImgSrc = coversArray[randomNumber];
    }
    return randomCoverImgSrc;
  }
  getRandomIndexCover(covers);

  function getRandomIndexTitle(titleArray) {
    var randomNumber = Math.floor(Math.random() * titleArray.length);
    for (var i = 0; i < titleArray.length; i++) {
      var randomCoverTitle = titleArray[randomNumber];
    }
    return randomCoverTitle;
  }
  getRandomIndexTitle(titles);

  function getRandomIndexTagline1(taglineArray) {
    var randomNumber = Math.floor(Math.random() * taglineArray.length);
    for (var i = 0; i < taglineArray.length; i++) {
      var randomTagLine1 = taglineArray[randomNumber];
    }
    return randomTagLine1;
  }
  getRandomIndexTagline1(descriptors);

  function getRandomIndexTagline2(taglineArray) {
    var randomNumber = Math.floor(Math.random() * taglineArray.length);
    for (var i = 0; i < taglineArray.length; i++) {
      var randomTagLine2 = taglineArray[randomNumber];
    }
    return randomTagLine2;
  }
  getRandomIndexTagline2(descriptors);

  // function createCover(imgSrc, title, descriptor1, descriptor2) {
  //   var cover = {
  //     id: Date.now(),
  //     coverImg: imgSrc,
  //     title: title,
  //     tagline1: descriptor1,
  //     tagline2: descriptor2,
  //   };
  //   return cover;
  // }

  // createCover();
});

// Create your event handlers and other functions here 👇

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2,
  };
  return cover;
}
