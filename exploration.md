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