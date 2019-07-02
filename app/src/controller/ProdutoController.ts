import * as Koa from "koa";
import * as Router from "koa-router";
import ProdutoService from "../service/ProdutoService";
import Response from "../entity/Response";

const produtoService = new ProdutoService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/produtos"
};

const produtoController: Router = new Router(routerOpts);

// produtoController
//    .get("/", async (ctx: Koa.Context) => {
//       const pageNumber = ctx.request.query.pageNumber;
//       const result: Response = await produtoService.getAllPaginated(pageNumber);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .get("/:id", async (ctx: Koa.Context) => {
//       const id: number = ctx.params.id;
//       const result: Response = await produtoService.detail(id);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .post("/", async (ctx: any) => {
//       const produto = ctx.request.body;
//       const result: Response = await produtoService.add(produto);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .delete("/:id", async (ctx: Koa.Context) => {
//       const id: number = ctx.params.id;
//       const result: Response = await produtoService.delete(id);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .put("/:id/nome", async (ctx: any) => {
//       const id: number = ctx.params.id;
//       const nome: string = ctx.request.body.nome;
//       const result: Response = await produtoService.updateNome(id, nome);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .put("/:id/preco", async (ctx: any) => {
//       const id: number = ctx.params.id;
//       const preco: number = ctx.request.body.preco;
//       const result: Response = await produtoService.updatePreco(id, preco);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    })
//    .put("/:id/categoria", async (ctx: any) => {
//       const id: number = ctx.params.id;
//       const categoria: number = ctx.request.body.categoria;
//       const result: Response = await produtoService.updateCategoria(id, categoria);
//       ctx.body = result.data;
//       ctx.status = result.code;
//    });

export default produtoController;
