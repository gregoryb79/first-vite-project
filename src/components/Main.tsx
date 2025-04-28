import { PropsWithChildren } from "react";
import styles from "./main.module.scss";

type MainProps = PropsWithChildren<{
  title: string;
}>
export function Main ({title, children}: MainProps) {
  return (
    <main className={styles.main}>
      <h1>{title}</h1>
      {children}
    </main>     
  )
}