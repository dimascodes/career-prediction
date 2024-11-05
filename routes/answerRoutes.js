const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', (req, res) => {
  const { user_id, question_id, answer_text } = req.body;
  db.query(
    'INSERT INTO Answers (user_id, question_id, answer_text) VALUES (?, ?, ?)',
    [user_id, question_id, answer_text],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Answer saved' });
    }
  );
});

module.exports = router;

