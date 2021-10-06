Feature: Consulta utilizando parametros
    Eu como usuario, quero receber uma mensagem de erro quando fazer uma requisição com parametros invalidos
    para ter mais controle sobre os parametros utilizados

Scenario: Consulta utilizando cidades com parametros invalidos
    Given uma consulta utilizando a cidade "0" como parametro invalido
    When realizo uma requisicao GET
    Then valido que e retornado o status code "404"
    And a mensagem "city not found"

Scenario: Consulta utilizando idCidades com parametros invalidos
    Given uma consulta utilizando o idCidade "0" como parametro invalido
    When realizo uma requisicao GET
    Then valido que e retornado o status code "400"
    And a mensagem "Invalid ID"

Scenario Outline: Consulta por coordenadas geograficas com parametros invalidos
    Given uma consulta utilizando as coordenadas "<latitude>, <longitude>" como parametros invalidos
    When realizo uma requisicao GET
    Then valido que e retornado o status code "400"
    And a mensagem "<mensagem>"

    Examples:
        | longitude | latitude  | mensagem          |
        | 0         | x         | wrong latitude    |
        | x         | 0         | wrong longitude   |
