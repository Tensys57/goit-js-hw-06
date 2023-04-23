// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const refs = {
  inputObject: document.querySelector("#validation-input"),
};
const dataLength = Number(refs.inputObject.getAttribute("data-length"));
refs.inputObject.addEventListener("blur", blurHandler);
function blurHandler(blur) {
  blur.currentTarget.value.length === dataLength
    ? refs.inputObject.classList.add("valid")
    : refs.inputObject.classList.add("invalid");
}
