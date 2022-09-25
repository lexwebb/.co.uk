import React from "react";
import styles from "./Home.module.scss";
import Typography from "./Typography";
import Container from "./Container";
import Nav from "./Nav";
import { useDarkMode } from "usehooks-ts";
import classNames from "classnames";

const Home = () => {
  const { isDarkMode } = useDarkMode();

  const tab = "home";
  return (
    <div
      className={classNames(
        styles.page,
        isDarkMode ? styles.darkMode : styles.lightMode
      )}
    >
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <Typography as="h1">
            {"LEX SOUTHIN-WEBB".split("").map((letter, index) => (
              <span key={index} className={styles.letter}>
                {letter}
              </span>
            ))}
          </Typography>
          <span></span>
        </div>
        <Container className={styles.content}>
          <Nav tab={tab} />
          <span>Coming Soon</span>
        </Container>
      </div>
    </div>
  );
};

export default Home;
