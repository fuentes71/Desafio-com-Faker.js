import React from "react";

const ReturnMajor = () => {
  const [display, setDisplay] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [major, setMajor] = React.useState([]);
  React.useEffect(() => {
    api();
  }, []);

  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=`);
    const json = await response.json();
    setUsers(json);
  }

  function searchOfAge() {
    let info = [];
    users.filter((user) => {
      const arrUser = user.birthdate.substring(4).replace("/", "");
      const date = new Date().getFullYear();
      if (date - arrUser >= 18) {
        let obj = {
          id: user.id,
          name: user.name,
          birthdate: user.birthdate,
          lastPurchaseDate: user.lastPurchaseDate,
          countPurchase: user.countPurchase,
        };
        return info.push(obj);
      }
      return null;
    });
    setMajor(info);
  }
  function handleClick() {
    setDisplay(!display);
    searchOfAge();
  }
  return (
    <>
      <h1>
        ⦁ Desenvolva uma função que retorne todos os usuários que são maiores de
        idade.
      </h1>
      <div>
        <button onClick={handleClick}>
          {display ? "Mostrar" : "Esconder "}{" "}
        </button>
      </div>{" "}
      <p>Mostrar maiores de idade</p>
      {display ? (
        ""
      ) : (
        <ul>
          {major.map((user) => (
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
      )}{" "}
    </>
  );
};

export default ReturnMajor;
