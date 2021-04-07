const directoryURL = 'millwr1ght.github.io/beryl/js/directory.json';

fetch(directoryURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let directory = jsObject.businesses;
        //create cards
        for (const business in directory) {
            let card = document.createElement('section');
            let cardContent = directory[business];

            //Business name
            let h2 = document.createElement('h2');
            h2.textContent = cardContent.name;
            h2.classList.add('card-title');
            card.appendChild(h2);

            //Physical address
            let address = document.createElement('p');
            address.textContent = cardContent.address;
            address.classList.add('card-address');
            card.appendChild(address);

            //Phone Number
            let phone = document.createElement('p');
            phone.textContent = cardContent.phone;
            phone.classList.add('card-number');
            card.appendChild(phone);

            //website, if they have one
            if (cardContent.website != "") {
                let website = document.createElement('p');
                website.textContent = cardContent.website;
                website.classList.add('card-site');
                card.appendChild(website);
            }

            //email address, if they have one
            if (cardContent.email != "") {
                let email = document.createElement('p');
                email.textContent = cardContent.email;
                card.appendChild(email);
                email.classList.add('card-email');
            }

            //logo, if there is one
            if (logo != "") {
                let logo = document.createElement('img');
                logo.setAttribute('src', cardContent.logo);
                logo.setAttribute('alt', cardContent.name);
                logo.classList.add('card-img');
                card.appendChild(logo);
            }

            
            
            
            



        }
    });
