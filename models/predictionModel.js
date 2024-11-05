const Prediction = {
    getCareerByAnswers: (answers) => {
        const careerMap = {
            SoftwareEngineer: ['jawaban1', 'jawaban2'], // Gantilah 'jawaban1' dan 'jawaban2' dengan jawaban nyata
            DataAnalyst: ['jawaban3', 'jawaban4'],
            CybersecuritySpecialist: ['jawaban5', 'jawaban6'],
            DatabaseAdministrator: ['jawaban7', 'jawaban8'],
            NetworkEngineer: ['jawaban9', 'jawaban10'],
        };

        const predictedCareer = {};

        // Memeriksa jawaban
        for (const answer of answers) {
            for (const [career, validAnswers] of Object.entries(careerMap)) {
                if (validAnswers.includes(answer)) {
                    predictedCareer[career] = (predictedCareer[career] || 0) + 1; // Hitung kemunculan
                }
            }
        }

        // Ambil karir dengan jumlah tertinggi
        const resultCareer = Object.keys(predictedCareer).reduce((a, b) => predictedCareer[a] > predictedCareer[b] ? a : b);
        return resultCareer;
    }
};

module.exports = Prediction;

