import React from "react";
import { Users } from "./Users/Users";

const Filter = () => {
  const [filter, setFilter] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [sourch, setSourch] = React.useState([]);
  React.useEffect(() => {
    api();
  }, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const json = await response.json();
    console.log("Filter: ok");

    if (filter === "") {
      setUsers(json);
    } else {
      filterSourch();
    }
  }

  function filterSourch() {
    users.map((user) => user.name.slice(0, 1) === filter);

    const info = [];
    users.filter((user) => {
      const arrUser = user.name.slice(0, 1) === filter;
      if (arrUser) {
        let obj = {
          id: user.id,
          nome: user.name,
          nascimento: user.birthdate,
          ultimaCompra: user.lastPurchaseDate,
          totalCompras: user.countPurchase,
        };
        info.push(obj);
      }
    });
    setSourch(info);
    console.log(info);
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
        onChange={({ target }) => setFilter(target.value.toUpperCase())}
      />
      <button onClick={filterSourch}>Pesquisar</button>
      <ul>
        {users.map((user) => (
          <div className="row" key={user.id}>
            <section>
              <p>
                <strong>Nome: </strong>
                {user.name}
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
    </>
  );
};

export default Filter;
