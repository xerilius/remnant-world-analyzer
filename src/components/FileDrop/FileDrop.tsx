import React, { useLayoutEffect, useState } from "react";
import classnames from "classnames";
import { FileDropStatus } from "./components/FileDropStatus";

import styles from "./FileDrop.module.scss";

interface FileDropProps {
  setData: Function;
  data: string;
}

export function FileDrop({ setData, data }: FileDropProps) {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (data !== "") setIsLoading(false);
  }, [data]);

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

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const fileExt = file.name.slice(-3);
      if (fileExt !== "sav") {
        alert("Wrong file type");
        return;
      }

      setIsLoading(true);
      setTimeout(() => {
        readFileAsText(file).then((data) => {
          setData(data as string);
        });
      }, 4000);
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
    <div className={styles.FileDropContainer}>
      <div
        className={classnames(
          isLoading
            ? classnames(styles.FileLoading, styles.FileDrop)
            : styles.FileDrop,
          dragActive ? styles.DropActive : styles.DropInactive
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <FileDropStatus isLoading={isLoading} />
      </div>
    </div>
  );
}
