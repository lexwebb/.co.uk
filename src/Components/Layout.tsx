import React from "react";
import styles from "./Layout.module.scss";
import Container from "./Container";
import Nav from "./Nav";
import { useDarkMode } from "usehooks-ts";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
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
        <Header />
        <Container className={styles.content} data-animate="color">
          <Nav tab={tab} />
          <section>
            <Outlet />
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
