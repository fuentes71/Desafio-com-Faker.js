import React from "react";

const Purchases = () => {
  const [users, setUsers] = React.useState([]);
  const [filter, setFilter] = React.useState([]);
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    api();

    filterPurchase();
  });
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=`);
    const json = await response.json();
    setUsers(json);
  }

  function filterPurchase() {
    const info = [];
    users.filter((user) => {
      const arrUser = user.countPurchase;
      if (arrUser > 15) {
        let obj = {
          id: user.id,
          name: user.name,
          birthdate: user.birthdate,
          lastPurchaseDate: user.lastPurchaseDate,
          countPurchase: user.countPurchase,
        };
        info.push(obj);
      }
      return setFilter(info);
    });
  }

  function handleClick() {
    setDisplay(!display);
  }

  return (
    <>
      <h1>
        ⦁ Implemente uma função que retorne os dados dos clientes que já
        realizaram mais de 15 compras.
      </h1>
      <div>
        <button onClick={handleClick}>
          {display ? "Mostrar" : "Esconder"}
        </button>
      </div>
      {display ? (
        ""
      ) : (
        <ul>
          {filter.map((user) => (
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
      )}
    </>
  );
};
export default Purchases;
