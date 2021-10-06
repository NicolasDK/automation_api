# Automação API - Cypress

## Resumo
  A automação foi criada com cypress devido a grande facilidade na configuração do ambiente, de seu desenvolvimento e manuseio de requisições.
  Foram adicionados alguns plugins como:
  - cypress-cucumber-preprocessor - responsaveis pela implementação do cucumber,
  - multiple-cucumber-html-reporter - para geração de reports com cucumber-reporter
  
  Foram criados alguns testes utilizando a plataforma API Open Weather para realizar e validarmoms consultas meteorologicas.
  Os testes podem ser encontrados no diretorio cypress/integration/**.feature
  
## Instalação 
  Para a instalação do projeto em sua maquina é necessario alguns pré-requisitos como termos o node npm instalado na maquina, a instalação do node npm pode ser feita pelo link:
  https://nodejs.org/pt-br/download/
  
  Após clonar o projeto, é necessário abrir um terminal na raiz do projeto e executar a seguinte linha de comando para download das dependencias do projeto:
  
    npm install

## Requisitos Execução
  É necessário criar um arquivo no diretorio raiz do projeto com o nome "cypress.env.json" e dentro desse arquivo salvar a seguinte estrutura contendo sua appId fornecida pela plataforma da API Open Weather

    {
      "API_KEY": "insira_sua_chave_appId"
    }
  
## Execução
  Depois de ter baixado todas as dependencias, para execução da automação deve ser executado o comando:
  
    npm run cy:run
  
## Reportes
  E para gerar o reporte da ultima execução devem ser executados os seguintes comandos:
   - Para gerar o reporte:
   
    npm run report
  
  Para abrir o reporte pode ser copiado e colado o link que será gerado no console no navegador de sua preferencia ou acessa-los pelo diretório **/cypress/report/cucumber-report/report_*_*/index.html
    
<sub><b>Nicolas Ferreira</b></sub></a> <a href="https://www.linkedin.com/in/nicolasteixeiraf/" title="linkedin">🚀</a>

Feito por Nicolas Ferreira 👋🏽 Entre em contato!