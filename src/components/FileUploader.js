import React from 'react';
import '../styles/FileUploader.css';

const FileUploader = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => onUpload(event.target.result);
    if (file) reader.readAsText(file);
  };

  return (
    <div className="file-uploader">
      <label htmlFor="fileInput" className="upload-btn">
        📂 Upload React File
      </label>
      <input id="fileInput" type="file" onChange={handleFileChange} hidden />
    </div>
  );
};

export default FileUploader;
