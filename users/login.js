const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login', {
        titulo: 'TBLC - Login',
        css: 'login.css',
        icone: '/cadastro_login_imagem/icon.ico',
        fontAwesome: true,
        javascript: 'login.js'
    });
});

router.post('/save', (req, res) => {
    const { name, email, password } = req.body;

    console.log('USUÁRIO:');
    console.log(`NOME: ${name}`);
    console.log(`E-MAIL: ${email}`);
    console.log('O usuário foi recebido.');

    // O projeto ainda não possui autenticação/banco de dados.
    return res.redirect('/home');
});

module.exports = router;
