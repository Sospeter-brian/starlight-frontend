import React from 'react';
import NavBar from './components/NavBar/NavBar.component.js'
//import pages
import Home from './pages/Home/Home.page.js';
import About from './pages/About/About.page.js';
import RegisterDonor from './pages/RegisterDonor/RegDonor.page.js';
import ViewDonor from './pages/ViewDonor/ViewDonor.page.js';
import DonorDetails from './pages/ViewDonor/DonorDetails/DonorDetails.js';
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
                      <Route path="/registerdonor" element={<RegisterDonor/>} />
                      <Route path="/viewdonor" element={<ViewDonor/>} /> 
                      <Route path = '/donors/:id' element={<DonorDetails/>}/>
        
                  </Routes>
              </div>
        </Router>

    );
}

export default App;
