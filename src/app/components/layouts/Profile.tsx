import styles from "./Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.greetingContainer}>
        <h2 className={styles.greeting}>Hi, There!</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>Rikuto Kanzaki</p>
          <p>Affiliation: Shibaura Inst. of Tech.</p>
        </div>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src="/deer-icon.svg" alt="profile-icon" />
        </div>
      </div>
    </div>
  );
}