var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var currentDescription1 = document.querySelector('.tagline-1');
var currentDescription2 = document.querySelector('.tagline-2');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var savedCoverSection = document.querySelector('.saved-covers-section');
var randomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var createOwnCoverButton = document.querySelector('.make-new-button');
var savedCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDescriptor1 = document.querySelector('#descriptor1');
var userDescriptor2 = document.querySelector('#descriptor2');
var makeMyBookButton = document.querySelector('.create-new-book-button');
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


createRandomCover();
randomCoverButton.addEventListener('click', createRandomCover);
createOwnCoverButton.addEventListener('click', displayFormView);
viewSavedCoversButton.addEventListener('click', displaySavedView);
homeButton.addEventListener('click', displayHomeView);
makeMyBookButton.addEventListener('click', createUserCover);
savedCoverButton.addEventListener('click', saveUserCover);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function createRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  currentDescription1.innerText = currentCover.tagline1;
  currentDescription2.innerText = currentCover.tagline2;
}


function displayFormView() {
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  savedCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}


function displaySavedView() {
  savedView.classList.remove('hidden');
  savedCoverSection.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedCoverSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
      document.querySelector('.saved-covers-section').innerHTML += `
        <section class = "mini-cover" id = ${savedCovers[i].id}>
          <img class = "cover-image" src = ${savedCovers[i].cover}>
          <h2 class = "cover-title">${savedCovers[i].title}</h2>
          <h3 class = "tagline">A tale of <span "tagline-1">${savedCovers[i].tagline1}</span> and <span class = "tagline-2">${savedCovers[i].tagline2}
          </span></h3>
          <img class = "price-tag" src = "./assets/price.png">
          <img class = "overlay" src = "./assets/overlay.png">
        </section>`;
  }
}


function displayHomeView() {
  formView.classList.add('hidden');
  homeView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  savedCoverButton.classList.remove('hidden');
}


function createUserCover() {
  var coverInput = userCover.value;
  var titleInput = userTitle.value;
  var userDescriptor1Input = userDescriptor1.value;
  var userDescriptor2Input = userDescriptor2.value;
  currentCover = new Cover(coverInput, titleInput, userDescriptor1Input, userDescriptor2Input);
  displayHomeView();
  displayCover();
  saveUserInput();
  event.preventDefault();
}


function saveUserInput() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDescriptor1.value);
  descriptors.push(userDescriptor2.value);
}


function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  currentDescription1.innerText = currentCover.tagline1;
  currentDescription2.innerText = currentCover.tagline2;
}


function saveUserCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers.indexOf(currentCover) === -1) {
      savedCovers.push(currentCover);
    }
  }
}
