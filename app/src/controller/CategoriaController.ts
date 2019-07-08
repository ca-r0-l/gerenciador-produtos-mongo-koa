import * as Koa from "koa";
import * as Router from "koa-router";
import ResponsePaginated from "../entity/ResponsePaginated";
import Response from "../entity/Response";
import CategoriaService from "../service/CategoriaService";
import Categoria from "../entity/Categoria";

const categoriaService = new CategoriaService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/categorias"
};

const categoriaController: Router = new Router(routerOpts);
categoriaController
   .get("/", async (ctx: Koa.Context) => {
      const pageNumber: number = Number(ctx.request.query.pageNumber);
      const result: ResponsePaginated<Categoria> = await categoriaService.pesquisaPaginada(pageNumber);
      ctx.body = result.body;
      ctx.status = result.code;
   })
   .get("/:id", async (ctx: Koa.Context) => {
      const id = ctx.params.id;
      const result: Response<Categoria> = await categoriaService.detalhar(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .post("/", async (ctx: any) => {
      const categoria = ctx.request.body;
      const result = await categoriaService.salvar(categoria);
      ctx.body = result ? result.data : null;
      ctx.status = result ? result.code : null;
   })
   .put("/:id/nome", async (ctx: any) => {
      const id = ctx.params.id;
      const nome: string = ctx.request.body.nome;
      const result = await categoriaService.atualizarNome(id, nome);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .delete("/:id", async (ctx: Koa.Context) => {
      const id = ctx.params.id;
      const result: Response<Categoria> = await categoriaService.apagar(id);
      ctx.body = result.data;
      ctx.status = result.code;
   });

export default categoriaController;
