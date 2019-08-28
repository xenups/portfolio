import React from 'react';
// import logo from './logo.svg';
import logo from './amir.jpg';
import './App.css';

import About from './components/about'
import Home from './components/home'
import Sidebar from './components/sidebar'
import Header from './components/header'
import Resume from './components/resume'
import Portfolio from './components/potfolio'
import ContactUs from './components/concactUS'
import Footer from './components/footer'
import resumeData from './resumeData'


function App() {
  return (
    <div className="App">
      {/* <div class="sidenav">
      <Sidebar/>
      </div> */}
        {/* <Home/> */}
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
    </div>
  );
}

export default App;
