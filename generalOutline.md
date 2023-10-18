# General Outline/Psuedocode

- Open the page with *open index.html* in terminal


## Iteration 0

- We want the page to load with a randomly generated cover
- A randomly generated cover should have attributes that include a random image, title, and tagline with two random descriptors
- We want a function that shuffles/randomizes these attributes when invoked, and we want that function linked to a button on the page
- Hints given: potentially update the *currentCover* variable, and create a funtion that displays info on the DOM


## Iteration 1

- We want to be able to switch between the *Home*, *View Saved Covers*, and *Make your own Cover* pages/forms on the site. 
- We want covers generated in the *Make Your Own Cover* page to be stored and accessible by whoever generated them when they navigate to the *Saved Covers* page

### 'Home' Page
- The *Home* button should display the homepage
- The *Home* button should be hidden while in the homepage
- The *Show New Random Button* and *Save Cover* buttons should be visible here

### 'Make Your Own Cover'/Form Page
- The *Make Your Own Cover* button should display the form with the *Cover*, *Title*, *First descriptor*, and *Second descriptor* fields. Note that these fields do not have to actually work at this stage of the project.
- The home page should not be visible
- The *Show New Random Cover* and *Save Cover* buttons should be hidden
- The *Home* button should be visible

### 'Saved Covers' Page
- The *View Saved Covers* button should show all covers generted by the user
- The homepage should be hidden
- The *Show New Random Cover* and *Save Cover* buttons should be hidden
- The *Home* button should be visible



## Iteration 2

- The form on the *Make Your Own Cover/Form* page should be able to accept user inputs
- The input values should be saved(pushed?) into appropiate arrays
- The *Make Book* button should generate a unique cover object based on the input values
- The site should be able to switch between pages seamlessly
- The cover object should display the newly created cover, including the image, title, and 2 descriptors when in the main view on the DOM


## Iteration 3

- The *Save Cover* button should add the current object to a savedCovers array
- The *Save Cover* button should not create multiple instances of the object
- All saved cover objects (in the savedCovers array) should display in the *Saved Covers* page
- NOTE: On page refresh, these need not persist. Remove the boilerplate array.


## Iteration 4

- JS code (NOT HTML onclick) should delete *View Saved Covers* objects on a double click

## Optional

- TBD