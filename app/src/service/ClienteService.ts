import ClienteBO from "../bo/ClienteBO";

export default class ClienteService {
   // private _clienteDAO: ClienteDAO;
   // private _clienteBO: ClienteBO;
   // constructor() {
   //    this._clienteDAO = new ClienteDAO();
   //    this._clienteBO = new ClienteBO();
   // }
   // public async getAllPaginated(pageNumber): Promise<Response> {
   //    this._clienteBO.validId(pageNumber);
   //    const res = await this._clienteDAO.getAllPaginated(pageNumber);
   //    return new Response(200, this.createCliente(res));
   // }
   // public async add(cliente): Promise<Response> {
   //    this._clienteBO.validCliente(cliente);
   //    const res = await this._clienteDAO.add(cliente);
   //    return new Response(200, this.createCliente(res));
   // }
   // public async detail(id: number): Promise<Response> {
   //    this._clienteBO.validId(id);
   //    const res = await this._clienteDAO.detail(id);
   //    return new Response(200, this.createCliente(res));
   // }
   // public async delete(id: number): Promise<Response> {
   //    this._clienteBO.validId(id);
   //    const res = await this._clienteDAO.delete(id);
   //    return new Response(200, this.createCliente(res));
   // }
   // public async updateNome(id: number, nome: string): Promise<Response> {
   //    this._clienteBO.validId(id);
   //    this._clienteBO.validNome(nome);
   //    const res = await this._clienteDAO.updateNome(id, nome);
   //    return new Response(200, this.createCliente(res));
   // }
   // public async updateEndereco(id: number, endereco: number): Promise<Response> {
   //    this._clienteBO.validId(id);
   //    this._clienteBO.validEndereco(endereco);
   //    const res = await this._clienteDAO.updateEndereco(id, endereco);
   //    return new Response(200, this.createCliente(res));
   // }
   // public async updateCelular(id: number, celular: string): Promise<Response> {
   //    this._clienteBO.validId(id);
   //    this._clienteBO.validCelular(celular);
   //    const res = await this._clienteDAO.updateCelular(id, celular);
   //    return new Response(200, this.createCliente(res));
   // }
   // private createCliente(cliente): Array<Cliente> {
   //    const clientes = new Array<Cliente>();
   //    if (cliente && cliente.length) {
   //       cliente.forEach(c =>
   //          clientes.push(
   //             new Cliente(
   //                c["nome"],
   //                new Endereco(c["rua"], c["numero"], c["bairro"], c["cidade"], c["estado"], c["idEndereco"]),
   //                c["celular"],
   //                c["idCliente"]
   //             )
   //          )
   //       );
   //    }
   //    return clientes;
   // }
}
