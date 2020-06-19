class Triangulo {

    #base;
    #altura;

    constructor(base, altura) {
        this.#base = base;
        this.#altura = altura;
        Object.freeze(this);
    }

    area() {
        return (this.#base * this.#altura) / 2;
    }

    get base() {
        return this.#base;
    }

    set base(base) {
        this.#base = base;
    }

    get altura() {
        return this.#altura;
    }

    set altura(altura) {
        this.#altura = altura;
    }
}

export default Triangulo;

