import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const { data: users } = useGetAllUsersQuery();

  const author = users.find((user) => user.id === userId);

  return (
    <span>
      by
      {author ? (
        <Link to={`/user/${userId}`}>{author.name}</Link>
      ) : (
        "Unknown author"
      )}
    </span>
  );
};
export default PostAuthor;
