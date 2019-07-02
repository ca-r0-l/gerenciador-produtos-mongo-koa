import "jasmine";
import ClienteBO from "../app/src/bo/ClienteBO";
import PedidoBO from "../app/src/bo/PedidoBO";
import Pedido from "../app/src/entity/Pedido";
import Cliente from "../app/src/entity/Cliente";
import Endereco from "../app/src/entity/Endereco";
import Produto from "../app/src/entity/Produto";
import Categoria from "../app/src/entity/Categoria";

describe("PedidoBO =>", () => {
   const pedidoBO = new PedidoBO();
   let pedido: Pedido;
   beforeEach(() => {
      pedido = new Pedido(new Cliente("carol", new Endereco("urca", 111, "independencia", "sbc", "SP"), "123456789", 1), 100.9, [
         new Produto("coxinha", 10.9, new Categoria("salgado"), 1)
      ]);
   });

   it("pedido válido, não retornará erro", () => {
      expect(() => {
         pedidoBO.validPedido(pedido);
      }).not.toThrow();
   });

   it("cliente inválido, erro: CLIENTE_INVALIDO", () => {
      delete pedido.cliente;
      expect(() => {
         pedidoBO.validPedido(pedido);
      }).toThrowError(ClienteBO.CLIENTE_INVALIDO);
   });

   it("produto inválido, erro: PRODUTOS_INVALIDOS", () => {
      pedido.produtos = [];
      expect(() => {
         pedidoBO.validPedido(pedido);
      }).toThrowError(PedidoBO.PRODUTOS_INVALIDOS);
   });
});
