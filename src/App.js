import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Upload from './components/Upload';
import Footer from './components/Footer';
import Booklists from './components/Bookslists';


function App() {
  return (
    <div>
    <Navigation />
    <Booklists />
    <Footer />
    </div> 
  );
}

export default App;
