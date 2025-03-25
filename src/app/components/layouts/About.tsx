import styles from "./About.module.css";
import { Title } from "@/app/components/elements/Title";

export function About() {
  return (
    <div className={styles.about}>
      <Title>About</Title>
    </div>
  );
}