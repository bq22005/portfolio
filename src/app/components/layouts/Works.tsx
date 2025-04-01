import styles from "./Works.module.css";
import { Title } from "@/app/components/elements/Title";
import { WorkItem } from "@/app/components/layouts/WorkItem";

export function Works() {
  return (
    <div className={styles.works}>
      <Title>Works</Title>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.wrapper}>
            <div className={styles.group}>
              <WorkItem
                imgSrc="/xchat-icon.png"
                imgAlt="xchat-icon"
                explanation="　リアルタイムで翻訳しながら会話ができるチャットアプリを製作しています。"
                link="https://github.com/bq22005/Xchat"
              >
                Xchat
              </WorkItem>
              <WorkItem
                imgSrc="/willtify-icon.png"
                imgAlt="willtify-icon"
                explanation="　宛先を指定せず、送信日のみを指定して手紙を送信するWebアプリケーションを製作しています。"
                link="https://github.com/bq22005/portfolio"
              >
                willtify
              </WorkItem>
              <WorkItem
                imgSrc="/SalTrac-icon.png"
                imgAlt="saltrac-icon"
                explanation="　ハッカソンにて、SNS 機能と機械学習による塩分摂取量管理を組み合わせたWebアプリケーションを製作しました。"
                link="https://github.com/Dreams20250215/SalTrac"
              >
                SalTrac
              </WorkItem>
            </div>
            <div className={styles.group}>
              <WorkItem
                imgSrc="/xchat-icon.png"
                imgAlt="xchat-icon"
                explanation="　リアルタイムで翻訳しながら会話ができるチャットアプリを製作しています。"
                link="https://github.com/bq22005/Xchat"
              >
                Xchat
              </WorkItem>
              <WorkItem
                imgSrc="/willtify-icon.png"
                imgAlt="willtify-icon"
                explanation="　宛先を指定せず、送信日のみを指定して手紙を送信するWebアプリケーションを製作しています。"
                link="https://github.com/bq22005/portfolio"
              >
                willtify
              </WorkItem>
              <WorkItem
                imgSrc="/SalTrac-icon.png"
                imgAlt="saltrac-icon"
                explanation="　ハッカソンにて、SNS 機能と機械学習による塩分摂取量管理を組み合わせたWebアプリケーションを製作しました。"
                link="https://github.com/Dreams20250215/SalTrac"
              >
                SalTrac
              </WorkItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}