# 🇧🇷 TBLC – The Brasil Lore Collection

> *Quando as lendas se tornam reais.*

Aplicação web de um acervo fictício de criaturas e tradições do folclore brasileiro. O usuário se cadastra, entra e navega por um **mapa interativo do Brasil** para ver o que foi catalogado em cada região.

Projeto final da disciplina de Programação Web II (PWII), desenvolvido por estudantes do curso Técnico Integrado em Informática do CEFET-MG.

## ✨ Funcionalidades

- **Cadastro** com nome, codinome, e-mail, senha, confirmação de senha e região, com validação no front-end e no servidor.
- **Login** com botão para mostrar ou ocultar a senha.
- **Mapa interativo do Brasil** na home: cada estado leva à página da sua região.
- **Páginas das 5 regiões** (Norte, Nordeste, Centro-Oeste, Sudeste e Sul), cada uma com texto introdutório, criaturas catalogadas, imagens e cantigas.
- Páginas de **Perfil**, **Sobre nós** e **Top Secret**.
- **Templates Handlebars** com layout único e menu de navegação reaproveitado (partial).

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/)
- [express-handlebars](https://github.com/express-handlebars/express-handlebars) como motor de templates
- [Nodemon](https://nodemon.io/) para recarregar o servidor em desenvolvimento
- HTML5, CSS3 e JavaScript puro
- [Font Awesome](https://fontawesome.com/) para os ícones (carregado nas telas de cadastro e login)
- [Simplemaps](https://simplemaps.com/) (versão trial) para o mapa interativo

## 📁 Estrutura

```
TBLC_PWII_projetoFinal/
├── index.js                  # Servidor Express, configuração do Handlebars e registro das rotas
├── package.json
├── users/                    # Rotas (cadastro, login, home, perfil, regiao, sobreNos, topSecret)
├── views/                    # Templates Handlebars
│   ├── layouts/
│   │   └── main.handlebars   # Layout base (título, CSS, ícone, scripts e Font Awesome condicionais)
│   ├── partials/
│   │   └── navbar.handlebars # Menu de navegação (montado a partir da lista `links` da rota)
│   ├── regioes/              # norte, nordeste, centro_oeste, sudeste e sul
│   ├── cadastro.handlebars
│   ├── login.handlebars
│   ├── home.handlebars
│   ├── perfil.handlebars
│   ├── sobreNos.handlebars
│   └── topSecret.handlebars
├── templates/
│   └── cadastro_login_imagem/  # Logo e ícone usados em cadastro e login
└── public/                   # Arquivos estáticos
    ├── css/                  # Um CSS por página
    ├── js/                   # Scripts do front-end e dados do mapa
    └── home_regiao_imagem/   # Imagens da home e das criaturas
```

### Como o layout funciona

Cada rota renderiza uma view passando variáveis que o `layout main` usa para montar a página:

| Variável | Efeito |
| --- | --- |
| `titulo` | Define o `<title>` |
| `css` | Carrega `/css/<arquivo>` |
| `icone` | Define o favicon |
| `fontAwesome` | Inclui o Font Awesome |
| `mapa` | Inclui `mapdata.js` e `countrymap.js` (mapa interativo) |
| `javascript` | Inclui `/js/<arquivo>` |
| `links` | Lista de itens do menu usada pelo partial `navbar` (home) |

## 🚀 Como rodar

**Pré-requisito:** [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/gigi-gabyte/TBLC_PWII_projetoFinal.git

# 2. Entre na pasta
cd TBLC_PWII_projetoFinal

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
npm start
```

Para desenvolvimento, com recarregamento automático, use `npm run dev`.

Depois, acesse **http://localhost:3000** (ou a porta definida na variável de ambiente `PORT`). A rota `/` redireciona para a página de cadastro.

## 🗺️ Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Redireciona para `/cadastro` |
| `/cadastro` | Formulário de cadastro (`POST /cadastro/save`, redireciona para `/login`) |
| `/login` | Formulário de login (`POST /login/save`, redireciona para `/home`) |
| `/home` | Página inicial com o mapa do Brasil |
| `/regioes/norte` | Região Norte |
| `/regioes/nordeste` | Região Nordeste |
| `/regioes/centro_oeste` | Região Centro-Oeste |
| `/regioes/sudeste` | Região Sudeste |
| `/regioes/sul` | Região Sul |
| `/perfil` | Perfil do usuário |
| `/sobreNos` | Sobre o projeto |
| `/topSecret` | Página secreta |

Qualquer outra rota responde com a mensagem "Página não encontrada." (404).

## 🐉 Criaturas catalogadas

| Região | Criaturas |
| --- | --- |
| Norte | Boitatá, Iara |
| Nordeste | Boi Bumbá, Comadre Fulozinha |
| Centro-Oeste | Arranca-línguas, Pé-de-garrafa |
| Sudeste | Papa-figo, Loira do banheiro |
| Sul | Cuca, Ahó Ahó |

## 🚧 Status do projeto

Projeto **em desenvolvimento**, atualmente na fase de servidor com Express e templates Handlebars. Por enquanto:

- [x] Estrutura do servidor e rotas
- [x] Migração das páginas HTML para templates Handlebars (layout e partial)
- [x] Telas de cadastro e login com validação de senha
- [x] Mapa interativo ligado às páginas das regiões
- [x] Páginas das regiões com criaturas, imagens e cantigas
- [x] Página Sobre nós
- [ ] Banco de dados (os dados de cadastro e login ainda não são salvos nem verificados)
- [ ] Autenticação real
- [ ] Conteúdo definitivo das regiões (mais criaturas e textos revisados)
- [ ] Páginas de Perfil e Top Secret (ainda são páginas de teste)

## 👥 Autores

- Arthur Gabriel dos Anjos
- Ana Luiza Domingos Xavier
- Giovana Gonçalves Silva

Projeto orientado pelo Professor Doutor Higor Alexandre.

## 📄 Créditos e licença

O mapa interativo usa a versão *trial* do [Simplemaps](https://simplemaps.com/), sujeita à [licença deles](https://simplemaps.com/license).
