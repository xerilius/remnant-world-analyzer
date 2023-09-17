import React from "react";
import { Stripes } from "./components";

import styles from "./WIP.module.scss";

export function WIP() {
  return (
    <div className={styles.WIP}>
      <div className={styles.TextContainer}>
        <Stripes />
        <Stripes />
        <Stripes />
        <Stripes />
        <span className={styles.Text}>⚠ Work in progress ⚠︎</span>
        <Stripes />
        <Stripes />
        <span className={styles.Text}>⚠ Work in progress ⚠︎</span>
        <Stripes />
        <Stripes />
        <span className={styles.Text}>⚠ Work in progress ⚠︎</span>
        <Stripes />
        <Stripes />
        <span className={styles.Text}>⚠ Work in progress ⚠︎</span>
        <Stripes />
        <Stripes />
      </div>
    </div>
  );
}
