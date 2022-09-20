# Car Shop

O Car Shop é uma API que gerencia uma concessionária de veículos.</br>
Trata-se de uma API TypeScript na arquitetura MSC, aplicando os pilares de POO e utilizando o ODM Mongoose para se conectar com um banco de dados MongoDB.


## Habilidades

Nesse projeto, fui capaz de:

- Aplicar os pilares da Programação Orientada a Objetos (POO) e SOLID: Herança, Abstração, Encapsulamento e Polimorfismo;
- Desenvolver uma API REST utilizando a arquitetura de software MSC (Model-Service-Controller);
- Exercitar a criação e utilização de Interfaces;
- Implementar, em TypeScript: Classes, Instâncias, Atributos, Métodos e Objetos;
- Aplicar os conhecimentos de MongoDB e Typescript para criar uma API com CRUD;
- Utilizar o framework Express, e a ODM Mongoose;
- Desenvolver testes unitários com 100% de cobertura, utilizando Chai, Mocha e Sinon;


## Inicialização via Docker 🐳

1. Clone o repositório `git@github.com:trkotovicz/mongoose-car-shop.git`
2. Na raíz do repositório rode o comando `docker-compose up -d`
3. Entre o terminal do container criado `docker exec -it car_shop bash`
4. Instale as dependências do projeto com `npm install`
5. Inicie a aplicação dentro do container `npm start`
</br>
O servidor vai estar rodando na porta local 3000 (http://localhost:3000).</br>
Utilize o cliente de requisições HTTP de sua preferência para fazer as requisições.


## Rotas

<details>
  <summary><strong>POST /cars </strong></summary><br>
  
  Nessa rota você pode cadastrar um novo carro.</br>
  Para isso, utilize o formato abaixo no body da requisição:
  ```json
  {
    "model": "Ferrari Maranello",
    "year": 1963,
    "color": "red",
    "buyValue": 3500000,
    "seatsQty": 2,
    "doorsQty": 2
  }
  ```

`http://localhost:3000/cars` </summary>
</details>


<details>
  <summary><strong>GET /cars </strong></summary><br>
  
  Esse endpoint retorna uma lista com todos os carros cadastrados.</br>

`http://localhost:3000/cars` </summary>
</details>


<details>
  <summary><strong>GET /cars/id </strong></summary><br>
  
  Esse endpoint retorna um carro específico através de seu id.</br>
  Para isso, substitua o `id` do endpoint, pelo id do carro que você deseja buscar.</br>
  
  `http://localhost:3000/cars/id` </summary>
</details>


<details>
  <summary><strong>PUT /cars/id </strong></summary><br>
  
  Esse endpoint é responsável pela alteração de um carro específico.</br>
  Para isso, substitua o `id` do endpoint, pelo id do carro que você deseja alterar.</br>
  O corpo da requisição deve ter o seguinte modelo:
  ```json
  {
	  "model": "Fiat Uno",
    "year": 1963,
    "color": "blue",
    "buyValue": 3500,
    "seatsQty": 4,
    "doorsQty": 4
  }
  ```
  
  `http://localhost:3000/cars/id` </summary>
</details>


<details>
  <summary><strong>DELETE /cars/id </strong></summary><br>
  
  Esse endpoint deleta um carro específico através de seu id.</br>
  Para isso, substitua o `id` do endpoint, pelo id do carro que você deseja excluir.</br>
  
  `http://localhost:3000/cars/id` </summary>
</details>


<details>
  <summary><strong>POST /motorcycles</strong></summary><br>
  
  Nessa rota você pode cadastrar uma motocicleta nova.</br>
  Para isso, utilize o formato abaixo no body da requisição:
  ```json
  {
    "model": "Honda CG Titan 125",
    "year": 1963,
    "color": "red",
    "buyValue": 3500,
    "category": "Street",
    "engineCapacity": 125
  }
  ```
  
  `http://localhost:3000/motorcycles` </summary>
</details>


<details>
  <summary><strong>GET /motorcycles</strong></summary><br>
  
  Esse endpoint retorna uma lista com todas as motos cadastradas.</br>

  `http://localhost:3000/motorcycles` </summary>
</details>


<details>
  <summary><strong>GET /motorcycles/id</strong></summary><br>
  
  Esse endpoint retorna uma moto específica através de seu id.</br>
  Para isso, substitua o `id` do endpoint, pelo id da motocicleta que você deseja buscar.</br>
  
  `http://localhost:3000/motorcycles/id` </summary>
</details>


<details>
  <summary><strong>PUT /motorcycles/id</strong></summary><br>

  Esse endpoint é responsável pela alteração de uma moto específica.</br>
  Para isso, substitua o `id` do endpoint, pelo id da motocicleta que você deseja alterar.</br>
  O corpo da requisição deve ter o seguinte modelo:
  ```json
  {
	  "model": "Honda CG Titan 125",
    "year": 1963,
    "color": "black",
    "buyValue": 3500,
    "category": "Street",
    "engineCapacity": 125
  }
  ```
  
  `http://localhost:3000/motorcycles/id` </summary>
</details>


<details>
  <summary><strong>DELETE /motorcycles/id</strong></summary><br>

  Esse endpoint deleta uma motocicleta específica através de seu id.</br>
  Para isso, substitua o `id` do endpoint, pelo id da moto que você deseja excluir.</br>
  
  `http://localhost:3000/motorcycles/id` </summary>
</details>


---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>

