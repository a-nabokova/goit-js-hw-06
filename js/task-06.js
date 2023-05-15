const input = document.getElementById("validation-input");
const length = input.getAttribute("data-length");

console.log(length);

input.addEventListener("blur", () => {
  if (input.value.length === Number(length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
