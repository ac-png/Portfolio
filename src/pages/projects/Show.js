import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Show() {
    const { slug } = useParams();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/projects/.json`);
                setProjectData(response.data.find(p => p.slug === slug));
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchData();
    }, [slug]);

    if (!projectData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{projectData.title}</h5>
                    <p className="card-text">
                        <p>{projectData.description}</p>
                        <p>Date: {projectData.date}</p>
                        <p>Technologies Used: {projectData.technologies.join(', ')}</p>
                    </p>
                    <a href={projectData.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Website</a>
                    <a href={projectData.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View on GitHub</a>
                    <Link to="/projects" className="text-decoration-none btn btn-link">Go Back to Projects</Link>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <h3 className="card-title">Website Preview</h3>
                    <iframe
                        title={projectData.title}
                        src={projectData.website}
                        width="100%"
                        height="300px"
                        className='border'
                    />
                </div>
            </div>
        </div>
    );
}

export default Show;
