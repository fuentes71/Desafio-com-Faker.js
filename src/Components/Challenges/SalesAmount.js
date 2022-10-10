import React from "react";

const SalesAmount = () => {
  const [users, setUsers] = React.useState([]);
  const [sales, setSales] = React.useState(0);
  React.useEffect(() => {}, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=`);
    const json = await response.json();
    setUsers(json);
    filterSearch();
  }
  api();

  function filterSearch() {
    let info = 0;
    users.forEach((user) => (info += user.countPurchase));
    setSales(info);
  }

  return (
    <>
      <h1>
        ⦁ Implemente uma função que retorna o total de vendas realizadas somando
        o total de compras de todos os clientes.
      </h1>

      <div>
        <p>Total de Compras somadas:</p>
        <h2>{sales}</h2>
      </div>
      {}
    </>
  );
};

export default SalesAmount;
