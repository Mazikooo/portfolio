import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import tippy.css untuk gaya bawaan
import styles from "../styles/Home.module.css";

const ProjectsSection: React.FC = () => {
  return (
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
            <h3 className={styles.projectTitle}>
              Kost Room Rental Platform (KEKOST)
            </h3>
            <p className={styles.projectDescription}>
              KEKOST is a kost room rental platform that makes it easy for kost
              seekers to find and book rooms online. We offer a wide selection
              of boarding houses with the best facilities.
            </p>
            <div className={styles.technologyStack}>
              <Tippy content="Laravel">
                <Image
                  src="/logo/lara.png"
                  alt="Laravel"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="MySQL">
                <Image
                  src="/logo/sql.png"
                  alt="MySQL"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="PHP">
                <Image
                  src="/logo/php.png"
                  alt="PHP"
                  className={styles.techLogo}
                  width={50}
                  height={30}
                />
              </Tippy>
              <Tippy content="JavaScript">
                <Image
                  src="/logo/js.png"
                  alt="JavaScript"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Bootstrap">
                <Image
                  src="/logo/bs.png"
                  alt="Bootstrap"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
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
            <h3 className={styles.projectTitle}>
              Application For Selling Farm Products From Farmers To Traders
              (Sayurin)
            </h3>
            <p className={styles.projectDescription}>
              Sayurin is a web-based platform that allows farmers and traders to
              interact directly. The platform allows farmers to list their
              products and merchants can easily search for the products they
              need and make purchases online.
            </p>
            <div className={styles.technologyStack}>
              <Tippy content="CodeIgniter">
                <Image
                  src="/logo/ci.png"
                  alt="CodeIgniter"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="MySQL">
                <Image
                  src="/logo/sql.png"
                  alt="MySQL"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="PHP">
                <Image
                  src="/logo/php.png"
                  alt="PHP"
                  className={styles.techLogo}
                  width={50}
                  height={30}
                />
              </Tippy>
              <Tippy content="JavaScript">
                <Image
                  src="/logo/js.png"
                  alt="JavaScript"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Bootstrap">
                <Image
                  src="/logo/bs.png"
                  alt="Bootstrap"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
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
              A Bootstrap template service provider that provides a platform
              that allows users to select and access various types of
              ready-to-use Bootstrap templates. The project aims to help web
              developers, designers, and website owners speed up their website
              development and design process.
            </p>
            <div className={styles.technologyStack}>
              <Tippy content="CodeIgniter">
                <Image
                  src="/logo/ci.png"
                  alt="CodeIgniter"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="MySQL">
                <Image
                  src="/logo/sql.png"
                  alt="MySQL"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="PHP">
                <Image
                  src="/logo/php.png"
                  alt="PHP"
                  className={styles.techLogo}
                  width={50}
                  height={30}
                />
              </Tippy>
              <Tippy content="JavaScript">
                <Image
                  src="/logo/js.png"
                  alt="JavaScript"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Bootstrap">
                <Image
                  src="/logo/bs.png"
                  alt="Bootstrap"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
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
            <h3 className={styles.projectTitle}>AsepShoe</h3>
            <p className={styles.projectDescription}>
            An online shoe selling platform that provides shoe recommendations, articles about shoes, and online purchasing.
            </p>
            <div className={styles.technologyStack}>
              <Tippy content="Bootstrap">
                <Image
                  src="/logo/bs.png"
                  alt="Bootstrap"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="JavaScript">
                <Image
                  src="/logo/js.png"
                  alt="JavaScript"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="CSS">
                <Image
                  src="/logo/css.png"
                  alt="CSS"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
