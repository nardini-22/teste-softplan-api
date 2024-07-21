# Teste Softplan API

[![pt](https://img.shields.io/badge/README-Portuguese-green.svg)](https://github.com/nardini-22/teste-softplan-api/blob/main/README.md)

## ✏️ Introduction

API repository for Softplan related to the Front-end Developer PL position. I created an API to simulate the back-end of the [main repository](https://github.com/nardini-22/teste-softplan) using Node, json-server, and json-server-auth, which includes CRUD of users. The API also features an authorization flow via JWT and guarded routes.

## 🌐 Demo

https://teste-softplan-api.vercel.app/

## 🚧 Routes
  - Login
    - POST /login - Logs into the application and returns a JWT to the user, which is required for guarded routes.
  - Users (Guarded route)
    - POST /users - Create a new user
    - GET /users - Return all the users
    - GET /users/:id - Return all data from a user
    - PATCH /users/:id - Edit user data
    - DELETE /users/:id - Delete user

## 💻 Tech stack

* [Node](https://nodejs.org/pt)
* [JSON Server](https://github.com/typicode/json-server)
* [JSON Server Auth](https://github.com/jeremyben/json-server-auth)


## 🚀 Installation

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:
```bash
# Clone this repository
$ git clone https://github.com/nardini-22/teste-softplan-api.git

# Go into the repository
$ cd teste-softplan-api

# Install dependencies
$ npm install

# Run the app
$ npm run server
```



## ❤️ Enjoy this project? 
Developed by Arthur Nardini.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arthur-nardini/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nardini-22)
