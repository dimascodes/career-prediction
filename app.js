const express = require('express');
const bodyParser = require('body-parser');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();
app.use(bodyParser.json());

const path = require('path');

// set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, 'views')));

// Rute untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use('/api/questions', questionRoutes);
app.use('/answers', answerRoutes);
app.use('/prediction', predictionRoutes);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

