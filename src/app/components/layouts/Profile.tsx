import styles from "./Profile.module.css";
import Image from "next/image";

export function Profile() {
  return (
    <div className={styles.profile}>
      <h2 className={styles.sentence}>Hi, There!</h2>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src="/deer-icon.png" alt="profile-icon" />
      </div>
    </div>
  );
}