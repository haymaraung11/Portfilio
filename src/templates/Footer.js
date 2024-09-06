import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Contact Information */}
                    <div className="col-md-6 mb-3 text-center text-md-start">
                        <a href="mailto:liamjames@gmail.com" className="text-light">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            liamjames@gmail.com
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-6 mb-3 text-center text-md-end">
                        <a href="https://github.com" className="text-light mx-2" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com" className="text-light mx-2" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.instagram.com" className="text-light mx-2" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Liam James. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
