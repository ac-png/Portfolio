import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EducationCard() {
    const [educationData, setEducationData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/.json');
            setEducationData(response.data.education);
        } catch (error) {
            console.error('Error fetching education data:', error);
        }
        };

        fetchData();
    }, []);

    if (!educationData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        {educationData.map((education, i) => (
            <div key={i} className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title card-title-education"><i className="fas fa-graduation-cap"></i> {education.degree}</h5>
                    <p className="card-text">{education.institution}, {education.duration}</p>
                </div>
            </div>
        ))}
        </div>
    );
}

export default EducationCard;
