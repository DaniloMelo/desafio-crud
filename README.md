# desafio-crud

Este projeto tem alguns testes simples escritos com o mínimo necessário para um CRUD em `node.js`.

O projeto não está vinculado com nenhum banco de dados específico e não há configuração de como deve ser implementado, tem apenas uma função vazia que teria a responsabilidade de rodar as *queries* recebidas.

A ideia é que este repositório possa ser flexível para que seja resolvido da forma que você preferir.

Sugestão de ordem para resolver os problemas:

- execQuery
- create
- read
- update
- delete

O projeto foi feito usando a versão `v21.7.3` do Node, com isso, foram criados alguns scripts que usam recursos disponíveis nesta versão:

- ```npm run create```: Vai rodar o script que executa a operação de `create`;
- ```npm run read```: Vai rodar o script que executa a operação de `read`;
- ```npm run update```: Vai rodar o script que executa a operação de `update`;
- ```npm run delete```: Vai rodar o script que executa a operação de `delete`;
- ```npm run test```: Vai rodar os testes em modo `watch`;