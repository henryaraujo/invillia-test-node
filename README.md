# invillia-test-node

## Instalação
Todas as dependencias foram instaladas utilizando o `npm` podendo ser instaladas a partir do comando:
> `npm i ou npm install`

## Tecnologias Usadas
[KoaJS](https://koajs.com/) para criação da Api

[Babel](https://babeljs.io/) para compilar codigos ES6/ES7

[NeDB](https://github.com/louischatriot/nedb) para persistência de dados (similar ao MongoDB)

[Jest](https://github.com/louischatriot/nedb) para cobertura de testes

[Postman](https://www.getpostman.com/) para realizar requisições a API

## Requisitos
node: LTS

npm: 6.9.0

## Preparando o desenvolvimento
Para rodar o projeto em sua máquina, execute os seguintes comandos:

`git clone https://github.com/henryaraujo/invillia-test-node`

`cd invillia-test-node/`

`npm install`

`npm start`

> O servidor será iniciado na seguinte URL: `http://localhost:8000/v1/api`

## Observações
Para navegar entre as rotas será necessario:

Criar usuário na rota: `http://localhost:8000/v1/api/auth/signup`

Realizar autenticação na rota: `http://localhost:8000/v1/api/auth/signin`

Utilizar o token [JWT](https://jwt.io/) gerado ao realizar autenticação

## Usando Postman

Importar collection [InvilliaTestCollection](https://www.getpostman.com/collections/cd374fead3edc793c231)

## Licença
O projeto utiliza a licença ISC descrita no link [LICENSE](https://pt.wikipedia.org/wiki/Licen%C3%A7a_ISC).