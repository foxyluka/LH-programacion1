export default class Area {
    valor1;
    h;
    base;
    alt2;
    bs2;
    calcularAreaTrap()
    {
        const resultado = (((this.valor1+this.base)/2)*this.h)
        return resultado.toFixed(2);
    }

    calcularAreaTriangulo()
    {
        const resultado2 = parseInt(this.alt2) * parseInt(this.bs2)
        return resultado2.toFixed(2);
    }
}