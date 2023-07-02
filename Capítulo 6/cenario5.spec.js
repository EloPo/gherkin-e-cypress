describe('Criar uma reserva de hotel', () => {
    it('Cenário 5: Criar uma reserva de hotel bem-sucedida', () => {
        cy.visit('/reservas');

        cy.get('#destino').type('Paris');
        cy.get('#check-in').type('2023-08-15');
        cy.get('#check-out').type('2023-08-20');

        cy.get('#btn-reservar').click();

        cy.get('.confirmacao').should('be.visible');
    });

    it('Cenário 6: Criar uma reserva de hotel sem preencher campos obrigatórios', () => {
        cy.visit('/reservas');

        cy.get('#btn-reservar').click();

        cy.get('.mensagem-erro').should('be.visible');
    });

    it('Cenário 7: Criar uma reserva de hotel com datas inválidas', () => {
        cy.visit('/reservas');

        cy.get('#destino').type('Paris');
        cy.get('#check-in').type('2023-08-20');
        cy.get('#check-out').type('2023-08-15');

        cy.get('#btn-reservar').click();

        cy.get('.mensagem-erro').should('be.visible');
    });
});
