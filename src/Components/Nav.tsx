import React from "react";
import styles from "./Nav.module.scss";
import githubLogo from "../images/GitHub-Mark.svg";
import {
  RiHomeLine,
  RiFileList2Line,
  RiSunLine,
  RiSunFill,
} from "react-icons/ri";
import { useDarkMode } from "usehooks-ts";

type Props = {
  tab: "home" | "about" | "projects" | "contact";
};

function Nav({ tab }: Props) {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <a href="">
          <RiHomeLine />
        </a>
        <a href="">
          <RiFileList2Line />
        </a>
        <span className={styles.divider} />
        <button onClick={toggle}>
          {isDarkMode ? <RiSunFill /> : <RiSunLine />}
        </button>
      </div>
    </div>
  );
}

export default Nav;
