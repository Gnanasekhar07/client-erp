import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Student from './components/Student';
import Home from './components/Home';
import Courses from './components/Courses';
import TimeTable from './components/TimeTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const logOut = () => {
    // Remove user from storage
    localStorage.removeItem("user");

    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <Router>
      <div className="App">
        <NavBar onLogout={logOut} /> {/* Pass logOut function as a prop */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/timetable" element={<TimeTable />} /> {/* Ensure this is lowercase */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;