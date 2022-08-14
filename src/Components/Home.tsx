import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { useSpring, animated } from "react-spring";
import { useMousePosition } from "../hooks/useMousePosition";
import githubLogo from "../images/GitHub-Mark.svg";

const Home = () => {
  const position = useMousePosition();

  const [springStyles, api] = useSpring(() => ({
    transform: "rotate(0deg)",
  }));

  const [linkStyles, linkApi] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    const screenWidth = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );

    if (position.x > screenWidth / 2) {
      api.start({
        transform: "rotate(30deg)",
      });
      linkApi.start({
        opacity: 0,
      });
    } else {
      api.start({
        transform: "rotate(-30deg)",
      });
      linkApi.start({
        opacity: 1,
      });
    }
  }, [api, linkApi, position.x]);

  return (
    <>
      <svg className={styles.background} height={500} width={500}>
        <animated.g className={styles.circles} style={springStyles}>
          <clipPath id="cut-off">
            <rect x="-50%" y="-50%" width="100%" height="200%" />
          </clipPath>

          <circle cx="50%" cy="50%" r="100%" fill="#f5f5f5" />
          <circle
            cx="50%"
            cy="50%"
            r="100%"
            fill="#0047AB"
            clipPath="url(#cut-off)"
          />
        </animated.g>
      </svg>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.leftSubContainer}>
            <span>LEX</span> <div className={styles.small}>Links</div>
            <animated.ul className={styles.navList} style={linkStyles}>
              <li>
                <a href="https://github.com/lexwebb">
                  <img src={githubLogo} alt="GitHub" height="24px" /> GitHub
                </a>
              </li>
            </animated.ul>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightSubContainer}>
            <span>WEBB</span> <div className={styles.small}>Projects</div>
            <div className={styles.smaller}>Coming Soon</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
