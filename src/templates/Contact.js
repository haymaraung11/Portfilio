import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 

const Contact = () => { 
    const breadcrumbsPaths = [
        { title: 'Projects', to: '/projects' }, 
        { title: 'Resume', to: '/resume' }, 
        { title: 'Contact', to: '/contact' }
    ]; 

    return ( 
        <section id="contact" className="py-5 bg-light">
            <div className="container">
                {/* Breadcrumbs */}
                <Breadcrumbs paths={breadcrumbsPaths} />

                {/* Contact Section */}
                <div className="row justify-content-center text-center mt-4">
                    <div className="col-md-8">
                        {/* Contact Header */}
                        <h2 className="section-title mb-4">Contact</h2>
                        
                        {/* Contact Description */}
                        <p className="section-description mb-5">
                            Feel free to reach out for collaborations, opportunities, or inquiries.
                        </p>

                        {/* Contact Info */}
                        <ul className="list-unstyled contact-info">
                            <li className="mb-4">
                                <a href="mailto:liamjames@gmail.com" className="text-dark">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                    liamjames@gmail.com
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.linkedin.com" className="text-dark">
                                    <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                                    LinkedIn
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com" className="text-dark">
                                    <FontAwesomeIcon icon={faGithub} className="me-2" />
                                    GitHub
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://instagram.com" className="text-dark">
                                    <FontAwesomeIcon icon={faInstagram} className="me-2" />
                                    Instagram
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="tel:+6393xxxxx4" className="text-dark">
                                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                                    +6393xxxxx4
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    ); 
}; 

export default Contact;
