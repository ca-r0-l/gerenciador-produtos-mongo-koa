import Pedido from "../entity/Pedido";
import Produto from "../entity/Produto";
import databaseConstants from "../constants/database.constants";
import PedidoSchema from "../schema/PedidoSchema";
export default class PedidoDAO {
   public async pesquisaPaginada(page: number): Promise<any> {
      const query = {};
      const skip = databaseConstants.LIMIT * (page - 1);

      const data = await PedidoSchema.find(query)
         .skip(skip)
         .limit(databaseConstants.LIMIT)
         .exec();
      const count = await PedidoSchema.countDocuments(query).exec();

      return {
         total: count,
         page: page,
         pageSize: data.length,
         data: data
      };
   }

   public async salvar(pedido: Pedido): Promise<any> {
      const _pedido: any = new PedidoSchema({
         valor: pedido.valorCompra,
         cliente: {
            nome: pedido.cliente.nome,
            celular: pedido.cliente.celular,
            endereco: {
               rua: pedido.cliente.endereco.rua,
               numero: pedido.cliente.endereco.numero,
               bairro: pedido.cliente.endereco.bairro,
               cidade: pedido.cliente.endereco.cidade,
               estado: pedido.cliente.endereco.estado
            }
         }
      });
      pedido.produtos.forEach(produto => {
         _pedido.produtos.push({ nome: produto.nome, preco_unitario: produto.preco_unitario, categoria: { nome: produto.categoria.nome } });
      });
      const data = await _pedido.save();
      return data;
   }

   public async detalhe(id: number): Promise<any> {
      const data = await PedidoSchema.findById(id).exec();
      return [data];
   }

   public async apagar(id: number): Promise<void> {
      await PedidoSchema.findByIdAndDelete(id).exec();
   }

   public async atualizarValor(id: number, valor: number): Promise<void> {
      await PedidoSchema.updateOne({ _id: id }, { valor }).exec();
   }

   public async adicionarProduto(id: number, produto: Produto): Promise<void> {
      await PedidoSchema.updateOne({ _id: id }, { $push: { produtos: produto } }).exec();
   }
}
