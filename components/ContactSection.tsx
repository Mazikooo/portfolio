import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Aktifkan loading saat form disubmit

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, textarea }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus("Email sent successfully");
        setEmail("");
        setTextarea("");
      } else {
        setStatus("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending email");
    } finally {
      setLoading(false); // Matikan loading setelah pengiriman selesai
    }
  };

  return (
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
            I am always open to discussing new opportunities and collaborations.
            Feel free to reach out to me through the contact details below or
            connect with me on LinkedIn. I look forward to hearing from you!
          </p>
          <p className={styles.sectionContent}>
            Email: muhammadazis@students.amikom.ac.id
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/muhammad-azis-2a41b926b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlWcJLKHcRt28B3daPFo2Bg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/muhammad-azis
            </a>
            <br />
            GitHub:{" "}
            <a
              href="https://github.com/Mazikooo"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Mazikooo
            </a>
          </p>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                required
                name="email"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="textarea">How Can I Help You?</label>
              <textarea
                required
                cols={50}
                rows={10}
                id="textarea"
                name="textarea"
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.formSubmitBtn}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {status && <p>{status}</p>}
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
