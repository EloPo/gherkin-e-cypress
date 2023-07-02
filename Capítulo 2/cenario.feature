  Scenario: Login com sucesso
    Given que estou na página de login
    When eu insiro meu nome de usuário e senha
    Then devo ser redirecionado para a página inicial
