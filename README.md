# Requisitos para rodar o trabalho
É preciso de um servidor backend que faça operações de remoção, edição e adição de dados de produtos e que tenha dados de usuários registrados. O servidor também precisa de um sistema de autenticação de usuário com o 
uso de JWT.

## Requisitos das rotas e métodos
O servidor há de rodar na porta 5000 do endereço localhost ter as rotas específicas, com métodos e retornos específicos para a trabalhar corretamente com o servidor front-end.
Todos os métodos das rotas necessárias tem Content-Type com valor application/json no header.

### Rota '/products'
O servidor há de ter uma rota /products, com o intuito de operações com produtos no banco de dados, que tenha os seguintes métodos e retornos.

#### GET
O método deve ser usado para retornar os produtos no banco de dados em um array de produtos{name, description, price, categoria}, o JSON enviado tem valor null.
#### POST
O método deve ser usado para registrar novos produtos no banco e retornar um valor booleano se houve sucesso ou não, o JSON envia o produto a ser cadastrado.
#### PUT
O método deve ser usado para alterar dados de produtos registrados no banco e retornar um valor booleano se houve sucesso ou não, o JSON envia o index do produto a ser editado e seus novos dados.
#### DELETE
O método deve ser usado para deletar produtos registrados no banco e retornar um valor booleano se houve sucesso ou não, o JSON envia o index do produto a ser deletado.

### Rota '/auth'
O servidor há de ter uma rota /auth, com o intuito de autenticação de usuário, que tenha os seguintes métodos e retornos.

#### POST
O método deve ser usado para autenticar um usuário registrado na aplicação e retornar um JWT de autenticação, o JSON envia o nome de usuário e senha do usuário.
