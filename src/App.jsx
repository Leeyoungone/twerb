import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import JobExperience from './pages/Experience';
import ProjectPage from './pages/ProjectPage';
import MissingPage from './pages/MissingPage';

import Header from './components/Header';
import './App.css';

// the path is /#/profile smh my head
export default function App() {
  console.log("current url:", window.location.pathname)
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/profile" exact element={<ProfilePage />} />
        <Route path="/experience" exact element={<JobExperience />} />
        <Route path="/projects" exact element={<ProjectPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </Router>
    </>
  );
}
