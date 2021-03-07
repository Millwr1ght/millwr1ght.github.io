let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
yearSpan.innerHTML = year;

//nav
//const navButton = document.getElementById('nav-button');

function navToggle() {
    let topNavList = document.getElementById('nav-list');
    topNavList.classList.toggle('responsive');
};
window.onresize = () => {if (window.innerWidth > 640) topNavList.classList.remove('responsive')};


//populate town-cards

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const KWDDtowns = ['Preston', 'Fish Haven', 'Soda Springs'];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  //now with that response
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
        let town = towns[i];
        if (KWDDtowns.includes(town.name)) {
            //create town card
            let townCard = document.createElement('article');
            townCard.setAttribute('id', `${town.name}`);
            townCard.setAttribute('class', 'town-card content');

            //town name
            let h2 = document.createElement('h2');
            h2.textContent = `${town.name}`;
            townCard.appendChild(h2);

            //town motto,
            let motto = document.createElement('p');
            motto.textContent = `${town.motto}`;
            motto.setAttribute("class", "motto");
            townCard.appendChild(motto);

            //town year founded,
            let founded = document.createElement('p');
            founded.textContent = `Founded in: ${town.yearFounded}`;
            townCard.appendChild(founded);
            
            //town population,
            let population = document.createElement('p');
            population.textContent = `Population: ${town.currentPopulation}`;
            townCard.appendChild(population);
            
            //town annual rainfall
            let rainfall = document.createElement('p');
            rainfall.textContent = `Average rainfall (inches): ${town.averageRainfall}`;
            townCard.appendChild(rainfall);

            //town img
            let townPicture = document.createElement('img');
            townPicture.setAttribute('src', `images/${town.photo}`);
            townPicture.setAttribute('alt', `definitely a photo of ${town.name}`);

            //add to the DOM
            document.getElementById('town-cards').appendChild(townCard);
        
        }
    };
});