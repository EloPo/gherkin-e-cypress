describe("Pesquisar por um livro em um sistema de gerenciamento de biblioteca", () => {
    beforeEach(() => {
        cy.visit("/biblioteca"); // Acessar a página da biblioteca
    });

    it("Deve exibir resultados da pesquisa corretamente", () => {
        realizarPesquisa("Harry Potter");

        cy.get(".resultado-pesquisa")
            .should("have.length", 3) // Verificar se foram encontrados 3 resultados
            .each((resultado) => {
                cy.wrap(resultado).should("contain", "Harry Potter"); // Verificar se o título do livro contém "Harry Potter"
            });
    });

    it("Deve exibir mensagem de erro ao pesquisar por um livro inexistente", () => {
        realizarPesquisa("Livro Inexistente");

        cy.get(".mensagem-erro").should("contain", "Nenhum resultado encontrado"); // Verificar se a mensagem de erro é exibida
    });
});

function realizarPesquisa(termo) {
    cy.get("#campo-pesquisa").type(termo); // Preencher o campo de pesquisa com o termo desejado
    cy.get("#btn-pesquisar").click(); // Clicar no botão de pesquisa
}
