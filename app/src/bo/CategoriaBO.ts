import BOSupport from "./BOSupport";
import Categoria from "../entity/Categoria";
import ClienteDAO from "../dao/ClienteDAO";

export default class CategoriaBO extends BOSupport {
   public static readonly NOME_INVALIDO: string = "Nome inválido";
   public static readonly CATEGORIA_INVALIDA: string = "Categoria inválida";

   private _clienteDAO = new ClienteDAO();

   validNome(nome: string): void {
      if (!nome || (nome && nome.trim().length === 0)) {
         throw new Error(CategoriaBO.NOME_INVALIDO);
      }
   }

   validCategoria(categoria: Categoria): void {
      if (!categoria) throw new Error(CategoriaBO.CATEGORIA_INVALIDA);
      this.validNome(categoria.nome);
   }

   async validExisteNoBanco(id?: number): Promise<boolean> {
      let endereco: boolean = false;
      if (id) {
         endereco = await this._clienteDAO.detalhar(id);
      }

      return endereco ? true : false;
   }
}
