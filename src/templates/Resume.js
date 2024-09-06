import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faFileDownload } 
    from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import resumePdf from '../files/Resume.pdf';

const Resume = () => { 
    const breadcrumbsPaths = 
        [ 
            { title: 'Projects', to: '/projects' }, 
            { title: 'Resume', to: '/resume' } 
        ]; 

    return ( 
        <section id="resume" className="resume-section py-5 bg-light">
            <div className="container">
                {/* Breadcrumbs */}
                <div className="row mb-4">
                    <div className="col-md-12">
                        <Breadcrumbs paths={breadcrumbsPaths} />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 text-center">
                        {/* Resume Header */}
                        <h2 className="section-title mb-4 display-4">
                            <FontAwesomeIcon icon={faFileDownload} className="mx-2" />
                            Resume
                        </h2>
                        
                        {/* Resume Description */}
                        <p className="section-description mb-4 lead">
                            Download my resume to learn more about my professional experience and skills.
                        </p>

                        {/* Download Button */}
                        <a
                            href={resumePdf}
                            className="btn btn-primary btn-lg resume-download-btn mb-5"
                            download
                        >
                            Download Resume
                        </a>

                        {/* Skills Section */}
                        <div className="skills-section mt-5 text-left">
                            <h3 className="skills-title mb-4 display-5">Skills</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="skills-list list-unstyled">
                                        <li>JavaScript</li>
                                        <li>React.js</li>
                                        <li>Java</li>
                                        <li>Spring Boot</li>
                                        <li>API Integration</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="skills-list list-unstyled">
                                        <li>Python</li>
                                        <li>HTML/CSS</li>
                                        <li>MySQL</li>
                                        <li>MS SQL</li>
                                        <li>Git & Version Control</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Additional Professional Information */}
                        <div className="professional-info mt-5">
                            <h3 className="professional-title mb-4 display-5">Professional Experience</h3>
                            <p className="lead">System development using Java, JavaScript, Python, Spring Boot, and MySQL in various projects with a focus on backend architecture and API integration.</p>
                            <p className="lead">Capable of creating technical documentation, test plans, and coordinating with cross-functional teams for efficient project delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
}; 

export default Resume;
