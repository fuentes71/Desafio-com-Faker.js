import React from "react";

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
    const info = [];
    users.filter((user) => {
      const arrUser = user.name.slice(0, 1) === filter;
      if (arrUser) {
        let obj = {
          id: user.id,
          name: user.name,
          birthdate: user.birthdate,
          lastPurchaseDate: user.lastPurchaseDate,
          countPurchase: user.countPurchase,
        };
        info.push(obj);
      }
    });
    setSourch(info);
    console.log(info);
    console.log(sourch);
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
        {sourch.map((user) => (
          <div key={user.id}>
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
