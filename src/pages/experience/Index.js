import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

const Index = () => {
    const [experience, setExperience] = useState(null);

    useEffect(() => {
        axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/.json')
            .then(response => {
                setExperience(response.data.experience);
            })
            .catch(err => {
            console.error(err);
            })
    }, []);

    if(!experience) return (<p>Loading...</p>)

    return (
        <div>
            <h3>Experience</h3>
            {experience.map((experience, i) => (
                <Card className="lh-1 d-inline-flex">
                    <Card.Body>
                        <Card.Title>{experience.position}</Card.Title>
                        <Card.Text><b>Company: </b>{experience.company}</Card.Text>
                        <Card.Text><b>Location: </b>{experience.location}</Card.Text>
                        <Card.Text><b>Duration: </b>{experience.duration}</Card.Text>
                        <Card.Text><b>Responsibilities:</b></Card.Text>
                        {experience.responsibilities.map((responsibilities, i) => (
                            <ul>
                                <li>{responsibilities}</li>
                            </ul>
                        ))}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Index;
