const express = require('express');
const router = express.Router();

/* GET fallout main page. */
router.get('/', (req, res) => {
  res.render('fallout', {
    title: 'Fallout',
    descricao: 'Bem-vindo às Terras Ermas! Explore o universo pós-apocalíptico de Fallout escolhendo um dos tópicos abaixo.'
  });
});

/* GET fallout curiosidades page. */
router.get('/curiosidades', (req, res) => {
  res.render('fallout-curiosidades', {
    title: 'Curiosidades sobre Fallout',
    curiosidades: [
      'O universo de Fallout é baseado numa linha do tempo alternativa onde a tecnologia parou nos anos 1950, criando uma estética retrofuturista única.',
      'A série começou em 1997 desenvolvida pela Interplay Entertainment, antes de ser adquirida pela Bethesda em 2007.',
      'O icônico Vault Boy não representa que tudo vai bem — o polegar levantado é uma técnica militar usada para medir distância de explosões nucleares.',
      'O número 111 de Fallout 4 foi escolhido porque o protagonista fica em criogenia por 210 anos, e 2077 + 210 = 2287, mas o cofre tem número simbólico.',
      'A música "I Don\'t Want to Set the World on Fire" dos Ink Spots foi escolhida para o trailer de Fallout 3 e se tornou a trilha mais icônica da série.',
      'O New California Republic (NCR) de Fallout: New Vegas foi inspirado no estado da Califórnia real e na política americana contemporânea.',
      'Fallout 76 foi o primeiro jogo online da série principal, lançado em 2018, e passou por uma polêmica enorme com o "Nuka Dark Rum" cujo copo de pano prometido não era de boa qualidade.'
    ]
  });
});

/* GET fallout jogos page. */
router.get('/jogos', (req, res) => {
  res.render('fallout-jogos', {
    title: 'Jogos da Série Fallout',
    jogos: [
      { nome: 'Fallout (1997)', estudio: 'Interplay', tipo: 'RPG Isométrico', descricao: 'O clássico original que definiu o universo. Você sai do Vault 13 para salvar sua comunidade em busca de um chip de água.' },
      { nome: 'Fallout 2 (1998)', estudio: 'Black Isle Studios', tipo: 'RPG Isométrico', descricao: 'Sequência direta do primeiro. Você é o Chosen One, descendente do protagonista original, em busca do GECK.' },
      { nome: 'Fallout 3 (2008)', estudio: 'Bethesda', tipo: 'RPG de Ação 3D', descricao: 'Reinvenção da série em 3D. Você foge do Vault 101 em busca do seu pai desaparecido nas Terras Ermas de Washington.' },
      { nome: 'Fallout: New Vegas (2010)', estudio: 'Obsidian Entertainment', tipo: 'RPG de Ação 3D', descricao: 'Considerado o melhor da série por muitos. Você é um Courier baleado que busca vingança em Las Vegas pós-nuclear.' },
      { nome: 'Fallout 4 (2015)', estudio: 'Bethesda', tipo: 'RPG de Ação 3D', descricao: 'Você acorda 210 anos após a guerra nuclear em busca do filho sequestrado. Passa por Boston e o Commonwealth.' },
      { nome: 'Fallout 76 (2018)', estudio: 'Bethesda', tipo: 'RPG Online Multiplayer', descricao: 'Ambientado na Virgínia Ocidental 25 anos após a guerra nuclear. Primeiro jogo multiplayer online da série principal.' }
    ]
  });
});

module.exports = router;
