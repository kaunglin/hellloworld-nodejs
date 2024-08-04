const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('@@@@@@@@@@@@@@@@@@@Testing@@@JustAfterMidnight@@@ByKaungAnd  Pipelinetype is v2 now ok ?');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});