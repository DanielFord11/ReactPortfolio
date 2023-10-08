import React from 'react';
import './App.css'; // You can import your app-wide styles here
import Navbar from './Navbar'; // Import the Navbar component
import Profile from './components/Profile'; // Import the Profile component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render the Navbar component */}
      <Profile /> {/* Render the Profile component */}
      {/* Add other components and content here */}
    </div>
  );
}

export default App;
