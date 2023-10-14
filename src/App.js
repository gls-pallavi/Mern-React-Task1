import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const countWords = (str) => {
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Responsive Paragraph word counter</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here..."
        className="text-area"
      />
      <label className="word-count-label">Word count: {countWords(text)}</label>
    </div>
  );
}

export default App;
