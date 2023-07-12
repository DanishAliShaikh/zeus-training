function validate(event) {
  const [name, comment, male, female] = event.target;
  event.preventDefault();
  if (
    name.value === "" ||
    comment.value === "" ||
    (!male.checked && !female.checked)
  ) {
    alert("All fields are compulsory");
    const inputs = document.querySelectorAll(".field");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].focus();
        break;
      }
    }
  }
}
