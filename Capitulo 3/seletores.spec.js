//Seleção por identificadores únicos
cy.get('#elemento-id'); // Seleciona um elemento pelo ID
cy.get('.elemento-classe'); // Seleciona um elemento pela classe
cy.get('[data-test=elemento-teste]'); // Seleciona um elemento por um atributo personalizado

//Seleção por texto ou conteúdo
cy.contains('Texto do elemento'); // Seleciona um elemento pelo texto visível
cy.contains('[data-test=elemento-teste]', 'Texto do elemento'); // Seleciona um elemento pelo atributo personalizado e texto visível

//Seleção por hierarquia
cy.get('.elemento-pai').find('.elemento-filho'); // Seleciona um elemento filho dentro de um elemento pai
cy.get('.elemento-irmao').next('.elemento-irmao'); // Seleciona o próximo elemento irmão de um elemento
cy.get('.elemento-avô').find('.elemento-neto').prev('.elemento-pai'); // Seleciona o elemento pai de um elemento neto

//Interagindo com elementos
cy.get('#botao').click(); // Clica em um botão
cy.get('#campo').type('Texto de exemplo'); // Preenche um campo de entrada
cy.get('.elemento').should('be.visible'); // Verifica se um elemento está visível
cy.get('.elemento').scrollIntoView(); // Rola a página até que o elemento seja visível
