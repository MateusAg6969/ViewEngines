var express = require('express');
var router = express.Router();

/* GET declaration page. */
router.get('/', function(req, res, next) {
	res.render('minhanamo', {
		title: 'Para o Amor da Minha Vida',
		nome: 'Meu Amor',
		mensagemPrincipal: 'Desde que voce chegou, tudo ficou mais bonito, mais leve e mais cheio de sentido.',
		mensagemComplementar: 'Eu te amo com todo o meu coracao e quero viver muitos momentos lindos ao seu lado. Obrigado por ser minha paz, meu sorriso e meu melhor presente.'
	});
});

module.exports = router;
