import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Billing from './components/Billing';
import Workspace from './components/Workspace';
import Alert from './components/Alert';

function App() {
  // const workspaceName = "hhjh";
  const [profileData, setProfileData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(profileData.name);
    // <Alert name ={ profileData.name} />
    console.log('Profile submitted:', profileData);
  };

  return (
    <Router>
      <div className="flex">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <Profile 
                profileData={profileData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
              />
            } />
            <Route path="/workspace" element={<Workspace initialName={profileData.name} />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </div>
      </div>
    </Router>

    // <div className="flex">
    //   <NavBar />
    //   <Profile />
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
