import React from "react";
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faUsers, faCalendar, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs';

const Project = () => {
    const breadcrumbsPaths = 
        [ 
            { title: 'Projects', to: '/projects' } 
        ]; 
    
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'This is a brief description of project one.',
            Language: 'Java', 
            Database: 'MySQL',
            Member: 5,
            Duration: '2 months'
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'This is a brief description of project two.',
            Language: 'React', 
            Database: 'MSSQL',
            Member: 10,
            Duration: '3 months'
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'This is a brief description of project three.',
            Language: 'PHP', 
            Database: 'MySQL',
            Member: 15,
            Duration: '1 month'
        }
    ];

    return (
        <section id="projects" className="projects-section py-5 bg-light">
            <div className="container">
                {/* Breadcrumbs */}
                <div className="row mb-4">
                    <div className="col-md-12">
                        <Breadcrumbs paths={breadcrumbsPaths} />
                    </div>
                </div>

                <h1 className="my-4 text-center display-4">Projects</h1>
                <p className="text-center lead">Explore a selection of the projects I've been involved in.</p>

                <div className="row">
                    {projects.map(project => (
                        <div className="col-md-4 mb-4" key={project.id}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <FontAwesomeIcon icon={faCode} className="text-dark me-2" />
                                            <span>{project.Language}</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faDatabase} className="text-dark me-2" />
                                            <span>{project.Database}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <FontAwesomeIcon icon={faUsers} className="text-dark me-2" />
                                            <span>{project.Member} Members</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faCalendar} className="text-dark me-2" />
                                            <span>{project.Duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
