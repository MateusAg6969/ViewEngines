var express = require('express');
var router = express.Router();

/* GET iguanas main page. */
router.get('/', function(req, res, next) {
  res.render('iguanas', {
    title: 'Iguanas',
    descricao: 'Bem-vindo ao mundo das iguanas! Escolha um dos tópicos abaixo para saber mais sobre esses repteis fascinantes.'
  });
});

/* GET iguanas curiosidades page. */
router.get('/curiosidades', function(req, res, next) {
  res.render('iguanas-curiosidades', {
    title: 'Curiosidades sobre Iguanas',
    curiosidades: [
      'Iguanas podem chegar a 2 metros de comprimento do nariz até a ponta da cauda.',
      'Elas possuem um "terceiro olho" na testa, chamado olho parietal, que detecta luz e sombra.',
      'Iguanas são herbívoras e se alimentam principalmente de folhas, flores e frutos.',
      'Elas podem soltar a cauda para escapar de predadores, e a cauda se regenera parcialmente.',
      'A iguana marinha das Galápagos é a única iguana do mundo que se alimenta no mar.',
      'Sua língua bífida é usada para capturar partículas do ar e identificar cheiros.'
    ]
  });
});

/* GET iguanas cuidados page. */
router.get('/cuidados', function(req, res, next) {
  res.render('iguanas-cuidados', {
    title: 'Cuidados com Iguanas',
    cuidados: [
      { topico: 'Alimentação', descricao: 'Ofereça folhas verdes escuras como couve, escarola e mostarda. Evite alimentos ricos em oxalato e proteína animal.' },
      { topico: 'Temperatura', descricao: 'Mantenha o terrário entre 27°C e 35°C durante o dia, com um ponto de aquecimento de até 40°C para termorregulação.' },
      { topico: 'Iluminação UVB', descricao: 'A lâmpada UVB é essencial para que a iguana sintetize vitamina D3 e absorva cálcio corretamente.' },
      { topico: 'Umidade', descricao: 'A umidade relativa deve ficar entre 70% e 80%. Borrifar água no terrário e oferecer banhos ajuda na hidratação e na muda de pele.' },
      { topico: 'Espaço', descricao: 'Adultos precisam de recintos grandes, pelo menos 2m de altura, pois são animais arborícolas e adoram escalar.' }
    ]
  });
});

module.exports = router;
