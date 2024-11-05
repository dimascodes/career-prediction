const express = require('express');
const bodyParser = require('body-parser');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/questions', questionRoutes);
app.use('/answers', answerRoutes);
app.use('/prediction', predictionRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

