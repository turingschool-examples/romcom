# Welcome to ROMCOM: an Interactive Romance Novel Cover Generator!

ROMCOM will give you the opportunity to create a completely random romance novel cover, complete with scintillating artwork, enthralling titles, and stimulating random taglines. Plus, you can create your own custom cover just by filling out our form. Each book even comes complete with its original price tag, which is value priced at $1.89!

## Instructions:

Please go to [https://cdegange.github.io/romcom/](https://cdegange.github.io/romcom/) to view the site.

You will be greeted with a random cover that has been created the first time the page loads.

Main Actions:

On the home page you will see four different buttons on the top:

- Show New Random Cover:
This button will generate a new random romance novel cover every time you press the button.
- Save Cover:
Once you have found a cover you like, you can save your cover using this button!
- View Saved Covers:
Here you will be able to view all the covers you have saved (note, this is not persistent and will reset if the page is refreshed).
- Make Your Own Cover:
- This button will open a custom cover creation form. You are given four text input fields.
- For the Cover input, enter the url of your favorite Romance novel cover you have found on the web. Here are a few to get you started. [1](http://s3.foreveryoungadult.com.s3.amazonaws.com/_uploads/images/37762/thedukeandi__span.jpg)* _[2](https://amolife.com/image/images/stories/Art/Painters/Max_Ginsburg_Illustration_3.jpg)* _[3](https://amolife.com/image/images/stories/Art/Painters/Max_Ginsburg_Illustration_1.jpg)
- For the Title field, enter your steamy book title.
- For the first descriptor field, add your first romantic word, like "desire".
- For the second descriptor field, add another romantic word, like "lust".
After filling out the fields, click "Make my book". Like magic, your book cover has been created! You can also save this custom cover to your collection using the "Save Cover" button.

## Functionality:

Contributors: Chad DeGange, Jessica Fatta, Eric Matlock

- We attempted to use small functions for each task, and tried to universalize functions wherever applicable.
- Site is built as a single HTML page utilizing several CSS classes, which are shown or hidden as needed using JavaScript.
- Saved covers array stores all saved books for the saved covers view.
- When a cover is saved, we built a function pushMyBook to push the book object properties into the savedCovers array. A second function then passes those same object properties as arguments into a pre-formatted html, accessing the relevant class properties as needed to format the cover for the saved covers view.
- For future updates, we would like to include additional functionality such as:
    - Ability to delete a cover from the saved covers view via doubleclick.
    - Persistent storage of saved covers, using an account or cookies to remember the user and store the save covers array into cache.
    - Ability to view the saved cover in an enlarged view upon clicking the desired cover.
    - Ability to drag and drop order of covers in the saved covers view.
    - Ability to download a favorite cover.
    - Ability to share a favorite cover to email, text, and social media platforms.
