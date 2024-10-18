import React, { useState } from 'react';
import settings from "../components/Settings.tsx";

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Tambahkan logika pengiriman data di sini, misalnya ke API atau email.
        alert('message sent successfully');
        setName('');
        setEmail('');
        setMessage('');
    };

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
            <div className="table-responsive">
                <form onSubmit={handleSubmit} className="table-responsive">
                    <table className="table ">
                        <tbody>
                        <tr>
                            <td><label htmlFor="name" className="form-label">Name</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email" className="form-label">Email</label></td>
                            <td>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="message" className="form-label">Message</label></td>
                            <td>
                <textarea
                    id="message"
                    className="form-control"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="text-end">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Contact;
