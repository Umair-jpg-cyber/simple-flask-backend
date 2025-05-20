import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const callBackend = async () => {
    try {
      const res = await fetch('http://13.232.196.37/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'hello world' }),
      });

      const data = await res.json();
      setResponse(data.reply); 
    } catch (error) {
      console.error('Error connecting to backend:', error);
      setResponse('Failed to connect to backend');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Talk to Flask</h1>
      <button onClick={callBackend}>Send</button>
      <p>Backend says: {response}</p>
    </div>
  );
}

export default App;
