import Categoria from "./Categoria";
export default class Produto {
   public id: number;
   public nome: string;
   public preco_unitario: number;
   public categoria: Categoria;

   constructor(nome: string, preco_unitario: number, categoria: Categoria, id?: number) {
      this.nome = nome;
      this.preco_unitario = preco_unitario;
      this.categoria = categoria;
      if (id) this.id = id;
   }
}
