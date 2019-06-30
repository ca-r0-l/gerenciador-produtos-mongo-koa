import CategoriaDAO from "../dao/CategoriaDAO";
import CategoriaBO from "../bo/CategoriaBO";
import ICategoria from "../interfaces/ICategoria";
import IPaginatedSearch from "../interfaces/IPaginatedSearch";

export default class CategoriaService {
   private _categoriaDAO: CategoriaDAO = new CategoriaDAO();
   private _categoriaBO: CategoriaBO = new CategoriaBO();

   constructor() {}

   public async pesquisaPaginada(page: number): Promise<IPaginatedSearch<ICategoria>> {
      this._categoriaBO.validPage(page);
      const res: IPaginatedSearch<ICategoria> = await this._categoriaDAO.pesquisaPaginada(page);
      res.data = this.createCategoria(res.data);
      return res;
   }

   public salvar(categoria): ICategoria {
      this._categoriaBO.validCategoria(categoria);
      const res = this._categoriaDAO.salvar(categoria);
      return this.createCategoria(res)[0] || null;
   }

   private createCategoria(categoria): Array<ICategoria> {
      const categorias: Array<ICategoria> = new Array<ICategoria>();
      if (categoria && categoria.length) {
         categoria.forEach(c => categorias.push({ nome: c["nome"], id: c["_id"] }));
      }

      return categorias;
   }
}
