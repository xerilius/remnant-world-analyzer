import React from "react";

import styles from "./Toggle.module.scss";

interface ToggleProps {
  setTheme: Function;
  isDefault: boolean;
}

export function Toggle({ setTheme, isDefault }: ToggleProps) {
  return (
    <label className={styles.Toggle}>
      <input
        className={styles.ToggleButton}
        type="checkbox"
        onClick={() => setTheme(!isDefault)}
      />
      <span className={styles.Slider}></span>
    </label>
  );
}
