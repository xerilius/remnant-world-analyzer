import React, { useState } from "react";
import gameIcon from "./assets/remnant-icon.png";
import { FileDrop } from "./components";
import { parseData } from "./utilities/parseData";
import gameLogo from "./assets/remnant-logo2.png";

import styles from "./App.module.css";

function App() {
  const [data, setData] = useState(null);
  const display = data && parseData(data);

  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <img src={gameLogo} />
        <div className={styles.Title}>World Analyzer</div>
      </div>
      {<FileDrop setData={setData} />}
      {display}
    </div>
  );
}

export default App;
