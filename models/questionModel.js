const db = require('../config/db');

const Question = {
    // Mendapatkan semua pertanyaan
    getAll: () => {
        const sql = 'SELECT * FROM questions';
        return db.execute(sql);
    },

    // Mendapatkan pertanyaan berdasarkan ID
    getById: (id) => {
        const sql = 'SELECT * FROM questions WHERE id = ?';
        return db.execute(sql, [id]);
    },

    // Menambahkan pertanyaan baru
    create: (newQuestion) => {
        const sql = 'INSERT INTO questions (question, options, answer) VALUES (?, ?, ?)';
        return db.execute(sql, [newQuestion.question, JSON.stringify(newQuestion.options), newQuestion.answer]);
    },

    // Memperbarui pertanyaan berdasarkan ID
    update: (id, updatedData) => {
        const sql = 'UPDATE questions SET question = ?, options = ?, answer = ? WHERE id = ?';
        return db.execute(sql, [updatedData.question, JSON.stringify(updatedData.options), updatedData.answer, id]);
    },

    // Menghapus pertanyaan berdasarkan ID
    delete: (id) => {
        const sql = 'DELETE FROM questions WHERE id = ?';
        return db.execute(sql, [id]);
    }
};

module.exports = Question;

