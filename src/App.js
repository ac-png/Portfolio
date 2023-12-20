import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Education from './pages/Education';
import Experience from './pages/Experience';
import ProjectsIndex from './pages/projects/Index';
import ProjectsShow from './pages/projects/Show';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='container shadow bg-white rounded my-4 p-4'>    
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/projects" element={<ProjectsIndex/>} />
            <Route path="/projects/:slug" element={<ProjectsShow/>} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
      </Router>
    </div>

  );
}

export default App;
