import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Form as Formulary, Title, Input, TextArea, Button } from "./styles";
import MessageStatus from "@components/MessageStatus";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastSent, setLastSent] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setTimeout(() => setErrors({}), 3000); // Limpa os erros após 3s
    }
  }, [errors]);

  useEffect(() => {
    if (success !== null) {
      setTimeout(() => setSuccess(null), 5000); // Esconde sucesso/erro após 5s
    }
  }, [success]);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (lastSent && Date.now() - lastSent < 30000) {
      setSuccess(false);
      return;
    }

    if (honeypot) {
      console.warn("Spam detected!");
      return;
    }

    // Verifica se os campos estão preenchidos e se o e-mail é válido
    let newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setLastSent(Date.now());
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formulary onSubmit={handleSubmit}>
      <Title>Contact Us</Title>
      <Input
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ borderColor: errors.name ? "red" : "" }}
      />
      {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}

      <Input
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: errors.email ? "red" : "" }}
      />
      {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}

      <TextArea
        name="message"
        placeholder="Write your message"
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ borderColor: errors.message ? "red" : "" }}
      />
      {errors.message && <p style={{ color: "red", fontSize: "12px" }}>{errors.message}</p>}

      <input
        type="text"
        name="honeypot"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
      />
      
      <Button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </Button>
      
      <MessageStatus
        isSuccess={success}
        isValidated={Object.keys(errors).length === 0}
        messageError="Your message was not sent, try later."
        messageSuccess="Your message was sent successfully, thank you!"
      />
    </Formulary>
  );
};

export default Form;
