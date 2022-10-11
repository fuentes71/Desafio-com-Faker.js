import React from "react";

const AddCostumer = () => {
  const [client, setClient] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  setUsers();
  React.useEffect(() => {
    api();
  }, []);
  async function api() {}

  console.log(client);
  const onChange = (e) => {
    setClient({
      ...users,
      [e.target.name]: e.target.value,
    });
  };
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
        id="name"
        name="name"
        value={users.name}
        placeholder="Nome e sobrenome"
        onChange={onChange}
      />
      <label>Data de aniversario</label>
      <input
        type="text"
        id="birthdate"
        name="birthdate"
        value={users.birthdate}
        placeholder="00/00/0000"
        onChange={onChange}
      />
      <label>Sexo</label>
      <input
        type="text"
        id="genre"
        name="genre"
        value={users.genre}
        placeholder="genero"
        onChange={onChange}
      />
      <label>Data da ultima compra</label>
      <input
        type="text"
        id="lastPurchaseDate"
        name="lastPurchaseDate"
        value={users.lastPurchaseDate}
        placeholder="00/00/0000"
        onChange={onChange}
      />
      <label>Total de compras</label>
      <input
        type="text"
        id="countPurchase"
        name="countPurchase"
        value={users.countPurchase}
        placeholder="00"
        onChange={onChange}
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
