import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-4">
            <div className="container p-4">
                <p>Contact us:</p>
                <p>Email: info@fumikos.com</p>
                <p>Phone: +62 812-3456-7890</p>
                <a href="https://shopee.com/fumikos" target="_blank" rel="noopener noreferrer">Shop on Shopee</a> |
                <a href="https://tokopedia.com/fumikos" target="_blank" rel="noopener noreferrer">Shop on Tokopedia</a> |
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Fumikos. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
