// criando uma variavel, sempre que definimos uma variavel com espaço e new e atribuindo um metodo, dessa forma eu estou instanciando uma classe

 // instanciando uma classe a uma variavel dessa forma eu transformo minha var num objeto que recebe aqueles metodos, propriedades e atributos daquela classe

var xhr = new XMLHttpRequest()

// para inciar minha variavel usamos o metodo .open com dois parametros que é GET parapegar a informação e de onde vou pegar. No exemplo vamos trabalhar com a api do github e estou pegando do meu github

xhr.open("GET", "https://api.github.com/users/dener-garcia" )

// como estou so pegando a informação eu nao tenho nenhum parametro eu vou dar um .send null para ver oque esta acontecendo no browser navegue ate network e va em xhr

xhr.send(null)

// para verificar se deu certo minha requisição ou não eu uso o metodo onreadystatechange ai eu criou uma função para verificar se a requisição foi feita atraves do status, uma informação que posso pegar para isso é verificar se o .readState === 4

// como ele vai vir como texto eu devo transformar para objeto para depois trabalhar com ele no meu programa como objeto

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        console.info("Resultado Ajax")
        console.log(JSON.parse(xhr.responseText))
        console.info("Resultado Ajax")
    }
}

// criei uma variavel e atribui ela a uma funcao, ela me retorna um objeto chamado Promesas pois usei o new, e dentro da funcao basica Promesas ela tem 2 variaveis que tambem sao funcoes a resolve e a reject.

// para a funcao resolve vou executar algo quando minha requisicao der certo e na reject quando a requisicao der errado

const minhaPromise = function(){
    return new Promise(function(resolve, reject){
        
        const xhr = new XMLHttpRequest()

        xhr.open("GET", "https://api.github.com/users/dener-garcia" )

        xhr.send(null)

        // verificando status

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                //verificando se o status da requisicao deu certo pelo status 200
                if (xhr.status === 200) {
                    // agora coloco a funcao resolve pois deu certo e quero que ela faca isso me devolver o JSON ja em objeto
                    resolve(JSON.parse(xhr.responseText))}
                else{
                    // caso de errado que me devolva o erro da promisse
                    reject("erro!")
                }
                }
            }
        

    })
}

// Criando variavel para mostrar resultado da promisse, se voce verificar no console vai dar um resultado de penidng devido essa chamada eh sincrona ela nao espera o resultado da requisicao para ler por isso da pendding 

//let resultadoPromisse = minhaPromise()
//console.log("resultado da Promise da variavel", resultadoPromisse)

// Criando uma funcao para a promisse respeitar o tempo da requisicao pra corrigir o erro de Pendding


minhaPromise()
.then(function(response){
    console.log("resultado da Promise assincrona caso de certo com status code 200") 
    console.log(response)
})
.catch(function(error){
    console.log("resultado da Promise assincrona caso de errado nossa requisicao para testar o erro mude o link para um que nao existe") 
    console.log(error)
    
})

// conforme abaixo tudo que fizemos antes podemos resumir com axios de forma simples e da mesma forma .GET, .PUT, .DELETE E .GET

// ele ainda volta um objeto mais completo pois traz ate os meta dados

axios.get("https://api.github.com/users/Kayke-Fujinak")
.then(function(responseDoAxios){
    console.log("resultado da Promise assincrona caso de certo com status code 200") 
    console.log("Trabalhando com AXIOS essa eh a response", responseDoAxios)
})
.catch(function(errorDoAxios){
    console.log("Trabalhando com AXIOS esse eh o erro da requisisao", errorDoAxios) 
    
})