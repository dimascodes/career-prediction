const Question = require('../models/questionModel');

const questionController = {
    // Mendapatkan semua pertanyaan
    getAllQuestions: async (req, res) => {
        try {
            const [rows] = await Question.getAll();
            res.render('index',{questions: rows});
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Mendapatkan pertanyaan berdasarkan ID
    getQuestionById: async (req, res) => {
        const id = req.params.id;
        try {
            const [question] = await Question.getById(id);
            if (question.length === 0) {
                return res.status(404).json({ message: 'Question not found' });
            }
            res.json(question[0]);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving question' });
        }
    },

    // Menambahkan pertanyaan baru
    addQuestion: async (req, res) => {
        const newQuestion = req.body; // Pastikan Anda mengirimkan data dalam body
        try {
            const createdQuestion = await Question.create(newQuestion);
            res.status(201).json(createdQuestion); // Mengirimkan pertanyaan yang baru dibuat
        } catch (error) {
            res.status(500).json({ message: 'Error creating question' });
        }
    },

    // Memperbarui pertanyaan berdasarkan ID
    updateQuestion: async (req, res) => {
        const id = req.params.id;
        const updatedData = req.body; // Ambil data yang diperbarui dari body
        try {
            const [result] = await Question.update(id, updatedData);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Question not found' });
            }
            res.json({ message: 'Question updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating question' });
        }
    },

    // Menghapus pertanyaan berdasarkan ID
    deleteQuestion: async (req, res) => {
        const id = req.params.id;
        try {
            const [result] = await Question.delete(id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Question not found' });
            }
            res.json({ message: 'Question deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting question' });
        }
    }
};

module.exports = questionController;

