import React from 'react';
import './App.css';
import Routers from "./components/route";
import Top from "./components/Top";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Top/>
      <Routers/>
      <Footer/>
    </div>
  );
}

export default App;
