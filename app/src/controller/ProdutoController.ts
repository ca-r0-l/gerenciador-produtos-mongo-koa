import * as Koa from "koa";
import * as Router from "koa-router";
import ProdutoService from "../service/ProdutoService";
import Response from "../entity/Response";
import ResponsePaginated from "../entity/ResponsePaginated";
import Produto from "../entity/Produto";

const produtoService = new ProdutoService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/produtos"
};

const produtoController: Router = new Router(routerOpts);

produtoController
   .get("/", async (ctx: Koa.Context) => {
      const pageNumber = Number(ctx.request.query.pageNumber);
      const result: ResponsePaginated<Produto> = await produtoService.pesquisaPaginada(pageNumber);
      ctx.body = result.body;
      ctx.status = result.code;
   })
   .get("/:id", async (ctx: Koa.Context) => {
      const id: number = ctx.params.id;
      const result: Response<Produto> = await produtoService.detalhe(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .post("/", async (ctx: any) => {
      const produto = ctx.request.body;
      const result: Response<Produto> = await produtoService.salvar(produto);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .delete("/:id", async (ctx: Koa.Context) => {
      const id: number = ctx.params.id;
      const result: Response<Produto> = await produtoService.apagar(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/nome", async (ctx: any) => {
      const id: number = ctx.params.id;
      const nome: string = ctx.request.body.nome;
      const result: Response<Produto> = await produtoService.atualizarNome(id, nome);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/preco", async (ctx: any) => {
      const id: number = ctx.params.id;
      const preco: number = ctx.request.body.preco;
      const result: Response<Produto> = await produtoService.atualizarPreco(id, preco);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/categoria", async (ctx: any) => {
      const id: number = ctx.params.id;
      const categoria = ctx.request.body.categoria;
      const result: Response<Produto> = await produtoService.atualizarCategoria(id, categoria);
      ctx.body = result.data;
      ctx.status = result.code;
   });

export default produtoController;
