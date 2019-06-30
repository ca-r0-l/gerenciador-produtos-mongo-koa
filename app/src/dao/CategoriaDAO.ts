import Categoria from "../entity/Categoria";
import databaseConstants from "../constants/database.constants";
import ICategoria from "../interfaces/ICategoria";

export default class CategoriaDAO {
   constructor() {}

   public async pesquisaPaginada(page: number): Promise<any> {
      const query = {};
      const skip = databaseConstants.LIMIT * (page - 1);

      const data = await Categoria.find(query)
         .skip(skip)
         .limit(databaseConstants.LIMIT)
         .exec();
      const count = await Categoria.countDocuments(query).exec();

      return {
         total: count,
         page: page,
         pageSize: data.length,
         data: data
      };
   }

   public async salvar(categoria): Promise<any> {
      const _categoria = new Categoria({ nome: categoria.nome });
      const data = await _categoria.save();
      return data;
   }
}
