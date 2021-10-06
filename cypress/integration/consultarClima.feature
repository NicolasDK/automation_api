Feature: Consultar clima
    Eu como usuario, quero poder realizar consultas utilizando as APIs
    para ter acesso aos climas

Scenario Outline: Consultar a temperatura de <cidade>
    Given que queria saber a temperatura da cidade de "<cidade>"
    When realizo uma requisicao GET
    Then valido que e retornado a temperatura da cidade de "<cidade>"

    Examples:
    | cidade        |
    | Londres       |
    | Tóquio        |
    | Cansas        |

Scenario Outline: Consultar a descrição do tempo de <cidade>
    Given que queria saber a temperatura da cidade de "<cidade>"
    When realizo uma requisicao GET
    Then valido que e retornado a descrição do tempo da cidade de "<cidade>"

    Examples:
    | cidade        |
    | Londres       |
    | Tóquio        |
    | Cansas        |