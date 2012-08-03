## Project Template
We needed a place to start our front-end work on projects and this is it. It takes our favourite elements of various framework, and pulls them all into one place. We make heavy use of the css framework less, it makes our development more streamlined and more enjoyable. We've also borrowed parts of html5 boilerplate where necessary, full credit goes to them, you [should look at their work](http://h5bp.com). A quick breakdown of what this base includes is below.

### HTML
Nothing too exciting here, we've split the header and footer off into includes to make things easier when doing initial templates. The header has an html5 shim to kick shitty browsers into gear, the footer has all the other javascript for speed reasons. The header file also has conditional statements to add ie specific classes to the html tag. We try to include the latest version of [jQuery](http://jquery.com) when possible.

### CSS
We have two files, helper.less and screen.less. The helper file includes some snippets and base elements which are helpful on almost any project such as an image replacement technique. The screen file includes a couple of small less helpers to get started and shows our commenting style guide. Your main css should go here, unless you plan to separate parts of your css into more files.

### JS
Basically just the file structure is in here. The only thing with noting is the scroll function. This allows you to add a class of scroll to any anchor link and it will take care of a nice smooth animation for you.

#### Thanks
Hope you find this useful, we certainly do. Enjoy!
