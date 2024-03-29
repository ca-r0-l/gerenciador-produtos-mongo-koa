import * as mongoose from "mongoose";
import ResponsePaginated from "../entity/ResponsePaginated";
import Response from "../entity/Response";
import PedidoDAO from "../dao/PedidoDAO";
import Pedido from "../entity/Pedido";
import Cliente from "../entity/Cliente";
import Endereco from "../entity/Endereco";
import PedidoBO from "../bo/PedidoBO";
import Produto from "../entity/Produto";
import EnderecoService from "./EnderecoService";
import ClienteService from "./ClienteService";

export default class PedidoService {
   private _pedidoDAO: PedidoDAO = new PedidoDAO();
   private _pedidoBO: PedidoBO = new PedidoBO();
   private _enderecoService: EnderecoService = new EnderecoService();
   private _clienteService: ClienteService = new ClienteService();

   public async pesquisaPaginada(pageNumber): Promise<ResponsePaginated<Pedido>> {
      this._pedidoBO.validPage(pageNumber);
      const res = await this._pedidoDAO.pesquisaPaginada(pageNumber);
      return new ResponsePaginated(200, res.total, res.page, this.createPedido(res));
   }

   public async salvar(pedido): Promise<Response<Pedido> | void> {
      this._pedidoBO.validPedido(pedido);
      const existe = await this._pedidoBO.validExisteNoBanco(pedido.id);
      if (!existe) {
         const session = await mongoose.startSession();
         await session.startTransaction();
         try {
            await this._clienteService.salvar(pedido.cliente);
            await this._enderecoService.salvar(pedido.cliente.endereco);
            const result = await this._pedidoDAO.salvar(pedido);
            return new Response<Pedido>(200, this.createPedido(result));
         } catch (err) {
            await session.abortTransaction();
            await session.endSession();
            throw err;
         }
      }
   }

   public async detalhe(id: number): Promise<Response<Pedido>> {
      this._pedidoBO.validId(id);
      const result = await this._pedidoDAO.detalhe(id);
      return new Response<Pedido>(200, this.createPedido(result));
   }

   public async apagar(id: number): Promise<Response<Pedido>> {
      this._pedidoBO.validId(id);
      const result = await this._pedidoDAO.apagar(id);
      return new Response<Pedido>(200, this.createPedido(result));
   }

   public async atualizarValor(id: number, valor: number): Promise<Response<Pedido>> {
      this._pedidoBO.validId(id);
      this._pedidoBO.validValor(valor);
      const result = await this._pedidoDAO.atualizarValor(id, valor);
      return new Response<Pedido>(200, this.createPedido(result));
   }

   public async adicionarProduto(id: number, produto: Produto): Promise<Response<Pedido>> {
      this._pedidoBO.validId(id);
      const result = await this._pedidoDAO.adicionarProduto(id, produto);
      return new Response<Pedido>(200, this.createPedido(result));
   }

   private createPedido(pedidos): Array<Pedido> {
      const _pedidos = new Array<Pedido>();
      pedidos &&
         pedidos.data &&
         pedidos.data.forEach(p => {
            _pedidos.push(
               new Pedido(
                  new Cliente(
                     p["cliente"]["nome"],
                     new Endereco(
                        p["cliente"]["endereco"]["rua"],
                        p["cliente"]["endereco"]["numero"],
                        p["cliente"]["endereco"]["bairro"],
                        p["cliente"]["endereco"]["cidade"],
                        p["cliente"]["endereco"]["estado"]
                     ),
                     p["cliente"]["celular"],
                     p["cliente"]["_id"]
                  ),
                  p["valorCompra"],
                  [p["produtos"]]
               )
            );
         });
      return _pedidos;
   }
}
