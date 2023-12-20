import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/.json');
                setProfileData(response.data.profile);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchData();
    }, []);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to My Portfolio, {profileData.name}!</h1>
                <p className="lead">{profileData.summary}</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Education</h5>
                            <p className="card-text">View my academic background and qualifications.</p>
                            <Link to="/education" className="btn btn-primary"><i className="fas fa-graduation-cap"></i> Explore Education</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Experience</h5>
                            <p className="card-text">Discover my professional journey and skills.</p>
                            <Link to="/experience" className="btn btn-primary"><i className="fas fa-briefcase"></i> Explore Experience</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Projects</h5>
                            <p className="card-text">Check out the projects I've worked on.</p>
                            <Link to="/projects" className="btn btn-primary"><i className="fas fa-code"></i> Explore Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;