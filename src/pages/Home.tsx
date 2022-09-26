import React from "react";
import styles from "./Home.module.scss";
import me from "../images/me.png";
import GithubIcon from "../icons/GithubIcon";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={me} alt="Lex's Face" />
      </div>
      <div className={styles.links}>
        <a href="https://github.com/lexwebb">
          <GithubIcon />
          Github // lexwebb
        </a>
      </div>
      {/* https://github.com/remarkjs/react-markdown */}
      <div className={styles.about}>content here</div>
    </div>
  );
};

export default Home;
