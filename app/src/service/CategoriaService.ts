import Response from "../entity/Response";
import ResponsePaginated from "../entity/ResponsePaginated";
import CategoriaDAO from "../dao/CategoriaDAO";
import CategoriaBO from "../bo/CategoriaBO";
import Categoria from "../entity/Categoria";

export default class CategoriaService {
   private _categoriaDAO: CategoriaDAO = new CategoriaDAO();
   private _categoriaBO: CategoriaBO = new CategoriaBO();

   public async pesquisaPaginada(page: number): Promise<ResponsePaginated<Categoria>> {
      this._categoriaBO.validPage(page);
      const res = await this._categoriaDAO.pesquisaPaginada(page);
      return new ResponsePaginated(200, res.total, res.page, this.createCategoria(res.data));
   }

   public async salvar(categoria): Promise<Response<Categoria>> {
      this._categoriaBO.validCategoria(categoria);
      const res = await this._categoriaDAO.salvar(categoria);
      return new Response(200, this.createCategoria(res.data));
   }

   public async detalhar(id: number): Promise<Response<Categoria>> {
      this._categoriaBO.validId(id);
      const res = await this._categoriaDAO.detalhar(id);
      return new Response(200, this.createCategoria(res));
   }

   public async atualizarNome(id: number, nome: string): Promise<Response<Categoria>> {
      this._categoriaBO.validId(id);
      this._categoriaBO.validNome(nome);
      await this._categoriaDAO.atualizarNome(id, nome);
      return new Response(200);
   }

   public async apagar(id: number): Promise<Response<Categoria>> {
      this._categoriaBO.validId(id);
      await this._categoriaDAO.apagar(id);
      return new Response(200);
   }

   private createCategoria(categoria): Array<Categoria> {
      const categorias: Array<Categoria> = new Array<Categoria>();
      if (categoria && categoria.length) {
         categoria.forEach(c => categorias.push(new Categoria(c["nome"], c["_id"])));
      }
      return categorias;
   }
}
