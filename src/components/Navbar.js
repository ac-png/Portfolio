import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='pb-3'>
            <h1 className='mainTitle text-center'>Alice's Portfolio</h1>
            <ul className="pt-3 list-group list-group-horizontal">
                <li className='list-group-item list-group-item-primary'><Link className='text-decoration-none' to="/">Home</Link></li>
                <li className='list-group-item list-group-item-primary'><Link className='text-decoration-none' to="/education">Education</Link></li>
                <li className='list-group-item list-group-item-primary'><Link className='text-decoration-none' to="/experience">Experience</Link></li>
                <li className='list-group-item list-group-item-primary'><Link className='text-decoration-none' to="/projects">Projects</Link></li>
                <li className='list-group-item list-group-item-primary'><Link className='text-decoration-none' to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;