/// <reference types='cypress'/>

import  * as GET from '../../api/GetConsultaClima.request'
import { PARAMETRO } from '../../fixtures/enum'

let response

Given('uma consulta utilizando a cidade "\{}, \{}, \{}" como parametro(s)', (cidade, estado, pais) => {
    GET.city(cidade, estado, pais).then(value => { response = value })
})

Given('uma consulta utilizando o idCidade "{}" como parametro(s)', (idCidade) => {
    GET.cityId(idCidade).then(value => { response = value })
})

Given('uma consulta utilizando as coordenadas "\{}, \{}" como parametro(s)', (lat, long) => {
	GET.geographic(lat, long).then(value => { response = value })
})

Given('uma consulta utilizando a cidade "{}" como parametro invalido', (cidade) => {
    GET.city(cidade).then(value => { response = value })
})

Given('uma consulta utilizando o idCidade "{}" como parametro(s) invalido(s)', (idCidade) => {
    GET.cityId(idCidade).then(value => { response = value })
})

Given('uma consulta utilizando as coordenadas "\{}, \{}" como parametro(s) invalido(s)', (lat, long) => {
	GET.geographic(lat, long).then(value => { response = value })
})

Given('uma consulta utilizando a "{}" sem parametros', (parametros) => {
    switch (parametros) {
        case PARAMETRO.CIDADE:
            return  GET.city().then(value => { response = value })

        case PARAMETRO.CIDADE:
            return GET.cityId().then(value => { response = value })

        case PARAMETRO.CIDADE:
            GET.geographic().then(value => { response = value })
    
        default:
            cy.log(`${parametros} não foi mapeado :/`)
            break
    }
})

When('realizo uma requisicao GET', () => {})

Then('valido que e retornado os dados meteorologicos da "{}"', (cidade) => { 
	expect(response.status).to.be.eq(200)
    expect(response.body).to.be.not.null
    expect(response.body.name).to.be.eq(cidade)
})

Then('valido que e retornado o status code "{int}"', (status) => {
	expect(response.status).to.be.eq(status)
    expect(response.body).to.be.not.null
})

Then('a mensagem "{}"', (mensagem) => {
    expect(response.body.message).to.be.eq(mensagem)
})
