import ClienteBO from "./ClienteBO";
import ICliente from "../interfaces/ICliente";
import IProduto from "../interfaces/IProduto";
import IPedido from "../interfaces/IPedido";

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

   validCliente(cliente: number | ICliente): void {
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

   validProdutos(produtos: Array<IProduto>): void {
      if (!produtos || (produtos && produtos.length === 0)) {
         throw new Error(PedidoBO.PRODUTOS_INVALIDOS);
      }
   }

   validPedido(pedido: IPedido): void {
      this.validCliente(pedido.cliente);
      this.validValor(pedido.valorCompra);
      this.validProdutos(pedido.produtos);
   }
}
