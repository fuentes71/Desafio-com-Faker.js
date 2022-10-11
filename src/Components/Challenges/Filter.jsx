import React from "react";

const Filter = () => {
  const [filter, setFilter] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    api();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const info = [];
    users.filter((user) => {
      const arrUser = user.name.slice(0, 1) === filter;
      if (arrUser) {
        let obj = {
          id: user.id,
          name: user.name,
          birthdate: user.birthdate,
          genre: user.genre,
          lastPurchaseDate: user.lastPurchaseDate,
          countPurchase: user.countPurchase,
        };
        return info.push(obj);
      }
      return null;
    });
    setUsers(info);
  }
  return (
    <>
      <h1>
        ⦁ Desenvolva, utilizando filter , uma função que, dado um caractere de
        entrada, retorne todos os registros de clientes cujo o nome inicia com o
        caractere dado.
      </h1>
      <input
        type="text"
        value={filter}
        placeholder="Pesquisar Por Caracter"
        onChange={({ target }) => setFilter(target.value.toUpperCase())}
      />
      <div>
        <button onClick={filterSourch}>Pesquisar</button>{" "}
        <button onClick={() => setDisplay(!display)}>
          {display ? "Mostrar" : "Esconder"}
        </button>
      </div>
      {display ? (
        ""
      ) : (
        <ul>
          {users.map((user) => (
            <div key={user.id}>
              <section>
                <p>
                  <strong>Nome: </strong>
                  {user.name}
                </p>
                <p>
                  <strong>Genero: </strong>
                  {user.genre}
                </p>
                <p>
                  <strong>Aniversario: </strong>
                  {user.birthdate}
                </p>
                <p>
                  <strong>Última Compra: </strong>
                  {user.lastPurchaseDate}
                </p>
                <p>
                  <strong>Total de Compras Feitas: </strong>
                  {user.countPurchase}
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
