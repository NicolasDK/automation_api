# Automação API - Cypress

## Resumo
  A automação foi criada com cypress devido a grande facilidade na configuração do ambiente, de seu desenvolvimento e manuseio de requisições.
  Foram adicionados alguns plugins como:
  - cypress-cucumber-preprocessor - responsaveis pela implementação do cucumber,
  - @shelex/cypress-allure-plugin - para geração de reports com allure
  
  Foram criados alguns testes utilizando a plataforma API Open Weather para realizar e validarmoms consultas meteorologicas.
  Os testes podem ser encontrados no diretorio cypress/integration/**.feature
  
## Instalação 
  Para a instalação do projeto em sua maquina é necessario alguns pré-requisitos como termos o node npm instalado na maquina, a instalação do node npm pode ser feita pelo link:
  https://nodejs.org/pt-br/download/
  
  Após clonar o projeto, é necessário abrir um terminal na raiz do projeto e executar a seguinte linha de comando para download das dependencias do projeto:
  
    npm install
  
## Execução
  Depois de ter baixado todas as dependencias, para execução da automação deve ser executado o comando:
  
    npm run cy:run
  
## Reportes
  E para gerar o reporte da ultima execução devem ser executados os seguintes comandos:
   - Para gerar o reporte:
   
    allure:generate
  
   - Para abrir o reporte:
   
    allure:open
  
  Tambem temos um comando para apagar os diretorios do reporte e evitarmos sobreposição de dados, 
  o ideal é ser executado antes de cada execução para não corrermos o risco de termos dados falsos
  
    allure:clear
    
<sub><b>Nicolas Ferreira</b></sub></a> <a href="https://www.linkedin.com/in/nicolasteixeiraf/" title="linkedin">🚀</a>

Feito por Nicolas Ferreira 👋🏽 Entre em contato!