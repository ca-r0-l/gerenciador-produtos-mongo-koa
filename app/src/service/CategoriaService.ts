import CategoriaDAO from "../dao/CategoriaDAO";

export default class CategoriaService {
   private _categoriaDAO: CategoriaDAO = new CategoriaDAO();

   constructor() {}

   public pesquisaPaginada(page: number) {
      return this._categoriaDAO.pesquisaPaginada(page);
   }

   public salvar(categoria) {
      return this._categoriaDAO.salvar(categoria);
   }
}
