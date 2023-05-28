///<reference types="cypress"/>

it("cy.then() - Filtrar elemento", () => {
    cy.visit('/')
        .get('.col > .btn')
        .then((botao) => {
            console.log(botao.text());
        })
})