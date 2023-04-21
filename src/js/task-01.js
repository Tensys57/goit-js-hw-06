// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const ulQuantity = document.querySelectorAll("li.item").length;
console.log("Number of categories:", ulQuantity);
const list = document.querySelectorAll("#categories");
console.log("list :>> ", list);
list.forEach((el) => {
  const title = el.textContent;
  console.log(title);
});
