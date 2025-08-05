const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '../dist/IPSWeb')));

// Usa expresión regular para evitar el error
app.get(/^\/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/IPSWeb/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});