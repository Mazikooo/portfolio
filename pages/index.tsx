import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Import icon from FontAwesome
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Maziko Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <a
  href="/cv/developer.pdf"
  className={styles.cvLink}
>
  CV <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
</a>
        </div>
      </div>
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
            <div className={styles.projectRow}>
              <motion.div
                className={styles.projectItem}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/kekost.png"
                  alt="KEKOST Project"
                  className={styles.projectImage}
                  width={800}
                  height={400}
                  layout="responsive"
                />
                <h3 className={styles.projectTitle}>Kost Room Rental Platform (KEKOST)</h3>
                <p className={styles.projectDescription}>
                  KEKOST is a kost room rental platform that makes it easy for kost seekers to find and book rooms online. We offer a wide selection of boarding houses with the best facilities.
                </p>
                <div className={styles.technologyStack}>
                  <Image
                    src="/images/laravel-logo.png"
                    alt="Laravel"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/mysql-logo.png"
                    alt="MySQL"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/php-logo.png"
                    alt="PHP"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/javascript-logo.png"
                    alt="JavaScript"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                </div>
              </motion.div>
              <motion.div
                className={styles.projectItem}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/sayurin.png"
                  alt="Sayurin Project"
                  className={styles.projectImage}
                  width={800}
                  height={400}
                  layout="responsive"
                />
                <h3 className={styles.projectTitle}>Application For Selling Farm Products From Farmers To Traders (Sayurin)</h3>
                <p className={styles.projectDescription}>
                  Sayurin is a web-based platform that allows farmers and traders to interact directly. The platform allows farmers to list their products and merchants can easily search for the products they need and make purchases online.
                </p>
                <div className={styles.technologyStack}>
                  <Image
                    src="/images/php-logo.png"
                    alt="PHP"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/javascript-logo.png"
                    alt="JavaScript"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/api-logo.png"
                    alt="API Integration"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                </div>
              </motion.div>
              <motion.div
                className={styles.projectItem}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/bootmaster.png"
                  alt="Another Project"
                  className={styles.projectImage}
                  width={800}
                  height={400}
                  layout="responsive"
                />
                <h3 className={styles.projectTitle}>Bootmaster</h3>
                <p className={styles.projectDescription}>
                  A Bootstrap template service provider that provides a platform that allows users to select and access various types of ready-to-use Bootstrap templates. The project aims to help web developers, designers, and website owners speed up their website development and design process.
                </p>
                <div className={styles.technologyStack}>
                  <Image
                    src="/images/tech1-logo.png"
                    alt="Tech1"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/tech2-logo.png"
                    alt="Tech2"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/tech3-logo.png"
                    alt="Tech3"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                </div>
              </motion.div>
            </div>
            <div className={styles.projectRow}>
              <motion.div
                className={styles.projectItem}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/asep.png"
                  alt="Fourth Project"
                  className={styles.projectImage}
                  width={800}
                  height={400}
                  layout="responsive"
                />
                <h3 className={styles.projectTitle}>Bootmaster</h3>
                <p className={styles.projectDescription}>
                  A Bootstrap template service provider that provides a platform that allows users to select and access various types of ready-to-use Bootstrap templates. The project aims to help web developers, designers, and website owners speed up their website development and design process.
                </p>
                <div className={styles.technologyStack}>
                  <Image
                    src="/images/tech1-logo.png"
                    alt="Tech1"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/tech2-logo.png"
                    alt="Tech2"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/images/tech3-logo.png"
                    alt="Tech3"
                    className={styles.techLogo}
                    width={30}
                    height={30}
                  />
                </div>
              </motion.div>
            </div>
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
  <div className={styles.contactContent}>
    <div className={styles.textContent}>
      <p className={styles.sectionContent}>
        I am always open to discussing new opportunities and collaborations. Feel free to reach out to me through the contact details below or connect with me on LinkedIn. I look forward to hearing from you!
      </p>
      <p className={styles.sectionContent}>
        Email: muhammadazis@students.amikom.ac.id<br />
        LinkedIn: <a href="https://www.linkedin.com/in/muhammadazis" target="_blank" rel="noopener noreferrer">linkedin.com/in/muhammadazis</a><br />
        GitHub: <a href="https://github.com/muhammadazis" target="_blank" rel="noopener noreferrer">github.com/muhammadazis</a>
      </p>
    </div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Company Email</label>
          <input required name="email" id="email" type="text" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea required cols={50} rows={10} id="textarea" name="textarea"></textarea>
        </div>
        <button type="submit" className={styles.formSubmitBtn}>Submit</button>
      </form>
    </div>
  </div>
</motion.section>

      </main>
    </>
  );
};

export default Home;
