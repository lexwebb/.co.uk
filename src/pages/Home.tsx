import styles from "./Home.module.scss";
import me from "../images/me.png";
import GithubIcon from "../icons/GithubIcon";
import { RiLinkedinBoxFill } from "react-icons/ri";
import Markdown from "../Components/Markdown";
import React from "react";

import Page from "../Components/Page";

const Home = () => {
  return (
    <Page className={styles.container}>
      <div className={styles.image}>
        <img src={me} alt="Lex's Face" />
      </div>
      <div className={styles.links}>
        <a href="https://github.com/lexwebb">
          <GithubIcon />
          Github // lexwebb
        </a>
        <a href="https://www.linkedin.com/in/lex-southin-webb-76b582103/">
          <RiLinkedinBoxFill />
          Linkedin // Lex Southin-Webb
        </a>
      </div>
      <div className={styles.about}>
        <Markdown file="about" />
      </div>
    </Page>
  );
};

export default Home;
