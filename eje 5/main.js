import Area from './Area.js'
const mostrar = () => {

    const valor1 =document.getElementById("inp-A").value
    const base =document.getElementById("inp-B").value
    const h =document.getElementById("inp-C").value
    
    const instancia = new Area()

    instancia.valor1=valor1
    instancia.base=base
    instancia.h=h

    const respuesta=instancia.calcularAreaTrap()

    document.getElementById("r1").textContent=respuesta
} 
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)


const mostrar2 = () => {
    const altura2 =document.getElementById("altura").value
    const base2 =document.getElementById("base").value

    const instancia2 = new Area()

    instancia2.alt2=altura2
    instancia2.bs2=base2

    const respuesta2=instancia2.calcularAreaTriangulo()

    document.getElementById("r2").textContent=respuesta2
}
const boton2 = document.getElementById("btn_calcular2")
boton2.addEventListener("click",mostrar2)



