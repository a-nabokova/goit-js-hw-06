const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // запобігаємо перезавантаженню сторінки

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert("Please fill in all fields");
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);
    form.reset();
  }
});
