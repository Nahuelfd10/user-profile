"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <header className={`${styles.header} ${show ? styles.show : ""}`}>
      <Image
        src="/profile.jpg"
        alt="Imagen de Perfil"
        width={150}
        height={150}
        className={styles.profileImage}
      />
      <h1>Nahuel Fernandez Diez</h1>
      <h2>Front-end Developer</h2>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/Nahuelfd10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nahuelfd10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        {/* <a
          href="https://nahuelfdev.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGlobe} /> Portafolio
        </a> */}
      </div>
    </header>
  );
};

export default Header;
