// Criando um Json de produtos.
// Comece com colchetes pois iremos adicionar varios produtos e logo depois as chaves para definir os objetos

[
    {
        // dentro das chaves sempre use "" par aos objetos

        "id": 1,
        "nome" : "Notebook Dell",
        "quantidade": 5 // o ultimo item nao pode virgula.
    }, // porem as chaves entres os objetos devem ter virgula
    // para adicionar outro produto dentro do colchetes como se fosse outro item basta abrir novas chaves
    { 
        "id": 2, // valores numericos sao aceitos
        "nome" : "Notebook Acer", // valores de string
        "quantidade": 15,
        "usb-c": false, // valores de boolean
        "objeto dentro de objeto": {
            // posso por objeto dentro de um objeto basta abrir as chaves novamente
            "cidade": "Uberlandia",
            "pais": "Brasil"
        },
        // Abrindo colchetes tambem posso definir como se fosse um objeto porem [eh um array] o detalhe eh que voce deve passar so o valor e nao o atributo, exemplo "atributo": "valor", passe osmente o "valor:.
        "objeto em arrays":[
            "Uberlandia",
            "Brasil"
        ]
    }
    
]