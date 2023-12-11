import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1 className='text-center'>Alice's Portfolio</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;