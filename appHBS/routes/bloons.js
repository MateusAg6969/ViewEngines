const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('bloons', {
        title: 'Bloons Tower Defense 6',
        game: {
            name: 'Bloons Tower Defense 6',
            developer: 'Ninja Kiwi',
            released: 2018,
            platforms: 'PC, iOS, Android',
            genre: 'Tower Defense / Estratégia',
            description: 'BTD6 é um dos jogos de tower defense mais populares do mundo, onde você posiciona macacos com habilidades especiais para estourar balões (bloons) em ondas cada vez mais difíceis.'
        },
        towers: [
            { name: 'Dart Monkey', tier: 'Primary', description: 'O macaco clássico que atira dardos. Barato e eficiente no início.' },
            { name: 'Super Monkey', tier: 'Magic', description: 'Extremamente poderoso com ataque rápido. Caro, mas devastador.' },
            { name: 'Ninja Monkey', tier: 'Magic', description: 'Rápido e furtivo, lança shurikens e pode detectar bloons camuflados.' },
            { name: 'Sniper Monkey', tier: 'Military', description: 'Alcance infinito com tiros precisos. Ótimo para bloons fortes.' },
            { name: 'Banana Farm', tier: 'Support', description: 'Gera dinheiro extra a cada rodada. Essencial para estratégias longas.' },
            { name: 'Spike Factory', tier: 'Support', description: 'Espalha espinhos no caminho para estourar bloons que passam.' }
        ]
    });
});

module.exports = router;
