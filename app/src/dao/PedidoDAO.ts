import Pedido from "../entity/Pedido";
import Produto from "../entity/Produto";

export default class PedidoDAO {
   // private PER_PAGE: number = 5;
   // private readonly SELECT: string = `
   // select
   //    pp.id idProPed,
   //    p.id  idPedido,
   //    p.id_cliente idCliente,
   //    p.valor_compra valor,
   //    pr.id idProduto,
   //    pr.nome nomeProduto,
   //    pr.preco_unitario preco,
   //    ct.nome categoria,
   //    c.celular,
   //    c.nome,
   //    e.bairro,
   //    e.cidade,
   //    e.estado,
   //    e.id idEndereco,
   //    e.numero,
   //    e.rua
   // from pedidos_produtos pp`;
   // private readonly JOIN: string = `
   // right join pedidos p on  pp.id_pedido = p.id
   // left join produtos pr on pp.id_produto = pr.id
   // left join clientes c on p.id_cliente = c.id
   // left join enderecos e on e.id = c.endereco
   // left join categorias ct on pr.categoria = ct.id`;
   // private readonly ORDER: string = `ORDER BY pp.id`;
   // public async getAllPaginated(pageNumber): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool.request().query(`
   //    ${this.SELECT}
   //    ${this.JOIN}
   //    ${this.ORDER}
   //    OFFSET ${this.PER_PAGE} * (${pageNumber} - 1) ROWS
   //    FETCH NEXT ${this.PER_PAGE} ROWS ONLY;
   //    `);
   //    return result.recordset;
   // }
   // public async add(pedido: Pedido): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool.request().query(`
   //       declare @p as dbo.produto;
   //       ${this.mountProdutos(pedido.produtos, "p")}
   //       exec addPedido ${pedido.cliente}, ${pedido.valorCompra}, @p`);
   //    return result.recordset;
   // }
   // public async detail(id: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool.request().input("id", id).query(`${this.SELECT}
   //       ${this.JOIN} where pp.id = @id;`);
   //    return result.recordset;
   // }
   // public async delete(id: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .query("delete from pedidos where id = @id;");
   //    return result.recordset;
   // }
   // public async updateCliente(id: number, cliente: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("id_cliente", cliente)
   //       .query("update pedidos set id_cliente = @id_cliente where id = @id;");
   //    return result.recordset;
   // }
   // public async updateValor(id: number, valor: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("valor_compra", valor)
   //       .query("update pedidos set valor_compra = @valor_compra where id = @id;");
   //    return result.recordset;
   // }
   // private mountProdutos(produtos: Array<Produto>, nomeTable: string): string {
   //    let query: string = "";
   //    produtos.forEach(p => (query += `insert into @${nomeTable} values (${p.id});`));
   //    return query;
   // }
}
