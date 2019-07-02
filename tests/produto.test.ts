import "jasmine";
import ProdutoBO from "../app/src/bo/ProdutoBO";
import IProduto from "../app/src/interfaces/IProduto";
import CategoriaBO from "../app/src/bo/CategoriaBO";

describe("ProdutoBO =>", () => {
   const produtoBO = new ProdutoBO();
   let produto: IProduto;
   beforeEach(() => {
      produto = { nome: "coxinha", valor: 10.2, categoria: { nome: "salgado", id: 1 }, id: 1 };
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
      produto.valor = -1;
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
