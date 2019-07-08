import BOSupport from "./BOSupport";
import ClienteBO from "./ClienteBO";
import Cliente from "../entity/Cliente";
import Pedido from "../entity/Pedido";
import Produto from "../entity/Produto";
import PedidoDAO from "../dao/PedidoDAO";

export default class PedidoBO extends BOSupport {
   public static readonly VALOR_INVALIDO: string = "Valor inválido";
   public static readonly PRODUTOS_INVALIDOS: string = "Pedidos inválidos. Necessário pelo menos 1.";

   private _clienteBO: ClienteBO = new ClienteBO();
   private _pedidoDAO: PedidoDAO = new PedidoDAO();

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

   async validExisteNoBanco(id?: number): Promise<boolean> {
      let produto: boolean = false;
      if (id) {
         produto = await this._pedidoDAO.detalhe(id);
      }

      return produto ? true : false;
   }

   validPedido(pedido: Pedido): void {
      this.validCliente(pedido.cliente);
      this.validValor(pedido.valorCompra);
      this.validProdutos(pedido.produtos);
   }
}
