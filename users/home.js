const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        titulo: 'TBLC',
        css: 'home.css',
        icone: '/home_regiao_imagem/icon1.png',
        mapa: true,
        links: [
            { nome: 'PERFIL', url: '/perfil', id: 'menu1' },
            { nome: 'SOBRE NÓS', url: '/sobreNos', id: 'menu2' },
            { nome: 'TOP SECRET', url: '/topSecret', id: 'menu3' }
        ]
    });
});

module.exports = router;
