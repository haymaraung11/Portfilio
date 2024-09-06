import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import userImage from '../images/user.png'; 
import '../App.css'; 

const About = () => { 
    return ( 
        <section id="about" className="about-section py-5 bg-light"> 
            <div className="container">
                {/* Title */}
                <div className="row mb-4">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title display-4">About Me</h2>
                        <hr className="my-4 mx-auto" style={{ borderTop: '2px solid #444', width: '60px' }} />
                    </div>
                </div>
                
                {/* Profile and Info */}
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4 text-center"> 
                        <div className="profile-image-container"> 
                            <img src={userImage}
                                alt="profile pic"
                                className="rounded-circle profile-image" /> 
                        </div> 
                    </div>
                    <div className="col-md-8 text-center">
                        <h3 className="font-weight-bold">Liam James</h3>
                        <h4 className="text-muted">Software Engineer</h4>
                        <p className="mt-4 lead">
                            I am a skilled Internship Trainee with over 6 months of 
                            hands-on experience in full-stack web development. My 
                            expertise includes using technologies such as Node.js, 
                            Java, JSP, HTML, CSS, and Bootstrap. As a problem solver, 
                            I have successfully designed and developed user-friendly, 
                            responsive web applications.
                        </p> 

                        {/* Social Icons */}
                        <div className="social-icons mt-4">
                            <a href="https://www.linkedin.com" className="text-dark mx-2">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a href="https://github.com" className="text-dark mx-2">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.instagram.com" className="text-dark mx-2">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
