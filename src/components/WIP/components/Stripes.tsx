import React from "react";

import styles from "./Stripes.module.scss";

export function Stripes() {
  return (
    <>
      <span className={styles.Stripes}>|</span>
      <span className={styles.Stripes}>|</span>
      <span className={styles.Stripes}>|</span>
      <span className={styles.Stripes}>|</span>
    </>
  );
}
