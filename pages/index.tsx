import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import DataAnalysisSection from '../components/DataAnalysis';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maziko Portfolio</title>
        <meta name="description" content="Personal portfolio of Muhammad Azis Sujatmiko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <ProfileSection />
        <ProjectsSection />
        <DataAnalysisSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
