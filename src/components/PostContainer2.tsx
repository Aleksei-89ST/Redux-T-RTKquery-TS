import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

// Тут реализовываю логику и вывожу список постов
const PostContainer2 = () => {
  const { data: posts, error,isLoading } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      <div className="post__list">
          {isLoading && <h1>Идёт загрузка...</h1>}
          {error && <h1>Произошла ошибка  при загрузке</h1>}
        {posts && posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer2;
