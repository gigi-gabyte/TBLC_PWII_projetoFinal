const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/', (req, res) => 
{
    res.sendFile(`${basePath}/cadastro.html`)
})

router.post('/save', (req, res) => {

    const 
    {
        name,
        last_name,
        email,
        password,
        confirm_password,
        region
    } = req.body

    if (!name || !last_name || !email || !password || !confirm_password || !region) 
    {
        return res.status(400).send('Preencha todos os campos.')
    }

    if (password !== confirm_password) 
    {
        return res.status(400).send('As senhas não são iguais.')
    }

    console.log('USUÁRIO:')
    console.log(`NOME: ${name}`)
    console.log(`CODINOME: ${last_name}`)
    console.log(`E-MAIL: ${email}`)
    console.log(`REGIÃO: ${region}`)

    if(password === confirm_password)
    {
        console.log('A senha foi confirmada, Usuario permitido\n\n');
        res.redirect('/login')
    }
    else
    {
        console.log('A senha não foi confirmada, Usuario negado !\n\n');
    }

})

module.exports = router