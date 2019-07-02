import ClienteBO from "./ClienteBO";
import Cliente from "../entity/Cliente";
import Produto from "../entity/Produto";
import Pedido from "../entity/Pedido";

export default class PedidoBO {
   public static readonly ID_INVALIDO: string = "Id inválido";
   public static readonly VALOR_INVALIDO: string = "Valor inválido";
   public static readonly PRODUTOS_INVALIDOS: string = "Pedidos inválidos. Necessário pelo menos 1.";

   private _clienteBO: ClienteBO = new ClienteBO();

   validId(id: any): void {
      if (!id || (id && id <= 0)) {
         throw new Error(PedidoBO.ID_INVALIDO);
      }
   }

   validCliente(cliente: number | Cliente): void {
      if (cliente) {
         if (cliente && cliente <= 0) {
            throw new Error(ClienteBO.CLIENTE_INVALIDO);
         } else {
            this._clienteBO.validCliente(cliente);
         }
      } else {
         throw new Error(ClienteBO.CLIENTE_INVALIDO);
      }
   }

   validValor(valor: number): void {
      if (!valor || (valor && valor <= 0)) {
         throw new Error(PedidoBO.VALOR_INVALIDO);
      }
   }

   validProdutos(produtos: Array<Produto>): void {
      if (!produtos || (produtos && produtos.length === 0)) {
         throw new Error(PedidoBO.PRODUTOS_INVALIDOS);
      }
   }

   validPedido(pedido: Pedido): void {
      this.validCliente(pedido.cliente);
      this.validValor(pedido.valorCompra);
      this.validProdutos(pedido.produtos);
   }
}
