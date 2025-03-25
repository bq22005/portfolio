import styles from "./Title.module.css";
import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
}

export function Title({ children, ...props }: Props) {
  return (
    <h1 className={styles.title} {...props}>{children}</h1>
  );
}