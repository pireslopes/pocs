# Retorna o produto escalar

Recebe um objeto com duas propriedades do tipo array e retorna o produto escalar.

# Pré-requisitos

* nodejs
### Instalação e inicialização

* clonar o repositório
* entrar na pasta cd "pasta"
* npm install
* node index.js
### Uso

```
curl -X POST \ http://localhost:3200/scalar \-H 'content-type: application/json' \
  -d '{ "arrA": [1,2,3,4,5,6], "arrB": [2,4,6,8,10,12]}'
```