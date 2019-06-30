import * as Koa from "koa";
import * as Router from "koa-router";
import CategoriaService from "../service/CategoriaService";
import IPaginatedSearch from "../interfaces/IPaginatedSearch";
import ICategoria from "../interfaces/ICategoria";

const categoriaService = new CategoriaService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/categorias"
};

const categoriaController: Router = new Router(routerOpts);
categoriaController
   .get("/", async (ctx: Koa.Context) => {
      const pageNumber: number = Number(ctx.request.query.pageNumber);
      const result: IPaginatedSearch<ICategoria> = await categoriaService.pesquisaPaginada(pageNumber);
      ctx.body = result;
   })
   .post("/", async (ctx: any) => {
      const categoria: number = ctx.request.body;
      const result: ICategoria = await categoriaService.salvar(categoria);
      ctx.body = result;
   });

export default categoriaController;
