import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [code, setCode] = useState('');
  const [convertedCode, setConvertedCode] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setCode(e.target.result);
    };
    if (file) {
      reader.readAsText(file);
    }
  };

  const handleConvert = () => {
    // 🧠 You can replace this logic with your actual React ➜ Next.js conversion logic
    const converted = code.replace('react', 'nextjs'); // dummy conversion
    setConvertedCode(converted);
  };

  return (
    <div className="app-container">
      <h1>⚙️ React ➜ Next.js Converter</h1>

      <div className="upload-section">
        <label className="upload-label">📂 Upload React File</label>
        <input type="file" accept=".js,.jsx" onChange={handleFileUpload} />
      </div>

      <div className="code-section">
        <div className="code-card">
          <h3>React Code</h3>
          <textarea
            placeholder="Paste or upload code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="code-card">
          <h3>Next.js Code</h3>
          <textarea
            placeholder="Converted code will appear here..."
            value={convertedCode}
            readOnly
          />
        </div>
      </div>

      <button className="convert-button" onClick={handleConvert}>
        🔁 Convert to Next.js
      </button>
    </div>
  );
}

export default App;
