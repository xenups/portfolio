import React from 'react';
// import logo from './logo.svg';
import logo from './amir.jpg';
import './App.css';

import About from './components/about'
import Home from './components/home'
import Sidebar from './components/sidebar'

function App() {
  return (
    <div className="App">
      <div>
        <section>
        <About/>
        
        <ul>salame kore khar</ul>
        </section>
      
      </div>
      <div class="sidenav">
      <Sidebar/>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
        <div id="colorlib-main">        
        <div id="colorlib-page">
        <div id="container-wrap">
        </div>
      	</div>
      </div>  
      </header>
    </div>
  );
}

export default App;
