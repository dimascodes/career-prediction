const db = require('../config/db'); // Mengimpor koneksi database

// Model untuk jawaban
const Answer = {
    create: (userId, questionId, answer) => {
        const sql = 'INSERT INTO answers (user_id, question_id, answer) VALUES (?, ?, ?)';
        return db.execute(sql, [userId, questionId, answer]);
    },
    getByUserId: (userId) => {
        const sql = 'SELECT * FROM answers WHERE user_id = ?';
        return db.execute(sql, [userId]);
    }
    // Fungsi lainnya...
};

module.exports = Answer;

