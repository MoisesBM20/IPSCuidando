const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const path = require('path');
app.use(express.static(path.join(__dirname, '../dist/IPSWeb')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/IPSWeb/index.html'));
});