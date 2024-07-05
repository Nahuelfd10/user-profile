import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nahuel Fernandez Diez",
  description:
    "Perfil de mi usuario con información básica, intereses, tecnologias, experiencia y contacto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
