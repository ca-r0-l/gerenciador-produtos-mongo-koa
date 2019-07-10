import Endereco from "./Endereco";
export default class Cliente {
   public id: string;
   public nome: string;
   public endereco: Endereco;
   public celular: string;

   constructor(nome: string, endereco: Endereco, celular: string, id?: string) {
      this.nome = nome;
      this.endereco = endereco;
      this.celular = celular;
      if (id) this.id = id;
   }
}
