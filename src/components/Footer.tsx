import React from 'react';
import './Footer.css';
import TKPDLogo from '../assets/tokopedia.svg'
import SHPLogo from '../assets/shopee.svg'
import settings from "./Settings.tsx";

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="text-uppercase mb-3">{settings.companyName}</h5>
                        <p>Call Center: {settings.phone}</p>
                        <p>{settings.email}</p>
                        <div className="d-flex">
                            <a href="#" className="me-3 text-light">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="me-3 text-light">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="me-3 text-light">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="me-3 text-light">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-uppercase mb-3">Merchant</h5>
                        <div className="d-flex">
                            <a target="_blank" href={settings.urlTokopedia} className="me-3 text-light">
                                <img src={TKPDLogo} width="50" height="50"/>Fumikos
                            </a>
                        </div>
                        <div className="d-flex">
                            <a target="_blank" href={settings.urlShopee} className="me-3 text-light">
                                <img src={SHPLogo} width="50" height="30"/>Fumikos.id
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-uppercase mb-3">Hubungi Kami</h5>
                        <address>
                            {settings.address}
                        </address>
                    </div>
                </div>
            </div>
            <p className="text-center">&copy; {new Date().getFullYear()} {settings.companyName}.</p>
        </footer>
    );
};

export default Footer;
