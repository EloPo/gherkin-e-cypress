describe("Login em um aplicativo de comércio eletrônico", () => {
    beforeEach(() => {
        cy.visit("/login"); // Acessar a página de login
    });

    it("Deve fazer login com sucesso", () => {
        realizarLogin("usuario@exemplo.com", "senha123");

        cy.url().should("not.include", "/login"); // Verificar se foi redirecionado para a página inicial após o login
        cy.get(".usuario-logado").should("contain", "usuario@exemplo.com"); // Verificar se o email do usuário está sendo exibido
    });

    it("Deve exibir mensagem de erro ao inserir credenciais inválidas", () => {
        realizarLogin("usuario@exemplo.com", "senha-incorreta");

        cy.get(".mensagem-erro").should("contain", "Credenciais inválidas"); // Verificar se a mensagem de erro é exibida
    });
});

function realizarLogin(email, senha) {
    cy.get("#email").type(email); // Preencher o campo de email
    cy.get("#senha").type(senha); // Preencher o campo de senha
    cy.get("#btn-login").click(); // Clicar no botão de login
}
