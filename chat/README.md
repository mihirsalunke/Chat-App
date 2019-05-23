# JS Dom Basics

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'js-dom-basic' (`git checkout -b js-dom-basic`)
* Modify the files in this directory as requested
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the TA and I as reviewers.  
* Due by 11:59pm Sun Feb 24

## Goal and Requirements

The goal is to add some front-end JS-based convenience to the chat application.  You are to demonstrate your understanding of reading and manipulating the DOM after a page is loaded.

* The "login" button will be disabled if there is no username provided
* Clicking on a username in the user list will do the below (or undo them if this username is already selected)
   * The username in the user list that is selected will be shown in a different color
   * Any previous (different) username selected will __remain__ selected
   * This will change the list of visible messages (see below)
* There will be a button at the end of the user list to "Unselect All"
   * This button is only visible if a username is selected (You hide the visibility or add/remove the element, your choice)
   * When clicked, all usernames are deselected and all messages become visible
* The message list will:
   * show all messages when no usernames are selected
   * show only messages from selected usernames when at least one username is selected
   * show an indicator when messages are not visible at the space where 1 or more messages would be
      * This indicators should be thin - big enough to be visible, small enough to be smaller than an actual message.
      * The indiciator can be an icon or text - your choice
      * You must not show multiple indicators next to each other.  
          * If there are 3 "hidden" messages between 2 visible messages, there will be only 1 indicator (message, indicator, message)
          * If there are 3 visible messages and 2 hidden messages that alternate, each hidden message is indicated (message, indicator, message, indicator)

## Requirements

### Visuals

* Your app and interactions should be attractive and usable
* The functionality should be understandable and discoverable
* I should be able to tell that a username is/is not selected
* I should be able to tell if messages are/are not hidden

### Functionality
* I should be able to select/unselect usernames to filter the messages
* Selecting a username with no messages should not cause any errors
* If I send a message or refresh, the page will reset and usernames will not remain selected and hidden messages will become unhidden

### Code
* Your CSS should not use names to describe the appearance
* Your JS should be broken up into smaller, well-named functions
* Your client-side JS should be contained within an IIFE and "use strict"
    * If you use browserify, it will provide the IIFE, but you must add any "use strict" statements    
* If you use browserify:
    * you must add a "build" option to the "scripts" section of package.json so that I/TA can use `npm run build` from this directory to generate the bundled JS in the correct file location.  
    * you must add browserify to the devDependencies (for example, using '--save-dev')
    * All of your source JS files must be in the repository

## Allowances
* You may create your HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You may provide additional visual feedback (e.g. messages) for the user
* You may add client-side JS files that you create (or bundle using browserify) as you desire

## Restrictions
* Do not use external JS (Exception: Nodemon and Browserify are permitted but not required)
   * Either of Nodemon and browserify can be listed as a devDependency, but not as a normal dependency.
* Do NOT modify server-side JS, not even the HTML-generation part
* Do not use external CSS libraries (except for icon libraries if desired - no JS!)
* Do not make additional server calls - the added code should not interact with fetch(), XHR, or other AJAX methods
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the assignment (no files from other assignments, for example)
* Do not use var
* Do not use alert
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use cookies
* Do not use localStorage, sessionStorage, IndexedDB or other client-side storage
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS
  * I and the TA must be able to read it easily

