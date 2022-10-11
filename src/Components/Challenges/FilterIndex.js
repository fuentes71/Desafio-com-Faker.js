import React from "react";

const FilterName = () => {
  const [users, setUsers] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const [filterName, setFilterName] = React.useState([]);

  React.useEffect(() => {
    api();
  }, []);
  async function api() {
    const response = await fetch(`http://localhost:3333/users?q=`);
    const json = await response.json();
    setUsers(json);
  }

  const nameClient = () => {
    const info = [];
    users.map((user) => {
      const arrUser = user.name;
      if (arrUser) {
        info.push(
          user.name
            .replace(" ", "_", user)
            .replace(" ", "_", user)
            .toUpperCase()
        );
      }
      return setFilterName(info);
    });
  };
  function handleClick() {
    setDisplay(!display);
    nameClient();
  }
  return (
    <>
      <h1>
        ⦁ Liste os nomes dos clientes no padrão: "Cliente INDEX:
        NOME_DO_CLIENTE".
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
          {filterName.map((user, index) => (
            <div key={index}>
              <section>
                <p>
                  Cliente {index + 1}: {user}
                </p>
              </section>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default FilterName;
