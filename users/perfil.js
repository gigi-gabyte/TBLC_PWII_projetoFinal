const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('perfil', {
        titulo: 'TBLC - Perfil',
        css: 'perfil.css',
        icone: '/home_regiao_imagem/icon1.png'
    });
});

module.exports = router;
