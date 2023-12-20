import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from "../../components/ProjectCard";

const ProjectsIndex = () => {
    const [technologies, setTechnologies] = useState([]);
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(null);
    const [tag, setTag] = useState("");
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/projects/.json');
                const fetchedProjects = response.data;
                setProjects(fetchedProjects);
                const allTechnologies = fetchedProjects.flatMap(project => project.technologies);
                const uniqueTechnologies = Array.from(new Set(allTechnologies));
                setTechnologies(uniqueTechnologies);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };
        fetchData();
    }, []);

    const handleTagClick = (technology) => {
        setTag(technology);
        setActive(technology);
    };

    return (
        <div>
            <h2>Projects</h2>
            <div className="d-flex flex-wrap">
                {technologies.map(technology => (
                    <button key={technology} className={`btn btn-primary m-2 ${technology === active ? 'active' : ''}`} onClick={() => handleTagClick(technology)}>
                        {technology}
                    </button>
                ))}
            </div>
            <ProjectCard setFilter={{tag}} />
        </div>
    );
};

export default ProjectsIndex;
