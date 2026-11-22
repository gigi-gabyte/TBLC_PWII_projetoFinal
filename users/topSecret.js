const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('topSecret', {
        titulo: 'TBLC - Top Secret',
        css: 'topSecret.css',
        icone: '/home_regiao_imagem/icon1.png'
    });
});

module.exports = router;
