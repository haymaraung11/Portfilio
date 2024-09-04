import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import About from './templates/About';
import Header from './templates/Header';
import Project from './templates/Project';
import Resume from './templates/Resume';
import Contact from './templates/Contact';

const App = () => {

  return(
    <div>
      <Router>
            <Header />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    </div>
    
  );
}
export default App;