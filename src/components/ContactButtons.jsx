// src/components/ContactButtons.jsx
import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './ContactButtons.css';

const ContactButtons = () => {
  const phoneNumber = '918123972747'; // replace with your actual number

  return (
    <>
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="contact-float call-button"
        title="Call us"
      >
        <FaPhone className="contact-icon" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="contact-float whatsapp-button"
        title="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="contact-icon" />
      </a>
    </>
  );
};

export default ContactButtons;
