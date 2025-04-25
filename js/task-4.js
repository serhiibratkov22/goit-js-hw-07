document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", (event) => {
    // Зупиняємо стандартну поведінку браузера
    event.preventDefault();

    const {
      elements: { email, password },
    } = loginForm;

    // Перевіряємо, чи всі поля заповнені
    if (email.value.trim() === "" || password.value.trim() === "") {
      alert("All form fields must be filled in");
      return;
    }

    // Перевіряємо, чи email має правильний формат
    const formData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };

    // Виводимо дані в консоль
    console.log(formData);

    // Скидаємо форму
    loginForm.reset();
  });
});
