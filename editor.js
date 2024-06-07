// frontend/src/components/Editor.js
import React from 'react';

const Editor = ({ language, code, setCode }) => {
  return (
    <textarea
      className="editor"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder={`Write your ${language} code here...`}
    />
  );
};

export default Editor;
