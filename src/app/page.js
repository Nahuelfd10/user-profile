import Head from "next/head";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import styles from "./styles/Home.module.css";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Interests from "./components/Interest";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Perfil de Usuario</title>
        <meta
          name="description"
          content="Perfil de mi usuario con información básica, intereses, tecnologias, experiencia y contacto"
        />
      </Head>
      <Header />
      <main>
        <About />
        <Interests />
        <Technologies />
        <Experience />
        <ContactForm />
      </main>
    </div>
  );
}
