import BOSupport from "./BOSupport";
import Endereco from "../entity/Endereco";
import EnderecoDAO from "../dao/EnderecoDAO";

export default class EnderecoBO extends BOSupport {
   public static readonly RUA_INVALIDA: string = "Rua inválida";
   public static readonly NUMERO_INVALIDO: string = "Número inválido";
   public static readonly BAIRRO_INVALIDO: string = "Bairro inválido";
   public static readonly CIDADE_INVALIDA: string = "Cidade inválida";
   public static readonly ESTADO_INVALIDO: string = "Estado inválido";
   public static readonly ENDERECO_INVALIDO: string = "Endereço inválido";

   private _enderecoDAO = new EnderecoDAO();

   validRua(rua: string): void {
      if (!rua || (rua && rua.trim().length === 0)) {
         throw new Error(EnderecoBO.RUA_INVALIDA);
      }
   }

   validNumero(numero: number): void {
      if (!numero || (numero && numero <= 0)) {
         throw new Error(EnderecoBO.NUMERO_INVALIDO);
      }
   }

   validBairro(bairro: string): void {
      if (!bairro || (bairro && bairro.trim().length === 0)) {
         throw new Error(EnderecoBO.BAIRRO_INVALIDO);
      }
   }

   validCidade(cidade: string): void {
      if (!cidade || (cidade && cidade.trim().length === 0)) {
         throw new Error(EnderecoBO.CIDADE_INVALIDA);
      }
   }

   validEstado(estado: string): void {
      if (!estado || (estado && estado.trim().length !== 2)) {
         throw new Error(EnderecoBO.ESTADO_INVALIDO);
      }
   }

   async validExisteNoBanco(id?: number): Promise<boolean> {
      let endereco: boolean = false;
      if (id) {
         endereco = await this._enderecoDAO.detalhar(id);
      }

      return endereco ? true : false;
   }

   validEndereco(endereco: Endereco): void {
      if (!endereco) throw new Error(EnderecoBO.ENDERECO_INVALIDO);
      this.validRua(endereco.rua);
      this.validNumero(endereco.numero);
      this.validBairro(endereco.bairro);
      this.validCidade(endereco.cidade);
      this.validEstado(endereco.estado);
   }
}
