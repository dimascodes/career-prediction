const db = require('../config/db');

const User = {
    create: (username, password) => {
        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        return db.execute(sql, [username, password]);
    },
    findByUsername: (username) => {
        const sql = 'SELECT * FROM users WHERE username = ?';
        return db.execute(sql, [username]);
    }
    // Fungsi lainnya...
};

module.exports = User;

