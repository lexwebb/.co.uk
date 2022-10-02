import React from "react";
import styles from "./Nav.module.scss";
import { RiSunLine, RiSunFill } from "react-icons/ri";
import { useDarkMode } from "usehooks-ts";
import { Link } from "react-router-dom";
import { routes } from "../config/routes";

type Props = {
  tab: "home" | "cv" | "projects" | "contact";
};

function Nav({ tab }: Props) {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <div className={styles.navContainer}>
      <div className={styles.nav} data-animate="color">
        {Object.entries(routes).map(([path, route]) => (
          <Link to={path} key={path} aria-label={route.name}>
            {React.createElement(route.icon, {})}
          </Link>
        ))}
        <span className={styles.divider} />
        <button onClick={toggle} aria-label="Toggle dark-mode">
          {isDarkMode ? <RiSunFill /> : <RiSunLine />}
        </button>
      </div>
    </div>
  );
}

export default Nav;
