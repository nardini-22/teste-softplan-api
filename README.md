# Teste Softplan API

[![en](https://img.shields.io/badge/README-English-red.svg)](https://github.com/nardini-22/teste-softplan-api/blob/main/README-en.md)

## ✏️ Introdução

Repositório da api para Softplan referente a vaga de desenvolvedor Front-end PL. Criei uma api para simular o back-end do [repositório principal](https://github.com/nardini-22/teste-softplan) com node, json-server e json-server-auth, que conta com rotas de login, criação, edição, remoção e visualização de usuários. A api também conta com fluxo de autorização via JWT e rotas seguras.

## 🌐 Demo

https://teste-softplan-api.vercel.app/

## 🚧 Rotas
  - Login
    - POST /login - Faz o login na aplicação e retorna um JWT para o usuário, necessário para as rotas protegidas
  - Users (Rota protegida)
    - POST /users - Cria um novo usuário na plataforma
    - GET /users - Retorna todos os usuários cadastrados na plataforma
    - GET /users/:id - Retorna os valores de um único usuário
    - PATCH /users/:id - Edita os valores do usuário
    - DELETE /users/:id - Deleta um usuário da plataforma

## 💻 Tecnologias

* [Node](https://nodejs.org/pt)
* [JSON Server](https://github.com/typicode/json-server)
* [JSON Server Auth](https://github.com/jeremyben/json-server-auth)


## 🚀 Instalação

Para clonar e rodar essa aplicação, é necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)) instalado no seu computador. Na linha de comando:
```bash
# Clone esse repositório
$ git clone https://github.com/nardini-22/teste-softplan-api.git

# Entre na pasta do repositório
$ cd teste-softplan-api

# Instale as dependências
$ npm install

# Rode a aplicação
$ npm run server
```



 ## ❤️ Gostou desse projeto? 
Desenvolvido por Arthur Nardini.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arthur-nardini/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nardini-22)
