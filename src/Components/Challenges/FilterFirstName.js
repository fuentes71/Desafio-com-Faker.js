import React from "react";

const Filter = () => {
  const [filter, setFilter] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [sourchQuantity, setSourchQuantity] = React.useState();
  React.useEffect(() => {
    api();
  }, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const json = await response.json();
    if (filter === "") {
      setUsers(json);
    } else {
      filterSourch();
    }
  }

  function filterSourch() {
    let info = 0;
    users.filter((user) => {
      const arrUser = user.name.slice(0, 1) === filter;
      if (arrUser) {
        return (info += 1);
      }
    });
    setSourchQuantity(info);
  }

  return (
    <>
      <h1>
        ⦁ Desenvolva uma função que, dado o caractere de entrada, retorna apenas
        o total de registros encontrados que iniciam com o caractere dado.
      </h1>
      <input
        type="text"
        value={filter}
        onChange={({ target }) => setFilter(target.value.toUpperCase())}
      />
      <button onClick={filterSourch}>Pesquisar</button>
      <p>Total de pessoas registradas com a letra pesquisada:</p>
      <h2>{sourchQuantity}</h2>
    </>
  );
};

export default Filter;
