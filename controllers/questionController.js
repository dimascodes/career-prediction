const db = require('../config/db');

exports.getQuestions = (req, res) => {
  db.query('SELECT * FROM Questions', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.addQuestion = (req, res) => {
  const { question_text } = req.body;
  db.query('INSERT INTO Questions (question_text) VALUES (?)', [question_text], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, question_text });
  });
};

