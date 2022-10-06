import React from "react";

const FilterName = () => {
  const [users, setUsers] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const [name, setName] = React.useState([]);
  React.useEffect(() => {
    api();
  }, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=`);
    const json = await response.json();
    setUsers(json);
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
  function handleClick() {
    setDisplay(!display);
    nameClient();
  }
  return (
    <>
      <h1>
        ⦁ Desenvolva uma função que retorne apenas o primeiro nome dos clientes
      </h1>
      <div>
        <button onClick={handleClick}>
          {display ? "Mostrar" : "Esconder"}
        </button>
      </div>
      <h2>Primeiro Nome:</h2>
      {display ? (
        ""
      ) : (
        <ul>
          {name.map((name, index) => (
            <div key={index}>
              <section>
                <p>Nome: {name}</p>
              </section>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default FilterName;
