const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/home', (req,res) => {
    res.sendFile(`${basePath}/home.html`)
})

router.get('/norte', (req, res) => {
    res.sendFile(`${basePath}/norte.html`)
})

router.get('/nordeste', (req, res) => {
    res.sendFile(`${basePath}/nordeste.html`)
})

router.get('/centro_oeste', (req, res) => {
    res.sendFile(`${basePath}/centro_oeste.html`)
})

router.get('/sudeste', (req, res) => {
    res.sendFile(`${basePath}/sudeste.html`)
})

router.get('/sul', (req, res) => {
    res.sendFile(`${basePath}/sul.html`)
})

router.get('/:id', (req,res) => {
    console.log(`Carregando usuário: ${req.params.id}`)
    res.sendFile(`${basePath}/userform.html`)
})

module.exports = router