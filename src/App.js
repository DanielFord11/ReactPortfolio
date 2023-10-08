import React from 'react';
import './App.css'; // You can import your app-wide styles here
import Navbar from './Navbar'; // Import the Navbar component
import Profile from './components/Profile'; // Import the Profile component
import About from './components/About'; // Import the About component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About /> {/* Render the About component */}
      {/* Add other components and content here */}
    </div>
  );
}

export default App;
