import Triangulo from "./Triangulo";

class TrianguloIsosceles extends Triangulo {

    #lado;

    constructor(base, lado) {
        super(base, undefined);
        this.#lado = lado;
        this.calcularAltura(lado);
    }

    calcularAltura() {
        const meiaBase = this.base / 2;
        let subtracaoPotencias = Math.pow(meiaBase, 2) - Math.pow(this.#lado, 2);
        subtracaoPotencias = subtracaoPotencias < 0 ? subtracaoPotencias * -1 : subtracaoPotencias;
        this.altura = Math.sqrt(subtracaoPotencias);
    }

}

export default TrianguloIsosceles;