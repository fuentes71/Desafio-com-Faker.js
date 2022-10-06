import React from "react";

const Sales = () => {
  const [display, setDisplay] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [sales, setSales] = React.useState([]);
  React.useEffect(() => {
    api();
  }, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=`);
    const json = await response.json();
    setUsers(json);
  }

  function searchSales() {
    let info = [];
    users.filter((user) => {
      const arrUser = user.lastPurchaseDate.substring(4).replace("/", "");
      const date = new Date().getFullYear();
      console.log(date);
      console.log(arrUser);
      console.log(date - arrUser);
      if (date - arrUser >= 1) {
        let obj = {
          id: user.id,
          name: user.name,
          birthdate: user.birthdate,
          lastPurchaseDate: user.lastPurchaseDate,
          countPurchase: user.countPurchase,
        };
        info.push(obj);
        console.log(info);
      }
    });
    setSales(info);
  }
  function handleClick() {
    setDisplay(!display);
    searchSales();
  }
  return (
    <>
      <h1>
        ⦁ Implemente uma função que retorne os dados dos clientes que não
        compram há mais de 1 ano.
      </h1>
      <div>
        <button onClick={handleClick}>
          {display ? "Mostrar" : "Esconder "}{" "}
        </button>
      </div>{" "}
      <p>Dados de clientes que não compram há mais de 1 ano</p>
      {display ? (
        ""
      ) : (
        <ul>
          {sales.map((user) => (
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
      )}{" "}
    </>
  );
};

export default Sales;
