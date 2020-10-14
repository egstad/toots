// elements
const elToggle = document.querySelector('.toot-toggle');
const elsText = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, li');
const elToot = document.querySelector('audio');

// locates a string and replaces it with another
const findAndReplace = function(el, find, replace) {
  // from
  let string = el.innerText;
  // to
  let replacedString = string.replaceAll(find, replace);
  // update the dom
  el.innerText = replacedString;
}

// 
const updateAllText = function() {
  elsText.forEach(function(textElement) {
    findAndReplace(textElement, 'Donald Trump', 'Toots');
  })
}

// click event 
const trumpToToots = function() {
  updateAllText()
  elToot.play();
}

// click event
elToggle.addEventListener('click', trumpToToots);