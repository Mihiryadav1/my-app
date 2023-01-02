
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Formjs from './components/Formsjs';
import React, { useState } from 'react';
function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
    }
    else {
      setmode('light');
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} togglemode={togglemode} />
      <div className="container">
        <Formjs />
        {/* <TextForm heading="This is textarea" /> */}
      </div>
    </>
  );
}

export default App;
