import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
    const [contactData, setContactData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-db0f3-default-rtdb.europe-west1.firebasedatabase.app/.json');
                setContactData(response.data.contact);
            } catch (error) {
                console.error('Error fetching contact data:', error);
            }
        };

        fetchData();
    }, []);

    if (!contactData) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h2 className="text-center mb-4">Contact Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message:</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Links</h2>
                    <ul className="list-group text-center">
                            <li className="list-group-item">
                                <a href={`mailto:${contactData.email}`} className="btn btn-primary m-2">
                                    <i className="fas fa-envelope"></i> Email
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a href={contactData.github[0]} target="_blank" rel="noopener noreferrer" className="btn btn-dark m-2">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a href={contactData.portfolio} target="_blank" rel="noopener noreferrer" className="btn btn-success m-2">
                                    <i className="fas fa-globe"></i> Portfolio
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
