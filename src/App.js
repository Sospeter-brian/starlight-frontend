import React from 'react';
import NavBar from './components/NavBar/NavBar.component.js'
//import pages
import Home from './components/pages/Home/Home.page.js';
import About from './components/pages/About/About.page.js';
//absolute imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
    return (
        <Router>
            <NavBar />
              <div className="App">
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/about" element={<About/>} />
                      {/* <Route path="/registerdonor" element={<RegisterDonor/>} />
                      <Route path="/viewdonor" element={<ViewDonor/>} /> */}
                  </Routes>
              </div>
        </Router>

    );
}

export default App;
