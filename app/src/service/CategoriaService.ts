import * as mongoose from "mongoose";
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

   public async salvar(categoria): Promise<Response<Categoria> | void> {
      this._categoriaBO.validCategoria(categoria);
      const existe = await this._categoriaBO.validExisteNoBanco(categoria.id);
      const session = await mongoose.startSession();
      let res;
      try {
         await session.startTransaction();
         if (!existe) {
            res = await this._categoriaDAO.salvar(categoria);
         } else {
            res = await this._categoriaDAO.atualizarNome(categoria.id, categoria.nome);
         }
         return new Response(200, this.createCategoria(res));
      } catch (err) {
         await session.abortTransaction();
         await session.endSession();
         throw err;
      }
   }

   public async detalhar(id: string): Promise<Response<Categoria>> {
      this._categoriaBO.validId(id);
      const res = await this._categoriaDAO.detalhar(id);
      return new Response(200, this.createCategoria(res));
   }

   public async atualizarNome(id: string, nome: string): Promise<Response<Categoria>> {
      this._categoriaBO.validId(id);
      this._categoriaBO.validNome(nome);
      await this._categoriaDAO.atualizarNome(id, nome);
      return new Response(200);
   }

   public async atualizar(id: string, nome: string): Promise<Response<Categoria>> {
      await this._categoriaDAO.atualizarNome(id, nome);
      return new Response(200);
   }

   public async apagar(id: string): Promise<Response<Categoria>> {
      this._categoriaBO.validId(id);
      await this._categoriaDAO.apagar(id);
      return new Response(200);
   }

   private createCategoria(categorias): Array<Categoria> {
      const _categorias: Array<Categoria> = new Array<Categoria>();
      if (categorias && categorias.data && categorias.data.length) {
         categorias.data.forEach(c => _categorias.push(new Categoria(c.data["nome"], c.data["_id"])));
      } else if (categorias) {
         categorias.forEach(c => _categorias.push(new Categoria(c["nome"], c["_id"])));
      }
      return _categorias;
   }
}
