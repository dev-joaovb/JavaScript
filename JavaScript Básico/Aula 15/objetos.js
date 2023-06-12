// Objeto simples com function
/*function criaPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('João', 'Bueno', 25);
const pessoa2 = criaPessoa('Jéssica', 'Pereira', 29);
const pessoa3 = criaPessoa('Erika', 'Gonçalves', 15);
const pessoa4 = criaPessoa('Garcia', 'Blueno', 33);
const pessoa5 = criaPessoa('Jhon', 'Irving', 35);
const pessoa6 = criaPessoa('Pedro', 'Alves', 29);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
*/

/// testando objetos e métodos
const pessoa1 = {
    // objetos
    nome: 'João',
    sobrenome: 'Bueno',
    idade: 25,

    /// metodos
    fala(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    },

    incrementaIdade(){
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();