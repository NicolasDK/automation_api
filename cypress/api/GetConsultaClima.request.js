/// <reference types='cypress'/>

function city(cidade = '', codEstado = '', codPais = ''){
    var params = cidade
    if(!codEstado == null){params.concat(`,${codEstado}`)}
    if(!codPais == null){params.concat(`,${codPais}`)}

    return cy.request({
        method: 'GET',
        url: 'api.openweathermap.org/data/2.5/weather',
        qs: {
            q: params,
            lang: 'pt',
            appId: Cypress.env('API_KEY')
        },
        failOnStatusCode: false
    })
}

function cityId(idCidade = ''){
    var params = idCidade

    return cy.request({
        method: 'GET',
        url: 'api.openweathermap.org/data/2.5/weather',
        qs: {
            id: params,
            lang: 'pt',
            appId: Cypress.env('API_KEY')
        },
        failOnStatusCode: false
    })
}

function geographic(latitude = '', longitude = ''){

    return cy.request({
        method: 'GET',
        url: 'api.openweathermap.org/data/2.5/weather',
        qs: {
            lat: latitude,
            lon: longitude,
            lang: 'pt',
            appId: Cypress.env('API_KEY')
        },
        failOnStatusCode: false
    })
}

function postalCode(codPostal, codPais){
    var params = codPostal
    if(!codPais == null){params.concat(`,${codPais}`)}

    return cy.request({
        method: 'GET',
        url: 'api.openweathermap.org/data/2.5/weather',
        qs: {
            zip: params,
            lang: 'pt',
            appId: Cypress.env('API_KEY')
        },
        failOnStatusCode: false
    })
}

export { city, cityId, geographic, postalCode }
