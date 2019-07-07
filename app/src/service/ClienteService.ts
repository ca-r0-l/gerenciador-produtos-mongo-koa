import * as mongoose from "mongoose";
import ResponsePaginated from "../entity/ResponsePaginated";
import Response from "../entity/Response";
import ClienteDAO from "../dao/ClienteDAO";
import ClienteBO from "../bo/ClienteBO";
import Cliente from "../entity/Cliente";
import Endereco from "../entity/Endereco";
import EnderecoService from "./EnderecoService";

export default class ClienteService {
   private _enderecoService: EnderecoService = new EnderecoService();
   private _clienteDAO: ClienteDAO = new ClienteDAO();
   private _clienteBO: ClienteBO = new ClienteBO();

   public async pesquisaPaginada(pageNumber): Promise<ResponsePaginated<Cliente>> {
      this._clienteBO.validPage(pageNumber);
      const res = await this._clienteDAO.pesquisaPaginada(pageNumber);
      return new ResponsePaginated(200, res.total, res.page, this.createCliente(res.data));
   }

   public async salvar(cliente: Cliente): Promise<Response<Cliente>> {
      this._clienteBO.validCliente(cliente);
      const session = await mongoose.startSession();
      await session.startTransaction();
      try {
         const existe = await this._clienteBO.validExisteNoBanco(cliente.endereco.id);

         if (!existe) await this._enderecoService.salvar(cliente.endereco);
         const res = await this._clienteDAO.salvar(cliente);
         return new Response(200, this.createCliente(res));
      } catch (err) {
         await session.abortTransaction();
         await session.endSession();
         throw err;
      }
   }

   public async detalhar(id: number): Promise<Response<Cliente>> {
      this._clienteBO.validId(id);
      const res = await this._clienteDAO.detalhar(id);
      return new Response(200, this.createCliente(res));
   }

   public async apagar(id: number): Promise<Response<Cliente>> {
      this._clienteBO.validId(id);
      await this._clienteDAO.apagar(id);
      return new Response(200);
   }

   public async atualizarNome(id: number, nome: string): Promise<Response<Cliente>> {
      this._clienteBO.validId(id);
      this._clienteBO.validNome(nome);
      await this._clienteDAO.atualizarNome(id, nome);
      return new Response(200);
   }

   public async atualizarEndereco(id: number, endereco: Endereco): Promise<Response<Cliente>> {
      this._clienteBO.validId(id);
      this._clienteBO.validEndereco(endereco);
      await this._enderecoService.atualizar(endereco);
      await this._clienteDAO.atualizarEndereco(id, endereco);
      return new Response(200);
   }

   public async atualizarCelular(id: number, celular: string): Promise<Response<Cliente>> {
      this._clienteBO.validId(id);
      this._clienteBO.validCelular(celular);
      await this._clienteDAO.atualizarCelular(id, celular);
      return new Response(200);
   }

   private createCliente(cliente): Array<Cliente> {
      const clientes = new Array<Cliente>();
      if (cliente && cliente.length) {
         cliente.forEach(c => {
            clientes.push(
               new Cliente(
                  c["nome"],
                  new Endereco(
                     c["endereco"]["rua"],
                     c["endereco"]["numero"],
                     c["endereco"]["bairro"],
                     c["endereco"]["cidade"],
                     c["endereco"]["estado"],
                     c["endereco"]["_id"]
                  ),
                  c["celular"],
                  c["_id"]
               )
            );
         });
      }
      return clientes;
   }
}
