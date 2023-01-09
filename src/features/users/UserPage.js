import { Link, useParams } from "react-router-dom";

import { useGetPostsByUserIdQuery } from "../posts/postsSlice";
import { useGetUserByIdQuery } from "./usersSlice";

const UserPage = () => {
  const { userId } = useParams();
  const { data: users, isLoading: isUserLoading } = useGetUserByIdQuery(
    Number(userId)
  );

  const {
    data: userPosts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(userId);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = userPosts;
    content = ids.map((id) => (
      <li key={id}>
        <Link to={`/post/${id}`}>{entities[id].title}</Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      {!isUserLoading && <h2>{users[0].name}'s All Posts</h2>}

      <ol>{content}</ol>
    </section>
  );
};

export default UserPage;
