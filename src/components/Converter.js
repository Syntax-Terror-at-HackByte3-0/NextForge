import React from 'react';
import '../styles/Converter.css';

const Converter = ({ onConvert }) => (
  <div className="convert-btn-container">
    <button className="convert-btn" onClick={onConvert}>
      🔁 Convert to Next.js
    </button>
  </div>
);

export default Converter;
