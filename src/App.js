import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

import ProjectsIndex from './pages/projects/Index';
import ProjectsShow from './pages/projects/Show';

import ExperienceIndex from './pages/experience/Index';
import ExperienceShow from './pages/experience/Show';

import EducationIndex from './pages/education/Index';
import EducationShow from './pages/education/Show';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='container shadow bg-white rounded my-4 p-4'>    
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path='*' element={<PageNotFound/>} />

            <Route path="/projects" element={<ProjectsIndex/>} />
            <Route path="/projects/:slug" element={<ProjectsShow/>} />

            <Route path="/experience" element={<ExperienceIndex/>} />
            <Route path="/experience/:slug" element={<ExperienceShow/>} />

            <Route path="/education" element={<EducationIndex/>} />
            <Route path="/education/:slug" element={<EducationShow/>} />
          </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;