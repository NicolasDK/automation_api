Feature: Consulta utilizando parametros
    Eu como usuario, quero poder realizar requisições utilizando diferentes parametros
    para ter mais possibilidades de consultas

Scenario Outline: Consulta utilizando cidades como parametro
    Given uma consulta utilizando a cidade "<cidade>, <estado>, <pais>" como parametro
    When realizo uma requisicao GET
    Then valido que e retornado os dados meteorologicos da "<cidade>"

    Examples:
    | cidade        | estado    | pais  |
    | Uberlândia    | mg        | br    |
    | Cairo         |           | eg    |
    | Nova Iorque   |           |       |

Scenario Outline: Consulta utilizando idCidades como parametro
    Given uma consulta utilizando o idCidade "<idCidade>" como parametro
    When realizo uma requisicao GET
    Then valido que e retornado os dados meteorologicos da "<cidade>"

    Examples:
    | idCidade  | cidade        |
    | 2172797   | Cairns        |
    | 3460522   | Teste Falha   |
    | 3448433   | São Paulo     |

Scenario Outline: Consulta por coordenadas geograficas
    Given uma consulta utilizando as coordenadas "<latitude>, <longitude>" como parametro
    When realizo uma requisicao GET
    Then valido que e retornado os dados meteorologicos da "<cidade>"

    Examples:
    | latitude  | longitude  | cidade       |
    | 35.29203  | -93.729919 | Paris        |
    | 40.46423  | -80.600906 | Toronto      |
    | -9.0      | -36.0      | Alagoas      |

Scenario Outline: Consulta utilizando a cidade sem parametros
    Given uma consulta utilizando a "<parametros>" sem parametros 
    When realizo uma requisicao GET
    Then valido que e retornado o status code "400"
    And a mensagem "Nothing to geocode"

    Examples:
        | parametros                |
        | cidade                    |
        | idCidades                 |
        | coordenadas geograficas   |
