import React, { useState } from "react";
import classNames from "classnames/bind";
import downloadIcon from "../../assets/download-icon.png";

import styles from "./FileDrop.module.scss";

interface FileDropProps {
  setData: Function;
}

export function FileDrop({ setData }: FileDropProps) {
  const classnames = require("classnames");
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
      e.dataTransfer.setData("Text", e.target.id);
    } else {
      setDragActive(false);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setLoading(true);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];

      readFileAsText(file).then((data) => {
        setData(data as string);
        setLoading(false);
      });
    }
  };

  const readFileAsText = (file: any) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsText(file);
    });
  };

  return (
    <div
      className={classnames(
        styles.FileDrop,
        dragActive ? styles.DropActive : styles.DropInactive
      )}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <span className={styles.FileDropZone}>
        <img
          src={downloadIcon}
          className={styles.Download}
          height={100}
          width={100}
        />

        <span className={styles.FileDropText}>
          {loading ? (
            <>Loading ...</>
          ) : (
            <>
              Drop your <code className={styles.Sav}>.sav</code> file here
            </>
          )}
        </span>
      </span>
    </div>
  );
}
