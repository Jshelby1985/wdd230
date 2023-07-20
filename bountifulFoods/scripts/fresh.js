//Fruit data// 
const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

document.addEventListener("DOMContentLoaded", (event)=>{
    fetch(url)
    .then(response=> response.json())
    .then(data => {
        data.forEach(fruit => {
            document.getElementById("ingredient1").appendChild(createOptions(fruit));
            document.getElementById("ingredient2").appendChild(createOptions(fruit));
            document.getElementById("ingredient3").appendChild(createOptions(fruit));

        });
    });      
}); // end of function expression 

function createOptions(fruit){
    const option = document.createElement("option");
    option.text = fruit.name;
    option.value = JSON.stringify(fruit);
    return option;
}



//Nutrition facts and receipt//
function placeOrder() {
    let drinkCounter = localStorage.getItem("drinkCounter");
    drinkCounter = parseInt(drinkCounter) + 1;
    localStorage.setItem("drinkCounter",  drinkCounter)
    const firstName = document.getElementsByName('fname')[0].value;
    const lastName = document.getElementsByName('lname')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    const fruit1 = document.getElementById('ingredient1').value;
    const fruit2 = document.getElementById('ingredient2').value;
    const fruit3 = document.getElementById('ingredient3').value;
    const instructions = document.getElementById('instructions').value;
    const location = document.getElementById('location').value;
  
    const fruitObject1 = JSON.parse(fruit1);
    const fruitObject2 = JSON.parse(fruit2);
    const fruitObject3 = JSON.parse(fruit3);

    const facts = { carbohydrates: 0, protein: 0, fat: 0, calories: 0, sugar: 0 };
    const chosenFruits = [fruitObject1, fruitObject2, fruitObject3];

    chosenFruits.forEach(chosenFruit => {
        Object.keys(facts).forEach(key =>{
            facts[key] += chosenFruit.nutritions[key];
        });
    }); 

    const receipt = document.getElementById('receipt');
    receipt.innerHTML = `
        <p>Pickup Location: ${location}</p>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Selected fruits: ${fruitObject1.name}, ${fruitObject2.name}, ${fruitObject3.name}</p>
        <p>Special Instructions: ${instructions}</p>
        <p>Order Date: ${new Date().toLocaleDateString()}</p>
        <p>Total Nutritional Values:</p>
        <p>Carbohydrates: ${facts.carbohydrates.toFixed(2)}</p>
        <p>Protein: ${facts.protein.toFixed(2)}</p>
        <p>Fat: ${facts.fat.toFixed(2)}</p>
        <p>Sugar: ${facts.sugar.toFixed(2)}</p>
    `;
};

// document.addEventListener('click', placeOrder());


