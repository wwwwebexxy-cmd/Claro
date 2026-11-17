'use client';

import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => (
    <a
        className="whatsapp-float"
        href="https://wa.me/971545484873"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CLARO on WhatsApp"
        title="Chat with CLARO on WhatsApp"
    >
        <FaWhatsapp aria-hidden="true" />
    </a>
);

export default WhatsAppFloat;
