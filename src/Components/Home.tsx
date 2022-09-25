import React from "react";
import styles from "./Home.module.scss";
import Typography from "./Typography";
import Container from "./Container";

const Home = () => {
  return (
    <div className={styles.page}>
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
          Coming soon to a screen near you
        </Container>
      </div>
    </div>
  );
};

export default Home;
