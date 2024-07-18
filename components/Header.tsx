import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faDownload } from "@fortawesome/free-solid-svg-icons"; // Import icon from FontAwesome
import styles from "../styles/Home.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>maziko</div>
        <nav className={styles.navListContainer}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                to="profile"
                smooth={true}
                duration={500}
                offset={-70}
                className={styles.navLink}
              >
                Profile
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className={styles.navLink}
              >
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className={styles.navLink}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.navCV}>
          <a href="/cv/developer.pdf" className={styles.cvLink}>
            CV{" "}
            <FontAwesomeIcon
              icon={faDownload}
              className={styles.downloadIcon}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
