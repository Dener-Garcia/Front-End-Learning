// Variaveis e seus tipos

// conheca a var

console.log("Variaveis com var")
var nomeVar = "dener"

// conheca a let

console.log("Variavel tipo let respeita o local onde esta inserida diferente da var")
let nomeLet = "dener"
console.info(nomeLet)
console.log("Agora uma variavel let que esta dentro de um bloco de chaves")

    {
        let nomeLet = "garcia";
        console.info(nomeLet);
    }

console.log("repare que ela respeito o nome antes que era dener e depois dentro do bloco garcia e depois fora do bloco voltou a ser dener")
console.info(nomeLet)

// conheca a const

console.log("Variavel tipo const voce nao altera durante o codigo, se voce definir um valor para ela deve permanecer")
const nomeConst = "dener"

// Tipos de dados no javascript

console.error("tipos de dados, string, inteiro, bool entre outros")
let nome = "Dener" // variavel tipo string
let idade = 31  // variavel numerica
let feliz = true // variavel booleana
let nada = undefined// undefined variavel vazia nao definidada
//let simbolo = symbol() // variavel tipo simbolo
//let objeto = {} // variavel tipo objeto eh uma caixa grande com variaveis e funcoes dentro que voce pode manipular

// Estruturas condicionais if else

let condicao = true

console.error("conheca o if else")
if (condicao) {
    console.log("entrou no if devido condicao ser true")
} else {
    console.log("condicao era falsa por isso entrou no else")
}

// Operadores 

console.info("== compara se eh igual ao conteudo")
console.info("=== compara se eh igual ao conteudo e tambem ao tipo de dado")
console.info("!== compara se eh diferente de xxxxxx")
console.info("&& condicao de and var1 e var2 da a condicao de true")
console.info("|| condicao de ou var1 ou var2 da a condicao de true")

console.log("operadores de igualdade == e ==== comparando com numero 10 em um if else")
let variavel1 = "10"
console.log(variavel1)
if (variavel1 == 10) {
    console.error(variavel1, "entrou no if, considerou true devido == comparar se o conteudo eh igual a 10 mesmo sendo uma string")
}
console.log(" exemplo de diferenca entre === e == eh que o primeiro tanto o conteudo como o tipo de dado tem de ser o mesmo para ser true")
let variavel2 = 11
if (variavel2 === 11) {
    console.log(variavel2, "entrou no if, considerou true devido varaivel2 valer 11 e ser do tipo number, se colocar uma string ja nao vai dar certo como no ==")
}
else{
    console.log(variavel2, "entrou no else devido comparacao com uma string usando o ===")
}

// conhecendo o switch case

console.error("trabalhando com swith case")
const nameMain = "Bender"

switch (nameMain) {
    case "Joao":
        console.log("Joao eh o nome errado")
        break;

        case "dag":
        console.log("dag eh o nome secundario")

        case "Bender":
        console.log("Bender eh um apelido")
        break;

    default:
        console.info("esse eh a excessao caso nenhum dos valores de case sejam verdadeiros")
        break;
}

// functions e arrow functions

console.error("Trabalhando com funcoes sem parametros")
function helloWorld(){
    console.log("hello world em forma funcao")
}

console.log("chamando uma funcao sem parametros")
helloWorld()

// function com parametros

console.error("Trabalhando com funcoes com parametros")
function calculaArea(a, b){
    console.log("funcao para calcular area, ela tem 2 parametros a,b")
    return a * b;
}

console.log("chamando a funcao e passando valores para trocar a, b pelo 4,2")
console.info(calculaArea(4,2), "Resultado de calculo area 4 * 2 usando uma funcao que tem parametros")

// Const function direto

console.error("Trabalhando uma const que ja eh uma function")

const areaRetangulo = function(a, b){
    console.log("funcao para calcular area, ela tem 2 parametros a,b")
    return a * b;
}

console.log("declarando uma const areaRetangulo = a um function e ja abrindo as chaves para executar")
console.info(areaRetangulo(4,2), "Resultado de calculo area 4 * 2 usando uma const que ja tem uma function atrelada")

// Arrow functions

console.error("Trabalhando arrow function =>")

const arrowRetangulo =(a, b) =>{
    console.log("funcao para calcular area, ela tem 2 parametros a,b")
    return a * b;
}

console.log("declarando uma const arrowRetangulo = e abrindo uma arrow function com o =>")
console.info(arrowRetangulo(4,2), "Resultado de calculo area 4 * 2 usando uma const que ja tem uma function atrelada")

// Objetos

console.error("Trabalhando com objetos, para criar basta definir um nome seguido = {} podemos ter propriedades, atributos e ate funcoes")
var quadrado = {
    lados: 4, // sempre separe as propriedade com a virgula ,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return 4 * lado
    }
};

// acessando as caracteristica de um objeto basta por nove dele seguido de ponto.
console.log("mostrando todas propriedade do objeto quadrado")
console.info(quadrado.lados)
console.info(quadrado.area(4), "lembre-se quando eh uma funcao voce deve chamar ela com o () + o valor do parametro no caso 4*4 =16")
console.info(quadrado.perimetro(4))

// outra possibilidade de trabalhar com obejtos eh poder referenciar as variavevis das funcoes usando as proprias variaveis definidas dentro do objeto

// vendo atributos de um titulo pelo console log

console.error("Vendo propriedades especificas de um elemento h2")
const tituloAula1 = document.querySelector("h2")
console.log(tituloAula1.innerHTML)
console.log(tituloAula1.classList)

// Seletores de elementos por id basta por o nome do id da tag

console.log("selecao por id")
const para2 = document.getElementById("para2")
console.log(para2)


// Seletores de elementos por classe. usando o byclassname nao precisa por o . antes do nome da classe ele retorna um html collection

console.log("selecao por classes")
const paraBlue = document.getElementsByClassName("paraBlue")
console.log(paraBlue)
console.log("Selecionando um elemento que tem mais de uma classe mas com a classe anterior tambem, basta selecionar como se fosse um array")
console.log(paraBlue[1])

// Seletores de elementos pelo proprio nome da tag do html, vai retornar tudo que usa essa tag
console.log("selecao por tag de html")
const listAula1 = document.getElementsByTagName("ul")
console.log(listAula1)

// Seletores de elementos individual usando query selector muito parecido como utilizado no css sempre retorna o primeiro elemento com aquele id ou classe

console.log("selecao por query selector por classe coloque o . + nome da classe")
const list2Aula1 = document.querySelector(".listItem")
console.log(list2Aula1)
console.log("selecao por query selector hierarquia de tag o nome da tag + seu sub item")
const list3Aula1 = document.querySelector("ul li")
console.log(list3Aula1)

// Seletores de todos elementos usando query selector all vai retornar uma node list com todos os elementos com aquela classe

console.log("selecao por query selector hierarquia de tag o nome da tag + seu sub item")
const listAllAula1 = document.querySelectorAll(".itemAula1")
console.log(listAllAula1)
console.log("Para acessar um elemento especifico lembre-se que ele comporta-se como um array entao basta especificar o elemento dentro de [] ")
console.log(listAllAula1[1])

// Usando o foreach para nodelist funciona porem para html collection nao, entao atencao

listAllAula1.forEach((nameAny) =>{
    nameAny.classList.add("Classe-adicionada-foreach");
    })

// Adicionando classes via JS

const para3 = document.querySelector(".para3")

console.log("Adicionando uma classe chamada bGroundRed  e bGroundBlue")
para3.classList.add("bGroundRed", "bGroundBlue")
console.log(para3)

// Removendo classes via JS

console.log("Removendo somente uma classe chamada e bGroundBlue")
para3.classList.remove("bGroundBlue")
console.log(para3)

// Alterando classes via toggle JS se ja existe a classe definida no html ele remove, se nao existir ele adiciona

console.log("Usando o .toggle para adicionar uma classe")
para3.classList.toggle("bGroundGreen")
console.log(para3)

console.log("Usando o .toggle para remover uma classe adicionada pelo toggle")
para3.classList.toggle("bGroundGreen")
console.log(para3)

// Trocando classes via .replace JS

console.log("Usando o .replace para trocar uma classe do HTML")
para3.classList.replace("auxPara3", "ReplaceClass")
console.log(para3)

// Obtendo, trocando e adicionando atributos a tags com JS

const aula1Img = document.querySelector("#Aula1Img")

console.log("Usando o get attribute para ver o que tem no src da img")
console.info(aula1Img.getAttribute("src"))

// Trocando atributos

console.log("Trocando atributo src de uma tag de img com o setAttribute")
aula1Img.setAttribute("src", "Troquei o src da imagem usando o js")
console.info(aula1Img.getAttribute("src"))

// Adicionando atributos

console.log(aula1Img)
console.log("Criando um atributo de alt de uma tag de img que nao estava presente no html com o setAttribute")
aula1Img.setAttribute("alt", "Criando esse atributo pelo js, nao existia um alt para a image")
console.log(aula1Img)

// Removendo atributos

console.log("removendo o atributo de alt criado com o setAttribute")
aula1Img.removeAttribute("alt", "Criando esse atributo pelo js, nao existia um alt para a image")
console.log(aula1Img)

// Criando tags no meu documento HTML pelo JS

console.log("Criando uma tag link a")
let link = document.createElement("a");
console.log("Criando o atributo href com setAttribute na let chamada link")
console.info("Primeiro passe o atributo depois o conteudo do atributo")
link.setAttribute("href", "https://em3de.com")
link.setAttribute("target", "_blank")

// Criando um elemento e jogando um elemento dentro do outros

let conteudo = document.createTextNode("Acessar meu site com um link criado pelo JS somente")

// Adicionando informacoes ao filho e colocando o conteudo criado dentro dele

link.appendChild(conteudo)

// Selecionando uma div criada no HTML para jogar o meu link criado no js dentro dela

const container = document.querySelector("#app")

// Jogando variavel link dentro da variavel container que

container.appendChild(link);

// Modificando o CSS pelo javascript, dessa forma

// Quando uma propriedade tem 2 nomes separados por hiffen a segunda palavra coloque letra maiscula ex background-color = backgroundColor

console.log("Colocando attributos de css numa variavel usando o .style")
link.style.backgroundColor = "#8fa876"
link.style.backgroundColor = "#090b0f"
console.log(link)

// Modificando uma div pelo js

let box = document.querySelector(".box")
console.log(box)
box.style.width = "auto"
box.style.height = "250px"
box.style.backgroundColor = "#df80ff"

// Identificando caracteristica das tags do CSS usando o JS

console.log("Pegando dados de CSS de uma tag")
const box2 = document.querySelector(".box2")
console.log("retornando distancia do top ate a div box2 com o offsetTop, use left, right e botton tambem")
console.log(box2.offsetTop)
console.log(box2.offsetLeft)

console.log("retornando scroll vertical do Y da tela")
console.log(window.pageYOffset)

// Imprementando media query pelo JS

console.info("Aplicando estilos em relacao ao tamanho tela para responsividade, seria mesmo do media query")
const myQueryLayout = window.matchMedia("(max-width: 569px)")

if(myQueryLayout.matches) {
    console.log("mobile ativa")
    console.log(myQueryLayout)
}
    else {
        console.log("tela normal")
        console.log(myQueryLayout)
    }

// Eventos javascript e criando funcao no corpo do evento

const titleEvento = document.querySelector("#titleEvento")

//Primeiro passamos o evento depois a funcao esta pode ser trocada por uma arrow function () =>
titleEvento.addEventListener("click", function(){
    console.log("monitorando acao de click sobre uma id de um titulo, funcao executada dentro do addEventListener")
})

// Eventos javascript e criando funcao fora do evento

function mostrarHover(){
    console.log("funcao de hover executada fora de um addEventListener")
}

//Primeiro passamos o evento depois o nome da funcao que foi declarada fora do contexto
titleEvento.addEventListener("mouseover", mostrarHover)

// Observando um event

let btnAula3Dom = document.querySelector("#btnAula3Dom")

function callBack(event){
    console.info("Retorno de uma funcao chamada callBack usando o event.target ao dar um click no botao")
    console.log(event.target)
}

btnAula3Dom.addEventListener("click", callBack)

// Usando uma funcao para personalizar botao

function changeBgColorRed(event){
    console.log("trocando cor do botao adicionando uma classe ao clic do botao com mouseover")
    btnAula3Dom.classList.toggle("btn-blue")
}

btnAula3Dom.addEventListener("mouseover", changeBgColorRed)