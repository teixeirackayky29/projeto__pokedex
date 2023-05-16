const btnalterartema = document.getElementById("btn-alt-tema")

const body = document.querySelector("body")

const imgbtntrocadetema = document.querySelector(".imagem-botao")

btnalterartema.addEventListener("click", ()=> {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo){

        imgbtntrocadetema.setAttribute("src","./src/imagens/imagens/sun.png")

    } else {
        imgbtntrocadetema.setAttribute("src", "./src/imagens/imagens/moon.png")
    
    }
})
