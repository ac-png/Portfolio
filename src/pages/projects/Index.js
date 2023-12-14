import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

const Index = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/.json')
            .then(response => {
                setProjects(response.data.projects);
            })
            .catch(err => {
            console.error(err);
            })
    }, []);

    if(!projects) return (<p>Loading...</p>)

    return (
        <div>
            <h3>Projects</h3>
            {projects.map((projects, i) => (
                <Card>
                    <Card.Body>
                        <Card.Title>{projects.title}</Card.Title>
                        <Card.Text><b>Technologies:</b>
                            {projects.technologies.map((technologies, i) => (
                                <span className="bg-warning rounded-pill m-1 p-2">{technologies}</span>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Index;
