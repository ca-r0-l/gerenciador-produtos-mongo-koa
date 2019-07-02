import * as Koa from "koa";
import * as Router from "koa-router";
import Response from "../entity/Response";
import PedidoService from "../service/PedidoService";

const pedidoService = new PedidoService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/pedidos"
};

const pedidoController: Router = new Router(routerOpts);
// pedidoController
//    .get("/", async (ctx: Koa.Context) => {
//       const pageNumber: number = ctx.request.query.pageNumber;
//       const result: Response = await pedidoService.getAllPaginated(pageNumber);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .get("/:id", async (ctx: Koa.Context) => {
//       const id: number = ctx.params.id;
//       const result: Response = await pedidoService.detail(id);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .post("/", async (ctx: any) => {
//       const pedido = ctx.request.body;
//       const result: Response = await pedidoService.add(pedido);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .delete("/:id", async (ctx: Koa.Context) => {
//       const id: number = ctx.params.id;
//       const result: Response = await pedidoService.delete(id);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .put("/:id/cliente", async (ctx: any) => {
//       const id: number = ctx.params.id;
//       const cliente = ctx.request.body.cliente;
//       const result: Response = await pedidoService.updateCliente(id, cliente);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .put("/:id/valor", async (ctx: any) => {
//       const id: number = ctx.params.id;
//       const valor = ctx.request.body.valor;
//       const result: Response = await pedidoService.updateValor(id, valor);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    });

export default pedidoController;
