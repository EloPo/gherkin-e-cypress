Funcionalidade: Criar uma reserva de hotel

Cenário: Criar uma reserva de hotel bem-sucedida
    Dado que estou na página de reserva de hotel
    Quando preencho os detalhes da reserva com:
        | Destino    | Data de Check-in | Data de Check-out |
        | Paris      | 2023-08-15       | 2023-08-20        |
    E clico no botão "Reservar"
    Então devo ver a confirmação da reserva exibida corretamente

Cenário: Criar uma reserva de hotel sem preencher campos obrigatórios
    Dado que estou na página de reserva de hotel
    Quando clico no botão "Reservar" sem preencher os campos obrigatórios
    Então devo ver uma mensagem de erro informando que os campos são obrigatórios

Cenário: Criar uma reserva de hotel com datas inválidas
    Dado que estou na página de reserva de hotel
    Quando preencho os detalhes da reserva com datas inválidas
    E clico no botão "Reservar"
    Então devo ver uma mensagem de erro informando que as datas são inválidas
