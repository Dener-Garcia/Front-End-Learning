import "./css/index.css"
import IMask from "imask"

// document.querySelector permite pegar objetos na DOM
// como se fosse no CSS, aqui criamos duas variaveis para usar no lugar do fill dos SVG e uma variavel para mudar a imagem do logo do cartao

const ccBgColor01 = document.querySelector(
  ".cc .cc-bg svg > g g:nth-child(1) path"
)
const ccBgColor02 = document.querySelector(
  ".cc .cc-bg svg > g g:nth-child(2) path"
)

const ccLogoBrand = document.querySelector(".cc .cc-logo span:nth-child(2) img")

// Criamos uma funcao com uma variavel colors com uma estrutura de dados de array para cada cor de cartao

function setCard(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "grey"],
  }

  // setAttribute ira trocar o fill dos path pela cor desejada que pode ser em hexa ou nesse caso estamos acessando a propriedade da funcao criada acima "colors[type]". Seria o mesmo que colors.visa ou colors.mastercard porem usamos o type mais a posicao do array (lembre-se todo array comeca em 0, entao dentro de cada cartao trocamos a variavel ccBgColor01, 02 pelo hexa dentro do array de cada marca.
  // o segundo setAttribute vai trocar a src da brand do cartao

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogoBrand.setAttribute("src", `cc-${type}.svg`)
}

// fora da function onde definimos a variavel colors basta dar um setCard + nome do array que ele ja troca as cores conforme definimos na array colors da function.

//setCard("default")

//comentando a linha acima e definindo a linha abaixo voce pode trocar os atributos no console log usando globalThis.setCard("mastercard")

globalThis.setCard = setCard

// Tratamento input CVC

// Pegando input pelo id usando querySelector e colocando numa variavel
// usando o imask e definindo uma variavel para ele com um determinado padrao, no caso ate 4 numeros

const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}

// definindo uma variavel que ja passou pelo imask - veja documentacao como usar em caso duvida. para usar diga a variavel apos o IMask e depois o tipo de mascara

const securityCodeMasked = IMask(securityCode, securityCodePattern)

// Tratamento input validade

// definindo uma variavel para o id do input expiracao
// criando um padrao para mes e ano e colocando na variavel que passou pelo imask

const expirationDate = document.querySelector("#expiration-date")

// quando uso blocks eu defino uma variavel com o mesmo nome que usei na mask e defino suas regras como quantidade de algarismos ou mesmo limites de maximo e minimo.

// new Date() essa instrunção retorna a data ela é usada em java script puro mesmo. se quiser retornar somente o ano basta por a frente um .getFullYear
// esse new Date() retorna um numero, para transformar em string basta envolver todo o comando por um String(). ex String(new Date().getFullYear())
// para diminuir o tamanho do dado ex. 2022 para 22 acrescente um slice e o tamanho desejado, no final do comando, ex: String(new Date().getFullYear()).Slice(2).

const expirationDatePattern = {
  mask: "mes{/}ano",
  lazy: false, // mostra placeholder do tamanho do campo ex. __/__
  blocks: {
    mes: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },

    ano: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
}

const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

// Tratamento input numero cartao

const cardNumber = document.querySelector("#card-number")

// expressoes regulares rules (leitura da esquerda para direita, ler um caractere por vez, cuidado com caracteres reservados a sintaxe)
// mascara com regex (expressoes regulares) de varios tipos.
// regras da mascara
// visa = Inicia com o numeral 4 seguido de 15 digitos quaisquer.
// master = Inicia com 5, seguido de um digito entre 1 e 5, seguido de mais dois digitos OU
// inicia com 22, seguido de um digito entre 2 e 9, seguido de mais 1 digito OU
// inicia com 2, seguido de um digito entre 3 e 7, seguido de mais 2 digitos.

const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",

      // ^4 = serve para informar que deve comecar com o numero 4
      // \d{0,15} = serve para dizer que apos o 4 tera um digito que pode ter de 0 a 15 ocorrencias.

      regularExpression: /^4\d{0,15}/,
      cardBrand: "visa",
    },
    {
      mask: "0000 0000 0000 0000",

      // como a expressao do master tem varios OU podemos utilizar os agrupadores para fazer os OU, a cada OU colocamos entre parenteses e um colchete [] a nova expressao afim de dar essa condicao
      //  (^5[1-5]\d{0,2}) Comeca com 5, o proximo digito tem de ser entre 1 e 5, o dois ultimos numeros sao digitos para fazer os OU basta inserir um | entre as expressoes veja abaixo
      //  |^22\d[2,9]\d Comeca com 22, proximo digito vai de 2 podendo chegar ate 9 seguido de mais um digito
      // (^2\d[3,7]\d{0,2}) Comeca em 2 seguido de um digito entre 3-7 seguido de mais 2 digitos
      // \d{0,12}/ passando por todos os OU ele tem mais 12 digitos para completar a expressao

      regularExpression: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardBrand: "mastercard",
    },

    {
      mask: "0000 0000 0000 0000",
      cardBrand: "default",
    },
  ],

  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "")
    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      return number.match(item.regularExpression)
    })
    return foundMask
  },
}

const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

// Tratamento button

// por padrao quando um botao esta dentro de um form ele recarrega a pagina ao ser clicado.

const addCard = document.querySelector("#add-card")

// criando evento de onclick para o botao addCard

addCard.addEventListener("click", () => {
  alert("botao clicado")
})

// tratamento campo nome do titular

const cardHolder = document.querySelector("#card-holder")
cardHolder.addEventListener("input", () => {
  const ccHolder = document.querySelector(".cc-holder .value")

  // trocando o texto do elemento cc-holder .value pelo do conteudo dentro da input card-holder
  // com .lenght temos possibilidade de nao zerar o campo no cartao pois ele ira comparar com o tamanho de caracteres digita no campo campo
  // usamos 3 === para verificar se o conteudo e o tipo sao os mesmos.
  // funcionamento do fi alternario, se cardHolder.value.length for = 0 ele ira jogar no ccHolder.innerText "Fulano Souza" se for verdadeiro ou seja maior que 0 ele joga o valor do cardHolder.value

  console.log("cardHolder.value")
  ccHolder.innerText =
    cardHolder.value.length === 0 ? "Fulano Souza" : cardHolder.value
})

// tratamento demais campos

securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value)
})

function updateSecurityCode(code) {
  const ccSecutiry = document.querySelector(".cc-security .value")

  ccSecutiry.innerText = code.length === 0 ? "123" : code
}

cardNumberMasked.on("accept", () => {
  const cardType = cardNumberMasked.masked.currentMask.cardtype
  setCard(cardType)
  updateCardNumber(cardNumberMasked.value)
})

function updateCardNumber(number) {
  const ccNumber = document.querySelector(".cc-number")

  ccNumber.innerText = number.length === 0 ? "1234 5678 9012 3456" : number
}

expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value)
})

function updateExpirationDate(date) {
  const ccExpiration = document.querySelector(".cc-extra .value")
  ccExpiration.innerText = date.length === 0 ? "02/32" : date
}
