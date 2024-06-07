// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Editor from './components/Editor';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/execute', { language, code });
      setOutput(response.data);
    } catch (error) {
      setOutput('Error executing code');
    }
  };

  return (
    <div className="app">
      <Header setLanguage={setLanguage} />
      <Editor language={language} code={code} setCode={setCode} />
      <button onClick={handleSubmit}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
};

export default App;
