import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from "./usersSlice";

const UsersList = () => {
  const { data: users } = useGetAllUsersQuery();

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>
      {renderedUsers}
    </section>
  );
};

export default UsersList;
