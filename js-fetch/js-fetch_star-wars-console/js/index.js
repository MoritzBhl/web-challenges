console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const responseObject = await response.json();
  const starWarsArray = responseObject.results;
  const eyeColorR2D2 = starWarsArray[2].eye_color;
  console.log(eyeColorR2D2);
  console.log(starWarsArray[3].name);
}

fetchData();
