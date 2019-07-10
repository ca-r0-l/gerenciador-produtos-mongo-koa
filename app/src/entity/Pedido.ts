import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Pedido {
   public id: string;
   public cliente: Cliente;
   public valorCompra: number;
   public produtos: Array<Produto>;

   constructor(cliente: Cliente, valorCompra: number, produtos: Array<Produto>, id?: string) {
      if (id) this.id = id;
      this.cliente = cliente;
      this.valorCompra = valorCompra;
      this.produtos = produtos;
   }
}
