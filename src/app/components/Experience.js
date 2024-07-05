"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Experience.module.css";
import { experiences } from "../utils/experiences.js";

const Experience = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={`${styles.experience} ${show ? styles.show : ""}`}>
      <h2>Experiencia</h2>
      <p>Eh trabajado en proyectos para empresas como:</p>
      <div className={styles.experienceCardContainer}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.experienceCard}>
            <img
              src={exp.image}
              alt={`${exp.company} image`}
              className={styles.backgroundImage}
            />
            <div className={styles.content}>
              <FontAwesomeIcon icon={exp.icon} size="2x" />
              <h3>{exp.company}</h3>
              <p>{exp.title}</p>
              <p>{exp.duration}</p>
            </div>
            <div className={styles.buttonContainer}>
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                Ir a {exp.company} <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
