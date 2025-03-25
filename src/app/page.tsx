import styles from "./page.module.css";
import { Profile } from "@/app/components/layouts/Profile";
import { About } from "./components/layouts/About";
import { Works } from "@/app/components/layouts/Works";
import { Contact } from "./components/layouts/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <Profile />
      <div className={styles.introduce}>
        <img className={styles.wave} src="/wave.svg" alt="wave" />
        <div className={styles.infomation}>
          <About />
          <Works />
          <Contact />
        </div>
      </div>
    </div>
  );
}
