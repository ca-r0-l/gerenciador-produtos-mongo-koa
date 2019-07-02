import Categoria from "../entity/Categoria";

export default class CategoriaBO {
   public static readonly ID_INVALIDO: string = "Id inválido";
   public static readonly NOME_INVALIDO: string = "Nome inválido";
   public static readonly CATEGORIA_INVALIDA: string = "Categoria inválida";
   public static readonly PAGINA_INVALIDA: string = "Página inválida";

   validId(id: any): void {
      if (!id || (id && id <= 0)) {
         throw new Error(CategoriaBO.ID_INVALIDO);
      }
   }

   validPage(id: any): void {
      if (!id || (id && id <= 0)) {
         throw new Error(CategoriaBO.PAGINA_INVALIDA);
      }
   }

   validNome(nome: string): void {
      if (!nome || (nome && nome.trim().length === 0)) {
         throw new Error(CategoriaBO.NOME_INVALIDO);
      }
   }

   validCategoria(categoria: Categoria): void {
      if (!categoria) throw new Error(CategoriaBO.CATEGORIA_INVALIDA);
      this.validNome(categoria.nome);
   }
}
