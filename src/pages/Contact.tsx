import React from 'react';
import settings from "../components/Settings.tsx";

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Email: {settings.email}</p>
            <p>Phone: {settings.phone}</p>
            <p>WhatsApp: {settings.phone}</p>
        </div>
    );
};

export default Contact;
