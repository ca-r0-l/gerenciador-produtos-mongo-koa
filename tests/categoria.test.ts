import "jasmine";
import CategoriaBO from "../app/src/bo/CategoriaBO";
import ICategoria from "../app/src/interfaces/ICategoria";

describe("Categoria |", () => {
   const categoriaBO = new CategoriaBO();
   let categoria: ICategoria = { nome: "salgados fritos", id: 1 };
   beforeEach(() => {
      categoria = { nome: "salgados fritos", id: 1 };
   });

   it("categoria válida, não retornará erro", () => {
      expect(() => {
         categoriaBO.validCategoria(categoria);
      }).not.toThrow();
   });

   it("nome da categoria inválida, erro: NOME_INVALIDO", () => {
      categoria.nome = "";
      expect(() => {
         categoriaBO.validCategoria(categoria);
      }).toThrowError(CategoriaBO.NOME_INVALIDO);
   });
});
