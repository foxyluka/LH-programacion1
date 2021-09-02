export default class Bhaskara {
    ca;
    cb;
    cc;

    constructor(a,b,c){
        
        this.ca = a
        this.cb = b
        this.cc = c
    }
    
    calcular_r1(){
    
        const bloque1 = Math.pow(this.cb,2) - (4*this.ca*this.cc)
        const raiz = Math.sqrt(bloque1)
        const r1 = (-this.cb + raiz) / (2*this.ca)

        return r1.toFixed(2)
    }
    
    calcular_r2(){

        const bloque1 = Math.pow(this.cb,2) - (4*this.ca*this.cc)
        const raiz = Math.sqrt(bloque1)
        const r2 = (-this.cb - raiz) / (2*this.ca)

        return r2.toFixed(2)
    }
    
}


























