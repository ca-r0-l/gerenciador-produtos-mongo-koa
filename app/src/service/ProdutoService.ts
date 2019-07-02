import Response from "../entity/Response";
import Produto from "../entity/Produto";
import Categoria from "../entity/Categoria";
import ProdutoDAO from "../dao/ProdutoDAO";
import ProdutoBO from "../bo/ProdutoBO";

export default class ProdutoService {
   // private _produtoDAO: ProdutoDAO;
   // private _produtoBO: ProdutoBO;
   // constructor() {
   //    this._produtoDAO = new ProdutoDAO();
   //    this._produtoBO = new ProdutoBO();
   // }
   // public async getAllPaginated(pageNumber): Promise<Response> {
   //    this._produtoBO.validId(pageNumber);
   //    const res = await this._produtoDAO.getAllPaginated(pageNumber);
   //    return new Response(200, this.createProduto(res));
   // }
   // public async add(produto): Promise<Response> {
   //    this._produtoBO.validProduto(produto);
   //    const res = await this._produtoDAO.add(produto);
   //    return new Response(200, this.createProduto(res));
   // }
   // public async detail(id: number): Promise<Response> {
   //    this._produtoBO.validId(id);
   //    const res = await this._produtoDAO.detail(id);
   //    return new Response(200, this.createProduto(res));
   // }
   // public async delete(id: number): Promise<Response> {
   //    this._produtoBO.validId(id);
   //    const res = await this._produtoDAO.delete(id);
   //    return new Response(200, this.createProduto(res));
   // }
   // public async updateNome(id: number, nome: string): Promise<Response> {
   //    this._produtoBO.validId(id);
   //    this._produtoBO.validNome(nome);
   //    const res = await this._produtoDAO.updateNome(id, nome);
   //    return new Response(200, this.createProduto(res));
   // }
   // public async updatePreco(id: number, preco: number): Promise<Response> {
   //    this._produtoBO.validId(id);
   //    this._produtoBO.validPreco(preco);
   //    const res = await this._produtoDAO.updatePreco(id, preco);
   //    return new Response(200, this.createProduto(res));
   // }
   // public async updateCategoria(id: number, categoria: number): Promise<Response> {
   //    this._produtoBO.validId(id);
   //    this._produtoBO.validCategoria(categoria);
   //    const res = await this._produtoDAO.updateCategoria(id, categoria);
   //    return new Response(200, this.createProduto(res));
   // }
   // private createProduto(produto): Array<Produto> {
   //    const produtos = new Array<Produto>();
   //    if (produto && produto.length) {
   //       produto.forEach(p => produtos.push(new Produto(p["nome"], p["preco"], new Categoria(p["nomeCategoria"], p["idCategoria"]), p["idProduto"])));
   //    }
   //    return produtos;
   // }
}
