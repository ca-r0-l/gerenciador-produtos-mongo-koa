export default class BOSupport {
   public static readonly PAGINA_INVALIDA: string = "Página inválida";
   public static readonly ID_INVALIDO: string = "Id inválido";
   public static readonly NOME_INVALIDO: string = "Nome inválido";

   validPage(id: any): void {
      if (!id || (id && id <= 0) || isNaN(id)) {
         throw new Error(BOSupport.PAGINA_INVALIDA);
      }
   }

   validId(id?: any): void {
      if (!id || (id && id <= 0) || isNaN(id)) {
         throw new Error(BOSupport.ID_INVALIDO);
      }
   }

   validNome(nome?: string): void {
      if (!nome || (nome && nome.trim().length === 0)) {
         throw new Error(BOSupport.NOME_INVALIDO);
      }
   }
}
