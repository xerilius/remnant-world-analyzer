import React, { useLayoutEffect } from "react";
import { WorldStone } from "../../WorldStone";
import downloadIcon from "../../../assets/download-icon.png";

import styles from "./FileDropStatus.module.css";

interface FileDropStatusProps {
  isLoading: boolean;
}

export function FileDropStatus({ isLoading = false }: FileDropStatusProps) {
  return (
    <div className={styles.FileDropStatus}>
      {isLoading ? <LoadingState isLoading={isLoading} /> : <DefaultState />}
    </div>
  );
}

const DefaultState = () => {
  return (
    <>
      <img src={downloadIcon} className={styles.Download} />
      <span className={styles.FileDropText}>
        Drop your <code className={styles.Sav}>.sav</code> file here
      </span>
    </>
  );
};

const LoadingState = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      <WorldStone isLoading={isLoading} />
      <span className={styles.FileDropText}>Loading ...</span>{" "}
    </>
  );
};
