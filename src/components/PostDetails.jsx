import { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import styles from "./Post.module.css";

function PostDetails() {
  const { postId } = useParams();
  const { posts, onUpdatePost, onDeletePost } = useOutletContext();

  const navigate = useNavigate();

const post = posts.find((p) => String(p.id) === String(postId));

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: 30 }}>
        <h2>Post not found</h2>
        <button className={styles.button} onClick={() => navigate("/posts")}>
          Back to Posts
        </button>
      </div>
    );
  }

  const handleSave = () => {
    onUpdatePost(postId, { title, body });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(post.title);
    setBody(post.body);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeletePost(postId);
    navigate("/posts");
  };

  return (
    <div className={styles.container}>
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className={styles.input}
          />

          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className={styles.textarea}
          />

          <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={handleSave}>
              Save
            </button>

            <button
              className={`${styles.button} ${styles.buttonCancel}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className={styles.name}>{post.title}</h2>
          <p className={styles.content}>{post.body}</p>

          <button className={styles.button} onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button
            className={`${styles.button} ${styles.buttonCancel}`}
            onClick={handleDelete}
          >
            Delete
          </button>

          <button className={styles.button} onClick={() => navigate("/posts")}>
            Back to Posts
          </button>
        </>
      )}
    </div>
  );
}

export default PostDetails;