const express = require('express')
const path = require('path')
const app = express()

const port = 3000

const basePath = path.join(__dirname, 'templates')

const regioesR = require('./users/regiao')
const cadastroR = require('./users/cadastro')
const loginR = require('./users/login')
const homeR = require('./users/home')
const perfilR = require('./users/perfil')
const sobreNosR = require('./users/sobreNos')
const topSecretR = require('./users/topSecret')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/regioes', regioesR)
app.use('/cadastro', cadastroR)
app.use('/login', loginR)
app.use('/home', homeR)
app.use('/perfil', perfilR)
app.use('/sobreNos', sobreNosR)
app.use('/topSecret', topSecretR)

app.get('/', (req, res) => {
    res.redirect('/cadastro')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})