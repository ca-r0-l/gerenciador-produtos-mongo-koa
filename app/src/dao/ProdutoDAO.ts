import databaseConstants from "../constants/database.constants";
import Produto from "../entity/Produto";
import ProdutoSchema from "../schema/ProdutoSchema";
import Categoria from "../entity/Categoria";

export default class ProdutoDAO {
   public async pesquisaPaginada(page: number): Promise<any> {
      const query = {};
      const skip = databaseConstants.LIMIT * (page - 1);

      const data = await ProdutoSchema.find(query)
         .skip(skip)
         .limit(databaseConstants.LIMIT)
         .exec();
      const count = await ProdutoSchema.countDocuments(query).exec();

      return {
         total: count,
         page: page,
         pageSize: data.length,
         data: data
      };
   }

   public async salvar(produto: Produto): Promise<any> {
      const _pedido: any = new ProdutoSchema({
         nome: produto.nome,
         preco_unitario: produto.preco_unitario,
         categoria: { nome: produto.categoria.nome, id: produto.categoria.id }
      });

      const data = await _pedido.save();
      return data;
   }

   public async detalhe(id: string): Promise<any> {
      const data = await ProdutoSchema.findById(id).exec();
      return [data];
   }

   public async apagar(id: string): Promise<void> {
      await ProdutoSchema.findByIdAndDelete(id).exec();
   }

   public async atualizarNome(id: string, nome: string): Promise<any> {
      await ProdutoSchema.updateOne({ _id: id }, { nome }).exec();
   }

   public async atualizarPreco(id: string, preco: number): Promise<any> {
      await ProdutoSchema.updateOne({ _id: id }, { preco_unitario: preco }).exec();
   }

   public async atualizarCategoria(categoria: Categoria): Promise<any> {
      await ProdutoSchema.updateMany({ "categoria.id": categoria.id }, { categoria: { nome: categoria.nome, id: categoria.id } }).exec();
   }
}
