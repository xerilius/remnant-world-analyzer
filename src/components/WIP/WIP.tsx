import React from "react";
import { Stripes } from "./components";

import styles from "./WIP.module.scss";

export function WIP() {
  const message = "⚠ Work in progress ⚠";

  return (
    <div className={styles.WIP}>
      <div className={styles.TextContainer}>
        <Stripes />
        <Stripes />
        <Stripes />
        <Stripes />
        <span className={styles.Text}>{message}</span>
        <Stripes />
        <Stripes />
        <Stripes />
        <Stripes />
        <span className={styles.Text}>{message}</span>
        <Stripes />
        <Stripes />
        <Stripes />
        <Stripes />
      </div>
    </div>
  );
}
