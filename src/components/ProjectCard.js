import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProjectCard() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/.json');
            setProjectData(response.data.projects);
        } catch (error) {
            console.error('Error fetching project data:', error);
        }
        };

        fetchData();
    });

    if (!projectData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {projectData.map((project, i) => (
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title card-title-projects"><i class="fas fa-code"></i> {project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <Link to={`/projects/${project.slug}`} className="btn btn-danger">Learn More</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectCard;
