describe("Adicionar um item ao carrinho de compras", () => {
    beforeEach(() => {
        cy.visit("/produtos"); // Acessar a página de produtos
    });

    it("Deve adicionar um item ao carrinho com sucesso", () => {
        adicionarItemAoCarrinho("iPhone X");

        cy.get(".carrinho-quantidade").should("contain", "1"); // Verificar se a quantidade de itens no carrinho é atualizada
    });

    it("Deve exibir mensagem de erro ao adicionar item indisponível", () => {
        adicionarItemAoCarrinho("Produto Indisponível");

        cy.get(".mensagem-erro").should("contain", "Produto indisponível"); // Verificar se a mensagem de erro é exibida
    });
});

function adicionarItemAoCarrinho(nomeProduto) {
    cy.contains(".produto-nome", nomeProduto)
        .parent()
        .find(".btn-adicionar-carrinho")
        .click(); // Clicar no botão "Adicionar ao Carrinho" do produto especificado
}
