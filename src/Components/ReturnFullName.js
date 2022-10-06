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
        const fullName = user.name;
        return info.push(fullName);
      });
    setName(info);
  };

  return (
    <>
      <h1>⦁ Desenvolva uma função que retorne apenas os nomes dos clientes.</h1>
      <button onClick={nameClient}>Mostrar</button>
      <h2>Nome Completo</h2>
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
