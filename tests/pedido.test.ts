import "jasmine";
import PedidoBO from "../app/src/bo/PedidoBO";
import IPedido from "../app/src/interfaces/IPedido";
import ClienteBO from "../app/src/bo/ClienteBO";

describe("PedidoBO =>", () => {
   const pedidoBO = new PedidoBO();
   let pedido: IPedido;
   beforeEach(() => {
      pedido = {
         cliente: {
            nome: "carol",
            endereco: { rua: "urca", numero: 111, bairro: "independencia", cidade: "sbc", estado: "SP" },
            celular: "123456789",
            id: 1
         },
         valorCompra: 100.9,
         produtos: [{ nome: "coxinha", valor: 10.9, categoria: { nome: "salgado" }, id: 1 }]
      };
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
