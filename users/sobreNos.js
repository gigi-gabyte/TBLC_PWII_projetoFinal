const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('sobreNos', {
        titulo: 'TBLC - Sobre nós',
        css: 'sobreNos.css',
        icone: '/home_regiao_imagem/icon1.png'
    });
});

module.exports = router;
