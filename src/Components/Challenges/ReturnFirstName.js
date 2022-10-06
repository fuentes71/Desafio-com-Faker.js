import React from "react";

const FilterName = () => {
  const [users, setUsers] = React.useState([]);

  const [name, setName] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    api();
    setLoading(true);
  }, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=`);
    const json = await response.json();
    setUsers(json);
    setLoading(false);

    console.log("FirstName: ok");
  }

  const nameClient = () => {
    const info = [];
    users
      .filter((user) => user.name.slice(0, 1))
      .map(function (user) {
        const firstName = user.name.split(" ");
        return info.push(firstName[0]);
      });
    setName(info);
  };

  return (
    <>
      <h1>
        ⦁ Desenvolva uma função que retorne apenas o primeiro nome dos clientes
      </h1>
      <button onClick={nameClient}>Mostrar</button>
      <h2>Primeiro Nome:</h2>
      <ul>
        {name.map((name, index) => (
          <div key={index}>
            <section>
              <p>Nome: {name}</p>
            </section>
          </div>
        ))}
      </ul>
    </>
  );
};

export default FilterName;
