---
#RomCom - README#
---

###Contributors###
  - Aaron Townsend(https://github.com/atownse/) and Joe Lopez(https://github.com/Codo-Baggins/) 


##Introduction##
  - The main goal of this project was to use JavaScript to create a website that generates unique romance novel covers. 
  - Added features include:
    - Generating random covers
    - Creating self made covers
    - Saving previously generated covers
    - Deleting unwanted covers by selecting them

##Process##
  1. Iteration 0
    - Generating a random cover once the page loaded  
    - Using querySelector to access HTML elements

    ![Onload gif](/readme_gifs/random_cover_onload_gif.gif)

  2. Iteration 1
    - Accessing the Show New Random Cover Button
    - Generating a random cover upon that button click

    ![Random Cover](/readme_gifs/random_button_cover_gif.gif)

  3. Iteration 2
    - Working with the other buttons on the page to display the correct contents
    - Utilizing classList to toggle CSS selectors within the HTML

  4. Iteration 3
    - Generate a new cover based on user inputs 
    - Display the user generated cover

    ![Make Own Cover](/readme_gifs/make_own_book_gif.gif)

  5. Iteration 4
    - Use JavaScript to append HTML elements 
    - Invoke the addSavedCoversToSave and createSavedCovers functions to display the saved covers selected by the user

    ![Save Covers](/readme_gifs/save_covers_gif.gif)

  6. Iteration 5 
    - Use an eventListener to remove saved covers when a double click event is triggered

    ![Delete Cover](/readme_gifs/delete_covers_gif.gif)

  7. Future Iterations
    - Create personalized profile functionality for a user to store their saved covers for future use

  ##Sources##
  1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
  2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
  3. https://developer.mozilla.org/en-US/docs/Web/API/Event/target
  4. https://javascript.info/searching-elements-dom
  5. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  6. https://developer.mozilla.org/en-US/docs/Web/Events
  7. Personal Sources: Brigette Doelp & Jon Sweet