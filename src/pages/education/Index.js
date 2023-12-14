import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

const Index = () => {
    const [education, setEducation] = useState(null);

    useEffect(() => {
        axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/.json')
            .then(response => {
                setEducation(response.data.education);
            })
            .catch(err => {
            console.error(err);
            })
    }, []);

    if(!education) return (<p>Loading...</p>)

    return (
        <div>
            <h3>Education</h3>
            {education.map((education, i) => (
                <Card>
                    <Card.Body>
                        <Card.Title>{education.degree}</Card.Title>
                        <Card.Text><b>Duration: </b>{education.duration}</Card.Text>
                        <Card.Text><b>Institution: </b>{education.institution}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Index;
