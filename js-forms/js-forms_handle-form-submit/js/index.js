console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  let badnessSum =
    parseInt(formElements.age.value) + parseInt(formElements.badness.value);
  console.log(
    `The age-badness-sum of ${formElements.firstName.value} is "${badnessSum}"`
  );
  event.target.reset();
  formElements.firstName.focus();
});
