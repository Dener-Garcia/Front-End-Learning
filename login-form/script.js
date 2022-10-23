function showPassword() {

    const eye = document.getElementById('eye');
    const noEye = document.getElementById('noEye');
    const passwordField = document.getElementById('passwordField');

    // para acessar o css de um elemento basta por .style a frente do id
    // pegar uma propriedade especifica basta por . + nome propriedade
    // === verifica se propriedade display esta como none, nesse caso.
    
    if (noEye.style.display === 'none') {

        noEye.style.display = 'block';
        eye.style.display = 'none';
        passwordField.type = 'text'; // muda o tipo de input de password para text
        
    } 
        else {

            noEye.style.display = 'none';
            eye.style.display = 'block';
            passwordField.type = 'password';
            
    }
};

// pega o onclick do botao de entrar e chama a function do proprio evento de onclick
// nesse caso function(e), o e.preventDefault retira comportamento de atualizar a pagina
// comportamento comum quando se usa um botao tipo submit

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    console.log("falsssssssssssssa");
    }
);
