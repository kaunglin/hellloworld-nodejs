const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World! This is ecs service testing with AWS CICD.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});