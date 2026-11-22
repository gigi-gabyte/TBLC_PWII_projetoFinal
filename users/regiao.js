const express = require('express');
const router = express.Router();

const regioes = [
    { caminho: '/norte', view: 'regioes/norte', titulo: 'TBLC - Região Norte' },
    { caminho: '/nordeste', view: 'regioes/nordeste', titulo: 'TBLC - Região Nordeste' },
    { caminho: '/centro_oeste', view: 'regioes/centro_oeste', titulo: 'TBLC - Região Centro-Oeste' },
    { caminho: '/sudeste', view: 'regioes/sudeste', titulo: 'TBLC - Região Sudeste' },
    { caminho: '/sul', view: 'regioes/sul', titulo: 'TBLC - Região Sul' }
];

for (const regiao of regioes) {
    router.get(regiao.caminho, (req, res) => {
        res.render(regiao.view, {
            titulo: regiao.titulo,
            css: 'regiao.css',
            icone: '/home_regiao_imagem/icon2.png',
            mapa: true
        });
    });
}

module.exports = router;
