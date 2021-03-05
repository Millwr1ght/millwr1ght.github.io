//API url
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

//fetch the API response

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  //now with that response
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    console.log(prophets);
    //loop over each element in the "meat" of the response
    for (let i = 0; i < prophets.length; i++ ) {
      //build the HTML of a prophet card using the createElement(), textContent(), and appendChild() methods
      let card = document.createElement('section');
      
      //title w/name
      let h2 = document.createElement('h2');
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      card.appendChild(h2);

      //birth date
      let birthDate = document.createElement('p');
      birthDate.textContent = "Date of birth: " + prophets[i].birthdate;
      card.appendChild(birthDate);

      //birth place
      let birthPlace = document.createElement('p');
      birthPlace.textContent = "Place of birth: " + prophets[i].birthplace;
      card.appendChild(birthPlace);

      //image 
      let image = document.createElement('img');
      image.setAttribute('src', prophets[i].imageurl).setAttribute('alt', prophets[i].name + prophets[i].lastname + ' - ' + prophets[i].order);
      card.appendChild(image);

      //add to the DOM
      document.getElementById('cards').appendChild(card);

    });

  });
