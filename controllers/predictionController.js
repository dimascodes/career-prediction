const db = require('../config/db');

exports.getPrediction = (user_id, callback) => {
  db.query('SELECT answer_text FROM Answers WHERE user_id = ?', [user_id], (err, answers) => {
    if (err) throw err;

    let prediction = '';
    if (answers.some(a => a.answer_text.includes('coding'))) {
      prediction = 'Software Engineer';
    } else if (answers.some(a => a.answer_text.includes('data analysis'))) {
      prediction = 'Data Analyst';
    } else if (answers.some(a => a.answer_text.includes('security'))) {
      prediction = 'Cybersecurity Specialist';
    }

    db.query(
      'INSERT INTO Predictions (user_id, career_prediction) VALUES (?, ?)',
      [user_id, prediction],
      (err) => {
        if (err) throw err;
        callback(prediction);
      }
    );
  });
};

