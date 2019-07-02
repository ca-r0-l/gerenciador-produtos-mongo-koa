import "jasmine";
import ClienteBO from "../app/src/bo/ClienteBO";
import ICliente from "../app/src/interfaces/ICliente";
import EnderecoBO from "../app/src/bo/EnderecoBO";

describe("ClienteBO =>", () => {
   const clienteBO = new ClienteBO();
   let cliente: ICliente;
   beforeEach(() => {
      cliente = {
         nome: "carol",
         endereco: { rua: "urca", numero: 111, bairro: "independencia", cidade: "sbc", estado: "SP", id: 1 },
         celular: "123456789",
         id: 1
      };
   });

   it("cliente válido, não retornará erro", () => {
      expect(() => {
         clienteBO.validCliente(cliente);
      }).not.toThrow();
   });

   it("nome do cliente inválido, erro: NOME_INVALIDO", () => {
      cliente.nome = "";
      expect(() => {
         clienteBO.validCliente(cliente);
      }).toThrowError(ClienteBO.NOME_INVALIDO);
   });

   it("celular inválido, erro: CELULAR_INVALIDO", () => {
      cliente.celular = "";
      expect(() => {
         clienteBO.validCliente(cliente);
      }).toThrowError(ClienteBO.CELULAR_INVALIDO);
   });

   it("endereco inválido, erro: ENDERECO_INVALIDO", () => {
      delete cliente.endereco;
      expect(() => {
         clienteBO.validCliente(cliente);
      }).toThrowError(EnderecoBO.ENDERECO_INVALIDO);
   });
});
