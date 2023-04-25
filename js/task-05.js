// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
refs.nameInput.addEventListener("input", inputHandler);
function inputHandler(event) {
  refs.nameInput.value !== ""
    ? (refs.nameOutput.textContent = event.currentTarget.value)
    : (refs.nameOutput.textContent = "Anonymous");
}
