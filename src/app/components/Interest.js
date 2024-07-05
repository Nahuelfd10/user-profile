"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Interests.module.css";

const Interests = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={`${styles.interests} ${show ? styles.show : ""}`}>
      <h2>Mis intereses</h2>
      <ul>
        <li>
          <span>👨‍💻</span>
          <p>Programación</p>
        </li>
        <li>
          <span>⚽️</span>
          <p>Fútbol</p>
        </li>
        <li>
          <span>💪</span>
          <p>Gimnasio</p>
        </li>
        <li>
          <span>📚</span>
          <p>Leer</p>
        </li>
      </ul>
    </section>
  );
};

export default Interests;
