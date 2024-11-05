const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');

router.get('/:user_id', (req, res) => {
  const { user_id } = req.params;
  predictionController.getPrediction(user_id, (prediction) => {
    res.json({ career_prediction: prediction });
  });
});

module.exports = router;

