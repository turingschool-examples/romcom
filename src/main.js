var randomButton = document.querySelector(".random-cover-button");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var makeCoverButton = document.querySelector(".make-new-button");
var homeCover = document.querySelector('.home-view');
var form = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSaveButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');
var makeBookButton = document.querySelector('.create-new-book-button');

var coverInput = document.querySelector('.user-cover')
var titleInput = document.querySelector('.user-title')
var desc1Input = document.querySelector('.user-desc1')
var desc2Input = document.querySelector('.user-desc2')
var randomBook;

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length))
}

randomButton.addEventListener("click", createRandomCover)

function createRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  randomBook = new Cover (coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
}
createRandomCover();

makeCoverButton.addEventListener('click', showForm)

function showForm() {
  homeCover.classList.add('hidden')
  form.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  makeBookButton.disabled = true

}

document.addEventListener('keyup', enableMakeBookButton)

function enableMakeBookButton() {
  if(coverInput.value && titleInput.value && desc1Input.value && desc2Input.value) {
    makeBookButton.disabled = false
  }
}


viewSaveButton.addEventListener('click', showSavedCovers)

function showSavedCovers() {
  homeCover.classList.add('hidden')
  form.classList.add('hidden')
  savedView.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}

homeButton.addEventListener('click', goHome)

function goHome() {
  homeCover.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}



makeBookButton.addEventListener('click', makeNewBook, saveNewBookData)

function saveNewBookData() {
  event.preventDefault()
  covers.push(coverInput.value)
  titles.push(titleInput.value)
  descriptors.push(desc1Input.value)
  descriptors.push(desc2Input.value)
}
function makeNewBook() {
  event.preventDefault()
  var newBook = new Cover(coverInput.value, titleInput.value, desc1Input.value, desc2Input.value)
  goHome()
  form.classList.add('hidden')
  coverImage.src = newBook.cover
  coverTitle.innerText = newBook.title
  tagline1.innerText = newBook.tagline1
  tagline2.innerText = newBook.tagline2
}

//var savedCovers = [
  //new Cover(
    //"http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
//     "Sunsets and Sorrows",
//     "sunsets",
//     "sorrows"
//   )
// ];

var savedCovers = []
//var homeViewBook = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)

saveCoverButton.addEventListener('click', saveCover)
function saveCover() {
  if (savedCovers.length === 0) {
    savedCovers.push(randomBook)
  } else {
    var idList = [];
    for (var i = 0; i < savedCovers.length; i++) {
      idList.push(savedCovers[i].id)
    }
    if (!idList.includes(randomBook.id)) {
      savedCovers.push(randomBook)
    }
  }
  console.log(savedCovers)
}

// function saveCover() {
// if (!savedCovers.includes(randomBook)) {
//   savedCovers.push(randomBook)
//   console.log(savedCovers)
// }
// }
//This is the good function/////////////





    // for (var i = 0; i < savedCovers.length; i++) {
    //   if (randomBook.id !== savedCovers[i].id) {
    //     savedCovers.push(randomBook)
    //   }
    //}
  //}
  //console.log(savedCovers)
//

// for (var i = 0; i < savedCovers.length; i++) {
//     if (homeViewBook.id !== savedCovers[i].id) {
//       savedCovers.push(homeViewBook)
//     }
//   } console.log(savedCovers)





  // for(var i = 0; i < savedCovers.length; i++)
  // console.log(savedCovers)
  //     if((savedCovers.length > 0) && (savedCovers[i].id !== homeViewBook.id)) {
  //     savedCovers.push(homeViewBook)
  //     console.log(savedCovers)
  //   }
  // }
  //     for(var i = 0; i < savedCovers.length; i++) {
  //        if(homeViewBook === savedCovers[i]) {
  //      } else {
  //       savedCovers.push(homeViewBook)
  //     }
  //   }
  // }
    //} else {
    //savedCovers.push(homeViewBook)
    //console.log(savedCovers)
    //}
//}
//}
 //else if {
//      for(var i = 0; i < savedCovers.length; i++) {
//         if(homeViewBook === savedCovers[i]) {
//        return savedCovers.unshift(homeViewBook)
//      } console.log(savedCovers)
//     }
//   }
// }






  //     if(savedCovers.includes(homeViewBook)) {
  //       return `can't save cover`
  //     } else {
  //     savedCovers.push(homeViewBook)
  //     console.log(savedCovers)
  //   savedCovers.push(homeViewBook)
  // }

  // for (var i = 0; i < savedCovers.length; i++) {
  //   if(homeViewBook === savedCovers[i]) {
  //     console.log(savedCovers)
  //     console.log("Can't save this book")
  //   }
  // }

//     if(savedCovers.includes(homeViewBook)) {
//       return `can't save cover`
//     } else {
//     savedCovers.push(homeViewBook)
//     console.log(savedCovers)
//   }
// }
//   }
//console.log(savedCovers)

// console.log(savedCovers)
// console.log("Can't save this book")
// } else {
// savedCovers.push(homeViewBook)

//pushes the class to the saved covers array
//add if statement to function that checks if instance is included in array
//add display covers in the view saved covers covers event listener

// for(var i = 0; i < savedCovers.length; i++) {
//   if(homeViewBook == savedCovers[i]) {
// } else {
//  savedCovers.push(homeViewBook)
// }
