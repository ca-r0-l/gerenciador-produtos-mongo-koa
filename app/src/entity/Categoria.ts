export default class Categoria {
   public id: number;
   public nome: string;

   constructor(nome: string, id?: number) {
      this.nome = nome;
      if (id) this.id = id;
   }
}
