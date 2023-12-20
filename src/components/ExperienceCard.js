import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExperienceCard({ experienceId }) {
    const [experienceData, setExperienceData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/.json');
            setExperienceData(response.data.experience);
        } catch (error) {
            console.error('Error fetching experience data:', error);
        }
        };

        fetchData();
    }, [experienceId]);

    if (!experienceData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {experienceData.map((experience, i) => (
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title card-title-experience">{experience.position}</h5>
                        <p className="card-text">{experience.company}, {experience.duration}</p>
                        <ul>
                            {experience.responsibilities.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExperienceCard;
