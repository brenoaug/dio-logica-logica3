// Classe Héroi com atributos nome, idade e tipo
class heroi{
  constructor (nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  //metodo que retorna o tipo de ataque do héroi
  tipoAtaque() {
    switch (this.tipo.toLowerCase()) {//transforma o tipo em minusculo para evitar cair no default, caso escreva com a primeira letra maiuscula
      case 'mago':
        return 'Magia';
      case 'guerreiro':
        return 'Espada';
      case 'monge':
        return 'Artes Marciais';
      case 'ninja':
        return 'Shuriken';
      default:
        return 'punhos';
    }
  }
  //metodo que imprime a frase final
  atacar(){
    console.log(`o ${this.tipo} chamado ${this.nome} de ${this.idade} anos atacou usando ${this.tipoAtaque()}`);
  }
}

//instanciando 2 herois
let heroi1 = new heroi('Breno', 27, 'Mago');//eu mesmo
let heroi2 = new heroi('Arthur Morgan', 30, 'Pistoleiro');//eu amo Red Dead 😊

heroi1.atacar();
heroi2.atacar();