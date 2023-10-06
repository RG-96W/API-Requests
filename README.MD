Express: O Express é o framework web que facilita a criação de rotas e a lida com solicitações HTTP.


npm install express
Mongoose: O Mongoose é uma biblioteca para Node.js que fornece uma camada de abstração para interagir com o MongoDB, facilitando a criação e a manipulação de modelos de dados.


npm install mongoose
Body-parser: O Body-parser é usado para analisar os corpos das solicitações HTTP (por exemplo, dados JSON ou formulários).


npm install body-parser
Nodemon (Opcional): O Nodemon é uma ferramenta de desenvolvimento que ajuda a reiniciar automaticamente o servidor sempre que você faz alterações no código.


npm install nodemon --save-dev

npm install cors


GET /requests para listar todas as solicitações.
POST /requests para criar uma nova solicitação.
GET /requests/:id para obter detalhes de uma solicitação específica (substitua :id pelo ID real da solicitação).
PUT /requests/:id para atualizar uma solicitação existente (substitua :id pelo ID real da solicitação).
DELETE /requests/:id para excluir uma solicitação existente (substitua :id pelo ID real da solicitação).