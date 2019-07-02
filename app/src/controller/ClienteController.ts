import * as Koa from "koa";
import * as Router from "koa-router";
import Response from "../entity/Response";
import ClienteService from "../service/ClienteService";

const clienteService = new ClienteService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/clientes"
};

const clienteController: Router = new Router(routerOpts);

// clienteController
//    .get("/", async (ctx: Koa.Context) => {
//       try {
//          const pageNumber = ctx.request.query.pageNumber;
//          const result: Response = await clienteService.getAllPaginated(pageNumber);
//          ctx.body = result.data;
//          ctx.status = result.code;
//       } catch (err) {
//          ctx.throw(500, err.message);
//       }
//    })
//    .get("/:id", async (ctx: Koa.Context) => {
//       const id = ctx.params.id;
//       const result: Response = await clienteService.detail(id);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .post("/", async (ctx: any) => {
//       const cliente = ctx.request.body;
//       const result: Response = await clienteService.add(cliente);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .delete("/:id", async (ctx: Koa.Context) => {
//       const id = ctx.params.id;
//       const result: Response = await clienteService.delete(id);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .put("/:id/nome", async (ctx: any) => {
//       const id = ctx.params.id;
//       const nome = ctx.request.body.nome;
//       const result: Response = await clienteService.updateNome(id, nome);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .put("/:id/endereco", async (ctx: any) => {
//       const id = ctx.params.id;
//       const endereco = ctx.request.body.endereco;
//       const result: Response = await clienteService.updateEndereco(id, endereco);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .put("/:id/celular", async (ctx: any) => {
//       const id = ctx.params.id;
//       const celular = ctx.request.body.celular;
//       const result: Response = await clienteService.updateCelular(id, celular);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    });

export default clienteController;
