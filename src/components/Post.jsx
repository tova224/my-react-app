import { useState } from "react";
import styles from "./Post.module.css";

function Post({ name, content = "", onSave }) {
  const [editableContent, setEditableContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setEditableContent(event.target.value);
  };

  const handleEditClick = () => {
    setEditableContent(content);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(editableContent);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditableContent(content);
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.content}>{content}</p>

      {!isEditing && (
        <button className={styles.button} onClick={handleEditClick}>
          Edit
        </button>
      )}

      {isEditing && (
        <div className={styles.editSection}>
          <input
            className={styles.input}
            type="text"
            value={editableContent}
            onChange={handleInputChange}
            placeholder="Edit post content"
            autoFocus
          />

          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${styles.buttonSave}`}
              onClick={handleSaveClick}
            >
              Save
            </button>

            <button
              className={`${styles.button} ${styles.buttonCancel}`}
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;