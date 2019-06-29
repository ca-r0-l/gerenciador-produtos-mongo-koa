import * as Koa from "koa";
import * as Router from "koa-router";
import CategoriaService from "../service/CategoriaService";

const categoriaService = new CategoriaService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/categorias"
};

const categoriaController: Router = new Router(routerOpts);
categoriaController
   .get("/", async (ctx: Koa.Context) => {
      const pageNumber: number = ctx.request.query.pageNumber;
      const result = await categoriaService.pesquisaPaginada(pageNumber);
      ctx.body = result;
   })
   .post("/", async (ctx: any) => {
      const categoria: number = ctx.request.body;
      const result = await categoriaService.salvar(categoria);
      ctx.body = result;
   });

export default categoriaController;
