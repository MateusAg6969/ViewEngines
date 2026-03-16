const express = require('express');
const router = express.Router();

/* GET camarão main page. */
router.get('/', (req, res) => {
  res.render('camarao', {
    title: 'Camarões',
    descricao: 'Descubra o fascinante mundo dos camarões! Escolha um tópico abaixo para mergulhar fundo nesse assunto.'
  });
});

/* GET camarão curiosidades page. */
router.get('/curiosidades', (req, res) => {
  res.render('camarao-curiosidades', {
    title: 'Curiosidades sobre Camarões',
    curiosidades: [
      'Existem mais de 2.000 espécies de camarões distribuídas pelo mundo.',
      'O coração do camarão fica na cabeça, junto com o cérebro e os órgãos digestivos.',
      'Camarões podem nadar para trás rapidamente como mecanismo de defesa contra predadores.',
      'O camarão pistola (Alpheus sp.) produz uma bolha de cavitação que gera temperaturas próximas à superfície do sol.',
      'Camarões são animais detritívoros e ajudam a limpar o fundo dos rios e oceanos.',
      'Algumas espécies de camarão mudam de sexo ao longo da vida, nascendo machos e tornando-se fêmeas.',
      'O camarão mantis consegue golpear com força equivalente a uma bala de calibre .22.'
    ]
  });
});

/* GET camarão cuidados page. */
router.get('/cuidados', (req, res) => {
  res.render('camarao-cuidados', {
    title: 'Cuidados com Camarões',
    cuidados: [
      { topico: 'Qualidade da Água', descricao: 'Mantenha pH entre 6,5 e 7,5 e temperatura entre 22°C e 28°C. Troque 20% da água semanalmente para evitar acúmulo de amônia.' },
      { topico: 'Alimentação', descricao: 'Ofereça ração específica para camarões, algas, folhas de espinafre cozidas e vegetais. Evite excesso para não contaminar a água.' },
      { topico: 'Filtragem', descricao: 'Use filtros com baixa sucção para não aspirar os camarões. Filtros de esponja são os mais indicados para aquários de camarão.' },
      { topico: 'Substrato e Plantas', descricao: 'Substratos escuros realçam as cores dos camarões. Plantas aquáticas como musgo Java fornecem abrigo e superfície para se alimentarem.' },
      { topico: 'Compatibilidade', descricao: 'Evite peixes maiores no mesmo aquário, pois podem predar os camarões. Boas companhias são caracóis e peixinhos pequenos e pacíficos.' }
    ]
  });
});

module.exports = router;
