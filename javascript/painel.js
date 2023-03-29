const projetos = document.querySelectorAll(".projetos")
const filtrarJs = document.querySelector("#filtrojs h2")
const filtrarCss = document.querySelector("#filtrocss h2")
const filtrarHtml = document.querySelector("#filtrohtml h2")




filtrarJs.addEventListener("click", function(){
        const acharJs = document.querySelectorAll(".js")
        projetos.forEach(function(item){
            item.classList.remove("mostrar-filtro")
            item.classList.add("esconder-filtro")
        })
        acharJs.forEach(function(itemjs){
            itemjs.classList.add("mostrar-filtro")  
                     
        })
})

filtrarCss.addEventListener("click", function(){
    const acharCss = document.querySelectorAll(".css")
    acharCss.forEach(function(itemcss){
        itemcss.classList.add("mostrar-filtro")           
    })
})
filtrarHtml.addEventListener("click", function(){
    const acharHtml = document.querySelectorAll(".html")
    acharHtml.forEach(function(itemhtml){
        itemhtml.classList.add("mostrar-filtro")           
    })
})



