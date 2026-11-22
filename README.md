# 🇧🇷 TBLC – The Brasil Lore Collection

> *Quando as lendas se tornam reais.*

Aplicação web de um acervo fictício de criaturas e tradições do folclore brasileiro. O usuário se cadastra, entra e navega por um **mapa interativo do Brasil** para ver o que foi catalogado em cada região.

Projeto final da disciplina de Programação Web II (PWII).

## ✨ Funcionalidades

- **Cadastro** com nome, codinome, e-mail, senha, confirmação de senha e região, com validação no front-end e no servidor.
- **Login** com botão para mostrar ou ocultar a senha.
- **Mapa interativo do Brasil** na home: cada estado leva à página da sua região.
- **Páginas das 5 regiões** (Norte, Nordeste, Centro-Oeste, Sudeste e Sul) com layout de tópicos e imagens.
- Páginas de **Perfil**, **Sobre nós** e **Top Secret**.

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/)
- [Nodemon](https://nodemon.io/) para recarregar o servidor em desenvolvimento
- HTML5, CSS3 e JavaScript puro
- [Font Awesome](https://fontawesome.com/) para os ícones
- [Simplemaps](https://simplemaps.com/) (versão trial) para o mapa interativo

## 📁 Estrutura

```
TBLC_projeto/
├── index.js              # Servidor Express e registro das rotas
├── package.json
├── users/                # Rotas (cadastro, login, home, perfil, regiao, sobreNos, topSecret)
├── templates/            # Páginas HTML
│   └── cadastro_login_imagem/
└── public/               # Arquivos estáticos
    ├── css/
    ├── js/               # Scripts do front-end e dados do mapa
    └── home_regiao_imagem/
```

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

Depois, acesse **http://localhost:3000**. A rota `/` redireciona para a página de cadastro.

## 🗺️ Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Redireciona para `/cadastro` |
| `/cadastro` | Formulário de cadastro (`POST /cadastro/save`) |
| `/login` | Formulário de login (`POST /login/save`) |
| `/home` | Página inicial com o mapa do Brasil |
| `/regioes/norte` | Região Norte |
| `/regioes/nordeste` | Região Nordeste |
| `/regioes/centro_oeste` | Região Centro-Oeste |
| `/regioes/sudeste` | Região Sudeste |
| `/regioes/sul` | Região Sul |
| `/perfil` | Perfil do usuário |
| `/sobreNos` | Sobre o projeto |
| `/topSecret` | Página secreta |

## 🚧 Status do projeto

Projeto **em desenvolvimento**, atualmente na fase de servidor com Express. Por enquanto:

- [x] Estrutura do servidor e rotas
- [x] Telas de cadastro e login com validação de senha
- [x] Mapa interativo ligado às páginas das regiões
- [ ] Banco de dados (os dados de cadastro e login ainda não são salvos nem verificados)
- [ ] Autenticação real
- [ ] Conteúdo definitivo das regiões (os textos atuais são provisórios)
- [ ] Páginas de Perfil, Sobre nós e Top Secret (ainda são páginas de teste)

## 👥 Autores

- Arthur Gabriel dos Anjos
- Ana Luiza Domingos Xavier
- Giovana Gonçalves Silva

## 📄 Créditos e licença

O mapa interativo usa a versão *trial* do [Simplemaps](https://simplemaps.com/), sujeita à [licença deles](https://simplemaps.com/license).
