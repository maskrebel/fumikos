import React from 'react';
import settings from "../components/Settings.tsx";

const Contact: React.FC = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Contact Us</h2>
            <div className="mb-4">
                <p>
                    Feel free to reach out to us for any inquiries or further information:
                </p>
                <ul>
                    <li>Phone: {settings.phone}</li>
                    <li>Email: {settings.email}</li>
                    <li>Address: {settings.address}</li>
                </ul>
            </div>
            <div className="map-responsive">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0378603952263!2d106.57914407316575!3d-6.125607560059214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a01086e589757%3A0x5e8a2a53a33e5589!2sFumikos!5e0!3m2!1sen!2sid!4v1729234978666!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    style={{ border: 0, width: '100%', height: '450px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
