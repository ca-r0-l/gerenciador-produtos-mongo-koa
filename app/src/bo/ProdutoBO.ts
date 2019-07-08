import BOSupport from "./BOSupport";
import ProdutoDAO from "../dao/ProdutoDAO";
import CategoriaBO from "./CategoriaBO";
import Categoria from "../entity/Categoria";
import Produto from "../entity/Produto";

export default class ProdutoBO extends BOSupport {
   public static readonly PRECO_UNITARIO_INVALIDO: string = "Preço unitário inválido";
   public static readonly PRODUTO_INVALIDO: string = "Produto inválido";

   private _categoriaBO: CategoriaBO = new CategoriaBO();
   private _produtoDAO: ProdutoDAO = new ProdutoDAO();

   validPreco(preco: number): void {
      if (!preco || ((preco && typeof preco !== "number") || preco <= 0)) {
         throw new Error(ProdutoBO.PRECO_UNITARIO_INVALIDO);
      }
   }

   validCategoria(categoria: number | Categoria): void {
      if (categoria) {
         if (typeof categoria === "number") {
            if (categoria <= 0) {
               throw new Error(CategoriaBO.CATEGORIA_INVALIDA);
            }
         } else {
            this._categoriaBO.validCategoria(categoria);
         }
      } else {
         throw new Error(CategoriaBO.CATEGORIA_INVALIDA);
      }
   }

   async validExisteNoBanco(id?: number): Promise<boolean> {
      let produto: boolean = false;
      if (id) {
         produto = await this._produtoDAO.detalhe(id);
      }

      return produto ? true : false;
   }

   validProduto(produto: Produto): void {
      if (!produto) throw new Error(ProdutoBO.PRODUTO_INVALIDO);
      this.validNome(produto.nome);
      this.validPreco(produto.preco_unitario);
      this.validCategoria(produto.categoria);
   }
}
