const { faker } = require("@faker-js/faker");

//Utiliza json para executar fakerJs
module.exports = () => {
  //Armazenamento de dados
  const data = {
    users: [],
  };
  faker.locale = "pt_BR";

  //Loop para gerar fakes
  for (let index = 1; index <= 5; index++) {
    data.users.push({
      id: index,
      name: faker.name.fullName(),
      birthdate: `${
        faker.date.birthdate({ min: 1900, max: 2000, mode: "year" }).getDay() +
        1
      }/${
        faker.date
          .birthdate({ min: 1900, max: 2000, mode: "year" })
          .getMonth() + 1
      }/${
        faker.date
          .birthdate({ min: 1910, max: 2006, mode: "year" })
          .getFullYear() + 1
      }`,
      lastPurchaseDate: `${
        faker.date.birthdate({ min: 1900, max: 2000, mode: "year" }).getDay() +
        1
      }/${
        faker.date
          .birthdate({ min: 1900, max: 2000, mode: "year" })
          .getMonth() + 1
      }/${
        faker.date
          .birthdate({ min: 1910, max: 2000, mode: "year" })
          .getFullYear() + 1
      }`,
      countPurchase: Math.floor(Math.random() * (30 - 1) + 1),
    });
  }
  return data;
};
