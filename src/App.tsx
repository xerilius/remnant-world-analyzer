import React, { useState } from "react";
import classnames from "classnames";
import { FileDrop, Toggle } from "./components";
import { parseData } from "./utilities/parseData";
import gameLogo from "./assets/remnant-logo.png";

import styles from "./App.module.scss";

function App() {
  const [data, setData] = useState("");
  const [isDefaultTheme, setIsDefaultTheme] = useState<boolean>(true);
  const modifiedData = data && parseData(data);

  return (
    <div className={styles.App}>
      <div className={styles.Options}>
        <Toggle setTheme={setIsDefaultTheme} isDefault={isDefaultTheme} />
      </div>
      <div className={styles.Header}>
        <img src={gameLogo} />
        <div
          className={classnames(
            styles.Title,
            isDefaultTheme ? styles.Default : styles.Neon
          )}
        >
          World Analyzer
        </div>
      </div>
      {<FileDrop setData={setData} data={data} />}
      {modifiedData}
    </div>
  );
}

export default App;
