// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST
// Create element
// Create text node
// Add text node to element
// Add element end of list

let listEnd = document.createElement('li');
let listText = document.createTextNode('Ending Element');
listEnd.appendChild(listText);
list.appendChild(listEnd);

// ADD NEW ITEM START OF LIST
// Create element
// Create text node
// Add text node to element
// Add element to list

let listStart = document.createElement('li');
let listText2 = document.createTextNode('Starting Element');
listStart.appendChild(listText2);
list.insertBefore(listText2,list.firstChild);

// All <li> elements
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool

let liElements = document.getElementsByTagName('li');
let i;
for (i=0; i < liElements.length; i++){
    liElements[i].className = 'cool';
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup

let heading = document.querySelector('h2');
let h2Text = heading.firstChild.nodeValue;
let numberOfItems = liElements.length;
let newHeading = h2Text + '<span>' + numberOfItems + '</span>';
heading.innerHTML = newHeading;