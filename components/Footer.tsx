import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          {/* <h2>NAMA wd</h2> */}
          <p>maziko &copy; {new Date().getFullYear()}  All rights reserved.</p>
        </div>
        {/* <div className={styles.links}>
          <a href="/about" className={styles.link}>
            About Us
          </a>
          <a href="/contact" className={styles.link}>
            Contact
          </a>
          <a href="/privacy" className={styles.link}>
            Privacy Policy
          </a>
          <a href="/terms" className={styles.link}>
            Terms of Service
          </a>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
