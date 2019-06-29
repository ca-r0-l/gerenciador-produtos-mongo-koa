import Categoria from "../entity/Categoria";
import databaseConstants from "../constants/database.constants";

export default class CategoriaDAO {
   constructor() {}

   public pesquisaPaginada(page: number) {
      const query = {};
      const skip = databaseConstants.LIMIT * (page - 1);

      Categoria.find(query)
         .skip(skip)
         .limit(databaseConstants.LIMIT)
         .exec((err, doc) => {
            if (err) throw err;

            console.log(doc);

            return doc;
            //    Categoria.countDocuments(query).exec((countErr, count) => {
            //       if (countErr) throw err;

            //       return {
            //          total: count,
            //          page: page,
            //          pageSize: doc.length,
            //          data: doc
            //       };
            //    });
         });
   }

   public salvar(categoria): void {
      const _categoria = new Categoria({ nome: categoria.nome });
      _categoria.save((err, docs) => {
         if (err) throw err;

         console.log("docs =>", docs);

         return docs;
      });
   }
}
