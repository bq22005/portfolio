import styles from "./About.module.css";
import { Title } from "@/app/components/elements/Title";

export function About() {
  return (
    <div className={styles.about}>
      <Title>About Me</Title>
      <p className={styles.sentence}>
        　所属学科では、機械に用いられる材料特性やPID制御の学習、ウォーム減速機の設計などを行いました。
        <br />
        　研究室は情報系の他学科に所属し、ハニーポットを用いてセキュリティやサーバに関する研究を行っています。
        <br />
        　また、趣味としてNext.jsやPythonを用いてwebアプリの開発を行っています。</p>
    </div>
  );
}