const textInput = document.querySelector("#name-input");
console.log(textInput);

const outPut = document.querySelector("#name-output");
console.log(outPut);

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  outPut.textContent = event.currentTarget.value;
}
