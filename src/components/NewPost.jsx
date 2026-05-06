import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./Post.module.css";

function NewPost() {
  const { onAddPost } = useOutletContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      return;
    }

    onAddPost({ title, body });
    navigate("/posts");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Add New Post</h2>

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className={styles.input}
      />

      <textarea
        placeholder="Post body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        className={styles.textarea}
      />

      <div className={styles.buttonGroup}>
        <button className={styles.button} type="submit">
          Submit
        </button>

        <button
          className={`${styles.button} ${styles.buttonCancel}`}
          type="button"
          onClick={() => navigate("/posts")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NewPost;