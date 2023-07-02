describe("Realizar o checkout de um pedido", () => {
    beforeEach(() => {
        cy.visit("/carrinho"); // Acessar a página de carrinho de compras
    });

    it("Deve realizar o checkout com sucesso", () => {
        realizarCheckout("João da Silva", "4111111111111111", "12/2024", "123");

        cy.get(".mensagem-confirmacao").should("contain", "Pedido confirmado com sucesso"); // Verificar se a mensagem de confirmação do pedido é exibida
    });

    it("Deve exibir erro ao fornecer dados de pagamento inválidos", () => {
        realizarCheckout("João da Silva", "1234", "01/2023", "abc");

        cy.get(".mensagem-erro").should("contain", "Dados de pagamento inválidos"); // Verificar se a mensagem de erro é exibida
    });
});

function realizarCheckout(nome, numeroCartao, expiracao, cvv) {
    cy.get(".btn-finalizar-compra").click(); // Clicar no botão "Finalizar Compra"
    cy.url().should("include", "/pagamento"); // Verificar se o usuário é redirecionado para a página de pagamento
    cy.get("#campo-nome").type(nome); // Preencher o campo "Nome" com um valor
    cy.get("#campo-cartao").type(numeroCartao); // Preencher o campo "Número do Cartão" com um valor
    cy.get("#campo-expiracao").type(expiracao); // Preencher o campo "Data de Expiração" com um valor
    cy.get("#campo-cvv").type(cvv); // Preencher o campo "CVV" com um valor
    cy.get(".btn-confirmar-pedido").click(); // Clicar no botão "Confirmar Pedido"
}

