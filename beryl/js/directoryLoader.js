const directoryURL = 'https://millwr1ght.github.io/beryl/js/directory.json';
fetch(directoryURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let directory = jsObject.businesses;
        //for each business, create a grid card
        for (const business in directory) {
            let card = document.createElement('section');
            card.classList.add('directory-card');
            let cardContent = directory[business];

            //Business name
            let h3 = document.createElement('h3');
            h3.textContent = cardContent.name;
            h3.classList.add('card-title');
            card.appendChild(h3);

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
                logo.setAttribute('loading', 'lazy');
                card.appendChild(logo);
            }
        }
    });
