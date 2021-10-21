function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);


}
var ranNum2 = getRandomIndex(descriptors);
var ranNum1 = getRandomIndex(covers);
var ranNum = getRandomIndex(titles);


var image = document.querySelector('img');

image.innerHTML = src=`${covers[1]}`

//var whatEVER = {
  //imageFile: "src=covers[2]"
//}

var bookTitle = document.querySelector('h2');

bookTitle.innerText = titles[ranNum];

var descriptor1 = document.querySelector('.tagline-1');

descriptor1.innerText = descriptors[ranNum2];

var descriptor2 = document.querySelector('.tagline-2');

descriptor2.innerText = descriptors[ranNum1];



/*function randomizeIt () {
  //var image = document.querySelector('img');
  var bookTitle = document.querySelector('h2');
  var descriptor1 = document.querySelector('.tagline-1');
  var descriptor2 = document.querySelector('.tagline-2');
  var coverArray = [image, bookTitle, descriptor1, descriptor2]
for (var i = 0; i < coverArray.length; i++) {
  coverArray[i].innerText = coverArray[i][ranNum]
}
}*/

//randomizeIt();
//We want to randomize the image.
//We have the html element in a variable that we can manipulate,
//We need the html for JS, how do we put the element into JS?
//How do we randomize the photos?
//How do we target A photo? What is syntax for targetting photo? How do we
//specifically the src part for the image link thing?
//How do we hardcode change the photo?
//How do we make it dynamic?

//<img class="cover-image" src="./assets/prairie.jpg">

//We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// window.addEventListener("load",  )
//
// function whateverName () {
//
// }
