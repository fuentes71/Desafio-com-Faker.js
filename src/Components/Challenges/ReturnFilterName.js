import React from "react";

const Filter = () => {
  const [filter, setFilter] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState([]);
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    api();
  }, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const json = await response.json();
    if (filter === "") {
      setUsers(json);
    } else {
      filterSearch();
    }
  }

  function filterSearch() {
    const info = [];
    users.filter((user) => {
      const arrUser = user.name.slice(0, 1) === filter;
      if (arrUser) {
        const firstName = user.name.split(" ");
        info.push(firstName[0]);
      }
    });
    setSearch(info);
  }

  return (
    <>
      <h1>
        ⦁ Desenvolva uma função que retorne apenas o primeiro nome dos clientes
        cujo os nomes começam com o caractere de entrada da função
      </h1>
      <input
        type="text"
        value={filter}
        placeholder="Pesquisar Por Caracter"
        onChange={({ target }) => setFilter(target.value.toUpperCase())}
      />
      <div>
        <button onClick={filterSearch}>Pesquisar</button>{" "}
        <button onClick={() => setDisplay(!display)}>
          {display ? "Mostrar" : "Esconder"}
        </button>
      </div>
      {display ? (
        ""
      ) : (
        <ul>
          {search.map((user) => (
            <div key={user.id}>
              <section>
                <p>
                  <strong>Nome: </strong>
                  {user}
                </p>

                <br />
              </section>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Filter;
