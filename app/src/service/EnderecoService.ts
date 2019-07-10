import Response from "../entity/Response";
import Endereco from "../entity/Endereco";
import EnderecoDAO from "../dao/EnderecoDAO";
import EnderecoBO from "../bo/EnderecoBO";
import ResponsePaginated from "../entity/ResponsePaginated";
import * as mongoose from "mongoose";

export default class EnderecoService {
   private _enderecoDAO: EnderecoDAO = new EnderecoDAO();
   private _enderecoBO: EnderecoBO = new EnderecoBO();

   public async pesquisaPaginada(pageNumber): Promise<ResponsePaginated<Endereco>> {
      this._enderecoBO.validPage(pageNumber);
      const res = await this._enderecoDAO.pesquisaPaginada(pageNumber);
      return new ResponsePaginated(200, res.total, res.page, this.createEndereco(res.data));
   }

   public async salvar(endereco): Promise<Response<Endereco> | void> {
      this._enderecoBO.validEndereco(endereco);
      const session = await mongoose.startSession();
      await session.startTransaction();
      let res;
      try {
         const existe = await this._enderecoBO.validExisteNoBanco(endereco.id);
         if (!existe) {
            res = await this._enderecoDAO.salvar(endereco);
         } else {
            res = await this._enderecoDAO.atualizar(endereco);
         }
         return new Response(200, this.createEndereco(res));
      } catch (err) {
         await session.abortTransaction();
         await session.endSession();
         throw err;
      }
   }

   public async detalhar(id: number): Promise<Response<Endereco>> {
      this._enderecoBO.validId(id);
      const res = await this._enderecoDAO.detalhar(id);
      return new Response(200, this.createEndereco(res));
   }

   public async apagar(id: number): Promise<Response<Endereco>> {
      this._enderecoBO.validId(id);
      await this._enderecoDAO.apagar(id);
      return new Response(200);
   }

   public async atualizarRua(id: number, rua: string): Promise<Response<Endereco>> {
      this._enderecoBO.validId(id);
      this._enderecoBO.validRua(rua);
      await this._enderecoDAO.atualizarRua(id, rua);
      return new Response(200);
   }

   public async atualizarNumero(id: number, numero: number): Promise<Response<Endereco>> {
      this._enderecoBO.validId(id);
      this._enderecoBO.validNumero(numero);
      await this._enderecoDAO.atualizarNumero(id, numero);
      return new Response(200);
   }

   public async atualizarBairro(id: number, bairro: string): Promise<Response<Endereco>> {
      this._enderecoBO.validId(id);
      this._enderecoBO.validBairro(bairro);
      await this._enderecoDAO.atualizarBairro(id, bairro);
      return new Response(200);
   }

   public async atualizarCidade(id: number, cidade: string): Promise<Response<Endereco>> {
      this._enderecoBO.validId(id);
      this._enderecoBO.validCidade(cidade);
      await this._enderecoDAO.atualizarCidade(id, cidade);
      return new Response(200);
   }

   public async atualizarEstado(id: number, estado: string): Promise<Response<Endereco>> {
      this._enderecoBO.validId(id);
      this._enderecoBO.validEstado(estado);
      await this._enderecoDAO.atualizarEstado(id, estado);
      return new Response(200);
   }

   public async atualizar(endereco: Endereco): Promise<Response<Endereco>> {
      this._enderecoBO.validEndereco(endereco);
      const res = await this._enderecoDAO.atualizar(endereco);
      return new Response(200, this.createEndereco(res));
   }

   private createEndereco(endereco): Array<Endereco> {
      const enderecos = new Array<Endereco>();
      if (endereco && endereco.length) {
         endereco.forEach(e => enderecos.push(new Endereco(e["rua"], e["numero"], e["bairro"], e["cidade"], e["estado"], e["id"])));
      } else if (endereco) {
         enderecos.push(
            new Endereco(endereco["rua"], endereco["numero"], endereco["bairro"], endereco["cidade"], endereco["estado"], endereco["id"])
         );
      }

      return enderecos;
   }
}
