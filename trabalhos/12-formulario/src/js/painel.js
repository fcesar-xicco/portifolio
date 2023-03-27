/* Criar
- Passo 1 - Variavel referente a todas as perguntas(input)
- Passo 2 - Variavel referente a todas informações obrigatórias
- Passo 3 -  variavel referente ao botaãod e enviar
*/

const perguntas = document.querySelectorAll(".pergunta")
const obrigarDigitar = document.querySelectorAll(".resp-obr")
const botaoEnviar = document.querySelector("#botao-enviar")

/*
- Passo 4 - Usar forEach para percorrer todas as perguntas nas posições com função 
- Passo 5 - Usar a função sob um click para exercutar a conferencia 
- Passo 6 - Utilizar a condição if para veririfcar se existe ou não caracteres no campo de perguntas
- Passo 7 - Para a condicão especifica remover ou adcionar as classes desejadas

*/
perguntas.forEach(function(pergunta, posicao){
    botaoEnviar.addEventListener("click",function(){
        if(pergunta.value !==""){
            pergunta.classList.remove("nao-preenchido")
            obrigarDigitar[posicao].classList.remove("mostrar-obrigatorio")
            pergunta.classList.add("preenchido")
            
        }else if(pergunta.value ===""){
            pergunta.classList.remove("preenchido")
            pergunta.classList.add("nao-preenchido")
            obrigarDigitar[posicao].classList.add("mostrar-obrigatorio")
        }
    })
    })


