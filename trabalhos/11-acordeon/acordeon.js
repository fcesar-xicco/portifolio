const itemsPerguntas = document.querySelectorAll(".item")

//invez de criar uma variavel para cada "li" dos items
//essa função ForEach vai executar em cada uma das "li" a função desejada
itemsPerguntas.forEach(function(itemLi){
    //usar aqui dentro a função de click que cada um vai receber
    itemLi.addEventListener("click", function(){
        const ativoAtual = document.querySelector(".ativo")
       
  
        if(ativoAtual){
            ativoAtual.classList.remove("ativo")
        }
        itemLi.classList.add("ativo")

        
    })


})