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
          // genre={user.genre}
          birthdate={user.birthdate}
          lastPurchaseDate={user.lastPurchaseDate}
          countPurchase={user.countPurchase}
        />
      ))}
    </ul>
  );
}
