document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  nameInput.addEventListener("input", () => {
    // Отримуємо поточне значення з інпута і очищаємо його від пробілів по краях
    const trimmedValue = nameInput.value.trim();

    // Перевіряємо, чи інпут не порожній після очищення
    if (trimmedValue === "") {
      nameOutput.textContent = "Anonymous";
    } else {
      nameOutput.textContent = trimmedValue;
    }
  });
});
