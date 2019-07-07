import "jasmine";
import BOSupport from "../app/src/bo/BOSupport";

describe("BOSupport |", () => {
   const boSupport = new BOSupport();
   let obj: any = {};

   beforeEach(() => {
      obj.id = 1;
      obj.nome = "teste";
   });

   it("id válido, não retornará erro", () => {
      expect(() => {
         boSupport.validId(obj.id);
      }).not.toThrow();
   });

   it("id inválido, erro: ID_INVALIDO", () => {
      obj.id = "a";
      expect(() => {
         boSupport.validId(obj.id);
      }).toThrowError(BOSupport.ID_INVALIDO);
   });

   it("nome válido, não retornará erro", () => {
      expect(() => {
         boSupport.validNome(obj.nome);
      }).not.toThrow();
   });

   it("nome inválido, erro: NOME_INVALIDO", () => {
      obj.nome = "";
      expect(() => {
         boSupport.validNome(obj.nome);
      }).toThrowError(BOSupport.NOME_INVALIDO);
   });
});
