import Categoria from "./Categoria";
export default class Produto {
   public id: string;
   public nome: string;
   public preco_unitario: number;
   public categoria: Categoria;

   constructor(nome: string, preco_unitario: number, categoria: Categoria, id?: string) {
      this.nome = nome;
      this.preco_unitario = preco_unitario;
      this.categoria = categoria;
      if (id) this.id = id;
   }
}
