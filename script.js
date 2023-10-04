//your code here
// Given array of band names
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith'];

// Function to remove articles ('a', 'an', 'the') from a string
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Remove articles and sort the band names
bandNames = bandNames.map(removeArticles).sort();

// Create an <ul> element to hold the sorted band names
const ulElement = document.createElement('ul');
ulElement.id = 'band';

// Loop through the sorted band names and create <li> elements
for (const name of bandNames) {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
}

// Append the <ul> element to the HTML with id 'band'
document.getElementById('band').appendChild(ulElement);

