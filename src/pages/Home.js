import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to My Portfolio</h1>
                <p className="lead">Explore my education, experience, and projects to get to know me better.</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Education</h5>
                            <p className="card-text">View my academic background and qualifications.</p>
                            <Link to="/education" className="btn btn-primary">Explore Education</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Experience</h5>
                            <p className="card-text">Discover my professional journey and skills.</p>
                            <Link to="/experience" className="btn btn-primary">Explore Experience</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Projects</h5>
                            <p className="card-text">Check out the projects I've worked on.</p>
                            <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;