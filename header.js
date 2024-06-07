// frontend/src/components/Header.js
import React from 'react';

const Header = ({ setLanguage }) => {
  return (
    <header>
      <h1>Online Code Editor</h1>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
    </header>
  );
};

export default Header;
