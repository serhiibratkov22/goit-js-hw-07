function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const changeColorBtn = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  changeColorBtn.addEventListener("click", () => {
    // Генеруємо випадковий колір
    const randomColor = getRandomHexColor();

    // Змінюємо колір фону body
    document.body.style.backgroundColor = randomColor;

    // Виводимо колір в span
    colorSpan.textContent = randomColor;
  });
});
