import { useOutletContext } from "react-router-dom";
import PostPreview from "./PostPreview";

function PostList() {
  const { posts } = useOutletContext();

  return (
    <>
      {posts.map((post, index) => (
        <PostPreview
          key={index}
          name={post.name}
          content={post.content}
        />
      ))}
    </>
  );
}

export default PostList;