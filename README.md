# 💻 **Documentação com Swagger**

![GitHub repo size](https://img.shields.io/github/repo-size/vitorjobs/rocket_swaggerDoc?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/vitorjobs/rocket_swaggerDoc?style=for-the-badge)


![Capa do projeto](.github/CapaSimpleCrud01.png "Layout da Página")
___

## ✨ **Conteúdo**
- [💻 **Documentação com Swagger**](#-documentação-com-swagger)
  - [✨ **Conteúdo**](#-conteúdo)
  - [💻 **Biblioteca Swagger Geração de Documentação de API**](#-biblioteca-swagger-geração-de-documentação-de-api)
  - [🚀 **Testar o Projeto:**](#-testar-o-projeto)
    - [Para testar o **Simple Crud**, siga estas etapas:](#para-testar-o-simple-crud-siga-estas-etapas)
  - [🚧 **Arquitetura Utilizada no Projeto**](#-arquitetura-utilizada-no-projeto)
    - [**Server**](#server)
    - [**Middleware**](#middleware)
    - [**Routes**](#routes)
  - [☕ **Ajustes e melhorias**](#-ajustes-e-melhorias)
  - [📝 **Licença MIT**](#-licença-mit)
___

<!-- ## :construction:  **Ferramentas e Tecnologias Utilizadas no Projeto**
  ![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
  ![](https://img.shields.io/badge/visualStudio-3498DB?style=for-the-badge&logo=visualstudiocode&logoColor=white")
  ![](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) 
  ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)
  ![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)  
  ![](https://img.shields.io/badge/Linux-7B42BC?style=for-the-badge&logo=linux&logoColor=black)
___ -->

## 💻 **Biblioteca Swagger Geração de Documentação de API** 
  - Gerar Documentação das rotas e parâmetros com a biblioteca `Swagger`.
___

<!-- ## 📫 **Banco de dados**  
  - Nesta aplicação foi utilizado o `banco de dados relacional`, **SQLITE**, e **Migrations** como forma de versionamento, para gerar a estrutura das tabelas.

  - A configuração de conexão do banco de dados está localizada no arquivo `typeormconfig.json`

    ![configuração de conexão do banco de dados](.github/ormconfig.png "Configuração de conexão do banco de dados")  
___ -->

## 🚀 **Testar o Projeto:**
  ### Para testar o **Simple Crud**, siga estas etapas:

  1. Faça um clone deste repositório: `https://github.com/vitorjobs/rocket_swaggerDoc.git`.
  2. Instale as dependềncias do projeto: `npm ou yarn install`.
  3. Exclua o arquivo do banco de dados: `src/database/database.sqlite`
  4. Crie um banco de dados com tabelas limpas: `yarn typeorm migration:run`
  5. Inicie o projeto: `npm run dev`
  6. Importe o arquivo **ormconfig.json** para aplicativos insomnia ou post.
  7. Teste os EndPoints.
___ 
## 🚧 **Arquitetura Utilizada no Projeto**

  ![Estrtura do Projeto](.github/.....gif "Estrtura do Projeto")
  
  ### **Server**
    Arquivo responsável pelas configurações do servidor da aplicação

  ### **Middleware**
    É o arquivo responsável pela simulação da autenticação de usuários nas rotas da aplicação

  ### **Routes**
    Contém os rotas com os EndPoints que serão utilizadas para a geração da documentação 
  
## ☕ **Ajustes e melhorias**

  O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

  - [ ] Implementar rota para editar videos
  - [ ] Implementar rota para excluir videos
  - [ ] Implementar a documentação do projeto
  - [ ] Implementar testes no projeto
  - [ ] Deploy

## 📝 **Licença MIT**

  Copyright :copyright: 2022 - Swagger Documentation

  [⬆ Voltar ao topo](#-documentação-com-swagger)<br>