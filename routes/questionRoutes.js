const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// route mendapat kan semua pertanyaan
router.get('/', questionController.getAllQuestions);

// Rute untuk mengambil semua pertanyaan
router.get('/', questionController.getQuestions);

// Rute untuk mendapatkan pertanyaan berdasarkan ID
router.get('/:id', questionController.getQuestionById);

// Rute untuk menambahkan pertanyaan (jika ada)
router.post('/', questionController.addQuestion); // Pastikan addQuestion terdefinisi dalam questionController

// Memperbarui pertanyaan berdasarkan ID
router.put('/:id', questionController.updateQuestion);

// Menghapus pertanyaan berdasarkan ID
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;


