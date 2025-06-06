import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import MissingPage from './pages/MissingPage';
import './App.css';

export default function App() {
  console.log("current url:", window.location.pathname)
  return (
    <Router>
      <Routes>
        <Route path="/profile" exact element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </Router>
  );
}
