console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;

if (numberOfHotdogs < 5) {
  console.log("2€");
} else if (numberOfHotdogs < 100) {
  console.log("1.50€");
} else if (numberOfHotdogs < 1000000) {
  console.log("1€");
} else {
  console.log("0.1€");
}

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
// const coach = "Sebastian";

const greeting = "Hello " + userName === "Sebastian" ? "Coach" : userName;
+"!";

console.log(greeting);
