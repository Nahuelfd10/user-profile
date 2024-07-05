"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Technologies.module.css";
import { technologies } from "../utils/technologies.js";

const Technologies = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={`${styles.technologies} ${show ? styles.show : ""}`}>
      <h2>Tecnologías</h2>
      <p className={styles.labelSection}>
        Algunas de las tecnologías que he utilizado:
      </p>
      <div className={styles.techContainer}>
        <div className={styles.techContent}>
          {technologies.concat(technologies).map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <FontAwesomeIcon
                icon={tech.icon}
                size="3x"
                style={{ color: tech.color, "--tech-color": tech.color }}
                className={styles.techIcon}
              />
              <p className={styles.techName}>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
