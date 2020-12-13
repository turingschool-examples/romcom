// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [

];
// var currentCover;
var mainImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
// Add your event listeners here 👇
document.querySelector('.random-cover-button').addEventListener('click', function(){
  var randomCover = createRandomCover();
  mainImage.src = randomCover.cover;
  title.innerHTML = randomCover.title;
  // console.log(title.innerText)
  descriptor1.innerHTML = randomCover.tagline1;
  descriptor2.innerHTML = randomCover.tagline2;
});


// Create your event handlers and other functions here 👇

function getRandomIndex(covers) {
  return Math.floor(Math.random() * covers.length);
}

function createRandomCover(){
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  var randomCover = new Cover(randomImage, randomTitle, randomDescriptor1, randomDescriptor2)
  return randomCover
}


//Change visibility of the form
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


var myCover = document.querySelector('.user-cover');
var newTitle = document.querySelector('.user-title');
var descOne = document.querySelector('.user-desc1');
var descTwo = document.querySelector('.user-desc2');
var makeBookButton = document.querySelector('.create-new-book-button');
var mainTitle = document.querySelector('.cover-title');
var mainDescOne = document.querySelector('.tagline-1');
var mainDescTwo = document.querySelector('.tagline-2');

makeBookButton.addEventListener('click', function(event) {
  var newCover = new Cover(myCover.value,newTitle.value,descOne.value,descTwo.value);
  // console.log(descriptors)
  document.getElementsByClassName('view home-view')[0].style.display = 'block';
  document.getElementsByClassName('view form-view hidden')[0].style.display = 'none';

  mainImage.src = newCover.cover;
  mainTitle.innerHTML = newCover.title;
  mainDescOne.innerHTML = newCover.tagline1;
  mainDescTwo.innerHTML = newCover.tagline2;
  for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].cover === newCover.cover &&
          savedCovers[i].title === newCover.title &&
          savedCovers[i].tagline1 === newCover.tagline1 &&
          savedCovers[i].tagline2 === newCover.tagline2)
      {
        duplicate = true;
        break;
      }
    }

    if (duplicate === false) {
      savedCovers.push(homeCover);
    }



});
var viewSavedCovers = document.querySelector('.view-saved-button');
viewSavedCovers.addEventListener('click', function(){
  document.querySelector('.saved-view').style.display = 'block';
var savedCoversHtml = '';
  for(i=0;i<savedCovers.length;i++){
    var newCoverHtml = `<section class="mini-cover">
      <img class="cover-image" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>`;
    savedCoversHtml = savedCoversHtml + newCoverHtml;
  }
  document.querySelector('.saved-covers-section').innerHTML = savedCoversHtml;
})
