// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let widthCounter = 30;
let newDivCollection = [];

const divCreator = (widthCounter) => {
  const newDiv = document.createElement("div");
  newDiv.style.width = widthCounter + "px";
  newDiv.style.height = widthCounter + "px";
  newDiv.style.backgroundColor = getRandomHexColor();
  return newDiv;
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    newDivCollection.push(divCreator(widthCounter));
    widthCounter += 10;
  }
  refs.divBoxes.append(...newDivCollection);
}

const refs = {
  inputAmount: document.querySelector("#controls input"),
  createButton: document.querySelector(`button[data-create]`),
  destroyButton: document.querySelector(`button[data-destroy]`),
  divBoxes: document.querySelector("#boxes"),
};

refs.createButton.addEventListener("click", () => {
  const amount = refs.inputAmount.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyButton.addEventListener("click", () => {
  let newDivCollection = [];
  refs.divBoxes.innerHTML = "";
});
