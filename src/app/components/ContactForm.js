"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("¡Mensaje enviado con éxito!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleNewMessage = () => {
    setSuccessMessage(false);
  };

  return (
    <section className={`${styles.contact} ${show ? styles.show : ""}`}>
      {successMessage ? (
        <div className={styles.successContainer}>
          <img
            src="/mailSend.svg"
            alt="Success"
            className={styles.successImage}
          />
          <h2 className={styles.success}>{successMessage}</h2>
          <button onClick={handleNewMessage}>NUEVO MENSAJE</button>
        </div>
      ) : (
        <>
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              draggable="false"
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </>
      )}
    </section>
  );
};

export default ContactForm;
