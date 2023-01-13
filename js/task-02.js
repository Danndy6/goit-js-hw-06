const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = (ingredients) => ingredients.map(element => {
  const item = document.createElement('li')
  item.className = ('item')
  item.textContent = element
  return item
});
const itemLi = document.querySelector('#ingredients');
itemLi.append(...itemsList(ingredients));
