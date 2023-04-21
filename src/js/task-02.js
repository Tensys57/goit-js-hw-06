// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const array = [];
const listOfIngredients = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  // array.push(item);
  listOfIngredients.append(item);
});
