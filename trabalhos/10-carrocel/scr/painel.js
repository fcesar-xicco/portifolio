const imagens = document.querySelectorAll(".slide")
const setaVoltar = document.getElementById("seta-voltar")
const setaAvancar = document.getElementById("seta-avancar")

let imagemAtual = 0

setaAvancar.addEventListener("click", function(){
    if(imagemAtual === imagens.length -1){
        return
    }
    removerImagem()
    proximaImagem()
    liberarSetas()
})

setaVoltar.addEventListener("click", function(){
    if(imagemAtual == 0){
        return
    }
    removerImagem()
    voltarImagem()
    liberarSetas()
})

function liberarSetas(){
    if(imagemAtual != 0 ){
        setaVoltar.classList.remove("opacidade")
    }else{
        setaVoltar.classList.add("opacidade")
    }
    if(imagemAtual === imagens.length-1){
        setaAvancar.classList.add("opacidade")
    }else{
        setaAvancar.classList.remove("opacidade")
    }
}

function removerImagem(){
    const imagemComMostrar = document.querySelector(".mostrar")
    imagemComMostrar.classList.remove("mostrar")
}

function proximaImagem(){
    imagemAtual++
    imagens[imagemAtual].classList.add("mostrar")
}

function voltarImagem(){
    imagemAtual--
    imagens[imagemAtual].classList.add("mostrar")
}






















/*
const imagens = document.querySelectorAll(".slide")
const setaVoltar = document.getElementById("seta-voltar")
const setaAvancar = document.getElementById("seta-avancar")

let imagemAtual = 0

setaAvancar.addEventListener('click', function(){
    if(imagemAtual === imagens.length-1){
        return
    }
        removerImagem()
        alterarImagem()
        desbloquearBloquearSetas()
})


setaVoltar.addEventListener("click", function(){
    if(imagemAtual == 0){
        return
    }
    removerImagem()
    imagemAtual--
    imagens[imagemAtual].classList.add("mostrar")
    desbloquearBloquearSetas()
})


function removerImagem(){
    const tirarImagem = document.querySelector(".mostrar")
    tirarImagem.classList.remove("mostrar")
}

function alterarImagem(){
    const proximaImagem = document.querySelector(".mostrar")
    imagemAtual++
    imagens[imagemAtual].classList.add("mostrar")
}


function desbloquearBloquearSetas(){
    chegouNaUltima = imagemAtual === imagens.length -1;
    if(chegouNaUltima){
        setaAvancar.classList.add("opacidade")
    }else{
        setaAvancar.classList.remove("opacidade")
    }
    const primeiraImagem = imagemAtual === 0;
    if(primeiraImagem){
        setaVoltar.classList.add("opacidade")
    }else{
        setaVoltar.classList.remove("opacidade")
    }


}*/