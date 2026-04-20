import { useState } from "react";
import styles from "./Post.module.css";

function Post({ name, content = "", onClick }) {
  const [postContent, setPostContent] = useState(content);

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <p className={styles.name}>{name}</p>
      <p className={styles.content}>{postContent}</p>
      <input
        className={styles.input}
        type="text"
        onChange={handleInputChange}
        placeholder="Edit post content"
      />
    </div>
  );
}

export default Post;