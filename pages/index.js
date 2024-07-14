// pages/index.js

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
<<<<<<< HEAD
            Hello! I&apos;m Muh Azis, a passionate and results-driven software developer with over 5 years of experience in the tech industry. I specialize in building scalable web applications using modern technologies such as React, Next.js, and Node.js. My journey began with a degree in Computer Science from MIT, where I developed a strong foundation in algorithms, data structures, and software engineering principles.
=======
            Hello! I&apos;m Muhammad Azis, a passionate and results-driven software developer with over 5 years of experience in the tech industry. I specialize in building scalable web applications using modern technologies such as React, Next.js, and Node.js. My journey began with a degree in Computer Science from MIT, where I developed a strong foundation in algorithms, data structures, and software engineering principles.
>>>>>>> 24fd40e630e73b6ea707b8a6bc2d1f140d3b5125
          </p>
          <p className={styles.sectionContent}>
            Throughout my career, I have had the opportunity to work on a diverse range of projects, from developing e-commerce platforms to creating sophisticated data visualization tools. I thrive in fast-paced environments and am constantly seeking new challenges to improve my skills and contribute to innovative solutions. My expertise lies in full-stack development, with a particular focus on creating user-friendly interfaces and optimizing backend performance.
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
              <h3 className={styles.projectTitle}>E-Commerce Platform</h3>
              <p className={styles.projectDescription}>
                Developed a fully-featured e-commerce platform using React and Node.js. The platform includes product listings, shopping cart functionality, and secure payment integration. Implemented a responsive design to ensure an optimal user experience across various devices. Utilized Redux for state management and built RESTful APIs for seamless data interaction.
              </p>
              <p className={styles.projectDescription}>
                Technologies used: React, Node.js, Express, MongoDB, Redux, Stripe API.
              </p>
            </motion.div>
            <motion.div
              className={styles.projectItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={styles.projectTitle}>Data Visualization Tool</h3>
              <p className={styles.projectDescription}>
                Created an interactive data visualization tool for analyzing large datasets using D3.js and Next.js. The tool features various types of charts and graphs to help users gain insights from their data. Focused on performance optimization to handle complex data structures efficiently and ensure smooth interactions.
              </p>
              <p className={styles.projectDescription}>
                Technologies used: Next.js, D3.js, TypeScript, GraphQL.
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
            Email: alex.johnson@example.com<br />
            LinkedIn: <a href="https://www.linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer">linkedin.com/in/alexjohnson</a><br />
            GitHub: <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">github.com/alexjohnson</a>
          </p>
        </motion.section>
      </main>
    </>
  );
};

export default Home;
