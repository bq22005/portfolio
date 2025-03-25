import styles from "./page.module.css";
import { Profile } from "@/app/components/layouts/Profile";
import { Works } from "@/app/components/layouts/Works";

export default function Home() {
  return (
    <div className={styles.page}>
      <Profile />
      <div className={styles.introduce}>
        <img className={styles.wave} src="/wave.svg" alt="wave" />
        <div className={styles.infomation}>
          <Works />
        </div>
      </div>
    </div>
  );
}
