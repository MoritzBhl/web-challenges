const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  const age = Number(input.value);
  if (age > 9 && age <= 19) {
    console.log("You are a teen.");
  } else {
    console.log("You are not a teen.");
  }
});

// Number(x) converts the string from the input to a number
// Beware: input values are *always* strings!

// Exercise:
// Use conditions and the logical AND operator to write
// "You are a teen." or "You are not a teen." into the output.
