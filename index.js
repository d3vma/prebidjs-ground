const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const publicPath = path.join(__dirname)

app.use(express.static(publicPath))

app.get('/', (res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} \nAccess using http://localhost:${port}`);
});
