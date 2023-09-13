import React, { useState } from "react";
import classnames from "classnames";
import { FileDrop } from "./components";
import { parseData } from "./utilities/parseData";
import gameLogo from "./assets/remnant-logo.png";

import styles from "./App.module.scss";

function App() {
  const [data, setData] = useState("");
  const modifiedData = data && parseData(data);

  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <img src={gameLogo} />
        <div className={classnames(styles.Title, styles.Neon)}>
          World Analyzer
        </div>
      </div>
      {<FileDrop setData={setData} data={data} />}
      {modifiedData}
    </div>
  );
}

export default App;
