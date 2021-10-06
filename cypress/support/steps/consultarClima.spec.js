/// <reference types='cypress'/>

import  * as GET from '../../api/GetConsultaClima.request'

let response

Given('que queria saber a temperatura da cidade de "{}"', (cidade) => {
    GET.city(cidade).should((value) => {
        response = value
    })
});

Then('valido que e retornado a temperatura da cidade de "{}"', (cidade) => {
    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.not.null
	expect(response.body.name).to.be.equal(cidade)
    cy.log(`Descrição do Tempo: ${response.body.weather.description}`)
    expect(response.body.weather.description).to.be.not.null
});


Then('valido que e retornado a descrição do tempo da cidade de "{}"', (cidade) => {
	expect(response.status).to.be.equal(200)
    expect(response.body).to.be.not.null
	expect(response.body.name).to.be.equal(cidade)
    cy.log(`Temperatura: ${response.body.main.temp} °C`)
    expect(response.body.main.temp).to.be.not.null
});

