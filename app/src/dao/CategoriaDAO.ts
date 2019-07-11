import databaseConstants from "../constants/database.constants";
import CategoriaSchema from "../schema/CategoriaSchema";
import Categoria from "../entity/Categoria";

export default class CategoriaDAO {
   constructor() {}

   public async pesquisaPaginada(page: number): Promise<any> {
      const query = {};
      const skip = databaseConstants.LIMIT * (page - 1);

      const data = await CategoriaSchema.find(query)
         .skip(skip)
         .limit(databaseConstants.LIMIT)
         .exec();
      const count = await CategoriaSchema.countDocuments(query).exec();

      return {
         total: count,
         page: page,
         pageSize: data.length,
         data: data
      };
   }

   public async salvar(categoria: Categoria): Promise<any> {
      const _categoria = new CategoriaSchema({ nome: categoria.nome });
      const data = await _categoria.save();
      return data;
   }

   public async detalhar(id: string): Promise<any> {
      const data = await CategoriaSchema.findById(id).exec();
      return [data];
   }

   public async atualizarNome(id: string, nome: string): Promise<void> {
      await CategoriaSchema.updateOne({ _id: id }, { nome: nome }).exec();
   }

   public async apagar(id: string): Promise<void> {
      await CategoriaSchema.findByIdAndDelete(id).exec();
   }
}
