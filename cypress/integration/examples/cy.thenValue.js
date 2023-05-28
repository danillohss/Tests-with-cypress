///<reference types="cypress"/>

it("cy.invokeValue() - Filtrar elemento", () => {
    cy.visit('/')
        .get('.form-control')
        .invoke('val')
        .then((valueInput) => {
            console.log(valueInput)
        })

})