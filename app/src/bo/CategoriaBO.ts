import BOSupport from "./BOSupport";
import Categoria from "../entity/Categoria";

export default class CategoriaBO extends BOSupport {
   public static readonly NOME_INVALIDO: string = "Nome inválido";
   public static readonly CATEGORIA_INVALIDA: string = "Categoria inválida";

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
