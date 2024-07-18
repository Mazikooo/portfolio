import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const ProfileSection: React.FC = () => {
  return (
    <motion.section
      id="profile"
      className={styles.section}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.sectionTitle}>Profile</h2>
      <p className={styles.sectionContent}>
        Hello! I&apos;m Muhammad Azis Sujatmiko, an Information Systems student
        at Amikom University with a focus on web and software development. I
        possess technical skills in programming and actively develop my
        abilities through projects and coursework. I have experience in building
        and managing websites using various technologies and frameworks. My
        strong soft skills include problem-solving, critical thinking, teamwork,
        and adaptability.
      </p>
      <p className={styles.sectionContent}>
        Throughout my academic journey, I have worked on a diverse range of
        projects. I thrive in fast-paced environments and am constantly seeking
        new challenges to improve my skills and contribute to innovative
        solutions. My expertise lies in full-stack development, with a
        particular focus on creating user-friendly interfaces and optimizing
        backend performance.
      </p>
      <p className={styles.sectionContent}>
        In addition to my technical skills, I am a strong advocate for
        continuous learning and professional growth. I regularly attend industry
        conferences and participate in online courses to stay updated with the
        latest trends and best practices in software development. When I&apos;m
        not coding, you can find me exploring new technologies, writing
        technical blogs, or contributing to open-source projects.
      </p>
    </motion.section>
  );
};

export default ProfileSection;
