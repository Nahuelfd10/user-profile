import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

describe("ContactForm", () => {
  it("renders contact form correctly", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });

  it("handles form submission and shows success message", () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Nombre/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), {
      target: { value: "Hello, this is a test message." },
    });

    fireEvent.click(screen.getByText(/Enviar/i));

    expect(
      screen.getByText(/¡Mensaje enviado con éxito!/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/NUEVO MENSAJE/i)).toBeInTheDocument();
  });

  it("clears form and allows to send a new message", () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Nombre/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), {
      target: { value: "Hello, this is a test message." },
    });

    fireEvent.click(screen.getByText(/Enviar/i));
    fireEvent.click(screen.getByText(/NUEVO MENSAJE/i));

    expect(screen.getByLabelText(/Nombre/i).value).toBe("");
    expect(screen.getByLabelText(/Email/i).value).toBe("");
    expect(screen.getByLabelText(/Mensaje/i).value).toBe("");
  });
});
