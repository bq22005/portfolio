import styles from "./Works.module.css";
import { Title } from "@/app/components/elements/Title";
import { WorkItem } from "./WorkItem";

export function Works() {
  return (
    <div className={styles.works}>
      <Title>Works</Title>
      <div className={styles.container}>
        <WorkItem
          imgSrc="/SalTrac-icon.png"
          imgAlt="saltrac-icon"
          explanation="　ハッカソンにて、SNS 機能と塩分摂取量管理を組み合わせたSalTracというWebアプリケーションを製作しました。"
          link="https://github.com/Dreams20250215/SalTrac.git"
        >
          SalTrac
        </WorkItem>
      </div>
    </div>
  );
}