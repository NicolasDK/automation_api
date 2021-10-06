/// <reference types='cypress'/>

var baseUrl = Cypress.config('baseUrl')

function city(cidade = '', codEstado = '', codPais = ''){
    var params = cidade
    if(!codEstado == null){params.concat(`,${codEstado}`)}
    if(!codPais == null){params.concat(`,${codPais}`)}

    return cy.request({
        method: 'GET',
        url: baseUrl,
        qs: {
            q: params,
            units:'metric',
            lang:'pt',
            appId: Cypress.env('API_KEY')
        },
        failOnStatusCode: false
    })
}

function cityId(idCidade = ''){
    var params = idCidade

    return cy.request({
        method: 'GET',
        url: baseUrl,
        qs: {
            id: params,
            units:'metric',
            lang:'pt',
            appId: Cypress.env('API_KEY')
        },
        failOnStatusCode: false
    })
}

function geographic(latitude = '', longitude = ''){

    return cy.request({
        method: 'GET',
        url: baseUrl,
        qs: {
            lat: latitude,
            lon: longitude,
            units:'metric',
            lang:'pt',
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
        url: baseUrl,
        qs: {
            zip: params,
            units:'metric',
            lang:'pt',
            appId: Cypress.env('API_KEY')
        },
        failOnStatusCode: false
    })
}

export { city, cityId, geographic, postalCode }
