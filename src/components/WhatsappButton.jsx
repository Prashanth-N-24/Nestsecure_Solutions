// src/components/WhatsappButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css'; // Import the CSS for animation

const WhatsappButton = () => {
  const phoneNumber = "918123972747"; // replace with your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappButton;
