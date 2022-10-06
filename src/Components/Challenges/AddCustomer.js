import React from "react";

const AddCostumer = () => {
  const [client, setClient] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    api();
  }, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=`);
    const json = await response.json();
    setUsers(json);
  }

  console.log(users);
  const handleInputChange = (e) => {
    setUsers((prevState) => {
      const newState = prevState.map((users) => {
        return {
          [e.target.name]: e.target.value,
          ...users,
        };
      });
      return newState;
    });
  };
  console.log(users);
  return (
    <>
      <h1>
        ⦁ Crie uma função que receba um cliente e adicione no INÍCIO do array de
        clientes.
      </h1>

      <h2>Adicionar cliente.</h2>
      <label>Nome Completo</label>
      <input
        type="text"
        name="name"
        value={users.name}
        placeholder="Nome e sobrenome"
        onChange={(e) => handleInputChange(e)}
      />
      <label>Data de aniversario</label>
      <input
        type="text"
        name="birthdate"
        value={users.birthdate}
        placeholder="00/00/0000"
        onChange={(e) => handleInputChange(e)}
      />
      <label>Sexo</label>
      <input
        type="text"
        value={users.genre}
        name="genre"
        placeholder="genero"
        onChange={(e) => handleInputChange(e)}
      />
      <label>Data da ultima compra</label>
      <input
        type="text"
        name="lastPurchaseDate"
        value={users.lastPurchaseDate}
        placeholder="00/00/0000"
        onChange={(e) => handleInputChange(e)}
      />
      <label>Total de compras</label>
      <input
        type="text"
        name="countPurchase"
        value={users.countPurchase}
        placeholder="00"
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit">Enviar</button>
      <div>
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

export default AddCostumer;
