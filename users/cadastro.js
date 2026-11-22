const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('cadastro', {
        titulo: 'TBLC - Cadastro',
        css: 'cadastro.css',
        icone: '/cadastro_login_imagem/icon.ico',
        fontAwesome: true,
        javascript: 'cadastro.js'
    });
});

router.post('/save', (req, res) => {
    const { name, last_name, email, password, confirm_password, region } = req.body;

    if (!name || !last_name || !email || !password || !confirm_password || !region) {
        return res.status(400).send('Preencha todos os campos.');
    }

    if (password !== confirm_password) {
        return res.status(400).send('As senhas não são iguais.');
    }

    console.log('USUÁRIO:');
    console.log(`NOME: ${name}`);
    console.log(`CODINOME: ${last_name}`);
    console.log(`E-MAIL: ${email}`);
    console.log(`REGIÃO: ${region}`);
    console.log('A senha foi confirmada, usuário permitido.');

    return res.redirect('/login');
});

module.exports = router;
