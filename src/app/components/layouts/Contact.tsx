import styles from "./Contact.module.css";
import { Title } from "@/app/components/elements/Title";

export function Contact() {
  return (
    <div className={styles.contact}>
      <Title>Contact</Title>
      <div className={styles.container}>
        <p className={styles.text}>Mail: bq22005@shibaura-it.ac.jp</p>
        <p className={styles.text}>GitHub: https://github.com/bq22005</p>
      </div>
    </div>
  );
}