/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.navbar}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                to="profile"
                smooth={true}
                duration={500}
                offset={-70} // Adjust according to the height of your navbar
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
                offset={-70} // Adjust according to the height of your navbar
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
                offset={-70} // Adjust according to the height of your navbar
                className={styles.navLink}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <motion.section
          id="profile"
          className={styles.section}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Profile</h2>
          <p className={styles.sectionContent}>
            Hello! I&apos;m Muhammad Azis Sujatmiko, an Information Systems student at Amikom University with a focus on web and software development. I possess technical skills in programming and actively develop my abilities through projects and coursework. I have experience in building and managing websites using various technologies and frameworks. My strong soft skills include problem-solving, critical thinking, teamwork, and adaptability.
          </p>
          <p className={styles.sectionContent}>
            Throughout my academic journey, I have worked on a diverse range of projects. I thrive in fast-paced environments and am constantly seeking new challenges to improve my skills and contribute to innovative solutions. My expertise lies in full-stack development, with a particular focus on creating user-friendly interfaces and optimizing backend performance.
          </p>
          <p className={styles.sectionContent}>
            In addition to my technical skills, I am a strong advocate for continuous learning and professional growth. I regularly attend industry conferences and participate in online courses to stay updated with the latest trends and best practices in software development. When I&apos;m not coding, you can find me exploring new technologies, writing technical blogs, or contributing to open-source projects.
          </p>
        </motion.section>
        <motion.section
          id="projects"
          className={styles.section}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projectList}>
            <motion.div
              className={styles.projectItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={styles.projectTitle}>Kost Room Rental Platform (KEKOST)</h3>
              <p className={styles.projectDescription}>
                Designed and developed a website with the Laravel framework and MySQL for database management. Created all features on the website, more than 8 features with PHP and JavaScript. Performed the website deployment process to the server.
              </p>
              <p className={styles.projectDescription}>
                Technologies used: Laravel, MySQL, PHP, JavaScript.
              </p>
            </motion.div>
            <motion.div
              className={styles.projectItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={styles.projectTitle}>Application For Selling Farm Products From Farmers To Traders (Sayurin)</h3>
              <p className={styles.projectDescription}>
                Performed SRS document drafting, including UML design. Created more than 5 features, including key features such as cart and checkout as well as shipping and payment API integration using PHP and JavaScript. Performed White Box, Functional, and Debugging Testing.
              </p>
              <p className={styles.projectDescription}>
                Technologies used: PHP, JavaScript, API Integration.
              </p>
            </motion.div>
            {/* Add more projects as needed */}
          </div>
        </motion.section>
        <motion.section
          id="contact"
          className={styles.section}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.sectionContent}>
            I am always open to discussing new opportunities and collaborations. Feel free to reach out to me through the contact details below or connect with me on LinkedIn. I look forward to hearing from you!
          </p>
          <p className={styles.sectionContent}>
            Email: muhammadazis@students.amikom.ac.id<br />
            LinkedIn: <a href="https://www.linkedin.com/in/muhammadazis" target="_blank" rel="noopener noreferrer">linkedin.com/in/muhammadazis</a><br />
            GitHub: <a href="https://github.com/muhammadazis" target="_blank" rel="noopener noreferrer">github.com/muhammadazis</a>
          </p>
        </motion.section>
      </main>
    </>
  );
};

export default Home;
