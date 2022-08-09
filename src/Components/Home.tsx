import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        LEX <div className={styles.small}>Coming</div>
      </div>
      <div className={styles.rightContainer}>
        WEBB <div className={styles.small}>Soon</div>
      </div>
    </div>
  );
};

export default Home;
