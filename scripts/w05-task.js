/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const articleElement = document.createElement('article');
      const h3Element = document.createElement('h3');
      const imgElement = document.createElement('img');
  
      h3Element.textContent = temple.templeName;
      imgElement.src = temple.imageUrl;
      imgElement.alt = temple.location;
  
      articleElement.appendChild(h3Element);
      articleElement.appendChild(imgElement);
  
      templesElement.appendChild(articleElement);
    });
  };


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const temples = await response.json();
    templeList = temples; // Update the templeList array with the fetched data
    displayTemples(templeList); // Call the displayTemples function after the data is fetched
  };

/* reset Function */
const reset = () => {
    while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
    }
  };

/* sortBy Function */
const sortBy = (temples) => {
    reset(); // Clear the output
  
    const filter = document.getElementById('sortBy').value;
  
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'nonutah':
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;         
      case 'older':
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displayTemples(temples);
        break;
      default:
        break;
    }
  };

console.log(temples);


/* Event Listener */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sortBy').addEventListener('change', () => {
      sortBy(templeList);
    });
  
    getTemples();
  });