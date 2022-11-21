// primeiro passo para manipular o Json eh transformar ele em objeto pois o json eh so um texto para isso os principais comandos sao esses abaixos

// JSON.parse('cole em uma linha seu conteudo json') // transforma o json em objeto, dentro dos (copie aqui seu arquivo json use aqui aspas simples)
// JSON.stringify() // transforma um objeto de JS em arquivo json

// criando uma variavel const e pegado o arquivo jason para traze-lo para o js

const json = JSON.parse('{"id": 1,"nome": "Notebook Dell","quantidade": 5}')
console.log("mostranto arquivo colado do json convertido em objeto pelo JSON.parse")
console.log(json)

// exportanto um objeto js para arquivo .json

// crie uma variavel do seu objeto
const caneta = {
    cor: "azul",
    tipo: "desenho",
    tipo: "triangular"
}
console.log("mostranto uma variavel do tipo objeto criada no js")
console.log(caneta)

// crie uma variavel para armazenar o objeto criado acima e atribua a ela formato JSON.stringify dentro do (coloque a variavel do objeto criado)
const stringjson = JSON.stringify(caneta)
console.log("mostrando uma objeto para ser exportado em arquivo json usando o JSON.stringify    ")
console.log(stringjson)

