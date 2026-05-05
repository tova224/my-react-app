import styles from "./Post.module.css";

function PostPreview({ name, content = "" }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.content}>{content.slice(0, 10)}...</p>
    </div>
  );
}

export default PostPreview;