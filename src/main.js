// Create variables targetting the relevant DOM elements here 👇

var randomImage = covers[getRandomIndex(covers)];

var randomTitle = titles[getRandomIndex(titles)];

var descriptor1 = descriptors[getRandomIndex(descriptors)];

var descriptor2 = descriptors[getRandomIndex(descriptors)];

// var randomBookGenerator = new Cover(randomImage, randomTitle, descriptor1, descriptor2);
/*
var box = document.querySelector('.call-to-action');

var pageData = {
  title: "Pizza is Tasty",
  body: "Yum!"
}

box.innerHTML = `
  <h3>${pageData.title}</h3>
  <p>${pageData.body}</p>
`;
*/
var image = document.querySelector('img')
image.src = randomImage;

// /image.innerHTML = <img ${randomImage}>;

// document.getElementById('myImage').src='pic_bulbon.gif'

var title = document.querySelector('h2');
title.innerText = randomTitle;

var tagline1 = document.querySelector('.tagline-1');
tagline1.innerText = descriptor1;

var tagline2 = document.querySelector('.tagline-2');
tagline2.innerText = descriptor2;




nodeImage = randomImageGenerator;

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//
// class Cover {
//   constructor(coverImgSrc, title, descriptor1, descriptor2) {
//     this.id = Date.now();
//     this.cover = coverImgSrc;
//     this.title = title;
//     this.tagline1 = descriptor1;
//     this.tagline2 = descriptor2;
//   }
// }
https://frontend.turing.io/lessons/module-1/js-intro-to-the-dom.html
