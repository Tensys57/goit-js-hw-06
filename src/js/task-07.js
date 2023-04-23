// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const refs = {
  inputSizeValue: document.querySelector("#font-size-control"),
  spanTextContext: document.querySelector("#text"),
};
refs.inputSizeValue.addEventListener("input", inputSizeHandler);
function inputSizeHandler(event) {
  const readingSize = event.currentTarget.value;
  let newFontSize = readingSize + "px";
  refs.spanTextContext.style.fontSize = newFontSize;
}
