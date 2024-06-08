console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const actualHour = new Date().getHours();
  if (actualHour >= 6 && actualHour <= 12) {
    return "Good Morning";
  } else if (actualHour >= 13 && actualHour <= 18) {
    return "Good Afternoon";
  } else if (actualHour >= 19 && actualHour <= 22) {
    return "Good Afternoon";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  const actualDay = new Date().getDay();
  if (actualDay === 0 || actualDay === 6) {
    return (document.body.style.backgroundColor = "hotpink");
  } else if (actualDay === 1) {
    return (document.body.style.backgroundColor = "darkgray");
  } else {
    return (document.body.style.backgroundColor = "lightblue");
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();

console.log(new Date().getDay());
