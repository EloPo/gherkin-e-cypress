Funcionalidade: Checkout de um pedido
  Como um usuário logado
  Eu quero realizar o checkout de um pedido
  Para concluir a compra

Cenário: Realizar o checkout de um pedido
  Dado que estou na página de carrinho de compras
  E tenho itens adicionados ao carrinho
  Quando eu clico no botão "Finalizar Compra"
  Então devo ser redirecionado para a página de pagamento
  E devo preencher as informações de pagamento
  E clico no botão "Confirmar Pedido"
  Então devo ver uma mensagem de confirmação do pedido
  E o pedido deve ser registrado no sistema
