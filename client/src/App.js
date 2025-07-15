import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('/api/hello')
      .then(res => setMsg(res.data.message))
      .catch(err => setMsg('Error connecting to backend'));
  }, []);

  return (
    <div className="App">
      <h1>PLP Week 7: MERN App</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App;
