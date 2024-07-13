import Chance from "chance";

const chance = Chance();

export default function handler(request, response) {
  const character = {
    name: chance.name(),
    gender: chance.gender(),
    age: chance.age(),
    birthday: chance.birthday(),
    socialSecurityNumber: chance.ssn(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };
  response.status(200).json(character);
}
