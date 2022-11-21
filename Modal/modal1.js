


function cliquei(){
    console.log("essa funcao serve para ver no que voce clicou")
}


const btnModal = document.querySelector(".btn-modal")
const modalScreen = document.querySelector("#modal1")
const modalCloseBtn = document.querySelector(".modal-content")

function modalOn(){
    modalScreen.style.display = "flex";
    console.log("Entrou no modal")
}

function modalOff(){
    modalScreen.style.display = "none";
    console.log("Saindo do modal")
}

btnModal.addEventListener("click", modalOn)
modalCloseBtn.addEventListener("click", modalOff)