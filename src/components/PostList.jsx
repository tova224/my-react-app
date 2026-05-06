import { useOutletContext, useNavigate } from "react-router-dom";
import styles from "./Post.module.css";

function PostList() {
  const { posts } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className={styles.container}
          onClick={() => navigate(`/posts/${post.id}`)}
          style={{ cursor: "pointer" }}
        >
          <h2 className={styles.name}>{post.title}</h2>
          <p className={styles.content}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;