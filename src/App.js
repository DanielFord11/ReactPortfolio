import React from 'react';
import './style.css'; // Import the style.css file
import Navbar from './Navbar';
import Profile from './components/Profile';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <FeaturedProjects />
      {/* Add other components and content here */}
    </div>
  );
}

export default App;
