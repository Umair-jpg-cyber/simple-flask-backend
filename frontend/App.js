import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const callBackend = async () => {
    try {
      const res = await fetch('http://127.17.51.225:5000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type as JSON
        },
        body: JSON.stringify({ message: 'hello world' }), // Send the message in the request body
      });

      const data = await res.json(); // Assuming the backend returns JSON
      setResponse(data.reply); // Assuming 'reply' is the key returned from Flask
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
