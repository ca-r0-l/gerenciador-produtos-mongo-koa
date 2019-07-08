import * as Koa from "koa";
import * as Router from "koa-router";
import Response from "../entity/Response";
import Cliente from "../entity/Cliente";
import ClienteService from "../service/ClienteService";

const clienteService = new ClienteService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/clientes"
};

const clienteController: Router = new Router(routerOpts);

clienteController
   .get("/", async (ctx: Koa.Context) => {
      const pageNumber: number = Number(ctx.request.query.pageNumber);
      const result = await clienteService.pesquisaPaginada(pageNumber);
      ctx.body = result.body;
      ctx.status = result.code;
   })
   .get("/:id", async (ctx: Koa.Context) => {
      const id = ctx.params.id;
      const result: Response<Cliente> = await clienteService.detalhar(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .post("/", async (ctx: any) => {
      const cliente = ctx.request.body;
      const result = await clienteService.salvar(cliente);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .delete("/:id", async (ctx: Koa.Context) => {
      const id = ctx.params.id;
      const result: Response<Cliente> = await clienteService.apagar(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/nome", async (ctx: any) => {
      const id = ctx.params.id;
      const nome = ctx.request.body.nome;
      const result: Response<Cliente> = await clienteService.atualizarNome(id, nome);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/endereco", async (ctx: any) => {
      const id = ctx.params.id;
      const endereco = ctx.request.body.endereco;
      const result: Response<Cliente> = await clienteService.atualizarEndereco(id, endereco);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/celular", async (ctx: any) => {
      const id = ctx.params.id;
      const celular = ctx.request.body.celular;
      const result: Response<Cliente> = await clienteService.atualizarCelular(id, celular);
      ctx.body = result.data;
      ctx.status = result.code;
   });

export default clienteController;
