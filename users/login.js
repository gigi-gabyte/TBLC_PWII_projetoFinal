const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/login.html`)
})

router.post('/save', (req, res) => {

const 
    {
        name,
        email,
        password,
    } = req.body

    console.log('USUÁRIO:')
    console.log(`NOME: ${name}`)
    console.log(`E-MAIL: ${email}`)

    console.log('O Usuário foi confirmado, Usuario permitido\n\n')
    res.redirect('/home')


})

module.exports = router