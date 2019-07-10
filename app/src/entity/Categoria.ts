export default class Categoria {
   public id: string;
   public nome: string;

   constructor(nome: string, id?: string) {
      this.nome = nome;
      if (id) this.id = id;
   }
}
