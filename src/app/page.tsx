import styles from "./page.module.css";
import { Profile } from "./components/layouts/Profile";

export default function Home() {
  return (
    <div className={styles.page}>
      <Profile />
      <div className={styles.introduce}>
        <img className={styles.wave} src="/wave.svg" alt="wave" />
        <div className={styles.infomation}></div>
      </div>
    </div>
  );
}
