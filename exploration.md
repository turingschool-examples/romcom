# First Impressions

### Cover.js
- Declares a new class "Cover" with 5 properties, 4 of which are going to be passed in as arguments somewhere - The image call, the title, and both descriptor adjectives. One of the properties is storing the date of creation, which doesn't seem to appear anywhere. Could be used in arraging the created covers in order of creation.

### Data.js
- Declares our variables holding our cover images, title names, and descriptor words. These will hold all inputted data and be referred to when making random covers. 
- In theory could also be used for drop down menus on our input fields if users couldn't think of something themself maybe?

### Main.js
- Has some comments to help us organize our code, first exposure to event listeners and handlers, which (no research first impression following:) sound like what happens when a user does something (event being the action like click, or enter an input or something). Listener being kinda like looking out for the action, and Handler being what happens on those actions. 
- Has a couple declared variables, one looks like an array that will hold created covers. The other looks like it will be used to call the current cover that we just made or want to look at again after browsing our saved ones.
- Also has a function that returns a random number no larger than the length of the array passed in, and not a negative number. Looks like it can be used on all of our data.js variables (arrays) to get index positions to reference when a user wants a random cover.

### Index.html
- First real look at html
- Seems like the formatting for user view on webpages(?)
- Some fairly straight-forward looking things like establishing a section start with `<section>` and closing it with `</section>` to finish it, along with other things like `<button></button>`, `<label></label>`.
- Looks like the text before `</button>` is the text that appears on the button.
- Section at lines 10 - 16 makes the buttons, currently hiding the home button from view because we're starting on the home page.
- Section at lines 17 - 25 displays the default/current cover/home page.
- Section at lines 26 - 28 would display the saved covers when the "View Saved Covers" button is clicked, currently hidden from view.
- Section at lines 29 - 41 would display the fields user needs to fill out to make a new cover when the "Make Your Own Cover" button is clicked, currently hidden from view.
- Our `<script>'s` after line 41 are referencing our other files to pull the data from.