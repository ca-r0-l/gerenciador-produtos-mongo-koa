import Response from "../entity/Response";
import PedidoDAO from "../dao/PedidoDAO";
import Pedido from "../entity/Pedido";
import Cliente from "../entity/Cliente";
import Endereco from "../entity/Endereco";
import PedidoBO from "../bo/PedidoBO";
import Produto from "../entity/Produto";

export default class PedidoService {
   // private _pedidoDAO: PedidoDAO;
   // private _pedidoBO: PedidoBO;
   // constructor() {
   //    this._pedidoBO = new PedidoBO();
   //    this._pedidoDAO = new PedidoDAO();
   // }
   // public async getAllPaginated(pageNumber): Promise<Response> {
   //    this._pedidoBO.validId(pageNumber);
   //    const result = await this._pedidoDAO.getAllPaginated(pageNumber);
   //    return new Response(200, this.createPedido(result));
   // }
   // public async add(pedido: Pedido): Promise<Response> {
   //    this._pedidoBO.validPedido(pedido);
   //    const result = await this._pedidoDAO.add(pedido);
   //    return new Response(200, this.createPedido(result));
   // }
   // public async detail(id: number): Promise<Response> {
   //    this._pedidoBO.validId(id);
   //    const result = await this._pedidoDAO.detail(id);
   //    return new Response(200, this.createPedido(result));
   // }
   // public async delete(id: number): Promise<Response> {
   //    this._pedidoBO.validId(id);
   //    const result = await this._pedidoDAO.delete(id);
   //    return new Response(200, this.createPedido(result));
   // }
   // public async updateCliente(id: number, cliente: number): Promise<Response> {
   //    this._pedidoBO.validId(id);
   //    this._pedidoBO.validCliente(cliente);
   //    const result = await this._pedidoDAO.updateCliente(id, cliente);
   //    return new Response(200, this.createPedido(result));
   // }
   // public async updateValor(id: number, valor: number): Promise<Response> {
   //    this._pedidoBO.validId(id);
   //    this._pedidoBO.validValor(valor);
   //    const result = await this._pedidoDAO.updateValor(id, valor);
   //    return new Response(200, this.createPedido(result));
   // }
   // private createPedido(pedidos): Array<Pedido> {
   //    const _pedidos = new Array<Pedido>();
   //    if (pedidos.length > 0) {
   //       pedidos.forEach(p => {
   //          const _produto = new Produto(p["nomeProduto"], p["preco"], p["categoria"], p["idProduto"]);
   //          const pos = _pedidos.findIndex(pd => pd.id === p.idPedido);
   //          if (pos === -1) {
   //             _pedidos.push(
   //                new Pedido(
   //                   new Cliente(
   //                      p["nome"],
   //                      new Endereco(p["rua"], p["numero"], p["bairro"], p["cidade"], p["estado"], p["idEndereco"]),
   //                      p["celular"],
   //                      p["idCliente"]
   //                   ),
   //                   p["valor"],
   //                   [_produto],
   //                   p["idPedido"]
   //                )
   //             );
   //          } else {
   //             _pedidos[pos].produtos.push(_produto);
   //          }
   //       });
   //    }
   //    return _pedidos;
   // }
}
