const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';



async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    return data.prophets;
    }
 
getProphetData(url)
    .then((prophets) => {
    displayProphets(prophets);
});

// I reviewed Marcos Ismayle da Silva Ribeiro site and was reminded that calling the function
// required more than just the name.

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}`;


        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        cards.appendChild(card);
    }); // end of forEach loop
} // end of function expression