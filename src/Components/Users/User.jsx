//componente para organizar as informações

export function User({ id, name, birthdate, lastPurchaseDate, countPurchase }) {
  return (
    <>
      <li>
        <span>Id: {id}</span>
        <span>Nome: {name}</span>
        <span>Data de nascimento: {birthdate}</span>
        <p>Genero: {name.genre}</p>
        <span>Ultima Compra: {lastPurchaseDate}</span>
        <br />
        <span>Total de Compras: {countPurchase}</span>
      </li>
      <br />
    </>
  );
}
