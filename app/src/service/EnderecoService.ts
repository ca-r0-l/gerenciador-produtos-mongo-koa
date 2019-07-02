import Response from "../entity/Response";
import Endereco from "../entity/Endereco";
import EnderecoDAO from "../dao/EnderecoDAO";
import EnderecoBO from "../bo/EnderecoBO";

export default class EnderecoService {
   // private _enderecoDAO: EnderecoDAO;
   // private _enderecoBO: EnderecoBO;
   // constructor() {
   //    this._enderecoDAO = new EnderecoDAO();
   //    this._enderecoBO = new EnderecoBO();
   // }
   // public async getAllPaginated(pageNumber): Promise<Response> {
   //    this._enderecoBO.validId(pageNumber);
   //    const result = await this._enderecoDAO.getAllPaginated(pageNumber);
   //    return new Response(200, this.createEndereco(result));
   // }
   // public async add(endereco): Promise<Response> {
   //    this._enderecoBO.validEndereco(endereco);
   //    const result = await this._enderecoDAO.add(endereco);
   //    return new Response(200, this.createEndereco(result));
   // }
   // public async detail(id: number): Promise<Response> {
   //    this._enderecoBO.validId(id);
   //    const result = await this._enderecoDAO.detail(id);
   //    return new Response(200, this.createEndereco(result));
   // }
   // public async delete(id: number): Promise<Response> {
   //    this._enderecoBO.validId(id);
   //    const result = await this._enderecoDAO.delete(id);
   //    return new Response(200, this.createEndereco(result));
   // }
   // public async updateRua(id: number, rua: string): Promise<Response> {
   //    this._enderecoBO.validId(id);
   //    this._enderecoBO.validRua(rua);
   //    const result = await this._enderecoDAO.updateRua(id, rua);
   //    return new Response(200, this.createEndereco(result.recordset));
   // }
   // public async updateNumero(id: number, numero: number): Promise<Response> {
   //    this._enderecoBO.validId(id);
   //    this._enderecoBO.validNumero(numero);
   //    const result = await this._enderecoDAO.updateNumero(id, numero);
   //    return new Response(200, this.createEndereco(result.recordset));
   // }
   // public async updateBairro(id: number, bairro: string): Promise<Response> {
   //    this._enderecoBO.validId(id);
   //    this._enderecoBO.validBairro(bairro);
   //    const result = await this._enderecoDAO.updateBairro(id, bairro);
   //    return new Response(200, this.createEndereco(result.recordset));
   // }
   // public async updateCidade(id: number, cidade: string): Promise<Response> {
   //    this._enderecoBO.validId(id);
   //    this._enderecoBO.validCidade(cidade);
   //    const result = await this._enderecoDAO.updateCidade(id, cidade);
   //    return new Response(200, this.createEndereco(result.recordset));
   // }
   // public async updateEstado(id: number, estado: string): Promise<Response> {
   //    this._enderecoBO.validId(id);
   //    this._enderecoBO.validEstado(estado);
   //    const result = await this._enderecoDAO.updateEstado(id, estado);
   //    return new Response(200, this.createEndereco(result.recordset));
   // }
   // private createEndereco(endereco): Array<Endereco> {
   //    const enderecos = new Array<Endereco>();
   //    if (endereco && endereco.length) {
   //       endereco.forEach(e => enderecos.push(new Endereco(e["rua"], e["numero"], e["bairro"], e["cidade"], e["estado"], e["id"])));
   //    }
   //    return enderecos;
   // }
}
