import styles from "./WorkItem.module.css";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  imgAlt: string;
  explanation: string;
  link: string;
}

export function WorkItem({ children, imgSrc, imgAlt, explanation, link }: Props) {
  return (
    <div className={styles.workItem}>
      <div className={styles.imageContainer}>
        <img className={styles.appImg} src={imgSrc} alt={imgAlt} />
      </div>
      <p className={styles.text}>{explanation}</p>
      <p className={styles.appName}><a href={link} target="_blank">{children}</a></p>
    </div>
  );
}