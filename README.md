<h1 align="center"> 💰 CARTEIRA DE CRIPTOMOEDAS 💰 </h1>
Este projeto tem como objetivo central ser uma API que armazena dados de várias criptomoedas em carteiras individuais.


<h1 align=> 📖 Dependências utilizadas: </h1>
Abaixo estão algumas libs e frameworks utilizados no projeto:

```
Libs:
"body-parser": "^1.20.0",
"mysql2": "^2.3.3",
"path": "^0.12.7",
"sequelize": "^6.19.0",
"sequelize-cli": "^6.4.1"

Frameworks:
"express": "^4.18.1"
```
<h1 align=> 🔨 Construído com: </h1>

* [API de Cotações de Moedas](https://docs.awesomeapi.com.br/api-de-moedas) - Tem como objetivo informar ao script a cotação em tempo real das moedas utilizadas.

<h1 align=> 📃 Endpoints da aplicação: </h1>

```
Get - ('/api/v1/wallet') - Usado para pegar todos as carteiras cadastradas.
Get - ('/api/v1/wallet/:id') - Usado para pegar uma carteira específica.
Post - ('/api/v1/wallet') - Usado para criar uma nova carteira.
Put - ('/api/v1/wallet/:id') - Usado para atualizar os dados de uma carteira específica.
Delete - ('/api/v1/wallet/:id') - Usado para deletar uma carteira específica.
```

<h1 align=> 📁 Bancos de dados criados: </h1>

```
*------------------------------------*                            
| Database: Users - (Wallet)         |
|------------------------------------|
| name - string                      |
| cpf - string                       |
| birthdate - dateonly               |
*------------------------------------*

*------------------------------------*
| Database: Coins                    |
|------------------------------------|
| coins - string                     |
| fullname - string                  |
| amont - float                      |
*------------------------------------*

*------------------------------------*
| Database: Transactions             |
|------------------------------------|
| value - string                     |
| datetime - dateonly                |  
| sendTo - string                    |
| receiveFrom - string               |
| currentCotation -float             |
| quoteTo - string                   |
| currentCoin - string               |
| receiverAdress - string            |
*------------------------------------*
```

<h1 align=> 🖌️ Autor: </h1>

* **João Vítor Rech** - [Link do Perfil](https://github.com/TheJoaoRech)
