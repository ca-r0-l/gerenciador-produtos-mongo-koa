import "jasmine";
import ProdutoBO from "../app/src/bo/ProdutoBO";
import CategoriaBO from "../app/src/bo/CategoriaBO";
import Produto from "../app/src/entity/Produto";
import Categoria from "../app/src/entity/Categoria";

describe("ProdutoBO =>", () => {
   const produtoBO = new ProdutoBO();
   let produto: Produto;
   beforeEach(() => {
      produto = new Produto("coxinha", 10.2, new Categoria("salgado", 1), 1);
   });

   it("produto válido, não retornará erro", () => {
      expect(() => {
         produtoBO.validProduto(produto);
      }).not.toThrow();
   });

   it("nome inválido, erro: NOME_INVALIDO", () => {
      produto.nome = "";
      expect(() => {
         produtoBO.validProduto(produto);
      }).toThrowError(ProdutoBO.NOME_INVALIDO);
   });

   it("preço inválido, erro: PRECO_UNITARIO_INVALIDO", () => {
      produto.preco_unitario = -1;
      expect(() => {
         produtoBO.validProduto(produto);
      }).toThrowError(ProdutoBO.PRECO_UNITARIO_INVALIDO);
   });

   it("categoria inválida, erro: CATEGORIA_INVALIDA", () => {
      delete produto.categoria;
      expect(() => {
         produtoBO.validProduto(produto);
      }).toThrowError(CategoriaBO.CATEGORIA_INVALIDA);
   });
});
