  # ALURA IMERSÃO BACK END

</div>
<div align="center">
  <img src="/cover.png" style="height: 500px; >
</div>
<p>
  Alura Imersão Back End é um evento voltado para iniciantes no mundo da programação, com foco no desenvolvimento back-end.
  São cinco aulas, nelas o objetivo é criar e gerenciar servidores utilizando Node.js e Express, além de entender conceitos fundamentais como rotas,
  códigos HTTP e estruturas de dados.
  A imersão também introduz o uso de bancos de dados, especificamente o MongoDB, para armazenar e manipular dados de forma persistente.
  Outro ponto é da imersão é o de interagir com a IA Gemini, que auxilia em dúvidas e explicações ao longo do aprendizado.
</P>

<div align="center">

  |📙 __Imersão BackEnd__ | Desafios |
  |:----------------------|:----------:|
  |🚀 [Dia 1](##dia-1)  | Criar um servidor com node; Gerar chave API do gemini |
  |📦 [Dia 2](##dia-2)  | Verbos HTTP; Estrutura de Dados JS; Criação de Rotas; introdução ao MongoDB|
  |📊 [Dia 3](##dia-3)  | MVC; Váriaveis de Ambiente; Organização de código; Manipulação de dados |
  |📤 [Dia 4](##dia-4)  | Verbos HTTP; Rotas e Controllers; Envio de Dados para o Banco de Dados; Postman |
  |🌐 [Dia 5](##dia-5)  |     |

</div>

## Dia 1


<!-- Dia 1
Introdução ao Back-End: A aula começou com uma explicação sobre a diferença entre front-end e back-end, destacando a importância do back-end para a funcionalidade das aplicações.
Ambiente de Desenvolvimento: Foi apresentado o Node.js como o ambiente de execução para JavaScript fora do navegador, e como instalá-lo.
Inicialização de Projetos: Aprendemos a iniciar um projeto Node.js usando o comando npm init es6 -y, que cria um arquivo package.json para gerenciar as dependências do projeto.
Instalação de Dependências: O Express foi instalado como uma dependência do projeto usando o comando npm install express, que facilita a criação de servidores.
Criação do Servidor: Foi demonstrado como criar um servidor básico com Express, incluindo a configuração de uma porta (3000) e a definição de uma rota (/api) que responde a requisições.
Requisições e Respostas: A aula abordou o conceito de requisições e respostas, mostrando como o servidor responde a uma requisição com um status 200 e uma mensagem.
Integração com Google Gemini: Foi mencionado o uso do Google Gemini, uma IA generativa, e como gerar uma chave de API para integrá-la ao projeto nas próximas aulas.
Próximos Passos: A aula terminou com a expectativa de que os alunos continuem a desenvolver suas habilidades em back-end e explorem mais sobre a integração com a IA. -->
## Dia 2
<!-- Dia 2
Revisão da Primeira Aula:
Criação do ambiente com Node.js e Express.
Instanciação do servidor Express e criação de um endpoint.
Entendimento dos códigos de status HTTP, especialmente o 200 (OK) e 404 (Not Found).
Criação de Dados Mockados:
Introdução ao conceito de arrays e objetos em JavaScript.
Criação de uma estrutura de dados (array) para armazenar posts, cada um com descrição e imagem.
Uso do Gemini:
Demonstração de como utilizar o Gemini para gerar dados mockados automaticamente, facilitando o desenvolvimento.
Implementação de Rotas:
Criação de uma rota para retornar todos os posts e outra para retornar um post específico usando um ID.
Uso de app.get para definir as rotas e res.json para enviar a resposta em formato JSON.
Identificação de Posts:
Adição de um identificador (ID) a cada post para facilitar a busca e manipulação dos dados.
Introdução ao MongoDB:
Discussão sobre a necessidade de um banco de dados para armazenar dados de forma persistente.
Escolha do MongoDB como banco de dados baseado em documentos e uso do MongoDB Atlas para hospedagem na nuvem.
Próximos Passos:
Preparação para a próxima aula, onde será feita a conexão da aplicação com o MongoDB e operações de armazenamento e recuperação de dados.
 -->
## Dia 3
<!-- Dia 3
 Conexão com o MongoDB: Aprendemos a conectar nossa aplicação ao MongoDB na nuvem, utilizando o MongoDB Atlas. Instalamos o pacote mongodb e configuramos a string de conexão.
Variáveis de Ambiente: Criamos um arquivo .env para armazenar informações sensíveis, como a string de conexão, e utilizamos o dotenv para gerenciar essas variáveis de forma segura.
Estrutura do Projeto: Iniciamos a modularização do código, separando responsabilidades em diferentes arquivos e pastas:
Routes: Criamos uma pasta routes e um arquivo postRoutes.js para gerenciar as rotas da aplicação.
Controllers: Criamos uma pasta controllers e um arquivo postsController.js para lidar com a lógica de requisição e resposta.
Models: Criamos uma pasta models e um arquivo postModel.js para gerenciar a conexão com o banco de dados e as operações de dados.
Funções Assíncronas: Utilizamos async e await para lidar com operações assíncronas, como a conexão com o banco de dados e a busca de dados.
Manipulação de Dados: Implementamos a função getTodosPosts para buscar todos os posts do banco de dados e retornar os dados em formato JSON.
Organização do Código: Discutimos a importância de manter o código organizado e sustentável, facilitando a manutenção e a adição de novas funcionalidades no futuro. -->


## Dia 4
<!-- Dia 4

Envio de Dados para o Banco de Dados: Aprendemos a enviar informações para a base de dados, utilizando verbos HTTP, especialmente o verbo POST.

Estrutura do Projeto: Revisamos a estrutura do projeto, com pastas específicas para configuração, modelos, rotas e controladores, e como cada uma delas se relaciona.

Verbos HTTP: Discutimos os quatro principais verbos HTTP: criar (POST), ler (GET), atualizar (PUT) e deletar (DELETE), e como utilizá-los nas rotas.

Controllers e Rotas: Criamos uma rota para enviar dados (posts) e implementamos a lógica no controller para manipular a requisição e a resposta.

Tratamento de Exceções: Aprendemos sobre o uso de try e catch para tratar erros que podem ocorrer durante a execução do código.

Manipulação de Arquivos: Introduzimos o conceito de upload de arquivos, utilizando a biblioteca Multer para gerenciar o envio de imagens para o servidor.

Armazenamento de Imagens: Discutimos como armazenar imagens no sistema de arquivos do servidor e associá-las aos registros no banco de dados.

Testes com Ferramentas de API: Utilizamos ferramentas como Thunder Client e Postman para testar as requisições e verificar se os dados estavam sendo enviados e armazenados corretamente. -->


## Dia 5
<!-- Dia 5

 -->