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

            //Physical address
            let address = document.createElement('p');
            address.textContent = cardContent.address;

            //Phone Number
            let phone = document.createElement('p');
            phone.textContent = cardContent.phone;

            //website, if they have one
            if (cardContent.website != "") {
                let website = document.createElement('p');
                website.textContent = cardContent.website;
            }

            //email address, if they have one
            if (cardContent.email != "") {
                let email = document.createElement('p');
                email.textContent = cardContent.email;
            }

            //logo, if there is one
            if (logo != "") {
                let logo = document.createElement('img');
                logo.setAttribute('src', cardContent.logo);
                logo.setAttribute('alt', cardContent.name);
            }



        }
    });
