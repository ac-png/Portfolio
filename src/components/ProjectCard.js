import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectCard({ projectId }) {
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
    }, [projectId]);

    if (!projectData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {projectData.map((project, i) => (
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title card-title-projects">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href="#" className="btn btn-danger">Learn More</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectCard;
