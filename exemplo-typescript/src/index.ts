import Comparador from './Comparador';
import ComparadorString from './ComparadorString';
import ComparadorPessoa from './ComparadorPessoa';
import Pessoa from './models/Pessoa';

const pessoaA = new Pessoa('Sidney', '9999-9999');
const pessoaB = new Pessoa('Valdineia', '8888-8888');

const comparadorPessoa = new ComparadorPessoa();

console.log(comparadorPessoa.ehMaior(pessoaA, pessoaB));
console.log(comparadorPessoa.ehMenor(pessoaA, pessoaB));
console.log(comparadorPessoa.ehIgual(pessoaA, pessoaB));

console.log();

const strA = 'cavalo';
const strB = 'boi';

const comparadorString = new ComparadorString();

console.log(comparadorString.ehMaior(strA, strB));
console.log(comparadorString.ehMenor(strA, strB));
console.log(comparadorString.ehIgual(strA, strB));