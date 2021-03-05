//API url
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

//fetch the API response
window.onload(
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    //now with that response
    .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      const prophets = jsonObject['prophets'];
      //loop over each element in the "meat" of the response
      prophets.forEach((prophet) => {
          //build the HTML of a prophet card using the createElement(), textContent(), and appendChild() methods
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          let birthDate = document.createElement('p');
          let birthPlace = document.createElement('p');
          let image = document.createElement('img');
          
          //title w/name
          h2.textContent = prophets[prophet].name + ' ' + prophets[prophet].lastname;
          card.appendChild(h2);

          //birth date
          birthDate.textContent = "Date of birth: " + prophets[prophet].birthdate;
          card.appendChild(birthDate);

          //birth place
          birthPlace.textContent = "Place of birth: " + prophets[prophet].birthplace;
          card.appendChild(birthPlace);

          //image
          image.setAttribute('src', prophets[prophet].imageurl).setAttribute('alt', prophets[prophet].name + prophets[prophet].lastname + ' - ' + prophets[prophet].order);
          card.appendChild(image);

          //add to the DOM
          document.getElementById('cards').appendChild(card);
      
      });

    })
);
