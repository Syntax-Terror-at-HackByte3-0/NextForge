import React, { useState } from 'react';
import './styles/App.css';

// FileUploader Component
function FileUploader({ onUpload, fileName, loading }) {
  return (
    <div className="upload-section">
      <label className="upload-label">📂 Upload React File</label>
      <input type="file" accept=".js,.jsx" onChange={onUpload} />
      {loading && <p>⏳ Loading file...</p>}
      {fileName && !loading && <p>📄 Uploaded: {fileName}</p>}
    </div>
  );
}

// CodeEditor Component
function CodeEditor({ title, code, onChange, readOnly }) {
  return (
    <div className="code-card">
      <h3>{title}</h3>
      <textarea
        placeholder={readOnly ? "Converted code will appear here..." : "Paste or upload code here..."}
        value={code}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
}

// Main App Component
function App() {
  const [code, setCode] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      setCode(e.target.result);
      setLoading(false);
    };

    reader.onerror = () => {
      alert("❌ Error reading file. Please try again.");
      setLoading(false);
    };

    reader.readAsText(file);
  };

  const handleConvert = () => {
    // Dummy logic - replace with real conversion later
    const converted = code.replace(/react/gi, 'nextjs');
    setConvertedCode(converted);
  };

  return (
    <div className="app-container">
      <h1>⚙️ React ➜ Next.js Converter</h1>

      <FileUploader onUpload={handleFileUpload} fileName={fileName} loading={loading} />

      <div className="code-section">
        <CodeEditor title="React Code" code={code} onChange={(e) => setCode(e.target.value)} />
        <CodeEditor title="Next.js Code" code={convertedCode} readOnly />
      </div>

      <button className="convert-button" onClick={handleConvert} disabled={loading || !code}>
        🔁 Convert to Next.js
      </button>
    </div>
  );
}

export default App;
