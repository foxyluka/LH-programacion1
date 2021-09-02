import Bhaskara from "./bhaskara.js"

const mostrar = () => {
    const a = document.getElementById("inp-A").value
    const b = document.getElementById("inp-B").value
    const c = document.getElementById("inp-C").value
    /* 
        1-se crea instancia
        2-se envia los parametros
        3-se ejecuta el contructor
    */
    const instancia = new Bhaskara(a,b,c)

    //haciendo uso de la instancia ejecutamos el
    //metodo de la clase calcular_r1()
    const raiz1=instancia.calcular_r1()
    const raiz2=instancia.calcular_r2()

    document.getElementById("r1").textContent = "raiz 1 ="+raiz1
    document.getElementById("r2").textContent = "raiz 2 ="+raiz2
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)