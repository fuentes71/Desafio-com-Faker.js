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
    console.log("ReturnFilterName: ok");

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
        const firstName = user.name.split(" ");
        info.push(firstName[0]);
      }
    });
    setSourch(info);
    console.log(info);
    console.log(sourch);
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
        onChange={({ target }) => setFilter(target.value.toUpperCase())}
      />
      <button onClick={filterSourch}>Pesquisar</button>
      <ul>
        {sourch.map((user) => (
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
    </>
  );
};

export default Filter;
