//products JSON
const json = "data.json";

async function getProductsData(){
  const response = await fetch(json);
  const data = await response.json();
  return data.products;
}
getProductsData(json)
  .then((products) =>{
  displayProducts(products);
 });

const displayProducts = (products) => {
  const cards = document.querySelector('div.cards');
  let sectionNumber = 0;

  products.forEach((product) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let name = document.createElement('p');
    let price = document.createElement('p');
    let pic = document.createElement('img');
    let type = document.createElement('p');
    let buy = document.createElement('a');
    sectionNumber = sectionNumber +1;

    card.setAttribute('id', `section ${product.name}`);
    h2.textContent = `${product.brand}`;
    h2.setAttribute('class', 'brand');
    name.textContent = `Color/Name: ${product.name}`;
    name.setAttribute('class', 'name');
    price.textContent = `Price: ${product.price}`;
    price.setAttribute('class', 'price');
    pic.setAttribute('src', product.picture);
    pic.setAttribute('alt','Product Image');
    type.textContent = `Thread Type: ${product.type}`;
    type.setAttribute('class', 'type');
    buy.textContent = `Where to buy`;
    buy.setAttribute ('href', product.url);
    buy.setAttribute('class', 'buy');



    card.appendChild(h2);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(pic);
    card.appendChild(type);
    card.appendChild(buy);
    cards.appendChild(card);
  });
}