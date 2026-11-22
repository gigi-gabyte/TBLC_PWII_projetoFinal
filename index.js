    const express = require('express');
    const path = require('path');

    const { engine } = require('express-handlebars');

    const app = express();
    const port = process.env.PORT || 3000;

        app.engine('handlebars', engine({
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'views/layouts'),
        partialsDir: path.join(__dirname, 'views/partials')

    }));

    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, 'views'));


    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());


    app.use(express.static(path.join(__dirname, 'public')));

 
    app.use('/cadastro_login_imagem',
    express.static(path.join(__dirname, 'templates/cadastro_login_imagem'))
    );


    app.use('/regioes', require('./users/regiao'));
    app.use('/cadastro', require('./users/cadastro'));
    app.use('/login', require('./users/login'));
    app.use('/home', require('./users/home'));
    app.use('/perfil', require('./users/perfil'));
    app.use('/sobreNos', require('./users/sobreNos'));
    app.use('/topSecret', require('./users/topSecret'));

    app.get('/', (req, res) => res.redirect('/cadastro'));


    app.use((req, res) => {
    res.status(404).send('Página não encontrada.');
    });

    app.listen(port, () => {
    console.log(`TBLC rodando em http://localhost:${port}`);
});
