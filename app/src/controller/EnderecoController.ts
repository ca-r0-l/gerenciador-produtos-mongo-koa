import * as Koa from "koa";
import * as Router from "koa-router";
import Response from "../entity/Response";
import EnderecoService from "../service/EnderecoService";
import ResponsePaginated from "../entity/ResponsePaginated";
import Endereco from "../entity/Endereco";

const enderecoService: EnderecoService = new EnderecoService();

const routerOpts: Router.IRouterOptions = {
   prefix: "/enderecos"
};

const enderecoController: Router = new Router(routerOpts);
enderecoController
   .get("/", async (ctx: Koa.Context) => {
      const pageNumber: number = Number(ctx.request.query.pageNumber);
      const result: ResponsePaginated<Endereco> = await enderecoService.pesquisaPaginada(pageNumber);
      ctx.body = result.body;
      ctx.status = result.code;
   })
   .get("/:id", async (ctx: Koa.Context) => {
      const id: number = ctx.params.id;
      const result: Response<Endereco> = await enderecoService.detalhar(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .post("/", async (ctx: any) => {
      const endereco = ctx.request.body;
      const result: Response<Endereco> = await enderecoService.salvar(endereco);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .delete("/:id", async (ctx: Koa.Context) => {
      const id: number = ctx.params.id;
      const result: Response<Endereco> = await enderecoService.apagar(id);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/rua", async (ctx: any) => {
      const id: number = ctx.params.id;
      const rua = ctx.request.body.rua;
      const result: Response<Endereco> = await enderecoService.atualizarRua(id, rua);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/numero", async (ctx: any) => {
      const id: number = ctx.params.id;
      const numero = ctx.request.body.numero;
      const result: Response<Endereco> = await enderecoService.atualizarNumero(id, numero);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/bairro", async (ctx: any) => {
      const id: number = ctx.params.id;
      const bairro = ctx.request.body.bairro;
      const result: Response<Endereco> = await enderecoService.atualizarBairro(id, bairro);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/cidade", async (ctx: any) => {
      const id: number = ctx.params.id;
      const cidade = ctx.request.body.cidade;
      const result: Response<Endereco> = await enderecoService.atualizarCidade(id, cidade);
      ctx.body = result.data;
      ctx.status = result.code;
   })
   .put("/:id/estado", async (ctx: any) => {
      const id: number = ctx.params.id;
      const estado = ctx.request.body.estado;
      const result: Response<Endereco> = await enderecoService.atualizarEstado(id, estado);
      ctx.body = result.data;
      ctx.status = result.code;
   });

export default enderecoController;
