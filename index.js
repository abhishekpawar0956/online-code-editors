// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const createTempFile = (language, code) => {
  const ext = language === 'python' ? 'py' : 'js';
  const fileName = `temp.${ext}`;
  fs.writeFileSync(fileName, code);
  return fileName;
};

const executeCode = (language, fileName, callback) => {
  const command = language === 'python' ? `python3 ${fileName}` : `node ${fileName}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      callback(stderr);
    } else {
      callback(stdout);
    }
    fs.unlinkSync(fileName); // Clean up the file after execution
  });
};

app.post('/execute', (req, res) => {
  const { language, code } = req.body;
  const fileName = createTempFile(language, code);
  executeCode(language, fileName, (output) => {
    res.send(output);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
