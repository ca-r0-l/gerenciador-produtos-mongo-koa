import * as mongoose from "mongoose";
import ResponsePaginated from "../entity/ResponsePaginated";
import Response from "../entity/Response";
import ProdutoDAO from "../dao/ProdutoDAO";
import ProdutoBO from "../bo/ProdutoBO";
import Produto from "../entity/Produto";
import Categoria from "../entity/Categoria";
import CategoriaService from "./CategoriaService";

export default class ProdutoService {
   private _produtoDAO: ProdutoDAO = new ProdutoDAO();
   private _categoriaService: CategoriaService = new CategoriaService();
   private _produtoBO: ProdutoBO = new ProdutoBO();

   public async pesquisaPaginada(pageNumber): Promise<ResponsePaginated<Produto>> {
      this._produtoBO.validPage(pageNumber);
      const res = await this._produtoDAO.pesquisaPaginada(pageNumber);
      return new ResponsePaginated<Produto>(200, res.total, res.page, this.createProduto(res));
   }

   public async salvar(produto): Promise<Response<Produto> | void> {
      this._produtoBO.validProduto(produto);
      const existe = await this._produtoBO.validExisteNoBanco(produto.id);
      if (!existe) {
         const session = await mongoose.startSession();
         await session.startTransaction();
         try {
            await this._categoriaService.salvar(produto.categoria);
            const res = await this._produtoDAO.salvar(produto);
            return new Response<Produto>(200, this.createProduto(res));
         } catch (err) {
            await session.abortTransaction();
            await session.endSession();
            throw err;
         }
      }
   }

   public async detalhe(id: number): Promise<Response<Produto>> {
      this._produtoBO.validId(id);
      const res = await this._produtoDAO.detalhe(id);
      return new Response<Produto>(200, this.createProduto(res));
   }

   public async apagar(id: number): Promise<Response<Produto>> {
      this._produtoBO.validId(id);
      const res = await this._produtoDAO.apagar(id);
      return new Response<Produto>(200, this.createProduto(res));
   }

   public async atualizarNome(id: number, nome: string): Promise<Response<Produto>> {
      this._produtoBO.validId(id);
      this._produtoBO.validNome(nome);
      const res = await this._produtoDAO.atualizarNome(id, nome);
      return new Response<Produto>(200, this.createProduto(res));
   }

   public async atualizarPreco(id: number, preco: number): Promise<Response<Produto>> {
      this._produtoBO.validId(id);
      this._produtoBO.validPreco(preco);
      const res = await this._produtoDAO.atualizarPreco(id, preco);
      return new Response<Produto>(200, this.createProduto(res));
   }

   public async atualizarCategoria(id: number, categoria: Categoria): Promise<Response<Produto>> {
      this._produtoBO.validId(id);
      this._produtoBO.validCategoria(categoria);
      const res = await this._produtoDAO.atualizarCategoria(id, categoria);
      return new Response<Produto>(200, this.createProduto(res));
   }

   private createProduto(produto): Array<Produto> {
      const produtos = new Array<Produto>();
      if (produto && produto.data && produto.data.length) {
         produto.data.forEach(p =>
            produtos.push(new Produto(p["nome"], p["preco_unitario"], new Categoria(p["categoria"]["nome"], p["categoria"]["_id"]), p["_id"]))
         );
      } else if (produto && produto.length) {
         produto.forEach(p =>
            produtos.push(new Produto(p["nome"], p["preco_unitario"], new Categoria(p["categoria"]["nome"], p["categoria"]["_id"]), p["_id"]))
         );
      }
      return produtos;
   }
}
