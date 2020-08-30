import React from 'react';
import './App.sass';
import Navbar from './components/navbar/Navbar';
import LogginButton from './components/logginButton/LogginButton';
import DisplayParams from './components/displayParams/DisplayParams';


function App () {
  return (
    <div className="App">
      <LogginButton />
      <Navbar />
      
    </div>
  );
}

export default App;
