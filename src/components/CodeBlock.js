import React from 'react';
import '../styles/CodeBlock.css';

const CodeBlock = ({ title, code, setCode, readOnly = false }) => (
  <div className="code-block">
    <h3>{title}</h3>
    <textarea
      readOnly={readOnly}
      value={code}
      onChange={(e) => !readOnly && setCode(e.target.value)}
      placeholder="Paste or upload code here..."
    />
  </div>
);

export default CodeBlock;
