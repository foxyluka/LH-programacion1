import Anime from "./index.js"

const obtener = () =>{
    const instacia = new Anime()

    instacia.obtenercatalogo()
}

const boton = document.getElementById("btn_obtener")
boton.addEventListener("click",obtener)