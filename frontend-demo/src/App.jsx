import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const handleButton = async () => {
    try {
      const response = await axios.get('http://localhost:8081/test/msg');
      setMessage(response.data); // axios response
      alert("Recieved response from backend");
    } catch (error) {
      console.error('Error fetching message:', error);
      alert('Build failed');
    }
  };

  return (
    <>
      <button
        onClick={handleButton}
        style={{ border: '1px solid blue', color: 'blue' }}
      >
        Click Here
      </button>
      <p>{message}</p>
    </>
  );
}

export default App;
