import React, { useState, useEffect, useRef, DragEvent } from "react";
import styles from "./FileDrop.module.scss";
import { join } from "path";

interface FileDropProps {
  onUpload: () => void;
  children?: JSX.Element | JSX.Element[];
}

export function FileDrop({ onUpload, children }: FileDropProps) {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const drop = useRef();

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
      className={styles.FileDrop}
      ref={drop.current}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    ></div>
  );
}
