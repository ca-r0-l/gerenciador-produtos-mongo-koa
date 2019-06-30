import ICategoria from "../interfaces/ICategoria";

export default class CategoriaBO {
   public static readonly ID_INVALIDO: string = "Id inválido";
   public static readonly NOME_INVALIDO: string = "Nome inválido";
   public static readonly CATEGORIA_INVALIDA: string = "Categoria inválida";

   validId(id: any): void {
      if (!id || (id && id <= 0)) {
         throw new Error(CategoriaBO.ID_INVALIDO);
      }
   }

   validPage(id: any): void {
      this.validId(id);
   }

   validNome(nome: string): void {
      if (!nome || (nome && nome.trim().length === 0)) {
         throw new Error(CategoriaBO.NOME_INVALIDO);
      }
   }

   validCategoria(categoria: ICategoria): void {
      if (!categoria) throw new Error(CategoriaBO.CATEGORIA_INVALIDA);
      this.validNome(categoria.nome);
   }
}
