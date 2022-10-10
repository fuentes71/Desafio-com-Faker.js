const { faker } = require("@faker-js/faker");

faker.locale = "pt_BR";
//Utiliza json para executar fakerJs
module.exports = () => {
  //Armazenamento de dados
  const data = {
    users: [],
  };

  //Loop para gerar fakes
  for (let index = 1; index <= 5; index++) {
    const genre = faker.name.sex();
    const fullName = () => {
      if (genre === "Masculino") {
        return "male";
      } else {
        return "female";
      }
    };
    data.users.push({
      id: index,
      genre: genre,
      name: faker.name.fullName({
        sex: fullName(),
      }),
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
          .getFullYear() + Math.floor(Math.random() * (20 - 1) + 1)
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
          .birthdate({ min: 2000, max: 2020, mode: "year" })
          .getFullYear() + 1
      }`,
      countPurchase: Math.floor(Math.random() * (30 - 1) + 1),
    });
  }
  return data;
};
