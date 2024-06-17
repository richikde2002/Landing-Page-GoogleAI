const express = require('express');
const fs = require('fs');
const path = require('path');
const { NodeSSH } = require('node-ssh');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const hostname = '34.170.89.197';
const username = 'dell';
const keyPath = path.join(__dirname, 'smollangcp');

const ssh = new NodeSSH();

ssh.connect({
  host: hostname,
  username: username,
  privateKeyPath: keyPath,
});

function runScript(filename, callback) {
  let scriptPath;
  if (filename === 'UnlockScript') {
    scriptPath = '/home/vanshaj_arora_sg/PinUS.py';
  } else if (filename === 'morningSetup') {
    scriptPath = '/home/vanshaj_arora_sg/UnpinUS.py';
  } else {
    scriptPath = '/home/vanshaj_arora_sg/testlit.py';
  }

  ssh.execCommand(`python3 ${scriptPath}`)
    .then((result) => {
      callback(null, result.stdout);
    })
    .catch((err) => {
      console.error('Error:', err);
      callback(err, null);
    });
}

app.get('/api', (req, res) => {
  res.send(`Enter script name after /script/`);
});

app.get('/api/script/:scriptname', (req, res) => {
  const { scriptname } = req.params;
  runScript(scriptname, (err, output) => {
    if (err) {
      res.send('Error occurred while executing script.');
      return;
    }
    res.send(output.split('\n')[3]);
  });
});

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});