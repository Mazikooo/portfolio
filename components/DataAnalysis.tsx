// DataAnalysis.tsx

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import tippy.css untuk gaya bawaan
import styles from "../styles/Home.module.css";

const DataAnalysisSection: React.FC = () => {
  return (
    <motion.section
      id="data-analysis"
      className={styles.section}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <h2 className={styles.sectionTitle}>Data Analysis Projects</h2> */}

      {/* Data Analysis Projects */}
      <h2 className={styles.category}>| Data Analysis and Machine Learning</h2>
      <div className={styles.projectList}>
        <div className={styles.projectRow}>
          {/* Project 1: Data Analysis Project 1 */}
          <motion.div
            className={styles.projectItem}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/diabetnw.png"
              alt="Diabetes Risk Prediction"
              className={styles.projectImageML}
              width={800}
              height={400}
              layout="responsive"
            />
            <h3 className={styles.projectTitle}>Diabetes Risk Prediction</h3>
            <p className={styles.projectDescription}>
              Implementation of preprocessing techniques for early stage data
              visualization diabetes risk prediction involves data processing
              and visualization to explore causes of pre-diabetes symptoms.
            </p>
            <div className={styles.technologyStack}>
              {/* Technology stack icons */}
              <Tippy content="Python">
                <Image
                  src="/logo/py.png"
                  alt="Python"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Pandas">
                <Image
                  src="/logo/p.png"
                  alt="Pandas"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Matplotlib">
                <Image
                  src="/logo/m.png"
                  alt="Matplotlib"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Decision Tree">
                <Image
                  src="/logo/letterD.png"
                  alt="Decision Tree"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              {/* Add more technologies as needed */}
            </div>
          </motion.div>
          <motion.div
            className={styles.projectItem}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/book2.png"
              alt="Book Recommendation System"
              className={styles.projectImageML}
              width={800}
              height={400}
              layout="responsive"
            />
            <h3 className={styles.projectTitle}>Book Recommendation System</h3>
            <p className={styles.projectDescription}>
              Develop and implement a book recommendation system using the
              Item-Based Collaborative Filtering algorithm method in Python.
            </p>
            <div className={styles.technologyStack}>
              {/* Technology stack icons */}
              <Tippy content="Python">
                <Image
                  src="/logo/py.png"
                  alt="Python"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Pandas">
                <Image
                  src="/logo/p.png"
                  alt="Pandas"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Matplotlib">
                <Image
                  src="/logo/m.png"
                  alt="Matplotlib"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              {/* Add more technologies as needed */}
            </div>
          </motion.div>
          <motion.div
            className={styles.projectItem}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/imgclass2.png"
              alt="Diabetes Risk Prediction"
              className={styles.projectImageML}
              width={800}
              height={400}
              layout="responsive"
            />
            <h3 className={styles.projectTitle}>Image Classification</h3>
            <p className={styles.projectDescription}>
              Developed an artificial neural network program using TensorFlow
              that can recognize hand shapes forming scissors, stones, or paper.
            </p>
            <div className={styles.technologyStack}>
              {/* Technology stack icons */}
              <Tippy content="Python">
                <Image
                  src="/logo/py.png"
                  alt="Python"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Pandas">
                <Image
                  src="/logo/p.png"
                  alt="Pandas"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="TensorFlow">
                <Image
                  src="/logo/letterT.png"
                  alt="TensorFlow "
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Matplotlib">
                <Image
                  src="/logo/m.png"
                  alt="Matplotlib"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              {/* Add more technologies as needed */}
            </div>
          </motion.div>
          {/* Add more Data Analysis projects as needed */}
        </div>

        <div className={styles.projectRow}>
          {/* Project 1: Data Analysis Project 1 */}
          <motion.div
            className={styles.projectItem}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/liver2.png"
              alt="Liver disease diagnosis"
              className={styles.projectImageML}
              width={800}
              height={400}
              layout="responsive"
            />
            <h3 className={styles.projectTitle}>Liver Disease Diagnosis</h3>
            <p className={styles.projectDescription}>
              Implementation of K-Nearest Neighbors Algorithm to Diagnosing
              Liver Disease by predicting based on available features and
              analyzing the correlation of each feature.
            </p>
            <div className={styles.technologyStack}>
              {/* Technology stack icons */}
              <Tippy content="Python">
                <Image
                  src="/logo/py.png"
                  alt="Python"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="K-Nearest Neighbors">
                <Image
                  src="/logo/k.png"
                  alt="K-Nearest Neighbors"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Pandas">
                <Image
                  src="/logo/p.png"
                  alt="Pandas"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Matplotlib">
                <Image
                  src="/logo/m.png"
                  alt="Matplotlib"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              {/* Add more technologies as needed */}
            </div>
          </motion.div>
          <motion.div
            className={styles.projectItem}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/sleep2.png"
              alt="Classification of Sleep Quality Levels"
              className={styles.projectImageML}
              width={800}
              height={400}
              layout="responsive"
            />
            <h3 className={styles.projectTitle}>
              Classification of Sleep Quality Levels
            </h3>
            <p className={styles.projectDescription}>
              Implementation of Naive Bayes Classifier Algorithm in Sleep
              Quality Level Classification by creating a model for
              classification and correlation analysis of each feature.{" "}
            </p>
            <div className={styles.technologyStack}>
              {/* Technology stack icons */}
              <Tippy content="Python">
                <Image
                  src="/logo/py.png"
                  alt="Python"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Naive Bayes Classifier">
                <Image
                  src="/logo/n.png"
                  alt="Naive Bayes Classifier"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Pandas">
                <Image
                  src="/logo/p.png"
                  alt="Pandas"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Matplotlib">
                <Image
                  src="/logo/m.png"
                  alt="Matplotlib"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              {/* Add more technologies as needed */}
            </div>
          </motion.div>
          <motion.div
            className={`${styles.projectItem} ${styles.hidden}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/kekost.png"
              alt="Diabetes Risk Prediction"
              className={styles.projectImageML}
              width={800}
              height={400}
              layout="responsive"
            />
            <h3 className={styles.projectTitle}>Image Classification</h3>
            <p className={styles.projectDescription}>
              Developed an artificial neural network program using TensorFlow
              that can recognize hand shapes forming scissors, stones, or paper.
            </p>
            <div className={styles.technologyStack}>
              {/* Technology stack icons */}
              <Tippy content="Python">
                <Image
                  src="/logo/py.png"
                  alt="Python"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Pandas">
                <Image
                  src="/logo/p.png"
                  alt="Pandas"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              <Tippy content="Matplotlib">
                <Image
                  src="/logo/m.png"
                  alt="Matplotlib"
                  className={styles.techLogo}
                  width={30}
                  height={30}
                />
              </Tippy>
              {/* Add more technologies as needed */}
            </div>
          </motion.div>
          {/* Add more Data Analysis projects as needed */}
        </div>
      </div>
    </motion.section>
  );
};

export default DataAnalysisSection;
