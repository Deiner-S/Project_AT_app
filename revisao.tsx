

class Pessoa {
  nome: string;
  idade: number;
  ativo: boolean;
  
  // Propriedade opcional
  interesses?: string[];

  constructor(nome: string,idade: number, ativo: boolean, interesses?: string[]) {
    this.nome = nome;
    this.idade = idade;
    this.ativo = ativo;
    this.interesses = interesses;
  }

  dizerOla(): string {
    return `Oi, eu sou ${this.nome}!`;
  }

  envelhecer(): void {
    this.idade += 1;
  }
}
