import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  // const foundCountry = countries.find((country) => {
  //   const countryNameLowerCase = country.name.toLowerCase();
  //   const searchStringLowerCase = searchString.toLowerCase();
  //   return countryNameLowerCase.startsWith(searchStringLowerCase);
  // });

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }

  const foundCountries = countries.filter((country) => {
    const countryNameLowerCase = country.name.toLowerCase();
    const searchStringLowerCase = searchString.toLowerCase();
    return countryNameLowerCase.startsWith(searchStringLowerCase);
  });

  if (foundCountries.length > 0) {
    foundCountries.forEach((country) => {
      const countryElement = Country(country);
      container.append(countryElement);
    });
  }
});
