import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    fetch("http://13.232.196.37/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),  // <-- make sure backend expects 'message'
    })
      .then((response) => response.json())
      .then((data) => setResponse(data.reply))  // <-- 'reply' should match Flask response
      .catch((error) => {
        console.error("Error:", error);
        setResponse("Failed to connect to backend");
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Talk to Flask</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleSubmit}>Send</button>
      <p><strong>Backend says:</strong> {response}</p>
    </div>
  );
}

export default App;
