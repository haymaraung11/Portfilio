import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import userImage from '../images/user.png'; 
import '../App.css'; 

const About = () => { 
    return ( 
        <section className="container text-center my-5"> 
             <div className="row justify-content-center mb-4">
                <div className="col-md-8">
                    <h2 className="title">About Me</h2>
                    <hr className="my-4 mx-auto" style={{ borderTop: '2px solid #444', width: '60px' }} />
                </div>
            </div>
            <div className="row justify-content-center text-center"> 
                <div className="col-md-4 mb-4"> 
                    <div className="profile-image-container"> 
                        <img src={userImage}
                            alt="profile pic"
                            className="rounded-circle profile-image" /> 
                    </div> 
                </div> 
                <div className="col-md-8 text-center">
                    <h3 className="font-weight-bold">Liam James</h3>
                    <h4 className="text-muted">Software Engineer</h4>
                    <p className="mt-4"> 
                        I am a skilled Internship Trainee with over 6 months of 
                        hands-on experience in full-stack web development. My 
                        expertise includes using technologies such as Node.js, 
                        Java, JSP, HTML, CSS, and Bootstrap. As a problem solver, 
                        I have successfully designed and developed user-friendly, 
                        responsive web applications. 
                    </p> 
                    <div className="social-icons mt-4">
                        <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} className="text-dark m-2" size="2x"/></a>
                        <a href="https://github.com"><FontAwesomeIcon icon={faGithub} className="text-dark m-2" size="2x"/></a>
                         <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} className="text-dark m-2" size="2x"/></a>
                    </div>
                </div>
            </div> 
        </section> 
    );
}

export default About;