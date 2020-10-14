// query your elements here...
const elToggle = document.querySelector('.toot-toggle');
const elText = document.querySelector('p');
const elToot = document.querySelector('audio');


// locates a string and replaces it with another
const findAndReplace = function(find, replace) {
  // from
  let string = elText.innerText;
  // to
  let replacedString = string.replaceAll(find, replace);
  // update the dom
  elText.innerText = replacedString;
}

// click event 
const trumpToToots = function() {
  findAndReplace('Donald Trump', 'Toots');
  elToot.play();
}

// click event
elToggle.addEventListener('click', trumpToToots);