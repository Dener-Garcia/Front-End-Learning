// criando uma variavel, sempre que definimos uma variavel com espaço e new e atribuindo um metodo, dessa forma eu estou instanciando uma classe

 // instanciando uma classe a uma variavel dessa forma eu transformo minha var num objeto que recebe aqueles metodos, propriedades e atributos daquela classe

var xhr = new XMLHttpRequest()

// para inciar minha variavel usamos o metodo .open com dois parametros que é GET parapegar a informação e de onde vou pegar. No exemplo vamos trabalhar com a api do github e estou pegando do meu github

xhr.open("GET", "https://api.github.com/users/dener-garcia" )

// como estou so pegando a informação eu nao tenho nenhum parametro eu vou dar um .send null para ver oque esta acontecendo no browser navegue ate network e va em xhr

xhr.send(null)

// para verificar se deu certo minha requisição ou não eu uso o metodo onreadystatechange ai eu criou uma função para verificar se a requisição foi feita atraves do status, uma informação que posso pegar para isso é verificar se o .readState === 4

// como ele vai vir como texto eu devo transformar para objeto para depois trabalhar com ele no meu programa

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
}