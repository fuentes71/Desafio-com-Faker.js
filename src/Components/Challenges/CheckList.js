import React from "react";

const CheckList = () => {
  const [filter, setFilter] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [check, setCheck] = React.useState(true);

  React.useEffect(() => {
    api();
  });
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const json = await response.json();
    setUsers(json);
  }
  function filterSearch() {
    const info = [];
    setCheck(false);
    users
      .filter((user) => user.name.slice(0, 1))
      .map((user) => {
        console.log(check);
        const firstName = user.name.split(" ");
        return info.push(firstName[0].toUpperCase());
      });
    info.map((user) => {
      if (user === filter) {
        return setCheck(true);
      }

      return null;
    });
  }

  return (
    <>
      <h1>
        ⦁ Desenvolva uma função que, dado um nome de entrada, retorna se o nome
        está contido na lista.
      </h1>
      <input
        type="text"
        value={filter}
        placeholder="Pesquisar Nome"
        onChange={({ target }) => setFilter(target.value.toUpperCase())}
      />
      <div>
        <button onClick={filterSearch}>Pesquisar</button>{" "}
      </div>
      {check ? (
        <p>Cliente está contido na lista.</p>
      ) : (
        <p>Nenhum cliente encontrado.</p>
      )}
    </>
  );
};

export default CheckList;
