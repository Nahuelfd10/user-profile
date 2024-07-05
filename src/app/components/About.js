"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faLightbulb,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/About.module.css";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={`${styles.about} ${show ? styles.show : ""}`}>
      <h2>Sobre mí</h2>
      <p>
        Soy un desarrollador de software apasionado con una sólida base técnica.
        Destaco en la resolución creativa de problemas, tengo una actitud
        positiva y habilidades interpersonales excepcionales. Disfruto trabajar
        en equipo y valoro la comunicación efectiva para alcanzar los objetivos
        del proyecto.
      </p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faComments} /> Comunicación
        </li>
        <li>
          <FontAwesomeIcon icon={faLightbulb} /> Liderazgo
        </li>
        <li>
          <FontAwesomeIcon icon={faSmile} /> Actitud positiva
        </li>
      </ul>
    </section>
  );
};

export default About;
