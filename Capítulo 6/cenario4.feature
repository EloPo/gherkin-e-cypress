Funcionalidade: Pesquisar por um livro

Cenário: Pesquisar por um livro existente
    Dado que estou na página da biblioteca
    Quando eu pesquiso por "Harry Potter"
    Então devo ver os resultados da pesquisa exibidos corretamente

Cenário: Pesquisar por um livro inexistente
    Dado que estou na página da biblioteca
    Quando eu pesquiso por "Livro Inexistente"
    Então devo ver a mensagem de erro "Nenhum resultado encontrado"
