import { User } from "./User";

//Componente para organizar lista com usuarios
export function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          birthdate={user.birthdate}
          genre={user.genre}
          lastPurchaseDate={user.lastPurchaseDate}
          countPurchase={user.countPurchase}
        />
      ))}
    </ul>
  );
}
