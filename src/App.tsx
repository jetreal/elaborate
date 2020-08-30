import React from 'react';
import './App.sass';
import Navbar from './components/navbar/Navbar';
import LogginButton from './components/logginButton/LogginButton';
import DisplayParams from './components/displayParams/DisplayParams';
import SearchSection from './components/mainPageSearchSection/SearchSection';


function App () {
  return (
    <div className="App">
      <LogginButton />
      <Navbar />
      <SearchSection />
      
    </div>
  );
}

export default App;
