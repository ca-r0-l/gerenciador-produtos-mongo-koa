import * as Koa from "koa";
import * as Router from "koa-router";
import Response from "../entity/Response";
import PedidoService from "../service/PedidoService";
import ResponsePaginated from "../entity/ResponsePaginated";
import Pedido from "../entity/Pedido";

const pedidoService = new PedidoService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/pedidos"
};

const pedidoController: Router = new Router(routerOpts);
pedidoController
   .get("/", async (ctx: Koa.Context) => {
      const pageNumber: number = Number(ctx.request.query.pageNumber);
      const result: ResponsePaginated<Pedido> = await pedidoService.pesquisaPaginada(pageNumber);
      ctx.body = result.body;
      ctx.status = result.code;
   })
   .get("/:id", async (ctx: Koa.Context) => {
      const id: number = ctx.params.id;
      const result: Response<Pedido> = await pedidoService.detalhe(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .post("/", async (ctx: any) => {
      const pedido = ctx.request.body;
      const result = await pedidoService.salvar(pedido);
      ctx.body = result ? result.data : null;
      ctx.status = result ? result.code : null;
   })
   .delete("/:id", async (ctx: Koa.Context) => {
      const id: number = ctx.params.id;
      const result: Response<Pedido> = await pedidoService.apagar(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/produto", async (ctx: any) => {
      const id: number = ctx.params.id;
      const produto = ctx.request.body.produto;
      const result: Response<Pedido> = await pedidoService.adicionarProduto(id, produto);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/valor", async (ctx: any) => {
      const id: number = ctx.params.id;
      const valor = ctx.request.body.valor;
      const result: Response<Pedido> = await pedidoService.atualizarValor(id, valor);
      ctx.body = result.data;
      ctx.status = result.code;
   });

export default pedidoController;
