import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='my-3'>
            <h1 className='text-center'>Alice's Portfolio</h1>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fs-6">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li><Link className='nav-link' to="/">Home</Link></li>
                            <li><Link className='nav-link' to="/projects">Projects</Link></li>
                            <li><Link className='nav-link' to="/education">Education</Link></li>
                            <li><Link className='nav-link' to="/experience">Experience</Link></li>
                            <li><Link className='nav-link' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg bg-bg-body-tertiary fs-6">
                <div className="container-fluid">
                    <div>
                        <ul className="navbar-nav">
                            <li><Link className='nav-link' to="/">Home</Link></li>
                            <li><Link className='nav-link' to="/projects">Projects</Link></li>
                            <li><Link className='nav-link' to="/education">Education</Link></li>
                            <li><Link className='nav-link' to="/experience">Experience</Link></li>
                            <li><Link className='nav-link' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    );
};

export default Navbar;