import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import classnames from "classnames";
import styles from "./WorldStone.module.css";

interface WorldStoneProps {
  isLoading: boolean;
}

export const WorldStone = ({ isLoading }: WorldStoneProps) => {
  const strokeColor = "#ffb676";
  const fillColor = "#ff0000e3";

  return (
    <div className={styles.WorldStone}>
      <svg
        width="142"
        height="200"
        viewBox="0 -15 142 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={classnames(isLoading ? styles.StoneFill : "")}
          d="M37 54.1947C58.6386 23.9643 65.2569 13.6696 66.2195 11.4788L66 11.1947C66.3408 10.888 66.4669 10.9158 66.2195 11.4788L108.5 66.1947L96 145.195L81 156.195L60.5 135.195V118.695L71.5 112.695L81 118.695L77 131.695L71.5 122.695V135.195L77 140.695L84.5 135.195L90 112.695L77 106.695L76.5 100.695L61.5 110.695L57 109.195L56 118.695L50.5 117.695L58 142.195L73 156.195L79.5 157.195V159.195L68.5 167.695L39 145.195L27 66.1947L32 59.6947L50.5 91.1947L58 94.6947L66 89.6947V94.6947L81 77.6947L85.5 58.6947L68.5 39.1947L53.5 54.1947L61.5 70.6947L66 73.6947L71.5 64.1947L68.5 66.1947L63.5 64.1947L61.5 58.6947L68.5 48.6947L79 60.6947L68.5 81.1947L58 84.1947L37 54.1947Z"
          fill={fillColor}
        />
        <path
          className={styles.StoneStroke}
          d="M37 54.1947C64.2 16.1947 67.6667 9.69473 66 11.1947L108.5 66.1947L96 145.195L81 156.195L60.5 135.195V118.695L71.5 112.695L81 118.695L77 131.695L71.5 122.695V135.195L77 140.695L84.5 135.195L90 112.695L77 106.695L76.5 100.695L61.5 110.695L57 109.195L56 118.695L50.5 117.695L58 142.195L73 156.195L79.5 157.195V159.195L68.5 167.695L39 145.195L27 66.1947L32 59.6947L50.5 91.1947L58 94.6947L66 89.6947V94.6947L81 77.6947L85.5 58.6947L68.5 39.1947L53.5 54.1947L61.5 70.6947L66 73.6947L71.5 64.1947L68.5 66.1947L63.5 64.1947L61.5 58.6947L68.5 48.6947L79 60.6947L68.5 81.1947L58 84.1947L37 54.1947Z"
          stroke={strokeColor}
        />
        <path
          className={styles.ShardA}
          d="M14 35L1 47.5L11.5 51L21 45.5L14 35Z"
          fill="#BD0303"
          stroke={strokeColor}
        />
        <path
          className={styles.ShardB}
          d="M97.1429 1L89 13.7234L101.429 27L107 7.6383L97.1429 1Z"
          fill="#D60000"
          stroke={strokeColor}
        />
        <path
          className={styles.ShardC}
          d="M132.665 40.6348L123.227 42.0438L122.829 53.9253L140.641 47.3122L132.665 40.6348Z"
          fill="#E40A0A"
          stroke={strokeColor}
        />
      </svg>
    </div>
  );
};
