// components/ProfileSection.js
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Particles from './magicui/particles';

const ProfileSection: React.FC = () => {
  return (
    <motion.section
      id="profile"
      className={styles.section}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Komponen Partikel */}
      <Particles
        className={styles.particles}
        quantity={100}
        staticity={50}
        ease={50}
        size={0.4}
        refresh={false}
        color="#ffffff"
        vx={0}
        vy={0}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Your profile section content */}
        <h3 className={styles.hi}>Hi!</h3>
        <h2 className={styles.intro}>
          You can call me <span className={styles.azis}>Azis</span>
        </h2>
        <p className={styles.student}>
          An <span className={styles.si}>Information Systems</span> student at
          Universitas Amikom Yogyakarta
        </p>
        <p className={styles.profildesc}>
          Interested in web development, data analysis, and machine learning. I
          have technical skills in programming and actively develop my abilities
          through projects and courses.
        </p>
        <p className={styles.profildesc}>
          Feel free to{" "}
          <a href="#contact" className={styles.contact}>
            contact
          </a>{" "}
          me!
        </p>
        <ul className={styles.socmedList}>
          <li className={styles.socmedItem}>
            <a
              href="https://www.instagram.com/muhazis.s"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socmedLink}
            >
              <Image
                src="/logo/instagram.png"
                alt="Instagram"
                className={styles.socmedLogo}
                width={30}
                height={30}
              />
              <span className={styles.socmedName}>Instagram</span>
            </a>
          </li>
          <li className={styles.socmedItem}>
            <a
              href="https://github.com/mazikooo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socmedLink}
            >
              <Image
                src="/logo/github.png"
                alt="GitHub"
                className={styles.socmedLogo}
                width={20}
                height={20}
              />
              <span className={styles.socmedName}>Github</span>
            </a>
          </li>
          <li className={styles.socmedItem}>
            <a
              href="/path/to/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socmedLink}
            >
              <Image
                src="/logo/resume2.png"
                alt="Resume"
                className={styles.socmedLogo}
                width={30}
                height={30}
              />
              <span className={styles.socmedName}>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default ProfileSection;
