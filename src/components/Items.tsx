import { PropsWithChildren } from "react";
import styles from "./Items.module.scss";

export function Items({children}:PropsWithChildren) {
  return (
    <ul className={styles.root}>
        {children}
    </ul>
  )
}