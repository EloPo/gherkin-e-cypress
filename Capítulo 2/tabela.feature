    Scenario: Adicionar produto ao carrinho
        Given que estou na página do produto
        When eu adiciono o seguinte produto ao carrinho:
            | Produto  | Quantidade |
            | Camiseta | 2          |
            | Calça    | 1          |
        Then o carrinho deve conter 3 itens
