describe('', () => {
it('', () => {

cy.visit('http://localhost:1667/#/');
cy.get(':nth-child(2) > .nav-link')
.click();
cy.get(':nth-child(1) > .form-control')
.type('pupka@mail.su');
cy.get(':nth-child(2) > .form-control')
.type('A=CW2wcA');
cy.get('.btn')
.click();
cy.get('.navbar').contains('pupka')
.should('exist');
})
});