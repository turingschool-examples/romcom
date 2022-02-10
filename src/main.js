//When the page loads, we should see a cover with a randomly
//selected image, title, and tagline which includes two random descriptors

// class Cover {
//   constructor(coverImgSrc, title, descriptor1, descriptor2) {
//     this.id = Date.now();
//     this.cover = coverImgSrc;
//     this.title = title;
//     this.tagline1 = descriptor1;
//     this.tagline2 = descriptor2;
//   }
// }

//the variable covers (an array of covers, descripters, titles) are in data.js
//main is where we will edit.
//DOM features in index.html and styles.css

// Create variables targetting the relevant DOM elements here 👇

//trying to associate var coverImage with html class Cover-image
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline = document.querySelector(".tagline");
var tagline2 = document.querySelector(".tagline-2");
var generatedBook = {
  //coverImage: coverImgSrc,
};
//console.log(coverImgSrc);
window.onload = () => getRandomIndex(covers);
// We've provided a few variables below
// WE NEED THIS! >>> var savedCovers = [
//new Cover is taking in a link, a descriptor
//// >>>> this goes w/ it   new Cover(
// "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
// "Sunsets and Sorrows",
// "sunsets",
// "sorrows"
//),
//];
//var currentCover;
//console.log(savedCovers);

// Add your event listeners here 👇

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
//var myArray = [covers, titles, ];
//console.log(titles);
function getRandomIndex(covers) {
  var randomNum = Math.floor(Math.random() * covers.length);
  coverImage.setAttribute("src", covers[randomNum]);
  return covers[randomNum];
}
console.log(covers);
console.log(getRandomIndex(covers));
// }
// ---------------------------------------------------
// Example:
//
//
// const image = document.querySelector("img");
// const button = document.querySelector("button");
//
// window.onload = () => generateRandomPicture(imageArray);
//
// button.addEventListener("click", () => generateRandomPicture(imageArray));
//
// function generateRandomPicture(array){
// 	let randomNum = Math.floor(Math.random() * array.length);
// 	image.setAttribute("src", array[randomNum]);
// }
