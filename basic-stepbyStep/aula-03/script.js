// Condição para verificar se alguém é maior de idade

    let idade = 0;

    idade = 28;

    if (idade >= 18){
        console.log(idade, "você é maior de idade")
    }  
    else {
        console.log(idade, "você é de MENOR")
    }

// Diferenca entre o == e ===

    let idade2 = 30;

    idade2 = "20"

        if (idade2 == 20){
            console.log(idade2,"sua idade é 20 anos")
        };



// Usando o ===

    let idade3 = 10;

    idade2 = 20;
    resultado = 0;
        
        if (resultado = idade2 + idade3){
            console.log(resultado, "anos somando idade 2 e idade 3")
        };

// vários if no mesmo if

    idade2 = 15;
    idade3 = 58;

    resultado = idade2 + idade3;
        
        if(resultado >= 18){
                if (resultado < 60){
                    console.log(resultado, "somando as idades você é um adulto")
            }
        }   

// Multi condicionais && e || usando as mesmas variaveis idade 2 e 3. && serve para and

    idade2 = 10;
        idade3 = 28;

        resultado = idade2 + idade3;
            
            if ((resultado > 18 && resultado < 60) || resultado == 18){
                        console.log(resultado, "Resultado indica mais de 18 anos")
                }  

// Multi condicionais && e || Condição dupla if else

    idade2 = 60;
        idade3 = 8;     

            resultado = idade2 + idade3;

                if (resultado < 18){
                    console.log("Você é de menor")
                } else if (resultado >= 18 && resultado < 60){
                    console.log("Você é de maior")
                } else if (resultado > 60){
                    console.log("Você está idoso")
                }