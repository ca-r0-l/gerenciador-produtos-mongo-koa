import "jasmine";
import EnderecoBO from "../app/src/bo/EnderecoBO";
import Endereco from "../app/src/entity/Endereco";

describe("EnderecoBO =>", () => {
   const enderecoBO = new EnderecoBO();
   let endereco: Endereco;
   beforeEach(() => {
      endereco = new Endereco("urca", 111, "independencia", "sbc", "SP");
   });

   it("endereço válido, não retornará erro", () => {
      expect(() => {
         enderecoBO.validEndereco(endereco);
      }).not.toThrow();
   });

   it("rua inválida, erro: RUA_INVALIDA", () => {
      endereco.rua = "";
      expect(() => {
         enderecoBO.validEndereco(endereco);
      }).toThrowError(EnderecoBO.RUA_INVALIDA);
   });

   it("número inválido, erro: NUMERO_INVALIDO", () => {
      delete endereco.numero;
      expect(() => {
         enderecoBO.validEndereco(endereco);
      }).toThrowError(EnderecoBO.NUMERO_INVALIDO);
   });

   it("bairro inválido, erro: BAIRRO_INVALIDO", () => {
      delete endereco.bairro;
      expect(() => {
         enderecoBO.validEndereco(endereco);
      }).toThrowError(EnderecoBO.BAIRRO_INVALIDO);
   });

   it("cidade inválida, erro: CIDADE_INVALIDA", () => {
      delete endereco.cidade;
      expect(() => {
         enderecoBO.validEndereco(endereco);
      }).toThrowError(EnderecoBO.CIDADE_INVALIDA);
   });

   it("estado inválido, erro: ESTADO_INVALIDO", () => {
      delete endereco.estado;
      expect(() => {
         enderecoBO.validEndereco(endereco);
      }).toThrowError(EnderecoBO.ESTADO_INVALIDO);
   });
});
