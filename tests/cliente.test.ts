import "jasmine";
import ClienteBO from "../app/src/bo/ClienteBO";
import EnderecoBO from "../app/src/bo/EnderecoBO";
import Cliente from "../app/src/entity/Cliente";
import Endereco from "../app/src/entity/Endereco";

describe("ClienteBO =>", () => {
   const clienteBO = new ClienteBO();
   let cliente: Cliente;

   beforeEach(() => {
      cliente = new Cliente("carol", new Endereco("urca", 111, "independencia", "sbc", "SP", 1), "123456789", 1);
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
