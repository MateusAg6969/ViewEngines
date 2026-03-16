const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('corinthians', {
        title: 'Corinthians',
        club: {
            name: 'Sport Club Corinthians Paulista',
            founded: 1910,
            location: 'São Paulo, Brasil',
            championships: 30,
            description: 'Um dos maiores clubes de futebol do Brasil e do mundo.'
        }
    });
});

module.exports = router;