const express = require('express');
const router = express.Router();

/**
 * Dados simulados de produtos
 * Em produção, estes dados viriam de um banco de dados
 */
const produtos = [
    { id: 1, nome: 'Produto A', preco: 10.00 },
    { id: 2, nome: 'Produto B', preco: 20.00 },
    { id: 3, nome: 'Produto C', preco: 30.00 },
    { id: 4, nome: 'Produto D', preco: 40.00 },
    { id: 5, nome: 'Produto E', preco: 50.00 }
];

/**
 * GET /produto
 * Retorna lista de todos os produtos
 * Renderiza a view 'produtos' com os dados
 */
router.get('/', (req, res) => {
    try {
        res.render('produtos', { produtos });
    } catch (error) {
        console.error('Erro ao renderizar produtos:', error);
        res.status(500).render('error', { message: 'Erro ao carregar produtos', error });
    }
});

module.exports = router;