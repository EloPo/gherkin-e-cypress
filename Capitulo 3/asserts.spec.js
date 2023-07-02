//Tópico: Testando comportamentos e validando resultados

cy.get('#elemento').should('exist'); // Verifica se um elemento existe na página
cy.get('#elemento').should('be.visible'); // Verifica se um elemento está visível
cy.get('#elemento').should('have.text', 'Texto esperado'); // Verifica se um elemento possui o texto esperado
cy.url().should('eq', 'https://www.example.com'); // Verifica se a URL atual é igual à esperada
