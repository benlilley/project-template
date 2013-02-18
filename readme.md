## Project Template
We needed a place to start our front-end work on projects and this is it. It takes our favourite elements of various frameworks, and pulls them all into one place. We make heavy use of the css framework sass, it makes our development more streamlined and more enjoyable. We've also borrowed parts of html5 boilerplate where necessary, full credit goes to them, you [should look at their work](http://h5bp.com). A quick breakdown of what this templates includes is below.

### HTML
Nothing too exciting here. The header has an html5 shim to kick shitty browsers into gear, the footer has all the other javascript for speed reasons. The header file also has conditional statements to add ie specific classes to the html tag. We link to the latest version of [jQuery](http://jquery.com) but you'll want to set a specific version in production, unless you like living on the edge.

### CSS
Our CSS uses [SASS](http://sass-lang.com/), we previously used [LESS](http://lesscss.org) but switched to take advantage of extra functionality and things like [Compass](http://compass-style.org). We have included our base architecture which includes components, library and views. Library houses all our mixins, variables and compass imports. Components is for site wide elements such as forms, buttons and navigations. Views is where we do our site specific views such as homepage and blog. We also have a media file in the library folder to help with setting up responsive layouts.

### JS
Basically just the file structure is in here. The only thing with noting is the scroll function. This allows you to add a class of scroll to any anchor link and it will take care of a nice smooth animation for you.

#### Thanks
Hope you find this useful, we certainly do. Enjoy!
