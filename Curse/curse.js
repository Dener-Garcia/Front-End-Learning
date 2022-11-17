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