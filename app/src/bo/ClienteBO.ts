import BOSupport from "./BOSupport";
import EnderecoDAO from "../dao/EnderecoDAO";
import EnderecoBO from "./EnderecoBO";
import Endereco from "../entity/Endereco";

export default class ClienteBO extends BOSupport {
   public static readonly CELULAR_INVALIDO: string = "Celular inválido";
   public static readonly CLIENTE_INVALIDO: string = "Cliente inválido";

   private _enderecoBO: EnderecoBO = new EnderecoBO();
   private _enderecoDAO: EnderecoDAO = new EnderecoDAO();

   validCelular(celular?: string): void {
      if (!celular || (celular && celular.trim().length !== 9) || (celular && !Number.parseInt(celular))) {
         throw new Error(ClienteBO.CELULAR_INVALIDO);
      }
   }

   validEndereco(endereco: number | Endereco): void {
      if (endereco) {
         if (typeof endereco === "number") {
            if (endereco <= 0) {
               throw new Error(EnderecoBO.ENDERECO_INVALIDO);
            }
         } else {
            this._enderecoBO.validEndereco(endereco);
         }
      } else {
         throw new Error(EnderecoBO.ENDERECO_INVALIDO);
      }
   }

   async validExisteNoBanco(id?: number): Promise<boolean> {
      let endereco: boolean = false;
      if (id) {
         endereco = await this._enderecoDAO.detalhar(id);
      }

      return endereco ? true : false;
   }

   validCliente(cliente): void {
      if (!cliente) throw new Error(ClienteBO.CLIENTE_INVALIDO);
      this.validNome(cliente.nome);
      this.validCelular(cliente.celular);
      this.validEndereco(cliente.endereco);
   }
}
