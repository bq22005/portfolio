import styles from "./Works.module.css";
import { Title } from "@/app/components/elements/Title";
import { WorkItem } from "@/app/components/layouts/WorkItem";

export function Works() {
  return (
    <div className={styles.works}>
      <Title>Works</Title>
      <div className={styles.carousel}>
        <div className={styles.wrapper}>
          <div className={styles.group}>
            <WorkItem
              imgSrc="/SalTrac-icon.png"
              imgAlt="saltrac-icon"
              explanation="　ハッカソンにて、SNS 機能と機械学習による塩分摂取量管理を組み合わせたWebアプリケーションを製作しました。"
              link="https://github.com/Dreams20250215/SalTrac.git"
            >
              SalTrac
            </WorkItem>
            <WorkItem
              imgSrc="/SalTrac-icon.png"
              imgAlt="saltrac-icon"
              explanation="　ハッカソンにて、SNS 機能と機械学習による塩分摂取量管理を組み合わせたWebアプリケーションを製作しました。"
              link="https://github.com/Dreams20250215/SalTrac.git"
            >
              SalTrac
            </WorkItem>
            <WorkItem
              imgSrc="/SalTrac-icon.png"
              imgAlt="saltrac-icon"
              explanation="　ハッカソンにて、SNS 機能と機械学習による塩分摂取量管理を組み合わせたWebアプリケーションを製作しました。"
              link="https://github.com/Dreams20250215/SalTrac.git"
            >
              SalTrac
            </WorkItem>
          </div>
          <div className={styles.group}>
            <WorkItem
              imgSrc="/SalTrac-icon.png"
              imgAlt="saltrac-icon"
              explanation="　ハッカソンにて、SNS 機能と機械学習による塩分摂取量管理を組み合わせたWebアプリケーションを製作しました。"
              link="https://github.com/Dreams20250215/SalTrac.git"
            >
              SalTrac
            </WorkItem>
            <WorkItem
              imgSrc="/SalTrac-icon.png"
              imgAlt="saltrac-icon"
              explanation="　ハッカソンにて、SNS 機能と機械学習による塩分摂取量管理を組み合わせたWebアプリケーションを製作しました。"
              link="https://github.com/Dreams20250215/SalTrac.git"
            >
              SalTrac
            </WorkItem>
            <WorkItem
              imgSrc="/SalTrac-icon.png"
              imgAlt="saltrac-icon"
              explanation="　ハッカソンにて、SNS 機能と機械学習による塩分摂取量管理を組み合わせたWebアプリケーションを製作しました。"
              link="https://github.com/Dreams20250215/SalTrac.git"
            >
              SalTrac
            </WorkItem>
          </div>
        </div>
      </div>
    </div>
  );
}